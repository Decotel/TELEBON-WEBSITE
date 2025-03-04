import React, { FC } from 'react'
import styles from './Acceleration.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import useMatchMedia from '@/hooks/useMatchMedia'
import AccelerationImg from '../../../../assets/icons/main/acceleration/AccelerationImg.webp'
import FeedbackImageMobile from '../../../../assets/icons/main/feedback/FeedbackImageMobile.webp'
import { motion } from 'framer-motion'
import { EIcons, Icon } from 'assets/icons/icon'
import Link from 'next/link'

const Acceleration: FC = () => {
	const isMobile = useMatchMedia('768')

	return (
		<div className={cn(styles.body, 'wrapper')}>
			<div className={styles.container}>
				<div className={styles.card}>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '25vw' : '10vw' },
						}}
						className={styles.text}
					>
						<h2>В 2,5 раза ускоряем процесс записи</h2>
						<ul className={styles.list}>
							<li className={styles.item}>
								<Icon name={EIcons.checkMark} />
								<span>
									Автоматический расчёт ближайшего свободного времени при
									записи.
								</span>
							</li>
							<li className={styles.item}>
								<Icon name={EIcons.checkMark} />
								<span>
									Легкое создание и контроль записей через электронный журнал.
								</span>
							</li>
							<li className={styles.item}>
								<Icon name={EIcons.checkMark} />
								<span>
									Готовые шаблоны и отправка бесплатных напоминаний в ручном
									режиме.
								</span>
							</li>
						</ul>
						<Link
							href={'https://lk.telebon.ru/auth'}
							target={'_blank'}
							className={styles.link}
						>
							Попробовать прямо сейчас
						</Link>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.45 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '25vw' : '10vw' },
						}}
					>
						{isMobile ? (
							<Image
								src={AccelerationImg}
								alt={'В 2,5 раза ускоряем процесс записи'}
								loading="lazy"
							/>
						) : (
							<Image
								src={AccelerationImg}
								alt={'В 2,5 раза ускоряем процесс записи'}
								loading="lazy"
							/>
						)}
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default Acceleration
