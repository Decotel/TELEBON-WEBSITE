import React, { FC } from 'react'
import styles from './Unique.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import useMatchMedia from '@/hooks/useMatchMedia'
import Start1 from '../../../../assets/icons/main/starti/Start1.png'
import Start2 from '../../../../assets/icons/main/starti/Start2.png'
import Start3 from '../../../../assets/icons/main/starti/Start3.png'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Unique: FC = () => {
	const isMobile = useMatchMedia('768')

	return (
		<div className={cn(styles.body, 'wrapper')}>
			<div className={styles.up}>
				<h3>Что нас {isMobile ? <br /> : null}отличает</h3>
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
					<div className={styles.circle}>01</div>
					<div className={styles.text}>
						<p>Все включено, единая прозрачная цена</p>
						<span>
							Мы верим, что все мастера и салоны {isMobile ? <br /> : null}в
							сфере {isMobile ? null : <br />}
							услуг заслуживают доступа к {isMobile ? (
								<br />
							) : null}необходимым {isMobile ? null : <br />}
							инструментам для {isMobile ? <br /> : null}работы со всеми
							доступными <br />
							функциями - по единой, низкой цене.
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
					<div className={styles.circle}>02</div>
					<div className={styles.text}>
						<p>Открыты к новым вызовам</p>
						<span>
							За 2024 год реализовали более 20 {isMobile ? <br /> : null}
							функций, {isMobile ? null : <br />}
							которые наши {isMobile ? <br /> : null}пользователи предлагают для{' '}
							<br />
							удобства и развития системы.
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
					<div className={styles.circle}>03</div>
					<div className={styles.text}>
						<p>
							Ценим ваших клиентов и {isMobile ? <br /> : null}ваше{' '}
							{isMobile ? null : <br />}время
						</p>
						<span>
							Мы разрабатываем систему с {isMobile ? <br /> : null}максимальным{' '}
							{isMobile ? null : <br />}
							упором на удобство {isMobile ? <br /> : null}и простоту
							взаимодействия. {isMobile ? null : <br />}
							Более {isMobile ? <br /> : null}3000 мастеров уже оценили это.
						</span>
					</div>
				</motion.div>
			</div>
			<Link href={'https://lk.telebon.ru/registration'} target={'_blank'}>
				<button>Начать бесплатно</button>
			</Link>
		</div>
	)
}

export default Unique
