import { useState, useContext, createContext, useEffect } from 'react'
import { Auth, Hub } from 'aws-amplify'
import GetEvents from '../src/requests/GetEvents'
import { eventsIdArray } from '../src/static/StaticVariables'
import GetInteractions from '../src/requests/GetInteractions'
import StoreInteraction from '../src/requests/CreateInteraction'

const LoginContext = createContext()
const EventsContext = createContext()
const EventsContextUpdate = createContext()
const FavoritesContext = createContext()
const FavoritesContextUpdate = createContext()
const FiltersSearchContext = createContext()
const FiltersPlatformsContext = createContext()
const FiltersCategoriesContext = createContext()
const FiltersFavoritesContext = createContext()
const FiltersContextUpdate = createContext()

export function useLoginContext() { return useContext(LoginContext) }
export function useEventsContext() { return useContext(EventsContext) }
export function useEventsContextUpdate() { return useContext(EventsContextUpdate) }
export function useFavoritesContext() { return useContext(FavoritesContext) }
export function useFavoritesContextUpdate() { return useContext(FavoritesContextUpdate) }
export function useFiltersSearchContext() { return useContext(FiltersSearchContext) }
export function useFiltersPlatformsContext() { return useContext(FiltersPlatformsContext) }
export function useFiltersCategoriesContext() { return useContext(FiltersCategoriesContext) }
export function useFiltersFavoritesContext() { return useContext(FiltersFavoritesContext) }
export function useFiltersContextUpdate() { return useContext(FiltersContextUpdate) }

export function ContextProvider({ children }) {
    const [loginStatus, setLoginStatus] = useState(() => false)
    const [loginCreds, setLoginCreds] = useState({ id: "", signedIn: false })

    const [getMoreEvents, setGetMoreEvents] = useState(() => { false })
    const eventList = GetEvents(getMoreEvents)
    const [events, setEvents] = useState([])
    const updateEventList = () => setGetMoreEvents(prevValue => !prevValue)

    const [interactionsId, setInteractionsId] = useState(() => null)
    const userInteractions = GetInteractions(interactionsId)
    const [favoriteEvents, setFavoriteEvents] = useState(() => [])
    const updateFavoriteEvents = {
        addFavorite: item => {
            if (favoriteEvents && !favoriteEvents.includes(item)) {
                setFavoriteEvents(prevArray => {
                    StoreInteraction({ creds: loginCreds, favArray: [...prevArray, item] })
                    return [...prevArray, item]
                })
            }
        },
        removeFavorite: item => {
            if (favoriteEvents && favoriteEvents.includes(item)) {
                const newArray = favoriteEvents.filter(i => i !== item)
                StoreInteraction({ creds: loginCreds, favArray: newArray })
                setFavoriteEvents(newArray)
            }
        }
    }
    const [filtersSearch, setFiltersSearch] = useState("")
    const [filtersPlatforms, setFiltersPlatform] = useState([])
    const [filtersCategories, setFiltersCategories] = useState([])
    const [filtersFavorites, setFiltersFavorites] = useState(false)
    const updateFilters = {
        updateSearch: item => { 
            if (filtersPlatforms && filtersPlatforms.length !== 0) {setFiltersPlatform([])}; 
            if (filtersCategories && filtersCategories.length !== 0) {setFiltersCategories([])}; 
            if (filtersFavorites) {setFiltersFavorites(false)}; 
            setFiltersSearch(item) },
        updatePlatform: item => { if (filtersSearch && filtersSearch !== "") {setFiltersSearch("")}; setFiltersPlatform(item) },
        updateCategory: item => { if (filtersSearch && filtersSearch !== "") {setFiltersSearch("")}; setFiltersCategories(item) },
        toggleFavorites: () => { if (filtersSearch && filtersSearch !== "") {setFiltersSearch("")}; setFiltersFavorites(!filtersFavorites) },
        clearFilters: () => { setFiltersSearch(""), setFiltersPlatform([]), setFiltersCategories([]), setFiltersFavorites(false) },
    }

    useEffect(() => {
        Auth.currentCredentials().then(credentials => setLoginStatus(credentials.authenticated))
        return () => { }
    }, [])

    useEffect(() => {
        Auth.currentCredentials().then(credentials => {
            setLoginCreds({ id: credentials.identityId, signedIn: credentials.authenticated })
            if (credentials.authenticated) {
                setInteractionsId(prevValue => { if (prevValue !== credentials.identityId) return credentials.identityId })
            } else if (!credentials.authenticated) {
                setInteractionsId(prev => { if (!prev) return null })
                setFavoriteEvents(prevValue => { if (!prevValue || prevValue.length !== 0) return [] })
            }
        })
        return () => { }
    }, [loginStatus])

    Hub.listen('auth', (data) => {
        switch (data.payload.event) {
            case 'signIn':
                console.log('user signed in1');
                setLoginStatus(true); break;
            case 'signUp':
                console.log('user signed up1');
                setLoginStatus(false); break;
            case 'signOut':
                console.log('user signed out1');
                setLoginStatus(false); break;
            case 'signIn_failure':
                console.log('user sign in failed1');
                setLoginStatus(false); break;
        }
    });

    useEffect(() => {
        if (eventList.data) {
            for (let i = 0; i < eventList.data.length; i++) {
                if (eventsIdArray && !eventsIdArray.includes(eventList.data[i].id)) {
                    eventsIdArray.push(eventList.data[i].id)
                    setEvents(prevValues => [...prevValues, eventList.data[i]])
                }
            }
        }
        return () => { }
    }, [eventList.data])

    useEffect(() => {
        if (userInteractions.length !== 0) setFavoriteEvents(userInteractions)
        return () => { }
    }, [userInteractions])

    return (
        <LoginContext.Provider value={loginCreds}>
            <EventsContext.Provider value={events}>
                <EventsContextUpdate.Provider value={updateEventList}>
                    <FavoritesContext.Provider value={favoriteEvents}>
                        <FavoritesContextUpdate.Provider value={updateFavoriteEvents}>
                            <FiltersSearchContext.Provider value={filtersSearch}>
                                <FiltersPlatformsContext.Provider value={filtersPlatforms}>
                                    <FiltersCategoriesContext.Provider value={filtersCategories}>
                                        <FiltersFavoritesContext.Provider value={filtersFavorites}>
                                            <FiltersContextUpdate.Provider value={updateFilters}>
                                                {children}
                                            </FiltersContextUpdate.Provider>
                                        </FiltersFavoritesContext.Provider>
                                    </FiltersCategoriesContext.Provider>
                                </FiltersPlatformsContext.Provider>
                            </FiltersSearchContext.Provider>
                        </FavoritesContextUpdate.Provider>
                    </FavoritesContext.Provider>
                </EventsContextUpdate.Provider>
            </EventsContext.Provider>
        </LoginContext.Provider>

    )
}