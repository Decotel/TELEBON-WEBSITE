import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

export const fetchPosts = async () => {
	try {
		const res = await axios.get(`${API_URL}/api/posts`)
		if (res.data && Array.isArray(res.data.data)) {
			return res.data.data
		} else {
			console.error('Expected an array but got:', res.data)
			return []
		}
	} catch (error) {
		console.error('Error fetching blog:', error)
		return []
	}
}

export const fetchOnePost = async (id: string | string[] | undefined) => {
	try {
		const res = await axios.get(`${API_URL}/api/posts/${id}`)
		return res.data.data
	} catch (error) {
		console.error('Error fetching post:', error)
		return null
	}
}

export const fetchPostsForWhom = async () => {
	try {
		const res = await axios.get(`${API_URL}/api/for-whoms`)
		if (res.data && Array.isArray(res.data.data)) {
			return res.data.data
		} else {
			console.error('Expected an array but got:', res.data)
			return []
		}
	} catch (error) {
		console.error('Error fetching blog:', error)
		return []
	}
}

export const fetchOnePostForWhom = async (
	id: string | string[] | undefined,
) => {
	try {
		const res = await axios.get(`${API_URL}/api/for-whoms/${id}`)
		return res.data.data
	} catch (error) {
		console.error('Error fetching post:', error)
		return null
	}
}
