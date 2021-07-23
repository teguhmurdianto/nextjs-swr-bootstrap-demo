const POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts'

const POSTS_HEADERS = { 'Content-Type': 'application/json'}

const postsFetcher = async () => {
    const options = {
        headers: POSTS_HEADERS,
        method: 'GET'
    }

    const response = await fetch(POSTS_ENDPOINT, options)
    
    const responseJson = await response.json()

    if(responseJson.errors) {
        throw (JSON.stringify(responseJson.errors))
    }

    return responseJson
}

export default postsFetcher