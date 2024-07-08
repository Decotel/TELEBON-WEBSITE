import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './Functions.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import Image from 'next/image'
import { useFormik } from 'formik'
import Link from 'next/link'
import useMatchMedia from '@/hooks/useMatchMedia'
import FeedbackImage from '../../../../assets/icons/feedback/FeedbackImage.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SliderItem from '@/screens/main/functions/item/SliderItem'
import Slider1 from '../../../../assets/icons/functions/Function1.png'
import { motion } from 'framer-motion'

export interface ICard {
	description: React.ReactNode
	title: React.ReactNode
	image: React.ReactNode
}

const Functions: FC = () => {
	const isMobile = useMatchMedia('768')
	const arrowRef = useRef(null)
	const settings = {
		dots: true,
		infinite: true,
		speed: 350,
		slidesToShow: 2,
		slidesToScroll: 1,
		swipeToSlide: true,
		arrows: false,
	}

	const propoData = [
		{
			title: (
				<>
					Календарь <br />и Записи
				</>
			),
			description: (isMobile ? (<>Оптимизируйте ваше рабочее время, контролируйте поступающие записи от клиентов. Журнал
				записи, который подстроится под вас.</>) : (<>Оптимизируйте ваше рабочее время, сохраняйте полный контроль над
				расписанием. Контролируйте поступающие записи от клиентов. Журнал записи, который подстроится под вас.</>)),
			image: <Image src={Slider1} alt={''} />,
		},
		{
			title: (
				<>
					Календарь <br />и Записи
				</>
			),
			description: (isMobile ? (<>Оптимизируйте ваше рабочее время, контролируйте поступающие записи от клиентов. Журнал
				записи, который подстроится под вас.</>) : (<>Оптимизируйте ваше рабочее время, сохраняйте полный контроль над
				расписанием. Контролируйте поступающие записи от клиентов. Журнал записи, который подстроится под вас.</>)),
			image: <Image src={Slider1} alt={''} />,
		},
		{
			title: (
				<>
					Календарь <br />и Записи
				</>
			),
			description: (isMobile ? (<>Оптимизируйте ваше рабочее время, контролируйте поступающие записи от клиентов. Журнал
				записи, который подстроится под вас.</>) : (<>Оптимизируйте ваше рабочее время, сохраняйте полный контроль над
				расписанием. Контролируйте поступающие записи от клиентов. Журнал записи, который подстроится под вас.</>)),
			image: <Image src={Slider1} alt={''} />,
		},
		{
			title: (
				<>
					Календарь <br />и Записи
				</>
			),
			description: (isMobile ? (<>Оптимизируйте ваше рабочее время, контролируйте поступающие записи от клиентов. Журнал
				записи, который подстроится под вас.</>) : (<>Оптимизируйте ваше рабочее время, сохраняйте полный контроль над
				расписанием. Контролируйте поступающие записи от клиентов. Журнал записи, который подстроится под вас.</>)),
			image: <Image src={Slider1} alt={''} />,
		},
	]


	const cardDisc = propoData?.map((item, i) => (
		<SliderItem item={item} key={i} index={i} />
	))

	return (
		<div className={cn(styles.body, 'wrapper')}>
			<div className={styles.container}>
				<motion.div initial='hidden'
										whileInView='visible'
										viewport={{ once: true }}
										transition={{ duration: 0.5 }}
										variants={{
											visible: { opacity: 1, y: 0 },
											hidden: { opacity: 0, y: '5vw' },
										}}
										className={styles.text}>
					<p>Основные функции</p>
					<span>Запись на услуги, финансовый учёт, аналитика по посещениям
						клиентов. Отчеты и инструменты для роста вашего бизнеса</span>
				</motion.div>
				<motion.div initial='hidden'
										whileInView='visible'
										viewport={{ once: true }}
										transition={{ duration: 0.45 }}
										variants={{
											visible: { opacity: 1, y: 0 },
											hidden: { opacity: 0, y: '5vw' },
										}}
										className={styles.slider_container}>
					<Slider {...settings} ref={arrowRef}>
						{cardDisc}
					</Slider>
					<div
						className={styles.switch}
						onClick={() => {
							if (arrowRef && arrowRef.current) {
								//@ts-ignore
								arrowRef.current.slickNext()
							}
						}}
					>
						<IconInstance name={EIcons.buttonarrowrightblack} />
					</div>
					<div className={styles.gradient}></div>
				</motion.div>
			</div>
		</div>
	)
}

export default Functions
