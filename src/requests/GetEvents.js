import { useEffect, useState } from 'react';
import { listPlatforms } from '../graphql/queries';
import { Amplify, API, withSSRContext } from 'aws-amplify';
import awsExports from '../aws-exports';

Amplify.configure({ ...awsExports, ssr: true })

export async function getServerSideProps({ req }) {
    // 👇 Notice how the server uses `API` from `withSSRContext`, instead of the top-level `API`.
    const SSR = withSSRContext({ req })
    const { data } = await SSR.API.graphql({ query: listPlatforms });

    return {
        props: {
            posts: data.listPlatforms.items
        }
    }
}

export default function GetPlats(props) {
    //    console.log(props)

    return props
}


// export default function GetPlats({ posts = [] }) {
//     const [posts, setPosts] = useState(posts);

//     useEffect(() => {
//         API.graphql({ query: listPlatforms }).then(({ data }) => setPosts(data.listPlatforms.items));
//     }, [])

//     return posts
// }