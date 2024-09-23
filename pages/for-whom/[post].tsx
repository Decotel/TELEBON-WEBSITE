import { GetStaticPaths, GetStaticProps } from 'next'
import Home from '@/screens/posts/for_whom/home/Home'
import { Post } from '@/screens/posts/list/Home'
import { fetchPostsForWhom } from '../../src/lib/api'
import { getPostByIdForWhom } from '../../src/lib/queries'
import { PostResponseForWhom } from '@/screens/posts/interfaces'

interface PostPageProps {
	forWhom: PostResponseForWhom
}

export default function PostPage({ forWhom }: PostPageProps) {
	return <Home post={forWhom} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await fetchPostsForWhom()
	if (!Array.isArray(posts)) {
		console.error('Expected articles to be an array but got:', posts)
	}

	const paths = posts.map((post: Post) => ({
		params: { post: post.attributes.url.toString() },
	}))

	console.log('1', paths)

	return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postUrl = params?.post
	const posts = await fetchPostsForWhom()
	const post = posts.find((p: any) => p.attributes.url === postUrl)

	if (!post) {
		return {
			notFound: true,
		}
	}
	const fetchedPost = await getPostByIdForWhom(post.id.toString())
	return {
		props: {
			forWhom: fetchedPost,
		},
	}
}
