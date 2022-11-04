import { useCallback, useEffect, useState } from 'react';
import { Amplify, API } from 'aws-amplify'
import awsExports from '../aws-exports';
import { listEvents } from '../graphql/queries'
import { eventsArray, eventsIdArray } from '../static/StaticVariables'

Amplify.configure({ ...awsExports, ssr: true })

const nextToken = [null]

export default function GetEvents(getMoreEvents) {
    const [request, setRequest] = useState(() => { nextToken.splice(0, 0, null); return { data: null, error: false} })

    const gqlQuery = () => {
        return {
            query: listEvents,
            authMode: "AWS_IAM",
            variables: { limit: 40, nextToken: nextToken.at(0)}
        }
    }

    const getFunction = useCallback(async () => {
        try {
            const response = await API.graphql(gqlQuery())
            const objectKey = Object.keys(response.data).at(0)
            // if (response.data.listEvents.items.length === 0 && response.data.listEvents.nextToken !== null) { setNextToken(response.data.listEvents.nextToken) }
            nextToken.splice(0, 0, response.data[objectKey].nextToken)
            // appendToArray(response.data[objectKey].items)
            // console.log("Next fetched: ", response.data.listEvents.nextToken)
            setRequest({ data: response.data[objectKey].items, error: false})
        } catch (error) {
            console.log("Error loading API:", error)
            setRequest(() => { return { data: null, error: true}})
        }
    }, [])

    useEffect(() => {
        getFunction()
        // console.log("Function running!!")
        return () => { setRequest({ data: null, error: false})}
    }, [getFunction, getMoreEvents])

    return request
}

// const appendToArray = data => {
//     for (let i = 0; i < data.length; i++) {
//         const id = data[i].id
//         if (!eventsIdArray.includes(id)) {
//             eventsIdArray.push(id)
//             eventsArray.push(data[i])
//         }
//     }
// }