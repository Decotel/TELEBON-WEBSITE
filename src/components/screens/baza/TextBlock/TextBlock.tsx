import React from 'react';
import { ComponentBazaText } from '@/screens/baza/interfaces';
import { formatDescription } from '@/screens/baza/home/Home';
import styles from './TextBlock.module.scss'

interface TextBlockProps {
	content: ComponentBazaText;
}

const TextBlock: React.FC<TextBlockProps> = ({ content }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.body}>
				{formatDescription(content.Text)}</div>
		</div>
	);
};

export default TextBlock;