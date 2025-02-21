import { BazaResponse } from '@/screens/baza/interfaces'

const transliterationMap: { [key: string]: string } = {
	'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
	'е': 'e', 'ё': 'yo', 'ж': 'zh', 'з': 'z', 'и': 'i',
	'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
	'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
	'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch',
	'ш': 'sh', 'щ': 'sch', 'ъ': '', 'ы': 'y', 'ь': '',
	'э': 'e', 'ю': 'yu', 'я': 'ya',
	' ': '-', '/': '/'
};

export const transliterate = (text: string): string => {
	return text
		.toLowerCase()
		.split('')
		.map(char => transliterationMap[char] || char)
		.join('')
		.replace(/[^a-z0-9-\/]/g, '')
		.replace(/-+/g, '-');
};

interface ProcessedHeader {
	originalHeader: string;
	urlPath: string;
	isSubheader: boolean;
	id: string;
	description: string;
	title: string;
}

export const processHeaders = (articles: BazaResponse[]): ProcessedHeader[] => {
	const result: ProcessedHeader[] = [];

	articles.forEach(article => {
		const header = article.attributes.header;

		if (header.includes('/')) {
			const [mainHeader, subHeader] = header.split('/').map(h => h.trim());

			result.push({
				originalHeader: mainHeader,
				urlPath: transliterate(mainHeader),
				isSubheader: false,
				id: article.id,
				description: article.attributes.description,
				title: article.attributes.title
			});

			if (subHeader) {
				result.push({
					originalHeader: subHeader,
					urlPath: `${transliterate(mainHeader)}/${transliterate(subHeader)}`,
					isSubheader: true,
					id: article.id,
					description: article.attributes.description,
					title: article.attributes.title
				});
			}
		} else {
			result.push({
				originalHeader: header,
				urlPath: transliterate(header),
				isSubheader: false,
				id: article.id,
				description: article.attributes.description,
				title: article.attributes.title
			});
		}
	});

	return result;
};