import { useCallback, useEffect, useState } from 'react';
import { Amplify, API } from 'aws-amplify'
import awsExports from '../aws-exports';
import { listAnalytics } from '../graphql/queries'

Amplify.configure({ ...awsExports, ssr: true })

export default function GetAnalyticsData() {
    const [request, setRequest] = useState(() => {return { data: null, error: false }})

    const gqlQuery = () => {
        return {
            query: listAnalytics,
            authMode: "AWS_IAM",
        }
    }

    const getFunction = useCallback(async () => {
        try {
            const response = await API.graphql(gqlQuery())
            const objectKey = Object.keys(response.data).at(0)
            // console.log("Data Items: ", response.data[objectKey].items)
            setRequest({ data: response.data[objectKey].items, error: false })
        } catch (error) {
            console.log("Error loading Analytics:", error)
            setRequest(() => { return { data: null, error: true } })
        }
    }, [])

    useEffect(() => {
        getFunction()
        return () => { setRequest({ data: null, error: false }) }
    }, [getFunction])

    return request
}
