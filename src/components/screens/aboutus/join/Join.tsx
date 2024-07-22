import React, { FC, useEffect, useState } from 'react'
import styles from './Join.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import Image from 'next/image'
import { useFormik } from 'formik'
import Link from 'next/link'
import useMatchMedia from '@/hooks/useMatchMedia'
import JoinImage from '../../../../assets/icons/aboutus/join/JoinImage.png'
import FeedbackImageMobile from '../../../../assets/icons/main/feedback/FeedbackImageMobile.png'
import { motion } from 'framer-motion'

const Join: FC = () => {
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
						<h3>
							Присоединяйтесь к <br />
							профессионалам
						</h3>
						<p>
							Более 3000 специалистов по всей России уже <br />
							выбрали и используют Телебон повседневно. <br />
							Подключайтесь к нашему комьюнити и <br />
							давайте вместе строить и развивать бизнес в <br />
							сфере услуг в России.
						</p>
						<Link
							href={'https://lk.telebon.ru/registration'}
							target={'_blank'}
							style={{ alignSelf: isMobile ? 'center' : 'flex-start' }}
						>
							<button>Начать бесплатно</button>
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
						<Image
							src={JoinImage}
							alt={'Онлайн-запись клиентов, система учёта "Telebon"'}
						/>
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default Join
