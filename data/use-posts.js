import postsFetcher from '../libs/api-posts'
import useSwr from 'swr'

export default function usePosts() {
    const { data, mutate, error } = useSwr('api_posts', postsFetcher)
    const loading = !data && !error
    return {
        loading,
        posts: data,
        mutate
    }
}