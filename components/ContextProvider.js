import { useState, useContext, createContext, useEffect } from 'react'
import { Auth, Hub } from 'aws-amplify'
import GetEvents from '../src/requests/GetEvents'
import { eventsIdArray } from '../src/static/StaticVariables'
import GetInteractions from '../src/requests/GetInteractions'
import StoreInteraction from '../src/requests/CreateInteraction'
import GetAnalyticsData from '../src/requests/GetAnalyticsData'

const AppContext = createContext()
const EventsContext = createContext()
const FavoritesContext = createContext()
const AppContextUpdate = createContext()
const AnalyticsContext = createContext()

export function useAppContext() { return useContext(AppContext) }
export function useEventsContext() { return useContext(EventsContext) }
export function useFavoritesContext() { return useContext(FavoritesContext) }
export function useAppContextUpdate() { return useContext(AppContextUpdate) }
export function useAnalyticsContext() { return useContext(AnalyticsContext) }

export function ContextProvider({ children }) {
    const [loginStatus, setLoginStatus] = useState(() => false)
    const [loginCreds, setLoginCreds] = useState({ id: "", signedIn: false })

    const [getMoreEvents, setGetMoreEvents] = useState(() => { false })
    const eventList = GetEvents(getMoreEvents)
    const [events, setEvents] = useState([])

    const [interactionsId, setInteractionsId] = useState(() => null)
    const userInteractions = GetInteractions(interactionsId)
    const [favoriteEvents, setFavoriteEvents] = useState(() => [])

    const [appContext, setAppContext] = useState({
        loginCreds: { id: "", signedIn: false },
        activeFilters: false,
        filtersSearch: "",
        filtersPlatforms: [],
        filtersCategories: [],
        filtersFavorites: false,
        filtersCreators: [],
        filtersActiveUpcoming: "",
    })

    const updateAppContext = {
        updateEventList: () => setGetMoreEvents(prevValue => !prevValue),
        updateSearch: item => { setAppContext(priorState => { return { ...priorState, filtersSearch: item, filtersPlatforms: [], filtersCategories: [], filtersCreators: [], filtersActiveUpcoming: "", filtersFavorites: false } }) },
        updatePlatform: item => { setAppContext(priorState => { return { ...priorState, filtersSearch: "", filtersCreators: [], filtersPlatforms: item } }) },
        updateCategory: item => { setAppContext(priorState => { return { ...priorState, filtersSearch: "", filtersCreators: [], filtersCategories: item } }) },
        updateCreators: item => { setAppContext(priorState => { return { ...priorState, filtersSearch: "", filtersPlatforms: [], filtersCategories: [], filtersFavorites: false, filtersCreators: item } }) },
        updateActiveUpcoming: item => { setAppContext(priorState => { return { ...priorState, filtersSearch: "", filtersActiveUpcoming: item } }) },
        toggleFavorites: () => { setAppContext(priorState => { return { ...priorState, filtersSearch: "", filtersFavorites: !priorState.filtersFavorites } }) },
        clearFilters: () => { setAppContext(priorState => { return { ...priorState, filtersSearch: "", filtersPlatforms: [], filtersCategories: [], filtersFavorites: false, filtersCreators: [], filtersActiveUpcoming: "" } }) },
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

    useEffect(() => {
        Auth.currentCredentials().then(credentials => setLoginStatus(credentials.authenticated))
        return () => { }
    }, [])

    useEffect(() => {
        Auth.currentCredentials().then(credentials => {
            setLoginCreds({ id: credentials.identityId, signedIn: credentials.authenticated })
            setAppContext(priorState => { return { ...priorState, loginCreds: { id: credentials.identityId, signedIn: credentials.authenticated } } })
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

    const analyticsData = GetAnalyticsData()

    return (
        <AppContext.Provider value={appContext}>
            {/* <LoginContext.Provider value={loginCreds}> */}
            <EventsContext.Provider value={events}>
                <FavoritesContext.Provider value={favoriteEvents}>
                    <AppContextUpdate.Provider value={updateAppContext}>
                        <AnalyticsContext.Provider value={analyticsData}>
                            {children}
                        </AnalyticsContext.Provider>
                    </AppContextUpdate.Provider>
                </FavoritesContext.Provider>
            </EventsContext.Provider>
            {/* </LoginContext.Provider> */}
        </AppContext.Provider >

    )
}