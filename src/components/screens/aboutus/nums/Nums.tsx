import React, { FC, useEffect, useState } from 'react'
import styles from './Nums.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import Image from 'next/image'
import { useFormik } from 'formik'
import Link from 'next/link'
import useMatchMedia from '@/hooks/useMatchMedia'
import Card1 from '../../../../assets/icons/aboutus/nums/NumsCard1.png'
import Card2 from '../../../../assets/icons/aboutus/nums/NumsCard2.png'
import Card3 from '../../../../assets/icons/aboutus/nums/NumsCard3.png'
import Card4 from '../../../../assets/icons/aboutus/nums/NumsCard4.png'
import CardMobile1 from '../../../../assets/icons/aboutus/nums/NumsCardMobile1.png'
import CardMobile2 from '../../../../assets/icons/aboutus/nums/NumsCardMobile2.png'
import CardMobile3 from '../../../../assets/icons/aboutus/nums/NumsCardMobile3.png'
import CardMobile4 from '../../../../assets/icons/aboutus/nums/NumsCardMobile4.png'
import { motion } from 'framer-motion'

const Nums: FC = () => {
	const isMobile = useMatchMedia('768')

	return (
		<div className={cn(styles.body, 'wrapper')}>
			<div className={styles.container}>
				<div className={styles.column}>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '25vw' : '10vw' },
						}}
					>
						<p
							style={{
								textAlign: 'center',
								marginBottom: isMobile ? '12.3077vw' : '7.5vw',
							}}
						>
							Говорят помогать трудно.
							<br />
							Мы делаем это легко.
						</p>
					</motion.div>
					<div className={styles.row}>
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
							{isMobile ? (
								<Image src={CardMobile1} alt={''} />
							) : (
								<Image
									src={Card1}
									alt={'Служба поддержки мастеров и салонов'}
								/>
							)}
							<div className={styles.text}>
								<p>
									24/7
									<br />
									живой чат
								</p>
								<span>
									Служба поддержки {isMobile ? <br /> : null}ответит вам за 5{' '}
									{isMobile ? null : <br />}минут
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
							{isMobile ? (
								<Image src={CardMobile2} alt={''} />
							) : (
								<Image
									src={Card2}
									alt={'Помощь при работе с клиентами в бьюти-сфере'}
								/>
							)}
							<div className={styles.text}>
								<p>
									Поддержка в <br />
									мессенджерах
								</p>
								<span>
									Отвечаем в WA, TG, VK {isMobile ? <br /> : null}и{' '}
									{isMobile ? null : <br />}даже по почте
								</span>
							</div>
						</motion.div>
					</div>
					<div className={styles.row}>
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
							{isMobile ? (
								<Image src={CardMobile3} alt={''} />
							) : (
								<Image
									src={Card3}
									alt={'Внедрение CRM система для бьюти-сферы'}
								/>
							)}
							<div className={styles.text}>
								<p>
									Эксперт для <br />
									быстрого <br />
									внедрения
								</p>
								<span>
									Настроит сервис {isMobile ? <br /> : null}под ваши задачи
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
							{isMobile ? (
								<Image src={CardMobile4} alt={''} />
							) : (
								<Image src={Card4} alt={'Перенос клиентской базы в Телебон'} />
							)}
							<div className={styles.text}>
								<p>
									Перенос <br />
									данных
								</p>
								<span>
									Бесплатно и абсолютно {isMobile ? <br /> : null}безопасно
									{isMobile ? null : <br />} перенесем{' '}
									{isMobile ? <br /> : null}
									все ваши данные в <br />
									аккаунт Телебон
								</span>
							</div>
						</motion.div>
					</div>
					<Link
						href={'https://lk.telebon.ru/registration'}
						target={'_blank'}
						style={{ zIndex: '2' }}
					>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: isMobile ? '25vw' : '10vw' },
							}}
							style={{
								width: '100%',
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							<button>Начать бесплатно</button>
						</motion.div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Nums
