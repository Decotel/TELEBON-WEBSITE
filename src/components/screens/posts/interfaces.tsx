import { ParagraphNode, TextNode } from '@/screens/posts/post/home/Home'

export interface ImageAttributes {
	url: string
	alternativeText: string
	width: number
	height: number
}

export interface ImageData {
	data: {
		attributes: ImageAttributes
	}
}

export interface ComponentPageHero {
	__typename: 'ComponentPageHero'
	title: string
	description: ParagraphNode[]
	background: ImageData
	background_mobile: ImageData
	phone: ImageData
	sideImage?: ImageData
}

export interface ComponentPageCard {
	__typename: 'ComponentPageCard'
	title: string
	description: ParagraphNode[]
	image: ImageData
	button: boolean
	view: 'left' | 'right'
}

export interface ComponentPageAllInclusive {
	__typename: 'ComponentPageAllInclusive'
	image: ImageData
}

export interface FaqCard {
	id: string
	Question: string
	Answer: ParagraphNode[]
}

export interface ComponentPageFaq {
	__typename: 'ComponentPageFaq'
	Faq_card: FaqCard[]
}

export type Page =
	| ComponentPageHero
	| ComponentPageCard
	| ComponentPageAllInclusive
	| ComponentPageFaq

export interface PostAttributes {
	title: string
	description: string
	pages: Page[]
}

export interface PostData {
	id: string
	attributes: PostAttributes
}

export interface PostResponse {
	post: {
		data: PostData
	}
}

export interface PostResponseForWhom {
	forWhom: {
		data: PostData
	}
}
