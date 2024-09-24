import { GetStaticProps } from 'next'
import Home, { Post } from '@/screens/posts/list/Home'
import { fetchPostsForWhom } from '../src/lib/api'

interface PostsPageProps {
	posts: Post[]
}

export default function PostsPage({ posts }: PostsPageProps) {
	return <Home posts={posts} />
}

export const getStaticProps: GetStaticProps = async () => {
	const posts = await fetchPostsForWhom()
	console.log(posts)
	return {
		props: {
			posts,
		},
		revalidate: 10,
	}
}
