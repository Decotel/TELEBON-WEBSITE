import React, { FC, useEffect, useState } from 'react'
import styles from './ForYou.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import Image from 'next/image'
import { useFormik } from 'formik'
import Link from 'next/link'
import useMatchMedia from '@/hooks/useMatchMedia'
import ForYouImage from '../../../../assets/icons/main/foryou/ForYouImage.png'
import ForYouImageMobile from '../../../../assets/icons/main/foryou/ForYouImageMobile.png'
import Card1 from '../../../../assets/icons/main/foryou/Card1.png'
import Card2 from '../../../../assets/icons/main/foryou/Card2.png'
import Card3 from '../../../../assets/icons/main/foryou/Card3.png'
import Card4 from '../../../../assets/icons/main/foryou/Card4.png'
import Card5 from '../../../../assets/icons/main/foryou/Card5.png'
import Card6 from '../../../../assets/icons/main/foryou/Card6.png'
import { motion } from 'framer-motion'

const ForYou: FC = () => {
	const isMobile = useMatchMedia('768')

	return (
		<div className={cn(styles.body, 'wrapper')}>
			<div className={styles.container}>
				<div className={styles.card}>
					<motion.div initial='hidden'
											whileInView='visible'
											viewport={{ once: true, amount: 0.3 }}
											transition={{ duration: 0.5 }}
											variants={{
												visible: { opacity: 1, y: 0 },
												hidden: { opacity: 0, y: isMobile ? '25vw' : '10vw' },
											}}
											className={styles.text}>
						<h3>Телебон для{isMobile ? null : <br />} вашего бизнеса</h3>
					</motion.div>
					{/*{isMobile ? <Image src={ForYouImageMobile} alt={''} /> : <Image src={ForYouImage} alt={''} />}*/}
					{isMobile ? (
						<div className={styles.column}>
							<motion.div initial='hidden'
													whileInView='visible'
													viewport={{ once: true, amount: 0.3 }}
													transition={{ duration: 0.5 }}
													variants={{
														visible: { opacity: 1, y: 0 },
														hidden: { opacity: 0, y: isMobile ? '25vw' : '10vw' },
													}}
													className={styles.row}>
								<div className={styles.small_card}>
									<Image src={Card1} alt={''} />
									<p>Барберы</p>
								</div>
								<div className={styles.small_card}>
									<Image src={Card2} alt={''} />
									<p>Студии</p>
								</div>
							</motion.div>
							<motion.div initial='hidden'
													whileInView='visible'
													viewport={{ once: true, amount: 0.3 }}
													transition={{ duration: 0.5 }}
													variants={{
														visible: { opacity: 1, y: 0 },
														hidden: { opacity: 0, y: isMobile ? '25vw' : '10vw' },
													}}
													className={styles.row}>
								<div className={styles.small_card}>
									<Image src={Card3} alt={''} />
									<p>Мастера</p>
								</div>
								<div className={styles.small_card}>
									<Image src={Card4} alt={''} />
									<p>Салоны</p>
								</div>
							</motion.div>
							<motion.div initial='hidden'
													whileInView='visible'
													viewport={{ once: true, amount: 0.3 }}
													transition={{ duration: 0.5 }}
													variants={{
														visible: { opacity: 1, y: 0 },
														hidden: { opacity: 0, y: isMobile ? '25vw' : '10vw' },
													}}
													className={styles.small_card}>
								<Image src={Card5} alt={''} />
								<p>Бровисты</p>
							</motion.div>
							<motion.div initial='hidden'
													whileInView='visible'
													viewport={{ once: true, amount: 0.3 }}
													transition={{ duration: 0.5 }}
													variants={{
														visible: { opacity: 1, y: 0 },
														hidden: { opacity: 0, y: isMobile ? '25vw' : '10vw' },
													}}
													className={styles.small_card}>
								<Image src={Card6} alt={''} />
								<p>Посмотреть всё</p>
							</motion.div>
						</div>
					) : (
						<div className={styles.column}>
							<motion.div initial='hidden'
													whileInView='visible'
													viewport={{ once: true, amount: 0.3 }}
													transition={{ duration: 0.5 }}
													variants={{
														visible: { opacity: 1, y: 0 },
														hidden: { opacity: 0, y: isMobile ? '25vw' : '10vw' },
													}}
													className={styles.row}>
								<div className={styles.small_card}>
									<Image src={Card1} alt={''} />
									<p>Барберы</p>
								</div>
								<div className={styles.small_card}>
									<Image src={Card2} alt={''} />
									<p>Студии</p>
								</div>
								<div className={styles.small_card}>
									<Image src={Card3} alt={''} />
									<p>Мастера</p>
								</div>
							</motion.div>
							<motion.div initial='hidden'
													whileInView='visible'
													viewport={{ once: true, amount: 0.3 }}
													transition={{ duration: 0.5 }}
													variants={{
														visible: { opacity: 1, y: 0 },
														hidden: { opacity: 0, y: isMobile ? '25vw' : '10vw' },
													}}
													className={styles.row}>
								<div className={styles.small_card}>
									<Image src={Card4} alt={''} />
									<p>Салоны</p>
								</div>
								<div className={styles.small_card}>
									<Image src={Card5} alt={''} />
									<p>Бровисты</p>
								</div>
								<div className={styles.small_card}>
									<Image src={Card6} alt={''} />
									<p>Посмотреть всё</p>
								</div>
							</motion.div>
						</div>)}
				</div>
			</div>
		</div>
	)
}

export default ForYou
