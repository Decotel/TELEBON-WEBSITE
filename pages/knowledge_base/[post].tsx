import { GetStaticPaths, GetStaticProps } from 'next'
import { fetchPostsBaza } from '../../src/lib/api'
import { getBazaById } from '../../src/lib/queries'
import Home from '@/screens/baza/home/Home'
import { BazaResponse, Post } from '@/screens/baza/interfaces'

interface PostPageProps {
	post: Post
	header: string
}

export default function PostPage({ post }: PostPageProps) {
	return <Home post={post}/>
}

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await fetchPostsBaza()

	const paths = posts.map((post: BazaResponse) => ({
		params: { post: post.attributes.url },
	}))

	return {
		paths,
		fallback: 'blocking'
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postUrl = params?.post
	const posts = await fetchPostsBaza()
	const post = posts.find((p: BazaResponse) => p.attributes.url === postUrl)

	if (!post) {
		return {
			notFound: true,
		}
	}

	const fetchedPost = await getBazaById(post.id)
	return {
		props: {
			post: fetchedPost,
		},
		revalidate: 10,
	}
}
