import React, { FC } from 'react'
import styles from './Price.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import useMatchMedia from '@/hooks/useMatchMedia'
import { motion } from 'framer-motion'
import { ImagePost } from '@/screens/posts/list/Home'
import { ComponentPageAllInclusive } from '@/screens/posts/interfaces'

interface PriceProps {
	data: ComponentPageAllInclusive
}

const Price: FC<PriceProps> = ({ data }) => {
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
						<Image
							src={
								process.env.NEXT_PUBLIC_API_URL + data.image.data.attributes.url
							}
							alt={data.image.data.attributes.alternativeText}
							loading="lazy"
							width={data.image.data.attributes.width}
							height={data.image.data.attributes.height}
						/>
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
