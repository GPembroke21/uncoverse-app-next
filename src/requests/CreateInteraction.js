import { useCallback, useEffect } from 'react';
import { API } from 'aws-amplify'
import { createInteraction } from '../graphql/mutations'
import { favoriteEvents } from '../static/StaticVariables';


const appendToArray = (item, index, state) => favoriteEvents[item] = {i: index, s: state}

function StoreInteraction(props) {

    appendToArray(props.eventId, props.state)
    const interationId = props.logInCreds.id + props.eventId
    const interact = {
        id: props.logInCreds.id,
        registeredUserId: props.logInCreds.id,
        eventId: props.eventId,
        favorite: true
    };

    // const getFunction = useCallback(async () => {
    //     try {
    //         const newInteraction = await API.graphql({ query: createInteraction, variables: {input: interact}, authMode: 'AWS_IAM'})
    //         console.log("Created new interaction:", newInteraction)
    //     } catch (error) {
    //         console.log("Error loading API:", error)
    //     }
    // }, [])

    // useEffect(() => {
    //     getFunction()
    //     return () => {}
    // }, [getFunction])

}

export default function CreateInteraction(props) {
    
    appendToArray(props.eventId, props.index, props.state)
}
