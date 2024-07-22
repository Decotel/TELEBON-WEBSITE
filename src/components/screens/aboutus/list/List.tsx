import React, { FC, useState } from 'react'
import styles from './List.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import useMatchMedia from '@/hooks/useMatchMedia'
import Image from 'next/image'
import Phone from '../../../../assets/icons/aboutus/list/ListPhone.png'
import { motion } from 'framer-motion'
import Link from 'next/link'

const List: FC = () => {
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
						<h3>
							Ваш бизнес строится {isMobile ? <br /> : null}на отношениях.
						</h3>
					</motion.div>
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
						<h3>Мы поможем их укрепить</h3>
					</motion.div>
				</div>
				<div className={styles.row}>
					<div className={styles.column}>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
							}}
							className={styles.item}
						>
							<IconInstance name={EIcons.listmark} />
							<p>Простая запись для клиентов</p>
						</motion.div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
							}}
							className={styles.item}
						>
							<IconInstance name={EIcons.listmark} />
							<p>Автоматизация процессов</p>
						</motion.div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
							}}
							className={styles.item}
						>
							<IconInstance name={EIcons.listmark} />
							<p>Сохранение заметок по клиентам</p>
						</motion.div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
							}}
							className={styles.item}
						>
							<IconInstance name={EIcons.listmark} />
							<p>Напоминания о записях</p>
						</motion.div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
							}}
							className={styles.item}
						>
							<IconInstance name={EIcons.listmark} />
							<p>Личный бот для клиентов</p>
						</motion.div>
						<Link href={'https://lk.telebon.ru/registration'} target={'_blank'}>
							<button>Начать бесплатно</button>
						</Link>
					</div>
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
						<Image src={Phone} alt={'Профиль мастера бьюти сферы'} />
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default List
