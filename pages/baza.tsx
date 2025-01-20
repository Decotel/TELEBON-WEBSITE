import KnowledgeBase from '@/screens/baza/list/KnowledgeBase'
import { GetStaticProps } from 'next'
import { fetchPostsBaza } from '../src/lib/api'

interface PostsPageProps {
	posts: any[]
}

export default function PostsPage({ posts }: PostsPageProps) {
	return <KnowledgeBase />
}

export const getStaticProps: GetStaticProps = async () => {
	const posts = await fetchPostsBaza()
	console.log(posts)
	return {
		props: {
			posts,
		},
		revalidate: 10,
	}
}
