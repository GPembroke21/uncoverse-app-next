import { useCallback, useEffect, useState } from 'react';
import { Amplify, API } from 'aws-amplify'
import awsExports from '../aws-exports';
import { listInteractions } from '../graphql/queries'
import { favoriteEvents, favoriteEventsArray } from '../static/StaticVariables';

Amplify.configure({ ...awsExports, ssr: true })

const appendToArray = data => { console.log("favorites append:", typeof data, data) }

export default function GetInteractions(props) {

    const gqlQuery = {
        query: listInteractions, 
        authMode: "AWS_IAM",
        variables: {id: props.logInCreds.id}
    }

    const getFunction = useCallback(async () => {
        try {
            const response = await API.graphql(gqlQuery)
            appendToArray(response.data.listInteractions.items)
        } catch (error) { console.log("Error loading API:", error) }
    }, [])

    useEffect(() => {
        getFunction()
        return () => { }
    }, [getFunction, props.logInCreds.id])
}