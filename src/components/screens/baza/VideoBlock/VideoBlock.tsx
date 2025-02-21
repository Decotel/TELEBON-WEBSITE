import React from 'react';
import { ComponentBazaVideo } from '@/screens/baza/interfaces'
import styles from './VideoBlock.module.scss'

interface TextBlockProps {
	content: ComponentBazaVideo;
}

const VideoBlock: React.FC<TextBlockProps> = ({ content }) => {
	console.log(content)
	return (
		<div className={styles.wrapper}>
			<div className={styles.body}>
				<video
					autoPlay
					controls
					src={process.env.NEXT_PUBLIC_API_URL + content.video.data.attributes.url}
					width={content.video.data.attributes.width ? content.video.data.attributes.width : "100"}
					height={content.video.data.attributes.height ? content.video.data.attributes.height : "100"}
					/>
			</div>
		</div>
	);
};

export default VideoBlock;