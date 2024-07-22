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
			question: 'Сколько стоит лицензия Телебон?',
			answer: (
				<p>
					Система Телебон имеет два тарифа: <span>“Пробный”</span> и{' '}
					<span>“Базовый”</span>. “Пробный” тариф является{' '}
					<span>бесплатным</span> и действует 14 дней. “Базовый” тариф является
					платным. Лицензия на тариф стоит <span>10 рублей в день</span> за весь
					функционал <span>на одного сотрудника</span>.
				</p>
			),
		},
		{
			question: 'Что входит в стоимость лицензии Телебон?',
			answer: (
				<p>
					В стоимость лицензии <span>входит весь функционал системы</span>:
					записи и календарь, сотрудники и расписание, учёт ресурсов, статистика
					и отчеты, онлайн-запись с персональным Телеграм-ботом и учёт финансов,
					и многое другое.
				</p>
			),
		},
		{
			question: 'Как работает пробный период?',
			answer: (
				<p>
					У Вас будет <span>14-дневный пробный период</span>, с возможностью
					ознакомиться и попробовать весь функционал системы. Пробный тариф
					доступен всем пользователям сразу после регистрации в системе. По
					истечение срока пробного периода, автоматически будет включено
					действие тарифа. Вы не несёте никаких обязательств, поэтому{' '}
					<span>продление действия лицензии</span> является исключительно Вашим
					правом.
				</p>
			),
		},
		{
			question: 'Как происходит расчёт лицензии?',
			answer: (
				<p>
					Стоимость лицензии составляет{' '}
					<span>10 рублей в день за одного сотрудника</span>. Пополнить баланс
					можно на любую сумму в любое время, списание происходит ежедневно.
					<span>Пример</span>: Частный специалист, является{' '}
					<span>единственным сотрудником</span>, стоимость для него{' '}
					<span>10 рублей в день</span>. Если работает{' '}
					<span>3 мастера и 1 администратор</span>, то компания платит{' '}
					<span>40 рублей в день</span>.
				</p>
			),
		},
		{
			question: 'Как можно отменить действие лицензии?',
			answer: (
				<p>
					<span>Окончание</span> действия лицензии происходит автоматически по
					истечении денежных средств на балансе пользователя. Если вы хотите
					отключить тариф, никаких дополнительных действий не потребуется.
				</p>
			),
		},
		{
			question: 'Есть ли скрытые платежи или комиссии?',
			answer: (
				<p>
					Никаких скрытых сюрпризов. Команда Телебон ориентирована на построение
					<span>долгосрочных</span>, <span>честных</span> и{' '}
					<span>доверительных</span> отношений с нашими пользователями.
				</p>
			),
		},
		{
			question: 'Какая стоимость подключения бота для Онлайн-записи?',
			answer: (
				<p>
					<span>Подключение и хостинг Телеграм бота</span> - 0 руб на 2 года.
					Доступно всех для новых пользователей до 01.09.2024 г., включительно.
					Все подключенные боты в этот период будут обслуживаться в дальнейшем
					БЕСПЛАТНО. После истечения 01.09.2024, подключение модули станет
					платным.
				</p>
			),
		},
	]

	const heightVariants = questions.map((_, index) => ({
		visible: {
			height: `${
				index === 0
					? isMobile
						? '37.5'
						: '8.1771'
					: index === 1
						? isMobile
							? '38'
							: '9.4792'
						: index === 2
							? isMobile
								? '60'
								: '10.8333'
							: index === 3
								? isMobile
									? '55'
									: '9.53125'
								: index === 4
									? isMobile
										? '31'
										: '8.1771'
									: index === 5
										? isMobile
											? '30.5'
											: '7.1875'
										: index === 6
											? isMobile
												? '44'
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
						viewport={{ once: true, amount: isMobile ? 0.3 : 0 }}
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
