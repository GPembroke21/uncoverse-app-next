import { useCallback, useEffect } from 'react';
import { API } from 'aws-amplify'
import { createInteraction, updateInteraction } from '../graphql/mutations'
import { favoriteEvents, favoriteEventsArray } from '../static/StaticVariables';
// import { useLoginContext } from '../../components/ContextProvider';
// const loginCreds = useLoginContext()
const appendToArray = (item, index, state) => favoriteEvents[item] = { i: index, s: state }
const removeItemAll = (arr, value) => {
    var i = 0;
    while (i < arr.length) { if (arr[i] === value) { arr.splice(i, 1) } else { ++i } }
    return arr
}



export default function useStoreInteraction(props) {
    // const loginCreds = useLoginContext()
    if (props.state) favoriteEventsArray.push(props.eventId)
    else if (!props.state) removeItemAll(favoriteEventsArray, props.eventId)

    appendToArray(props.eventId, props.index, props.state)

    const interact = {
        id: props.creds.id,
        eventId: favoriteEventsArray.toString(),
    };
    // console.log(props.creds.id)
    // const getFunction = useCallback(async () => {
    //     try {
    //         // const newInteraction = await API.graphql({ query: createInteraction, variables: {input: interact}, authMode: 'AWS_IAM'})
    //         console.log("Created new interaction:")
    //     } catch (error) {
    //         console.log("Error loading API:", error)
    //     }
    // }, []) "ASIA2X5SSR472DXFB57A"

    async function addTodo() {
        try {
            const updtInteraction = await API.graphql({ query: updateInteraction, variables: { input: interact }, authMode: 'AWS_IAM' })
            // console.log("Updated interaction:", updtInteraction)
        } catch (err) {
            try {
                const newInteraction = await API.graphql({ query: createInteraction, variables: { input: interact }, authMode: 'AWS_IAM' })
                // console.log("Created new interaction:", newInteraction)
            } catch (err2) {
                console.log('error creating todo:', err2)
            }
        }
    }
    addTodo()
    // useEffect(() => {
    //     getFunction()
    //     return () => {}
    // }, [getFunction])

}