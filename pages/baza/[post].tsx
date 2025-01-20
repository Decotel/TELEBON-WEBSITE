import { GetStaticPaths, GetStaticProps } from 'next'
import Home from '@/screens/posts/post/home/Home'
import { Post } from '@/screens/posts/list/Home'
import { fetchPosts, fetchPostsBaza } from '../../src/lib/api'
import { getBazaById } from '../../src/lib/queries'
import { PostResponse } from '@/screens/posts/interfaces'

interface PostPageProps {
	post: PostResponse
}

export default function PostPage({ post }: PostPageProps) {
	return <Home post={post} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await fetchPosts()
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
	const posts = await fetchPostsBaza()
	const post = posts.find((p: any) => p.attributes.url === postUrl)

	if (!post) {
		return {
			notFound: true,
		}
	}
	const fetchedPost = await getBazaById(post.id.toString())
	return {
		props: {
			post: fetchedPost,
		},
	}
}
