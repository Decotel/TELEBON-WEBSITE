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

interface ChildNode {
	text: string
	bold?: boolean
	children?: ChildNode[]
}

export interface ParagraphNode {
	children: ChildNode[]
	type?: string // Можно добавить тип "list" для списков
	format?: string // Можно добавить формат "ordered" для упорядоченных списков
}

export const formatDescription = (
	content: string | ParagraphNode[],
): JSX.Element => {
	// Если это строка, возвращаем её как обычный абзац
	console.log('content', content)
	if (typeof content === 'string') {
		const parts = content.split('\n') // Разбиваем строку на части по переносу строки
		return (
			<>
				{parts.map((part, index) => (
					<React.Fragment key={index}>
						<p>{part}</p>
						{index < parts.length - 1 && <br />}
					</React.Fragment>
				))}
			</>
		)
	}

	// Если это массив, обрабатываем как параграфы (список абзацев)
	return (
		<>
			{content.map((paragraph, pIndex) => {
				// Если параграф является списком
				if (paragraph.type === 'list') {
					const ListTag = paragraph.format === 'ordered' ? 'ol' : 'ul'
					return (
						<ListTag key={pIndex} style={{ listStyle: 'devanagari' }}>
							{paragraph.children.map((listItem, cIndex) => (
								<li key={cIndex} style={{ padding: 'initial' }}>
									{listItem.children?.map((child, childIndex) => (
										<React.Fragment key={childIndex}>
											{child.text}
										</React.Fragment>
									))}
								</li>
							))}
						</ListTag>
					)
				}

				// Обычный параграф
				return (
					<p key={pIndex}>
						{paragraph.children.map((child, cIndex) => {
							const text = child.text || ''
							const parts = text.split('\n')
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
				)
			})}
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
