import { useState } from 'react';
import { Hub, Auth } from 'aws-amplify';
import { useEffect } from 'react';


export default function GetAuth(props) {
    const [authStatus, setAuthStatus] = useState(false)
    const [authCreds, setAuthCreds] = useState(() => ({signedIn: false, id: ''}))
    const getCreds = () => Auth.currentCredentials().then(credentials => setAuthCreds({signedIn: credentials.authenticated, id: credentials.accessKeyId}))

    useEffect(() => {
        getCreds()
        console.log("Getting credentials")
        return () => {}
    }, [props.status])


    Hub.listen('auth', (data) => {
        switch (data.payload.event) {
            case 'signIn':
                console.log('user signed in2');
                setAuthStatus(true)
                break;
            case 'signUp':
                console.log('user signed up2');
                setAuthStatus(false)
                break;
            case 'signOut':
                console.log('user signed out2');
                setAuthStatus(false)
                break;
            case 'signIn_failure':
                console.log('user sign in failed2');
                setAuthStatus(false)
        }
    })
    return authCreds
}