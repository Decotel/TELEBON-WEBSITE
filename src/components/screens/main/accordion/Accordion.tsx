import React, { FC, useState } from 'react'
import styles from './Accordion.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import useMatchMedia from '@/hooks/useMatchMedia'
import Start1 from '../../../../assets/icons/main/starti/Start1.png'
import Start2 from '../../../../assets/icons/main/starti/Start2.png'
import Start3 from '../../../../assets/icons/main/starti/Start3.png'
import { motion } from 'framer-motion'
import { EIcons, Icon } from '../../../../assets/icons/icon'
import Link from 'next/link'

const Accordion: FC = () => {
	const isMobile = useMatchMedia('768')
	const [activeIndices, setActiveIndices] = useState<number[]>([])

	const toggleAccordion = (index: number) => {
		setActiveIndices(prev =>
			prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index],
		)
	}

	const questions = [
		{
			question: 'Что такое Telebon?',
			answer: (
				<p>
					<span>Telebon CRM</span> - сервис онлайн-записи клиентов и
					автоматизации бизнес-процессов для специалистов и компаний в сфере
					услуг.
				</p>
			),
		},
		{
			question: 'Как работает онлайн-запись?',
			answer: (
				<p>
					Онлайн-запись создана для <span>удобства</span> записи{' '}
					<span>клиента</span> на услуги и для
					<span>снижения нагрузки</span> на <span>мастера</span>. Клиент
					самостоятельно может выбрать мастера, услугу, время и дату проведения
					услуги. Автоматические уведомления оповещают клиента и мастера о
					записи.
				</p>
			),
		},
		{
			question: 'Что такое Telegram-бот от Telebon?',
			answer: (
				<p>
					<span>Telegram-бот</span> – новый вариант онлайн-записи клиентов на
					услуги, разработанный нашей платформой. Бот поможет выбрать услугу и
					мастера, уведомит клиента о записи в нужное время, останется в списке
					чатов клиента в Telegram. Это <span>уникальный инструмент</span>,
					который можно персонализировать на свой вкус.
				</p>
			),
		},
		{
			question: 'Для кого подойдет Telebon?',
			answer: (
				<p>
					Частным мастерам beauty-индустрии и салонам красоты, медицинским
					работникам частной практики, тренерам и преподавателям с возможностью
					<span>групповых</span> (от 2-х человек) и <span>индивидуальных</span>{' '}
					записей.
				</p>
			),
		},
	]

	const heightVariants = questions.map((_, index) => ({
		visible: {
			height: `${
				index === 0
					? isMobile
						? '20.3'
						: '6.875'
					: index === 1
						? isMobile
							? '41.9'
							: '9.4989'
						: index === 2
							? isMobile
								? '42'
								: '9.53125'
							: index === 3
								? isMobile
									? '30.5'
									: '8.1771'
								: '10'
			}vw`,
			padding: '3.125vw 0 1.0417vw',
		},
		hidden: { height: 0, padding: '0' },
	}))

	return (
		<div className={cn(styles.body, 'wrapper')}>
			<div className={styles.up}>
				<h3>Часто задаваемые {isMobile ? null : <br />}вопросы</h3>
			</div>
			<div className={styles.container}>
				{questions.map((item, index) => (
					<motion.div
						key={index}
						className={styles.accordionItem}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '25vw' : '10vw' },
						}}
					>
						<div
							className={styles.accordionHeader}
							onClick={() => toggleAccordion(index)}
						>
							<h4>{item.question}</h4>
							<motion.div
								initial="hidden"
								animate={activeIndices.includes(index) ? 'visible' : 'hidden'}
								transition={{ duration: 0.5 }}
								variants={{
									visible: { rotate: '200grad' },
									hidden: { rotate: 0 },
								}}
							>
								<Icon name={EIcons.triangle} />
							</motion.div>
						</div>
						<motion.div
							initial="hidden"
							animate={activeIndices.includes(index) ? 'visible' : 'hidden'}
							transition={{ duration: 0.5 }}
							variants={heightVariants[index]}
							className={styles.accordionContent}
						>
							{item.answer}
						</motion.div>
					</motion.div>
				))}
				<div className={styles.buttons}>
					<Link href={'https://lk.telebon.ru/registration'} target={'_blank'}>
						<button className={styles.black}>Регистрация</button>
					</Link>
					<Link href={'https://lk.telebon.ru/auth'} target={'_blank'}>
						<button>Войти</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Accordion
