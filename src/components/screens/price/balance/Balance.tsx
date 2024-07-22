import React, { FC } from 'react'
import styles from './Balance.module.scss'
import cn from 'classnames'
import useMatchMedia from '@/hooks/useMatchMedia'
import Image from 'next/image'
import BalanceImage from '../../../../assets/icons/price/balance/BalanceImage.png'
import { motion } from 'framer-motion'

const Balance: FC = () => {
	const isMobile = useMatchMedia('768')

	return (
		<div className={cn(styles.body, 'wrapper')}>
			<div className={styles.container}>
				<div className={styles.row}>
					<div className={styles.column}>
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
								<h3>Баланс компании</h3>
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
								<p>
									Пополнение без ограничений, в любое время. <br />
									Ежедневная тарификация подписки.
								</p>
							</motion.div>
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
							className={styles.item}
							style={{ marginTop: isMobile ? '10.2564vw' : '0' }}
						>
							<p>Сотрудники</p>
							<span>
								10₽/день за <br />1 пользователя
							</span>
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
							<p>
								Модуль Онлайн-
								<br />
								записи
							</p>
							<span>БЕСПЛАТНО</span>
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
							<p>Ресурсы</p>
							<span>БЕСПЛАТНО</span>
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
							<p>
								Персональный <br />
								Телеграм бот
							</p>
							<span>БЕСПЛАТНО</span>
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
							<p>Смс сообщения</p>
							<span>По тарифу оператора</span>
						</motion.div>
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
							src={BalanceImage}
							alt={'Стоимость CRM для записи клиентов'}
						/>
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default Balance
