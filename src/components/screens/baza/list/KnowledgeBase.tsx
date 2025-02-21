import React from 'react';
import { BazaResponse } from '@/screens/baza/interfaces'
import styles from './KnowledgeBase.module.scss'
import Link from 'next/link'
import Meta from '@/utils/meta/Meta'

interface KnowledgeBaseProps {
	posts: BazaResponse[];
}

export const groupByHeader = (posts: BazaResponse[]): Record<string, BazaResponse[]> => {
	return posts.reduce((acc, item) => {
		const header = item.attributes.header;
		if (!acc[header]) {
			acc[header] = [];
		}
		acc[header].push(item);
		return acc;
	}, {} as Record<string, BazaResponse[]>);
}

const KnowledgeBasePage: React.FC<KnowledgeBaseProps> = ({ posts }) => {

	console.log(posts)
	const groupedByHeader = groupByHeader(posts);

	return (
		<Meta
			title="База знаний"
			description="База знаний"
			image="logo_preview.png"
		>
			<div className={styles.up}></div>
			<div className={styles.search_container}>
				<div className={styles.search}></div>
			</div>
			<div className={styles.wrapper}>
				{Object.entries(groupedByHeader).map(([header, items]) => (
					<div key={header} className={styles.section}>
						<h2>{header}</h2>
						<div className={styles.items}>
							{items.map((item) => (
								<Link href={`/knowledge_base/${item.attributes.url}`} key={item.id} className={styles.item}>
									<p>{item.attributes.title}</p>
								</Link>
							))}
						</div>
					</div>
				))}
			</div>
		</Meta>
	);
};

export default KnowledgeBasePage;