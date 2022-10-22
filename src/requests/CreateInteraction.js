import { useCallback, useEffect } from 'react';
import { API } from 'aws-amplify'
import { createInteraction } from '../graphql/mutations'
import { favoriteEvents } from '../static/StaticVariables';


const appendToArray = (item, state) => favoriteEvents[item] = state 

export default function CreateInteraction(props) {
    

    const interact = {
        id: "akskjfkjasfkasf",
        registeredUserId: "haefjasflkasflksa01",
        eventId: "asafasasa1231",
        favorite: true
      };

    const getFunction = useCallback(async () => {
        try {
            const newInteraction = await API.graphql({ query: createInteraction, variables: {input: interact}, authMode: 'AWS_IAM'})
        } catch (error) {
            console.log("Error loading API:", error)
        }
    }, [])

    useEffect(() => {
        getFunction()
        return () => {}
    }, [getFunction])

}