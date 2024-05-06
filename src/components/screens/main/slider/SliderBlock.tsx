import React, { FC, useRef } from 'react'
import styles from './SliderBlock.module.scss'
import cn from 'classnames'
import SliderItem from '@/screens/main/slider/item/SliderItem'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { propoData } from '@/screens/main/slider/propo-data'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'

export interface ICard {
	icon: React.ReactNode
	title: string
	image: React.ReactNode
}

const SliderBlock: FC = () => {
	const arrowRef = useRef(null)
	const settings = {
		dots: false,
		infinite: true,
		speed: 350,
		slidesToShow: 6,
		slidesToScroll: 1,
		swipeToSlide: true,
		arrows: false,
	}

	const cardDisc = propoData?.map((item, i) => (
		<SliderItem item={item} key={i} />
	))
	return (
		<div className={cn(styles.base, 'wrapper')}>
			<div className={styles.main_container}>
				<div className={styles.text}>
					<h2>
						Для кого
						<br /> <span>идеально подходит</span>
					</h2>
					<div className={styles.tp}>
						<p>
							Программа для компаний и частных
							<br /> специалистов в любой сфере услуг
						</p>
						<div
							className={styles.switch}
							onClick={() => {
								if (arrowRef && arrowRef.current) {
									//@ts-ignore
									arrowRef.current.slickNext()
								}
							}}
						>
							<IconInstance name={EIcons.buttonarrowright} />
						</div>
					</div>
				</div>
				<div className={styles.slider_container}>
					<Slider {...settings} ref={arrowRef}>
						{cardDisc}
					</Slider>
				</div>
				<div className={styles.line}></div>
			</div>
		</div>
	)
}

export default SliderBlock
