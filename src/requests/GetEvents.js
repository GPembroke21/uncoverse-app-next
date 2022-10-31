import { useCallback, useEffect, useState } from 'react';
import { Amplify, API } from 'aws-amplify'
import awsExports from '../aws-exports';
import { listEvents } from '../graphql/queries'

Amplify.configure({ ...awsExports, ssr: true })


export default function GetEvents(props) {
    const [request, setRequest] = useState({loading: false, data: null, error: false})
    const [nextToken, setNextToken] = useState(() => {null})

    const gqlQuery = {
        query: listEvents, 
        authMode: "AWS_IAM",
        variables: {limit: 40, nextToken: nextToken}
    }

    const getFunction = useCallback(async () => {
        try {
            const response = await API.graphql(gqlQuery)
            const objectKey = Object.keys(response.data).at(0)
            console.log("fetched")
            // if (response.data.listEvents.items.length === 0 && response.data.listEvents.nextToken !== null) { setNextToken(response.data.listEvents.nextToken) }
            setNextToken(response.data[objectKey].nextToken)
            setRequest({loading: false, data: response.data[objectKey].items, error: false})
        } catch (error) {
            console.log("Error loading API:", error)
            setRequest({loading: false, data: null, error: true})
        }
    }, [])

    useEffect(() => {
        setRequest({loading: true, data: null, error: false})
        getFunction()
        return () => {setRequest({loading: false, data: null, error: false})}
    }, [getFunction])

    return request
}