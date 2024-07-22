import React, { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import styles from './Home.module.scss'
import Hero from '@/screens/aboutus/hero/Hero'
import { EIcons, Icon } from '../../../../assets/icons/icon'
import useMatchMedia from '@/hooks/useMatchMedia'
import Map from '@/screens/aboutus/map/Map'
import List from '@/screens/aboutus/list/List'
import Assistant from '@/screens/aboutus/assistant/Assistant'
import Feedback from '@/screens/aboutus/feedback/Feedback'
import Unique from '@/screens/aboutus/unique/Unique'
import Nums from '@/screens/aboutus/nums/Nums'
import Price from '@/screens/main/price/Price'
import Join from '@/screens/aboutus/join/Join'

const Home: FC = () => {
	const isMobile = useMatchMedia('768')

	return (
		<Meta
			title="Почему Telebon - всё начинается с записи"
			description="Новый сервис онлайн-записи с возможностью записи Клиентов в Telegram"
			image="logo_preview.png"
		>
			<div className={styles.wrapper}>
				<Hero />
				<Map />
				<List />
				<Assistant />
				<Feedback />
				<Unique />
				<Nums />
				<div style={{ marginTop: isMobile ? '-26.2821vw' : '0' }}>
					<Price />
				</div>
				<Join />
			</div>
		</Meta>
	)
}

export default Home
