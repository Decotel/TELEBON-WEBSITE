import React, { FC, useRef } from 'react'
import Meta from '@/utils/meta/Meta'
import Hero from '@/screens/main/hero/Hero'
import styles from './Home.module.scss'
import Description from '@/screens/main/description/Description'
import DescriptionA from '@/screens/main/descriptiona/DescriptionA'
import Recording from '@/screens/main/recording/Recording'
import SliderBlock from '@/screens/main/slider/SliderBlock'

const Home: FC = () => {
	const nextBlockRef = useRef<HTMLDivElement>(null)
	return (
		<Meta
			title="Telebon CRM"
			description="Новый сервис онлайн-записи с возможностью записи Клиентов в Telegram"
			image="logo_preview.png"
		>
			<div className={styles.wrapper}>
				<Description />
				<DescriptionA />
				<Recording />
				<SliderBlock />
			</div>
		</Meta>
	)
}

export default Home
