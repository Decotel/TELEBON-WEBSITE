import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './Hero.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import Image from 'next/image'
import { useFormik } from 'formik'
import Link from 'next/link'
import useMatchMedia from '@/hooks/useMatchMedia'
import Img1 from '../../../../assets/icons/aboutus/hero/HeroImg1.png'
import Img2 from '../../../../assets/icons/aboutus/hero/HeroImg2.png'
import Img3 from '../../../../assets/icons/aboutus/hero/HeroImg3.png'
import Img4 from '../../../../assets/icons/aboutus/hero/HeroImg4.png'
import Img5 from '../../../../assets/icons/aboutus/hero/HeroImg5.png'
import Img6 from '../../../../assets/icons/aboutus/hero/HeroImg6.png'
import Img7 from '../../../../assets/icons/aboutus/hero/HeroImg7.png'
import Img8 from '../../../../assets/icons/aboutus/hero/HeroImg8.png'
import Img9 from '../../../../assets/icons/aboutus/hero/HeroImg9.png'
import Img10 from '../../../../assets/icons/aboutus/hero/HeroImg10.png'
import Img11 from '../../../../assets/icons/aboutus/hero/HeroImg11.png'
import Img12 from '../../../../assets/icons/aboutus/hero/HeroImg12.png'
import Img13 from '../../../../assets/icons/aboutus/hero/HeroImg13.png'
import Img14 from '../../../../assets/icons/aboutus/hero/HeroImg14.png'
import { motion } from 'framer-motion'
import AppleIcon from '../../../../assets/icons/AppleIcon.png'

const Hero: FC = () => {
	const isMobile = useMatchMedia('768')
	const [platformLink, setPlatformLink] = useState('')
	const [isOpenDownload, setIsOpenDownload] = useState<boolean>(true)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const storedState = sessionStorage.getItem('isOpenDownload')
			if (storedState !== null && storedState !== 'undefined') {
				setIsOpenDownload(JSON.parse(storedState))
			}
		}
	}, [])

	useEffect(() => {
		const userAgent = navigator.userAgent || navigator.vendor

		if (/android/i.test(userAgent)) {
			setPlatformLink('/')
		} else if (/iPad|iPhone|iPod/i.test(userAgent)) {
			setPlatformLink('https://apps.apple.com/ru/app/telebon/id6502614961')
		} else {
			setPlatformLink('/')
		}
	}, [])

	useEffect(() => {
		if (typeof window !== 'undefined') {
			sessionStorage.setItem('isOpenDownload', JSON.stringify(isOpenDownload))
		}
	}, [isOpenDownload])

	return (
		<div className={cn(styles.body, 'wrapper')}>
			<div className={styles.gradient}></div>
			{isMobile && isOpenDownload ? (
				<div className={styles.download_link}>
					<div className={styles.row}>
						<div onClick={() => setIsOpenDownload(false)}>
							<IconInstance name={EIcons.x} />
						</div>
						<Image src={AppleIcon} alt={''} />
						<div className={styles.text}>
							<p>Telebon</p>
							<span>Mobile app</span>
						</div>
					</div>
					<Link href={platformLink} target={'_blank'}>
						<button>Открыть</button>
					</Link>
				</div>
			) : null}
			<div className={styles.container}>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					variants={{
						visible: { opacity: 1, y: 0 },
						hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
					}}
					className={styles.text}
				>
					<h3>Всё начинается {isMobile ? <br /> : null}с записи.</h3>
					<p>
						Телебон познакомит вас с вашими {isMobile ? <br /> : null}
						идеальными инструментами для работы
					</p>
				</motion.div>
				{isMobile ? (
					<div className={styles.row}>
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
							<Image src={Img5} alt={''} />
						</motion.div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
							}}
						>
							<Image src={Img7} alt={''} />
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
							<Image src={Img9} alt={''} />
						</motion.div>
					</div>
				) : (
					<div className={styles.row}>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
							}}
							className={styles.column}
						>
							<Image
								src={Img1}
								alt={'Мастер маникюра, онлайн запись Telebon'}
							/>
							<Image src={Img2} alt={'Мастер Барбер, онлайн запись Telebon'} />
						</motion.div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.3 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
							}}
							className={styles.column}
						>
							<Image
								src={Img3}
								alt={'Мастер педикюра, онлайн запись Telebon'}
							/>
							<Image
								src={Img4}
								alt={'Мастер визажист, онлайн запись Telebon'}
							/>
						</motion.div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.4 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
							}}
							className={styles.column}
						>
							<Image src={Img5} alt={'Мастер бровист, онлайн запись Telebon'} />
							<Image
								src={Img6}
								alt={'Мастер маникюра, онлайн запись Telebon'}
							/>
						</motion.div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.5 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
							}}
							className={styles.column}
						>
							<Image src={Img7} alt={'Мастер бровист, онлайн запись Telebon'} />
							<Image src={Img8} alt={'Мастер барбер, онлайн запись Telebon'} />
						</motion.div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.4 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
							}}
							className={styles.column}
						>
							<Image
								src={Img9}
								alt={'Мастер визажист, онлайн запись Telebon'}
							/>
							<Image
								src={Img10}
								alt={'Мастер маникюра, онлайн запись Telebon'}
							/>
						</motion.div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.3 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
							}}
							className={styles.column}
						>
							<Image
								src={Img11}
								alt={'Мастер визажист, онлайн запись Telebon'}
							/>
							<Image src={Img12} alt={'Мастер барбер, онлайн запись Telebon'} />
						</motion.div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
							}}
							className={styles.column}
						>
							<Image
								src={Img13}
								alt={'Мастер массажа, онлайн запись Telebon'}
							/>
							<Image
								src={Img14}
								alt={'Мастер бровист, онлайн запись Telebon'}
							/>
						</motion.div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Hero
