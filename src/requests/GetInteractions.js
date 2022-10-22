import { useCallback, useEffect, useState } from 'react';
import { Amplify, API } from 'aws-amplify'
import awsExports from '../aws-exports';
import { listInteractions } from '../graphql/queries'
import { favoriteEvents } from '../static/StaticVariables';

Amplify.configure({ ...awsExports, ssr: true })

const appendToArray = data => {
    for (let i = 0; i < data.length; i++) {
        if (i===0) console.log(data[i])
        const id = "DCLD_" + data[i].id
        const dateStart = new Date(data[i].next_start_at)
        const dateEnd = new Date(data[i].next_finish_at)
        if (!eventsIdArray.includes(id)) {
            eventsIdArray.push(id)
            eventsArray.push({
                id: id,
                apiId: data[i].id,
                platform: "DCLD",
                name: data[i].name,
                dateTimeStart: dateStart,
                dateTimeEnd: dateEnd,
                url: data[i].url,
                attendees: data[i].total_attendees,
                description: data[i].description,
                location: "[" + data[i].coordinates[0] + ", " + data[i].coordinates[1] + "]",
                image: data[i].image,
                reccurance: data[i].recurrent_frequency,
            })
        }
    }
}


export default function GetInteractions(props) {
    const [request, setRequest] = useState({loading: false, data: null, error: false})

    const gqlQuery = {
        query: listEvents, 
        authMode: "AWS_IAM",
        variables: {limit: 40}
    }

    const getFunction = useCallback(async () => {
        try {
            const response = await API.graphql(gqlQuery)
            const objectKey = Object.keys(response.data).at(0)
            // console.log("fetch:", response.data[objectKey].items[0].dateTimeEnd)
            // console.log("type:",typeof response.data[objectKey].items[0].dateTimeEnd)
            setRequest({loading: false, data: response.data[objectKey].items, error: false})
        } catch (error) {
            console.log("Error loading API:", error)
            setRequest({loading: false, data: null, error: true})
        }
    }, [])

    useEffect(() => {
        setRequest({loading: true, data: null, error: false})
        getFunction()
        return () => {setRequest({loading: false, data: null, error: false})}
    }, [getFunction])

    return request
}