import React, { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import styles from './Home.module.scss'
import Hero from '@/screens/main/hero/Hero'
import useMatchMedia from '@/hooks/useMatchMedia'
import Description from '@/screens/main/description/Description'
import Price from '@/screens/main/price/Price'
import Nums from '@/screens/main/nums/Nums'
import Feedback from '@/screens/main/feedback/Feedback'
import ForYou from '@/screens/main/foryou/ForYou'
import Functions from '@/screens/main/functions/Functions'
import Start from '@/screens/main/start/Start'
import HelpBusines from '@/screens/main/help_busines/HelpBusines'
import Accordion from '@/screens/main/accordion/Accordion'
import Icon from '../../../../assets/icons/AppleIcon.png'

const Home: FC = () => {
	const isMobile = useMatchMedia('768')

	return (
		<Meta
			title="Система записи клиентов. Telebon - CRM для салонов красоты и других типов бизнеса"
			description="Новый сервис онлайн-записи с возможностью записи Клиентов в Telegram"
			image="logo_preview.png"
		>
			<div className={styles.wrapper}>
				<Hero />
				<Description />
				<Price />
				<Nums />
				<Feedback />
				<Functions />
				<ForYou />
				<Start />
				<HelpBusines />
				<Accordion />
			</div>
		</Meta>
	)
}

export default Home
