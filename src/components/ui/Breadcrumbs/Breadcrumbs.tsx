import styles from './Breadcrubms.module.scss'
import Link from 'next/link'
import { transliterate } from '@/utils/transliterate/transliterate'

interface BreadcrumbsProps {
	currentPath: string;
	post: {
		baza: {
			data: {
				attributes: {
					header: string;
					title: string;
					url: string;
				}
			}
		}
	};
	header?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPath, post, header }) => {
	const isArticlePage = currentPath.includes('/knowledge_base/');
	const isSubheaderPage = currentPath.split('/').length > 3;

	return (
		<div className={styles.breadcrumbs}>
			<Link href={'/knowledge_bases'}>Telebon</Link>
			<div className={styles.next}>&gt;</div>

			{isArticlePage ? (
				// Страница статьи
				<>
					{post.baza.data.attributes.header.includes('/') ? (
						<>
							<Link
								href={`/base/${transliterate(post.baza.data.attributes.header.split('/')[0].trim())}`}
							>
								{post.baza.data.attributes.header.split('/')[0].trim()}
							</Link>
							<div className={styles.next}>&gt;</div>
							<Link
								href={`/base/${
									transliterate(post.baza.data.attributes.header.split('/')[0].trim())
								}/${
									transliterate(post.baza.data.attributes.header.split('/')[1].trim())
								}`}
							>
								{post.baza.data.attributes.header.split('/')[1].trim()}
							</Link>
							<div className={styles.next}>&gt;</div>
							<span>{post.baza.data.attributes.title}</span>
						</>
					) : (
						<>
							<Link
								href={`/base/${transliterate(post.baza.data.attributes.header)}`}
							>
								{post.baza.data.attributes.header}
							</Link>
							<div className={styles.next}>&gt;</div>
							<span>{post.baza.data.attributes.title}</span>
						</>
					)}
				</>
			) : (
				// Страница заголовка или подзаголовка
				<>
					{isSubheaderPage ? (
						<>
							<Link
								href={`/base/${transliterate(post.baza.data.attributes.header.split('/')[0].trim())}`}
							>
								{post.baza.data.attributes.header.split('/')[0].trim()}
							</Link>
							<div className={styles.next}>&gt;</div>
							<span>{post.baza.data.attributes.header.split('/')[1].trim()}</span>
						</>
					) : (
						<span>{post.baza.data.attributes.header.split('/')[0].trim()}</span>
					)}
				</>
			)}
		</div>
	);
};

export default Breadcrumbs;