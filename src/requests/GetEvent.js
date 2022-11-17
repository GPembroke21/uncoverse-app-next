import { useCallback, useEffect, useState } from 'react';
import { Amplify, API } from 'aws-amplify'
import awsExports from '../aws-exports';
import { getEvent } from '../graphql/queries'

Amplify.configure({ ...awsExports, ssr: true })

export default function GetEvent(eventId) {
    const [request, setRequest] = useState(() => { return { data: null, error: false } })

    const getFunction = useCallback(async (eventId) => {
        const gqlQuery = () => {
            return {
                query: getEvent,
                authMode: "AWS_IAM",
                variables: { id: eventId.id }
            }
        }
        try {
            const response = await API.graphql(gqlQuery())
            // console.log("evnt:", response)
            if (!response.data.getEvent) return request
            const event = response.data.getEvent
            setRequest({ data: event, error: false })
        } catch (error) {
            // console.log("Error loading API:", error)
            setRequest({ data: null, error: true })
        }
    }, [])

    useEffect(() => {
        if (!eventId || eventId == {}) return request
        getFunction(eventId)
        return () => { setRequest({ data: null, error: false }) }
    }, [getFunction, eventId])

    return request
}