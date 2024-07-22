import React, { FC, useEffect, useState } from 'react'
import styles from './Feedback.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import Image from 'next/image'
import { useFormik } from 'formik'
import Link from 'next/link'
import useMatchMedia from '@/hooks/useMatchMedia'
import FeedbackImage from '../../../../assets/icons/aboutus/feedback/FeedbackImage.png'
import FeedbackImageMobile from '../../../../assets/icons/aboutus/feedback/FeedbackImageMobile.png'
import { motion } from 'framer-motion'

const Feedback: FC = () => {
	const isMobile = useMatchMedia('768')

	return (
		<div className={cn(styles.body, 'wrapper')}>
			<div className={styles.container}>
				<div className={styles.card}>
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
							<Image src={FeedbackImageMobile} alt={''} />
						) : (
							<Image
								src={FeedbackImage}
								alt={
									'Отзыв барбера, о системе записи клиентов через Telegram ботов'
								}
							/>
						)}
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
						className={styles.text}
					>
						<h3>
							“Телебон изменил мой {isMobile ? <br /> : null}рабочий{' '}
							{isMobile ? null : <br />}
							график, я {isMobile ? <br /> : null}настроил режим работы{' '}
							{isMobile ? <br /> : null}и{isMobile ? null : <br />} выставил{' '}
							{isMobile ? <br /> : null}интервальную онлайн-
							<br />
							запись в Телеграм боте. {isMobile ? <br /> : null}Клиенты{' '}
							{isMobile ? null : <br />}
							довольны, {isMobile ? <br /> : null}решение удобное и{' '}
							{isMobile ? <br /> : null}очень в{isMobile ? null : <br />} ногу
							со {isMobile ? <br /> : null}временем, всем зашло.”
						</h3>
						<div className={styles.minus}></div>
						<p>Вячеслав, Барбершоп Souz</p>
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default Feedback
