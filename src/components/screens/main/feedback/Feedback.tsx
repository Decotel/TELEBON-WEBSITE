import React, { FC, useEffect, useState } from 'react'
import styles from './Feedback.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import Image from 'next/image'
import { useFormik } from 'formik'
import Link from 'next/link'
import useMatchMedia from '@/hooks/useMatchMedia'
import FeedbackImage from '../../../../assets/icons/main/feedback/FeedbackImage.png'
import FeedbackImageMobile from '../../../../assets/icons/main/feedback/FeedbackImageMobile.png'
import { motion } from 'framer-motion'

export interface FormValues {
	email: string
	isValidForm: boolean
}

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
								alt={'Отзыв о онлайн-записи Telebon'}
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
							“Телебон это не просто хорошо. Это великолепно, я рекомендую.”
						</h3>
						<div className={styles.minus}></div>
						<p>Сергей Фадеев, Киров</p>
						<span>Владелец и преподаватель, абсолютный чемпион России</span>
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default Feedback
