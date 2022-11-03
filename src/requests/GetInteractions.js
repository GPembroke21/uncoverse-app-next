import { useCallback, useEffect, useState } from 'react';
import { Amplify, API } from 'aws-amplify'
import awsExports from '../aws-exports';
import { getInteraction } from '../graphql/queries'
import { favoriteEvents, favoriteEventsArray } from '../static/StaticVariables';
// import { useLoginContext } from '../../components/ContextProvider';



Amplify.configure({ ...awsExports, ssr: true })

const appendToArray = data => { console.log("favorites append:", typeof data, data) }

export default function GetInteractions(interactionsId) {
    const [request, setRequest] = useState(() => [])
    // const loginCreds = useLoginContext()

    const getFunction = useCallback(async (intId) => {
        const gqlQuery = () => { return {
            query: getInteraction, 
            authMode: "AWS_IAM",
            variables: {id: intId}
        }}
        try {
            const response = await API.graphql(gqlQuery())
            if (!response.data.getInteraction) return
            const favorites = response.data.getInteraction.eventId
            if (favorites === "") { setRequest([])}
            else { setRequest(favorites.split(",")) }
        } catch (error) {
            // console.log("Error loading API:", error)
            setRequest(() => [])
        }
    }, [])

    useEffect(() => {
        if (!interactionsId) return
        getFunction(interactionsId)
        return () => { }
    }, [getFunction, interactionsId])
    
    return request
}