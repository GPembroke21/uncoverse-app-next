import React from 'react'
import { Auth } from "aws-amplify"

export default function GetUser(props) {
    const [request, setRequest] = React.useState(() => null)
    const getFunction = React.useCallback(async () => {
        try {
            let user = await Auth.currentAuthenticatedUser();
            // console.log("user:", user)
            setRequest(user)
        } catch (error) {
            // console.log("Error fetching u_deets:", error)
            setRequest(() => null)
        }
    }, [])

    React.useEffect(() => {
        getFunction();
        return () => { }
    }, [getFunction, props])

    return request
}