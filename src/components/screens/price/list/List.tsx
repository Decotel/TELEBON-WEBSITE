import React, { FC, useState } from 'react'
import styles from './List.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import useMatchMedia from '@/hooks/useMatchMedia'
import Image from 'next/image'
import Phone from '../../../../assets/icons/price/list/ListPhone.png'
import ListImage from '../../../../assets/icons/price/list/ListImage.png'
import { motion } from 'framer-motion'
import Link from 'next/link'

const List: FC = () => {
	const isMobile = useMatchMedia('768')

	return (
		<div className={cn(styles.body, 'wrapper')}>
			<div className={styles.container}>
				<div className={styles.text}>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
						}}
					>
						<Image src={ListImage} alt={''} />
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
						}}
					>
						<h3>
							Добавление {isMobile ? null : <br />}
							пользователей
						</h3>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
						}}
					>
						<p>по 300₽/в месяц за каждого</p>
					</motion.div>
				</div>
				<div className={styles.row}>
					<div className={styles.column}>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
							}}
							className={styles.item}
						>
							<IconInstance name={EIcons.listmark} />
							<p>Календарь и расписаниев</p>
						</motion.div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
							}}
							className={styles.item}
						>
							<IconInstance name={EIcons.listmark} />
							<p>Онлайн-Запись 24/7</p>
						</motion.div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
							}}
							className={styles.item}
						>
							<IconInstance name={EIcons.listmark} />
							<p>Управление клиентской базой</p>
						</motion.div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
							}}
							className={styles.item}
						>
							<IconInstance name={EIcons.listmark} />
							<p>Финансы и продажи</p>
						</motion.div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
							}}
							className={styles.item}
						>
							<IconInstance name={EIcons.listmark} />
							<p>Аналитика и отчёты</p>
						</motion.div>
						<Link href={'https://lk.telebon.ru/registration'} target={'_blank'}>
							{isMobile ? (
								<button>Попробовать</button>
							) : (
								<button>Попробовать бесплатно</button>
							)}
						</Link>
					</div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
						}}
					>
						<Image
							src={Phone}
							alt={
								'Пробный период 14 дней, для мастеров и салонов в бьюти сфере'
							}
						/>
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default List
