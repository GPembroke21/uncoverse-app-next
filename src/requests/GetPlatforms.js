// import { useCallback, useEffect, useState } from 'react';
// import { API, graphqlOperation } from 'aws-amplify'
// import { listPlatforms } from '../graphql/queries'
// import { platformsDictGl, platformIds } from '../static/StaticVariables';

// const setUpDictionary = array => {
//     if (!!Object.keys(platformsDictGl).length) return
//     let newArray = array.map(a => a.id)
//     const allpIndex = array.indexOf("ALLP");
//     newArray.splice(allpIndex, 1)
//     newArray.unshift('ALLP')
//     for (let i = 0; i < newArray.length; i++) { 
//         platformsDictGl[newArray[i]] = false 
//         if (!platformIds[array[i].id]) platformIds[array[i].id] = array[i].name
//     }
// }

// export default function GetPlatforms() {
//     const [request, setRequest] = useState({loading: false, data: null, error: false})

//     const getFunction = useCallback(async () => {
//         try {
//             const response = await API.graphql(graphqlOperation(listPlatforms, {limit: 1000}))
//             setUpDictionary(response.data.listPlatforms.items)
//             setRequest({
//                 loading: false,
//                 data: response.data.listPlatforms.items,
//                 error: false
//             })
//         } catch (error) {
//             console.log("Error loading API:", error)
//             setRequest({
//                 loading: false,
//                 data: null,
//                 error: true
//             })
//         }
//     }, [])

//     useEffect(() => {
//         setRequest({ loading: true, data: null, error: false })
//         getFunction()
//         return () => {setRequest({loading: false, data: null, error: false})}
//     }, [getFunction])

//     return request
// }
