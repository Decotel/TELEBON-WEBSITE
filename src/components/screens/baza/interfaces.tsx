import { ImageData, VideoData } from '@/screens/posts/interfaces'

export interface PostResponseBaza {
	data: {
		baza: BazaData;
	};
}

export interface BazaData {
	data: BazaItem;
}

export interface BazaItem {
	id: string;
	attributes: BazaAttributes;
}

export interface BazaAttributes {
	url: string;
	title: string;
	description: string;
	header: string;
	pages: Page[];
}

export type Page =
	| ComponentBazaText
	| ComponentBazaImage
	| ComponentBazaVideo;

export interface ComponentBazaImage {
	__typename: 'ComponentBazaImage'
	image: ImageData
}

export interface ComponentBazaVideo {
	__typename: 'ComponentBazaVideo'
	video: VideoData
}

export interface ComponentBazaText {
	__typename: "ComponentBazaText";
	Text: RichTextBlock[];
}

export interface RichTextBlock {
	type: string;
	children: RichTextChild[];
}

export interface RichTextChild {
	text: string;
	type: string;
	bold?: boolean;
}

export interface BazaAttributes {
	url: string;
	title: string;
	description: string;
	header: string;
	pages: Page[];
}

export interface BazaResponse {
	id: string;
	attributes: BazaAttributes;
}

export interface Post {
	baza: {
		data: BazaResponse;
	}
}