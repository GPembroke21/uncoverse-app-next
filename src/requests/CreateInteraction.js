import { useCallback, useEffect } from 'react';
import { API } from 'aws-amplify'
import { createInteraction } from '../graphql/mutations'
import { favoriteEvents, favoriteEventsArray } from '../static/StaticVariables';


const appendToArray = (item, index, state) => favoriteEvents[item] = { i: index, s: state }
const removeItemAll = (arr, value) => {
    var i = 0;
    while (i < arr.length) { if (arr[i] === value) { arr.splice(i, 1) } else { ++i } }
    return arr
}


export function StoreInteraction(props) {
    if (props.state) favoriteEventsArray.push(props.eventId)
    else if (!props.state) removeItemAll(favoriteEventsArray, props.eventId)

    console.log(props)
    appendToArray(props.eventId, props.index, props.state)

    // const interact = {
    //     id: props.logInCreds.id,
    //     registeredUserId: props.logInCreds.id,
    //     eventId: favoriteEventsArray.toString(),
    //     favorite: true
    // };

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

export function CreateInteraction(props) {

    appendToArray(props.eventId, props.index, props.state)
}
