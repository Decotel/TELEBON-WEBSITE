import React, { FC, useLayoutEffect, useRef, useState } from 'react'
import styles from './Accordion.module.scss'
import cn from 'classnames'
import useMatchMedia from '@/hooks/useMatchMedia'
import { motion } from 'framer-motion'
import { EIcons, Icon } from '../../../../../assets/icons/icon'
import Link from 'next/link'
import { formatDescription } from '@/screens/posts/post/home/Home'
import { ComponentPageFaq } from '@/screens/posts/interfaces'

interface AccordionProps {
	data: ComponentPageFaq
}

export type Height = 'auto' | number | `${number}%`

const Accordion: FC<AccordionProps> = ({ data }) => {
	const isMobile = useMatchMedia('768')
	const [activeIndices, setActiveIndices] = useState<Height[]>([])
	const [heights, setHeights] = useState<number[]>([])
	const contentRefs = useRef<(HTMLDivElement | null)[]>([])

	const toggleAccordion = (index: number) => {
		setActiveIndices(prev =>
			prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index],
		)
	}

	// useLayoutEffect(() => {
	// 	const resizeObservers: ResizeObserver[] = contentRefs.current
	// 		.map((ref, index) => {
	// 			if (ref) {
	// 				const observer = new ResizeObserver(() => {
	// 					setHeights(prevHeights => {
	// 						const newHeights = [...prevHeights]
	// 						newHeights[index] = ref.scrollHeight
	// 						return newHeights
	// 					})
	// 				})
	// 				observer.observe(ref)
	// 				return observer
	// 			}
	// 			return null
	// 		})
	// 		.filter((observer): observer is ResizeObserver => observer !== null)

	// 	return () => {
	// 		resizeObservers.forEach(observer => observer.disconnect())
	// 	}
	// }, [data])

	useLayoutEffect(() => {
		const updateHeights = () => {
			contentRefs.current.forEach((ref, index) => {
				if (ref) {
					const contentHeight = ref.scrollHeight

					const paddingTop = (3.125 / 100) * window.innerWidth
					const paddingBottom = (1.0417 / 100) * window.innerWidth

					setHeights(prevHeights => {
						const newHeights = [...prevHeights]
						newHeights[index] = contentHeight + paddingTop + paddingBottom
						return newHeights
					})
				}
			})
		}

		// Пересчитываем высоту при первой загрузке
		updateHeights()

		// Пересчитываем высоту при изменении размера окна
		window.addEventListener('resize', updateHeights)

		return () => {
			window.removeEventListener('resize', updateHeights)
		}
	}, [data])

	const heightVariants = data.Faq_card.map((_, index) => ({
		visible: {
			height: heights[index] || 'auto',
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
				{data.Faq_card.map((item, index) => (
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
							<h4>{item.Question}</h4>
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
							initial={{ height: 0, padding: '0' }}
							animate={{
								height: activeIndices.includes(index) ? heights[index] : 0,
								padding: activeIndices.includes(index)
									? '3.125vw 0 1.0417vw'
									: '0',
							}}
							transition={{ duration: 0.5, ease: 'easeInOut' }}
							className={styles.accordionContent}
							ref={el => {
								contentRefs.current[index] = el
								if (el && !heights[index]) {
									const contentHeight = el.scrollHeight

									const paddingTop = (3.125 / 100) * window.innerWidth
									const paddingBottom = (1.0417 / 100) * window.innerWidth

									setHeights(prev => {
										const newHeights = [...prev]
										newHeights[index] =
											contentHeight + paddingTop + paddingBottom
										return newHeights
									})
								}
							}}
						>
							{formatDescription(item.Answer)}
						</motion.div>
					</motion.div>
				))}
				<div className={styles.buttons}>
					<Link href={'https://lk.telebon.ru/auth'} target={'_blank'}>
						<button className={styles.black} aria-labelledby="Регистрация">
							Регистрация
						</button>
					</Link>
					<Link href={'https://lk.telebon.ru/auth'} target={'_blank'}>
						<button aria-labelledby="Войти">Войти</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Accordion
