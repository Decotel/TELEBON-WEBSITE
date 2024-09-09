import React, { FC } from 'react'
import styles from './Price.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import useMatchMedia from '@/hooks/useMatchMedia'
import PriceImage from '../../../../assets/icons/main/price/PriceImage.webp'
import PriceImageMobile from '../../../../assets/icons/main/price/PriceImageMobile.webp'
import { motion } from 'framer-motion'

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
							<Image src={PriceImageMobile} alt={''} loading="lazy" />
						) : (
							<Image
								src={PriceImage}
								alt={'Запись клиентов онлайн. Система Telebon - тарифы'}
								loading="lazy"
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
								<button aria-labelledby="Попробовать сейчас">
									Попробовать сейчас
								</button>
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
							<span>*Подключение Telegram бота, бесплатно до 01.12.2024</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Price
