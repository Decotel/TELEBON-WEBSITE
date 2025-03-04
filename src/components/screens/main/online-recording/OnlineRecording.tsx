import { motion } from 'framer-motion'
import { FC, useRef } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import styles from './OnlineRecording.module.scss'
import useMatchMedia from '@/hooks/useMatchMedia'
import OnlineRecordingImg1 from '../../../../assets/icons/main/online-recording/OnlineRecording1.webp'
import OnlineRecordingImg2 from '../../../../assets/icons/main/online-recording/OnlineRecording2.webp'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const OnlineRecording: FC = () => {
	const isMobile = useMatchMedia('768')
	const arrowRef = useRef(null)
	const settings = {
		dots: true,
		infinite: false,
		speed: 350,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
		arrows: false,
		touchThreshold: 1000,
	}
	const propoData = [
		{
			image: (
				<Image
					src={OnlineRecordingImg1}
					alt={'Онлайн-запись Telebon'}
					loading="lazy"
				/>
			),
		},
		{
			image: (
				<Image
					src={OnlineRecordingImg2}
					alt={'Онлайн-запись Telebon'}
					loading="lazy"
				/>
			),
		},
	]

	const cardDisc = propoData?.map((item, i) => (
		<div key={i} className={styles.base}>
			{item.image}
		</div>
	))

	return (
		<div className={cn(styles.body, 'wrapper')}>
			<div className={styles.container}>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.5 }}
					variants={{
						visible: { opacity: 1, y: 0 },
						hidden: { opacity: 0, y: isMobile ? '25vw' : '10vw' },
					}}
					className={styles.content}
				>
					<h2>
						Онлайн-запись
						<br /> клиентов на&nbsp;ваш выбор
					</h2>
					{isMobile ? (
						<div className={styles.slider_container}>
							<Slider {...settings} ref={arrowRef}>
								{cardDisc}
							</Slider>
						</div>
					) : (
						<div className={styles.imgWrap}>
							<Image
								className={styles.img}
								src={OnlineRecordingImg1}
								alt={'Онлайн-запись клиентов на ваш выбор'}
								loading="lazy"
							/>
							<Image
								className={styles.img}
								src={OnlineRecordingImg2}
								alt={'Онлайн-запись клиентов на ваш выбор'}
								loading="lazy"
							/>
						</div>
					)}
				</motion.div>
			</div>
		</div>
	)
}

export default OnlineRecording
