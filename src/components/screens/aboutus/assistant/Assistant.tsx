import React, { FC, useState } from 'react'
import styles from './Assistant.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import useMatchMedia from '@/hooks/useMatchMedia'
import { motion } from 'framer-motion'

const Assistant: FC = () => {
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
						<h3>Вы работаете на себя, </h3>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
						}}
					>
						<h3>а мы - ваш личный {isMobile ? <br /> : null}ассистент</h3>
					</motion.div>
				</div>
				<div className={styles.map}>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						variants={{
							visible: { opacity: 1 },
							hidden: { opacity: 0 },
						}}
						className={styles.point}
					>
						<IconInstance name={EIcons.assistantplus} />
						{isMobile ? null : <p>Готовое решение для ресепшена</p>}
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						variants={{
							visible: { opacity: 1 },
							hidden: { opacity: 0 },
						}}
						className={styles.point}
					>
						<IconInstance name={EIcons.assistantplus} />
						{isMobile ? null : <p>Приложение Telebon</p>}
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						variants={{
							visible: { opacity: 1 },
							hidden: { opacity: 0 },
						}}
						className={styles.point}
					>
						<IconInstance name={EIcons.assistantplus} />
						{isMobile ? null : <p>Онлайн-запись 24/7</p>}
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						variants={{
							visible: { opacity: 1 },
							hidden: { opacity: 0 },
						}}
						className={styles.point}
					>
						<IconInstance name={EIcons.assistantplus} />
						{isMobile ? null : <p>Учёт финансов</p>}
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default Assistant
