import { API } from 'aws-amplify'
import { createInteraction, updateInteraction } from '../graphql/mutations'

export default function useStoreInteraction(props) {
    if (!props.creds.signedIn) return

    const interact = { 
        id: props.creds.id,
        eventId: props.favArray.toString()
    };

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
}