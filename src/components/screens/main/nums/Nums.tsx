import React, { FC, useEffect, useState } from 'react'
import styles from './Nums.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import Image from 'next/image'
import { useFormik } from 'formik'
import Link from 'next/link'
import useMatchMedia from '@/hooks/useMatchMedia'
import Card1 from '../../../../assets/icons/main/nums/NumsCard1.png'
import Card2 from '../../../../assets/icons/main/nums/NumsCard2.png'
import Card3 from '../../../../assets/icons/main/nums/NumsCard3.png'
import Card4 from '../../../../assets/icons/main/nums/NumsCard4.png'
import CardMobile1 from '../../../../assets/icons/main/nums/NumsCardMobile1.png'
import CardMobile2 from '../../../../assets/icons/main/nums/NumsCardMobile2.png'
import CardMobile3 from '../../../../assets/icons/main/nums/NumsCardMobile3.png'
import CardMobile4 from '../../../../assets/icons/main/nums/NumsCardMobile4.png'
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
						<p style={{ paddingLeft: isMobile ? '5.1282vw' : '0' }}>В цифрах</p>
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
								<Image src={Card1} alt={'Запись к мастеру маникюра Телебон'} />
							)}
							<div className={styles.text}>
								<p>
									Более 3000+
									<br />
									мастеров
								</p>
								<span>
									по всей России{isMobile ? <br /> : null} доверяют Телебон
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
								<Image src={Card2} alt={'Запись к мастеру бровисту Telebon'} />
							)}
							<div className={styles.text}>
								<p>
									10 млн +<br />
									записей
								</p>
								<span>
									создано нашими{isMobile ? <br /> : null} пользователями
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
								<Image src={Card3} alt={'Запись в барбершоп онлайн'} />
							)}
							<div className={styles.text}>
								<p>
									33% создано
									<br />
									онлайн
								</p>
								<span>
									на сайте{isMobile ? <br /> : null} и в Telegram ботах
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
								<Image src={Card4} alt={'Онлайн запись для парикмахера'} />
							)}
							<div className={styles.text}>
								<p>
									25% рост
									<br />
									конверсии
								</p>
								<span>
									после запуска модуля{isMobile ? <br /> : null} Telegram
								</span>
							</div>
						</motion.div>
					</div>
					<Link
						href={'https://lk.telebon.ru/registration'}
						target={'_blank'}
						style={{ alignSelf: 'center' }}
					>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.3 }}
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
