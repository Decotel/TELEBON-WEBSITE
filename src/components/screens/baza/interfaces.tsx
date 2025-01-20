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

export type Page = ComponentBazaText;

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
	pages: ComponentBazaText[];
}

export interface BazaResponse {
	id: string;
	attributes: BazaAttributes;
}