import React from 'react';
import { ComponentBazaImage } from '@/screens/baza/interfaces'
import styles from './ImageBlock.module.scss'
import Image from 'next/image'

interface TextBlockProps {
	content: ComponentBazaImage;
}

const ImageBlock: React.FC<TextBlockProps> = ({ content }) => {
	console.log(content)
	return (
		<div className={styles.wrapper}>
			<div className={styles.body}>
				<Image
					src={process.env.NEXT_PUBLIC_API_URL + content.image.data.attributes.url}
					alt={content.image.data.attributes.alternativeText}
					width={content.image.data.attributes.width ? content.image.data.attributes.width : "100"}
					height={content.image.data.attributes.height ? content.image.data.attributes.height : "100"}
					loading="lazy"/>
			</div>
		</div>
	);
};

export default ImageBlock;