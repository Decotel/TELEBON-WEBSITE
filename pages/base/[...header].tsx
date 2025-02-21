import { GetStaticPaths, GetStaticProps } from 'next'
import { BazaResponse, Post } from '@/screens/baza/interfaces'
import { transliterate } from '@/utils/transliterate/transliterate'
import { fetchPostsBaza } from '../../src/lib/api'
import { getBazaById } from '../../src/lib/queries'
import Home from '@/screens/baza/home/Home'

interface Props {
	post: Post;
	header: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await fetchPostsBaza();

	const paths = posts.flatMap((post: BazaResponse) => {
		const headerParts = post.attributes.header.split('/').map(part => part.trim());

		if (headerParts.length === 1) {
			// Для простых заголовков
			return [{
				params: {
					header: [transliterate(headerParts[0])]
				}
			}];
		} else {
			// Для заголовков с подзаголовками
			return [
				{
					params: {
						header: [transliterate(headerParts[0])]
					}
				},
				{
					params: {
						header: [transliterate(headerParts[0]), transliterate(headerParts[1])]
					}
				}
			];
		}
	});

	return {
		paths,
		fallback: 'blocking'
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	if (!params?.header) {
		return { notFound: true };
	}

	const headerPath = (params.header as string[]);
	const posts = await fetchPostsBaza();

	// Находим соответствующий пост
	const post = posts.find((p: BazaResponse) => {
		const headerParts = p.attributes.header.split('/').map(part => part.trim());
		const headerSlugs = headerParts.map(part => transliterate(part));

		if (headerPath.length === 1) {
			// Для простых заголовков
			return headerSlugs[0] === headerPath[0];
		} else {
			// Для подзаголовков
			return headerSlugs[0] === headerPath[0] && headerSlugs[1] === headerPath[1];
		}
	});

	if (!post) {
		return { notFound: true };
	}

	const fetchedPost = await getBazaById(post.id);
	const headerParts = post.attributes.header.split('/').map(part => part.trim());

	// Определяем, какую часть заголовка вернуть
	const originalHeader = headerPath.length > 1 ? headerParts[1] : headerParts[0];

	return {
		props: {
			post: fetchedPost,
			posts,
			header: originalHeader
		},
		revalidate: 10
	};
};

const ArticlePage = ({ post, header }: Props) => {
	if (!post) {
		return <div>Статья не найдена</div>;
	}

	return (
			<Home post={post} header={header} />
	);
};

export default ArticlePage;