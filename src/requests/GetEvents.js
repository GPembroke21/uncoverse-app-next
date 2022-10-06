import { useCallback, useEffect, useState } from 'react';
import { Amplify, API } from 'aws-amplify'
import awsExports from '../aws-exports';
import { listEvents } from '../graphql/queries'

Amplify.configure({ ...awsExports, ssr: true })


export default function GetEvents(props) {
    const [request, setRequest] = useState({loading: false, data: null, error: false})

    const gqlQuery = {
        query: listEvents, 
        authMode: "AWS_IAM",
        variables: {limit: 1000}
    }

    const getFunction = useCallback(async () => {
        try {
            const response = await API.graphql(gqlQuery)
            const objectKey = Object.keys(response.data).at(0)
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