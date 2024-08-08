import React, { FC, useEffect, useState } from 'react'
import styles from './Hero.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../../assets/icons/icon'
import Image from 'next/image'
import Link from 'next/link'
import useMatchMedia from '@/hooks/useMatchMedia'
import Sponsors from '../../../../../assets/icons/main/hero/Sponsors.webp'
import SponsorsMobile from '../../../../../assets/icons/main/hero/SponsorsMobile.webp'
import { motion } from 'framer-motion'
import AppleIcon from '../../../../../assets/icons/AppleIcon.png'
import { ImagePost } from '@/screens/posts/list/Home'
import Preview from '../../../../../../public/preview/logo_preview.webp'
import { formatDescription } from '@/screens/posts/post/home/Home'

interface HeroProps {
	title: string
	description: any
	background: ImagePost
	phone: ImagePost | null
}

const Hero: FC<HeroProps> = ({ title, description, background, phone }) => {
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
		<div
			className={cn(styles.body, 'wrapper')}
			itemScope
			itemType="http://schema.org/LocalBusiness"
		>
			<div className={styles.gradient}></div>
			<div
				className={styles.background}
				style={{
					backgroundImage: background?.url
						? `url(${background.url})`
						: `url(${Preview})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			></div>
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
						<button aria-labelledby="Открыть">Открыть</button>
					</Link>
				</div>
			) : null}
			<div className={styles.container}>
				<div style={{ height: isMobile ? '30.7692vw' : '6.9792vw' }}></div>
				<div className={styles.row}>
					<div className={styles.column}>
						<div className={styles.text}>
							<h1>{title}</h1>
							{formatDescription(description)}
						</div>
						<Link
							href={'https://lk.telebon.ru/registration'}
							target={'_blank'}
							style={{
								display: 'flex',
								justifyContent: isMobile ? 'center' : 'flex-start',
							}}
						>
							{isMobile ? (
								<button aria-labelledby="Начать">Начать</button>
							) : (
								<button aria-labelledby="Попробовать сейчас">
									Попробовать сейчас
								</button>
							)}
						</Link>
					</div>
					{phone == null ? (
						<div style={{ width: '23.8542vw' }}></div>
					) : (
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.3 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: isMobile ? '40vw' : '10vw' },
							}}
						>
							<Image
								src={phone?.url}
								alt={phone?.alternativeText}
								priority
								width={1024}
								height={1024}
							/>
						</motion.div>
					)}
				</div>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.5 }}
					variants={{
						visible: { opacity: 1, y: 0 },
						hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
					}}
					className={styles.sponsors}
				>
					{isMobile ? (
						<Image src={SponsorsMobile} alt={''} />
					) : (
						<Image
							src={Sponsors}
							alt={'Партнёры системы записи клиентов Телебон (Telebon)'}
						/>
					)}
				</motion.div>
			</div>
		</div>
	)
}

export default Hero
