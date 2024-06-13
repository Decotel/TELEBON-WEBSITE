import React, { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import styles from './Home.module.scss'
import Recording from '@/screens/main/recording/Recording'
import SliderBlock from '@/screens/main/slider/SliderBlock'
import Professional from '@/screens/main/professional/Professional'
import CenterButton from '@/screens/main/button/CenterButton'
import Start from '@/screens/main/start/Start'
import Tarif from '@/screens/main/tarif/Tarif'
import TryTelebon from '@/screens/main/try_telebon/TryTelebon'
import Contact from '@/screens/main/contact/Contact'
import Hero from '@/screens/main/hero/Hero'
import { EIcons, Icon } from '../../../../assets/icons/icon'

const Home: FC = () => {
	return (
		<Meta
			title="Telebon CRM"
			description="Новый сервис онлайн-записи с возможностью записи Клиентов в Telegram"
			image="logo_preview.png"
		>
			<div className={styles.wrapper}>
				<div style={{ height: '5vw' }}></div>
				<div className={styles.block}>
					<Hero />
					<Recording />
					<CenterButton
						icon={<Icon name={EIcons.buttonicon} />}
						text={'ПОПРОБОВАТЬ'}
					/>
					<Professional />
					<CenterButton text={'ПОПРОБОВАТЬ'} />
				</div>
				<SliderBlock />
				<div className={styles.block}>
					<Start />
					<Tarif />
					<Contact />
				</div>
			</div>
		</Meta>
	)
}

export default Home
