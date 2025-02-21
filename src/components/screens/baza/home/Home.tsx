import React, { useEffect, useState } from 'react'
import Meta from '@/utils/meta/Meta'
import styles from './Home.module.scss'
import Header from '@/components/layout/header/Header'
import BaseFooter from '@/components/layout/base_footer/BaseFooter'
import {
	BazaResponse,
	ComponentBazaImage,
	ComponentBazaText,
	ComponentBazaVideo,
	Page,
	Post,
} from '@/screens/baza/interfaces'
import TextBlock from '@/screens/baza/TextBlock/TextBlock'
import Link from 'next/link'
import { EIcons, Icon } from '../../../../assets/icons/icon'
import { fetchPostsBaza } from '../../../../lib/api'
import { groupByHeader } from '@/screens/baza/list/KnowledgeBase'
import cn from 'classnames'
import ImageBlock from '@/screens/baza/ImageBlock/ImageBlock'
import VideoBlock from '@/screens/baza/VideoBlock/VideoBlock'
import { transliterate } from '@/utils/transliterate/transliterate'

interface HomeProps {
	post: Post;
	header?: string;
}

interface ChildNode {
	text: string
	bold?: boolean
	italic?: boolean
	underline?: boolean
	children?: ChildNode[]
	type?: string
	url?: string
}

export interface ParagraphNode {
	children: ChildNode[]
	type?: string
	format?: string
}

export const getList = async () => {
	return await fetchPostsBaza()
}

