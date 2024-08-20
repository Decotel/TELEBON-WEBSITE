import React, { useEffect, useState } from 'react'
import Meta from '@/utils/meta/Meta'
import styles from './Home.module.scss'
import Hero from '@/screens/posts/post/hero/Hero'
import Price from '@/screens/posts/post/price/Price'
import Accordion from '@/screens/posts/post/accordion/Accordion'
import {
	ComponentPageAllInclusive,
	ComponentPageCard,
	ComponentPageFaq,
	ComponentPageHero,
	Page,
	PostResponse,
} from '@/screens/posts/interfaces'
import Card from '@/screens/posts/post/card/Card'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'

interface HomeProps {
	post: PostResponse
}

export interface CardFAQ {
	question: string
	answer: any
}

export interface TextNode {
	text: string
	type: 'text'
	bold?: boolean
}

export interface ParagraphNode {
	children: TextNode[]
	type: 'paragraph'
}

export const formatDescription = (content: ParagraphNode[]): JSX.Element => {
	return (
		<>
			{content.map((paragraph, pIndex) => (
				<p key={pIndex}>
					{paragraph.children.map((child, cIndex) => {
						const parts = child.text.split('\n')
						return parts.map((part, partIndex) => (
							<React.Fragment key={`${pIndex}-${cIndex}-${partIndex}`}>
								{child.bold ? (
									<span style={{ fontWeight: 'bold' }}>{part}</span>
								) : (
									part
								)}
								{partIndex < parts.length - 1 && <br />}
							</React.Fragment>
						))
					})}
				</p>
			))}
		</>
	)
}

const Home: React.FC<HomeProps> = ({ post }) => {
	console.log(post)
	const [isLoading, setIsLoading] = useState<boolean>(true)

	const renderPage = (page: Page) => {
		switch (page.__typename) {
			case 'ComponentPageHero':
				return <Hero key={page.__typename} data={page as ComponentPageHero} />
			case 'ComponentPageCard':
				return <Card key={page.__typename} data={page as ComponentPageCard} />
			case 'ComponentPageAllInclusive':
				return (
					<Price
						key={page.__typename}
						data={page as ComponentPageAllInclusive}
					/>
				)
			case 'ComponentPageFaq':
				return (
					<Accordion key={page.__typename} data={page as ComponentPageFaq} />
				)
			default:
				return null
		}
	}

	useEffect(() => {
		if (post) {
			setIsLoading(true)

			const timer = setTimeout(() => {
				setIsLoading(false)
			}, 1000)

			return () => clearTimeout(timer)
		}
	}, [post])

	return (
		<>
			<Header />
			<Meta
				title={post.post.data.attributes.title}
				description={post.post.data.attributes.description}
				image="logo_preview.png"
			>
				{isLoading ? (
					<div style={{ height: '100vw' }}></div>
				) : (
					<div className={styles.wrapper}>
						{post.post.data.attributes.pages.map(renderPage)}
					</div>
				)}
			</Meta>
			<Footer />
		</>
	)
}

export default Home
