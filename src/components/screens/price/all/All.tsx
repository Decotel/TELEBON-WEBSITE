import React, { FC } from 'react'
import styles from './All.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import useMatchMedia from '@/hooks/useMatchMedia'
import AllImage from '../../../../assets/icons/price/all/AllImage.png'
import AllImageMobile from '../../../../assets/icons/price/all/AllImageMobile.png'
import { motion } from 'framer-motion'
import { EIcons, Icon } from '../../../../assets/icons/icon'
import Link from 'next/link'

const All: FC = () => {
	const isMobile = useMatchMedia('768')
	const cardNames = [
		<p key="1">Неограниченные записи</p>,
		<p key="2">
			Подтверждения и <br />
			Напоминания
		</p>,
		<p key="3">Модуль Онлайн-записи</p>,
		<p key="4">
			Персональный Телеграм
			<br />
			Бот для клиентов*
		</p>,
		<p key="5">Отчёты и Аналитика</p>,
		<p key="6">Продажи</p>,
		<p key="7">Учёт ресурсов</p>,
		<p key="8">Расписание сотрудников</p>,
		<p key="9">Кассы и счета</p>,
		<p key="10">Поддержка 24/7</p>,
		<p key="11">
			Расширенная карта
			<br />
			клиента
		</p>,
		<p key="12">и многое другое!</p>,
	]

	return (
		<div className={cn(styles.body, 'wrapper')}>
			<div className={styles.gradient}></div>
			<div className={styles.up}>
				<motion.h3
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					variants={{
						visible: { opacity: 1, y: 0 },
						hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
					}}
				>
					Все уже включено в <br />
					тариф 300р/мес :
				</motion.h3>
				{isMobile ? (
					<Image src={AllImageMobile} alt={''} />
				) : (
					<Image src={AllImage} alt={'Тариф платформы Telebon'} />
				)}
			</div>
			<div className={styles.container}>
				{[...Array(4)].map((_, rowIndex) => (
					<div key={rowIndex} className={styles.row}>
						{cardNames
							.slice(rowIndex * 3, rowIndex * 3 + 3)
							.map((cardName, index) => (
								<motion.div
									key={index}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, amount: 0.3 }}
									transition={{ duration: 0.4 + index * 0.05 }}
									variants={{
										visible: { opacity: 1, y: 0 },
										hidden: { opacity: 0, y: isMobile ? '25vw' : '10vw' },
									}}
									className={styles.card}
								>
									<Icon name={EIcons.scissors} />
									{cardName}
								</motion.div>
							))}
					</div>
				))}
				<Link href={'https://lk.telebon.ru/registration'} target={'_blank'}>
					<button>Начать бесплатно</button>
				</Link>
				<p>
					* Подключение и хостинг Телеграм ботов за 0 руб на 2 года, доступно
					для новых пользователей до 01.09.2024 г.
				</p>
			</div>
		</div>
	)
}

export default All
