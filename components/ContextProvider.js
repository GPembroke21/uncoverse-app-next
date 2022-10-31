import { useState, useContext, createContext, useEffect } from 'react'
import { Auth, Hub } from 'aws-amplify'
import GetAuth from '../src/auth/GetAuth'
import GetEvents from '../src/requests/GetEvents'

const LoginContext = createContext()
const EventsContext = createContext()
const EventsContextUpdate = createContext()

export function useLoginContext() { return useContext(LoginContext) }
export function useEventsContext() { return useContext(EventsContext) }
export function useEventsContextUpdate() { return useContext(EventsContextUpdate) }


export function ContextProvider({ children }) {
    const [loginStatus, setLoginStatus] = useState(() => false)
    const [loginCreds, setLoginCreds] = useState({id: "", signedIn: false})
    
    useEffect(() => {
        Auth.currentCredentials().then(credentials => setLoginStatus(credentials.authenticated))
        return () => { }
    }, [])

    useEffect(() => {
        Auth.currentCredentials().then(credentials => setLoginCreds({
            id: credentials.accessKeyId,
            signedIn: credentials.authenticated
        }))
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

    // function toggleGetEvents() { setEventList(prevEventList => ({...prevEventList, GetEvents}))}
    
    const [getMoreEvents, setGetMoreEvents] = useState(false)
    const eventList = GetEvents({getAgain: getMoreEvents})
    const [events, setEvents] = useState(null)
    const updateEventList = () => setGetMoreEvents(prevValue => !prevValue)

    useEffect(() => {
        console.log("Use Effect 123")
        setEvents(eventList.data)
        return () => { }
    }, [eventList.data])



    return (
        <LoginContext.Provider value={loginCreds}>
            <EventsContext.Provider value={events}>
                <EventsContextUpdate.Provider value={updateEventList}>
                    {children}
                </EventsContextUpdate.Provider>
            </EventsContext.Provider>
        </LoginContext.Provider>

    )
}