export const formatDescription = (
	content: string | ParagraphNode[],
): JSX.Element => {
	if (typeof content === 'string') {
		return (
			<p>
				{content.split('\n').map((part, index, array) => (
					<React.Fragment key={index}>
						{part}
						{index < array.length - 1 && (part === '' ? <><br /><br /></> : <br />)}
					</React.Fragment>
				))}
			</p>
		)
	}

	return (
		<>
			{content.map((paragraph, pIndex) => {
				if (paragraph.type === 'list') {
					const ListTag = paragraph.format === 'ordered' ? 'ol' : 'ul'
					return (
						<ListTag
							key={pIndex}
							style={{ listStyle: 'devanagari', paddingLeft: '24px' }}
						>
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

				return (
					<p key={pIndex}>
						{paragraph.children.map((child, cIndex) => {
							if (child.type === 'link' && child.url) {
								return (
									<Link
										key={cIndex}
										href={child.url}
										target="_blank"
										className={styles.linkStyle}
									>
										{child?.children?.map((childItem, cIndex) => (
											<span key={cIndex}>{childItem?.text || ''}</span>
										))}
									</Link>
								)
							}

							const text = child.text || ''
							const parts = text.split('\n')

							return parts.map((part, partIndex, array) => (
								<React.Fragment key={`${pIndex}-${cIndex}-${partIndex}`}>
										<span
											style={{
												fontWeight: child.bold ? 'bold' : 'normal',
												fontStyle: child.italic ? 'italic' : 'normal',
												textDecoration: child.underline ? 'underline' : 'none'
											}}
										>{part}</span>
									{partIndex < array.length - 1 && (
										part === '' ? <><br /><br /></> : <br />
									)}
								</React.Fragment>
							))
						})}
					</p>
				)
			})}
		</>
	)
}

const Home: React.FC<HomeProps> = ({ post, header }) => {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [openSections, setOpenSections] = useState<Record<string, boolean>>({})
	const [posts, setPosts] = useState<BazaResponse[]>([])
	const [hidden, setHidden] = useState<boolean>(false)
	const [lastScrollY, setLastScrollY] = useState<number>(0)
	const groupedPosts = groupByHeader(posts)

	const toggleSection = (header: string) => {
		setOpenSections(prev => ({
			...prev,
			[header]: !prev[header],
		}))
	}

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY

			if (currentScrollY > lastScrollY) {
				setHidden(true)
			} else {
				setHidden(false)
			}

			setLastScrollY(currentScrollY)
		}

		window.addEventListener('scroll', handleScroll, { passive: true })

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [lastScrollY])

	useEffect(() => {
		const fetchPosts = async () => {
			const fetchedPosts = await getList()
			setPosts(fetchedPosts)
		}

		fetchPosts()
	}, [])

	const renderPage = (page: Page) => {
		switch (page.__typename) {
			case 'ComponentBazaImage':
				return <ImageBlock key={page.__typename} content={page as ComponentBazaImage}/>
			case 'ComponentBazaText':
				return <TextBlock key={page.__typename} content={page as ComponentBazaText} />
			case 'ComponentBazaVideo':
				return <VideoBlock key={page.__typename} content={page as ComponentBazaVideo}/>
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
			console.log(post)
			return () => clearTimeout(timer)
		}
	}, [post])

	return (
		<>
			<Header />
			<Meta
				title={post.baza.data.attributes.title}
				description={post.baza.data.attributes.description}
				image="logo_preview.png"
			>
				{isLoading ? (
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '100vh',
						}}
					>
						<div className={styles.loader}></div>
					</div>
				) : (
					<div className={styles.wrapper}>
						<div className={styles.up}></div>
						<div className={styles.container}>
							<div className={styles.left}>
								<Link href={'/knowledge_bases'} className={styles.back}>Telebon</Link>
								<div className={styles.line}>
								</div>
								<div className={styles.list}>
									{Object.entries(groupedPosts).map(([header, posts]) => (
										<div key={header} className={styles.section}>
											<div
												className={styles.sectionHeader}
												onClick={() => toggleSection(header)}
											>
												<Link
													href={`/knowledge_base`}
													className={styles.link}
												>{header}</Link>
												<div
													className={`${styles.arrow} ${openSections[header] ? styles.open : ''}`}>
													<Icon
														name={EIcons.listarrowbase}
													/></div>
											</div>
											{openSections[header] && (
												<div className={styles.sectionContent}>
													{posts.map((post) => (
														<Link
															key={post.id}
															href={`/knowledge_base/${post.attributes.url}`}
															className={styles.link}
														>
															{post.attributes.title}
														</Link>
													))}
												</div>
											)}
										</div>
									))}
								</div>
							</div>
							<div className={styles.right}>
								<div className={styles.breadcrumbs}>
									<Link href={'/knowledge_bases'}>Telebon</Link>
									<div className={styles.next}>&gt;</div>
									{post.baza.data.attributes.header.includes('/') ? (
										<>
											<Link href={`/base/${transliterate(post.baza.data.attributes.header.split('/')[0])}`}>
												{post.baza.data.attributes.header.split('/')[0].trim()}
											</Link>
											<div className={styles.next}>&gt;</div>
											<Link href={`/base/${transliterate(post.baza.data.attributes.header.split('/')[0])}/${
												transliterate(post.baza.data.attributes.header.split('/')[1])}`}>
												{post.baza.data.attributes.header.split('/')[1].trim()}
											</Link>
										</>
									) : (
										<Link href={`/base/${transliterate(post.baza.data.attributes.header)}`}>
											{post.baza.data.attributes.header}
										</Link>
									)}
									<div className={styles.next}>&gt;</div>
									<Link href={`/knowledge_base/${post.baza.data.attributes.url}`}>{post.baza.data.attributes.title}</Link>
								</div>
								<div className={styles.title}>
									<h1>{header ? header : post.baza.data.attributes.title}</h1>
								</div>
								{header ? (
									<div className={styles.headerLinks}>
										{header.includes('/') ? (
											// Если мы находимся на странице подзаголовка
											posts.filter(p =>
												p.attributes.header.split('/')[1] === header
											).map(p => (
												<Link
													key={p.id}
													href={p.attributes.url}
													className={styles.articleLink}
												>
													{p.attributes.title}
												</Link>
											))
										) : (
											// Если мы находимся на странице основного заголовка
											posts.filter(p =>
												p.attributes.header.startsWith(header)
											).reduce((acc: JSX.Element[], p) => {
												const headerParts = p.attributes.header.split('/');

												if (headerParts.length > 1 && !acc.some(el =>
													el.key === `subheader-${headerParts[1].trim()}`
												)) {
													// Добавляем ссылки на подзаголовки
													acc.push(
														<Link
															key={`subheader-${headerParts[1].trim()}`}
															href={`/base/${transliterate(headerParts[0].trim())}/${
																transliterate(headerParts[1].trim())
															}`}
															className={styles.subheaderLink}
														>
															{headerParts[1].trim()}
														</Link>
													);
												} else if (headerParts.length === 1) {
													// Добавляем ссылки на статьи без подзаголовков
													acc.push(
														<Link
															key={p.id}
															href={p.attributes.url}
															className={styles.articleLink}
														>
															{p.attributes.title}
														</Link>
													);
												}
												return acc;
											}, [])
										)}
									</div>
								) : (
									post.baza.data.attributes.pages.map(renderPage)
								)}
							</div>
						</div>
					</div>
				)}
			</Meta>
			<footer
				className={cn(styles.footer, {
					[styles.hidden]: hidden,
				})}
			>
				<BaseFooter />
			</footer>
		</>
	)
}

export default Home
