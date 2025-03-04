import React, { FC } from 'react'
import styles from './Start.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import useMatchMedia from '@/hooks/useMatchMedia'
import Start2 from '../../../../assets/icons/main/starti/StartSimpleSettings.webp'
import Start3 from '../../../../assets/icons/main/starti/StartChat.webp'
import { motion } from 'framer-motion'
import { EIcons, Icon } from 'assets/icons/icon'

const Start: FC = () => {
	const isMobile = useMatchMedia('768')

	return (
		<div className={cn(styles.body, 'wrapper')}>
			<div className={styles.container}>
				<div className={styles.up}>
					<h3>Легко начать</h3>
				</div>
				<div className={styles.cardWrap}>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.4 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '25vw' : '10vw' },
						}}
						className={styles.card}
					>
						<div className={styles.imgWrapFirst}>
							<Icon name={EIcons.successIcon} />
						</div>
						<div className={styles.text}>
							<p>Быстрая регистрация</p>
							<span>
								Зарегистрируйтесь за 5 шагов и откройте все возможности
								приложения!
							</span>
						</div>
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
						className={styles.card}
					>
						<div className={styles.imgWrapSecond}>
							<Image
								src={Start2}
								alt={'Ссылка на запись для клиентов'}
								loading="lazy"
							/>
						</div>

						<div className={styles.text}>
							<p>Простая настройка</p>
							<span>
								Никаких сложностей, все интуитивно понятно и без лишних усилий.
							</span>
						</div>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '25vw' : '10vw' },
						}}
						className={styles.card}
					>
						<div className={styles.imgWrapThird}>
							<Image
								src={Start3}
								alt={'Модуль Онлайн-записи клиентов на услуги'}
								loading="lazy"
							/>
						</div>

						<div className={styles.text}>
							<p>Чат поддержки</p>
							<span className={styles.text3}>
								С ответом за 5 минут — для любых технических вопросов.
							</span>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default Start
