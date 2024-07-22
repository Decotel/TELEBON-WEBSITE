import React, { FC, useEffect, useState } from 'react'
import styles from './Price.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import Image from 'next/image'
import { useFormik } from 'formik'
import Link from 'next/link'
import useMatchMedia from '@/hooks/useMatchMedia'
import PriceImage from '../../../../assets/icons/main/price/PriceImage.png'
import PriceImageMobile from '../../../../assets/icons/main/price/PriceImageMobile.png'
import { motion } from 'framer-motion'

export interface FormValues {
	email: string
	isValidForm: boolean
}

const Price: FC = () => {
	const isMobile = useMatchMedia('768')

	return (
		<div className={cn(styles.body, 'wrapper')}>
			<div className={styles.container}>
				<div className={styles.card}>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '40vw' : '10vw' },
						}}
					>
						{isMobile ? (
							<Image src={PriceImageMobile} alt={''} />
						) : (
							<Image
								src={PriceImage}
								alt={'Запись клиентов онлайн. Система Telebon - тарифы'}
							/>
						)}
					</motion.div>
					<div className={styles.text}>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.3 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: isMobile ? '40vw' : '10vw' },
							}}
						>
							<h3>Все функции включены</h3>
						</motion.div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.3 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: isMobile ? '40vw' : '10vw' },
							}}
						>
							<p className={styles.price}>300 ₽</p>
						</motion.div>
						<Link href={'https://lk.telebon.ru/registration'} target={'_blank'}>
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.5 }}
								variants={{
									visible: { opacity: 1 },
									hidden: { opacity: 0 },
								}}
							>
								<button>Попробовать сейчас</button>
							</motion.div>
						</Link>
						<p>
							+300 ₽ за каждого дополнительного
							<br />
							пользователя в месяц.
							<br />
							Все функции включены.
							<br />
							Бесплатный пробный период 14 дней.
							<br />
							<span>*Подключение Telegram бота, бесплатно до 01.09.2024</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Price
