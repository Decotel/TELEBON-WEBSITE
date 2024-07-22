import React, { FC } from 'react'
import styles from './Start.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import useMatchMedia from '@/hooks/useMatchMedia'
import Start1 from '../../../../assets/icons/main/starti/Start1.png'
import Start2 from '../../../../assets/icons/main/starti/Start2.png'
import Start3 from '../../../../assets/icons/main/starti/Start3.png'
import { motion } from 'framer-motion'

const Start: FC = () => {
	const isMobile = useMatchMedia('768')

	return (
		<div className={cn(styles.body, 'wrapper')}>
			<div className={styles.up}>
				<h3>Легко начать</h3>
			</div>
			<div className={styles.container}>
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
					<Image
						src={Start1}
						alt={'Профиль салона и мастера в система учета клиентов'}
					/>
					<div className={styles.text}>
						<p>1. Заполните профиль</p>
						<span>
							Начните бесплатно, без каких либо <br />
							обязательств. Вы сможете начать работу {isMobile ? <br /> : null}
							менее
							{isMobile ? null : <br />} чем за 5 минут.
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
					<Image src={Start2} alt={'Ссылка на запись для клиентов'} />
					<div className={styles.text}>
						<p>2. Поделитесь ссылкой</p>
						<span>
							Сообщите своим клиентам о новой ссылке{isMobile ? <br /> : null}{' '}
							для {isMobile ? null : <br />}записи, разместите ее в социальных{' '}
							{isMobile ? <br /> : null}сетях. Бота {isMobile ? null : <br />}
							онлайн-записи можно добавить {isMobile ? <br /> : null}в чат или
							группу.
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
					<Image src={Start3} alt={'Модуль Онлайн-записи клиентов на услуги'} />
					<div className={styles.text}>
						<p>3. Начните получать записи</p>
						<span>
							Клиенты могут начать бронирование в {isMobile ? <br /> : null}тот
							же {isMobile ? null : <br />}день, что избавляет от{' '}
							{isMobile ? <br /> : null}бесконечного общения.
						</span>
					</div>
				</motion.div>
			</div>
		</div>
	)
}

export default Start
