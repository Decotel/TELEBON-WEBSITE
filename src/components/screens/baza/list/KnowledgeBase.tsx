import React, { useEffect, useState } from 'react';
import { BazaResponse } from '@/screens/baza/interfaces'
import { fetchPostsBaza } from '../../../../lib/api'
import styles from './KnowledgeBase.module.scss'

const KnowledgeBasePage = () => {
	const [posts, setPosts] = useState<BazaResponse[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchPostsBaza();
			setPosts(data);
		};

		fetchData();
	}, []);

	return (
		<div className={styles.wrapper}>
			<div className={styles.up}></div>
			<h1>База знаний</h1>
			{posts.map(post => (
				<div key={post.id}>
					<h2>{post.attributes.header}</h2>
					<div>
						<h3>{post.attributes.title}</h3>
						<p>{post.attributes.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default KnowledgeBasePage;