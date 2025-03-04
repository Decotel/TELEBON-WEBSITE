import React, { FC } from 'react'
import styles from './Description.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import useMatchMedia from '@/hooks/useMatchMedia'
import DescriptionCard1 from '../../../../assets/icons/main/description/DescriptionCard1.webp'
import DescriptionCard2 from '../../../../assets/icons/main/description/DescriptionCard2.webp'
import DescriptionCard3 from '../../../../assets/icons/main/description/DescriptionCard3.webp'
import { motion } from 'framer-motion'

const Description: FC = () => {
	const isMobile = useMatchMedia('768')

	return (
		<div className={cn(styles.body, 'wrapper')} id={'possibilities'}>
			<div className={styles.container}>
				<div className={styles.card}>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
						}}
					>
						<Image
							src={DescriptionCard1}
							alt={'Запись клиентов на маникюр онлайн'}
							loading="lazy"
							className={styles.cardImg}
						/>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
						}}
						className={styles.text}
					>
						<div className={styles.textWrap}>
							<h2>Электронный журнал который помогает</h2>
							<p>
								Легко записывать клиентов, управлять расписанием, контролировать
								посещения.
							</p>
						</div>
					</motion.div>
				</div>
				<div className={styles.card}>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
						}}
						className={styles.text}
					>
						<div className={styles.textWrap}>
							<h2>Расписание и рабочий график сотрудников</h2>
							<p>
								Удобно организованные в одном месте для эффективного
								планирования и управления.
							</p>
						</div>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
						}}
					>
						<Image
							src={DescriptionCard2}
							alt={'Запись клиентов для мастера маникюра'}
							loading="lazy"
							className={styles.cardImg}
						/>
					</motion.div>
				</div>
				<div className={styles.card}>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
						}}
					>
						<Image
							src={DescriptionCard3}
							alt={'Аналитика бьюти бизнеса, как увеличить прибыль.'}
							loading="lazy"
							className={styles.cardImg}
						/>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
						}}
						className={styles.text}
					>
						<div className={styles.textWrap}>
							<h2>Клиентская база всегда под рукой</h2>
							<p>
								Полный контроль над клиентской базой в вашем смартфоне. Записи,
								контакты и история посещений — все в одном месте, доступно в
								пару касаний!
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default Description
