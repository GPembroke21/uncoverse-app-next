import { useCallback, useEffect, useState } from 'react';
import { Amplify, API } from 'aws-amplify'
import { listPlatforms } from '../graphql/queries'
import awsExports from '../aws-exports';

Amplify.configure({ ...awsExports, ssr: true })


export default function GetPlatforms() {
    const [request, setRequest] = useState({loading: false, data: null, error: false})

    const queryVar = listPlatforms

    const getFunction = useCallback(async () => {
        try {
            const response = await API.graphql({query: queryVar, authMode: "AWS_IAM"})
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