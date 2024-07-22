import React, { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import styles from './Home.module.scss'
import Hero from '@/screens/price/hero/Hero'
import { EIcons, Icon } from '../../../../assets/icons/icon'
import useMatchMedia from '@/hooks/useMatchMedia'
import List from '@/screens/price/list/List'
import Balance from '@/screens/price/balance/Balance'
import All from '@/screens/price/all/All'
import Accordion from '@/screens/price/accordion/Accordion'
import HelpBusines from '@/screens/price/help_busines/HelpBusines'

const Home: FC = () => {
	const isMobile = useMatchMedia('768')

	return (
		<Meta
			title="Стоимость Telebon - мобильное решение для вашего бизнеса"
			description="Новый сервис онлайн-записи с возможностью записи Клиентов в Telegram"
			image="logo_preview.png"
		>
			<div className={styles.wrapper}>
				<Hero />
				<List />
				<Balance />
				<All />
				<Accordion />
				<HelpBusines />
			</div>
		</Meta>
	)
}

export default Home
