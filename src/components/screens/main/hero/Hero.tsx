import React, { FC, useEffect, useState } from 'react'
import styles from './Hero.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import Image from 'next/image'
import Link from 'next/link'
import useMatchMedia from '@/hooks/useMatchMedia'
import Phone from '../../../../assets/icons/main/hero/HeroPhone.webp'
import PhoneMobile from '../../../../assets/icons/main/hero/HeroPhoneMobile.webp'
import Sponsors from '../../../../assets/icons/main/hero/Sponsors.webp'
import Sponsors1 from '../../../../assets/icons/main/hero/sponsor_1.svg'
import Sponsors2 from '../../../../assets/icons/main/hero/sponsor_2.svg'
import Sponsors3 from '../../../../assets/icons/main/hero/sponsor_3.svg'
import Sponsors4 from '../../../../assets/icons/main/hero/sponsor_4.svg'
import Sponsors5 from '../../../../assets/icons/main/hero/sponsor_5.svg'
import Sponsors6 from '../../../../assets/icons/main/hero/sponsor_6.svg'
import MasterImg from '../../../../assets/icons/main/hero/master.svg'

import SponsorsMobile from '../../../../assets/icons/main/hero/SponsorsMobile.webp'
import { motion } from 'framer-motion'
import AppleIcon from '../../../../assets/icons/AppleIcon.png'
import { useRouter } from 'next/router'

const Hero: FC = () => {
	const isMobile = useMatchMedia('768')
	const [platformLink, setPlatformLink] = useState('')
	const [isOpenDownload, setIsOpenDownload] = useState<boolean>(true)
	const [email, setEmail] = useState('')
	const router = useRouter()
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
	}
	const goToWebSite = () => {
		const trimmedEmail = email.trim()

		if (trimmedEmail) {
			localStorage.setItem('user_email', trimmedEmail)
			router.push('https://lk.telebon.ru')
		} else {
			alert('Введите корректный email')
		}
	}

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
			<div className={styles.background}></div>
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
							<h1>Приложение для записи клиентов.</h1>

							<p>
								Автоматизация всех бизнес процессов для частных мастеров и
								салонов в сфере услуг.
							</p>
						</div>
						{/* <div className={styles.inputEmailWrap}>
							<input
								className={styles.inputEmail}
								placeholder="Введите вашу почту"
								type="email"
								value={email}
								onChange={handleInputChange}
							/>
							<button
								onClick={goToWebSite}
								className={styles.buttonEmail}
								disabled={!email}
							>
								Начать
							</button>
						</div> */}
						<Link
							href={'https://lk.telebon.ru/auth'}
							target={'_blank'}
							style={{
								display: 'flex',
								justifyContent: isMobile ? 'center' : 'flex-start',
							}}
							className={styles.button}
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
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '40vw' : '10vw' },
						}}
						className={styles.phoneMobileWrap}
					>
						{isMobile ? (
							<Image src={PhoneMobile} alt={''} priority />
						) : (
							<Image
								src={Phone}
								alt={'Мобильное приложение Телебон (Telebon)'}
								priority
							/>
						)}
					</motion.div>
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
					<ul className={styles.sponsorsList}>
						<li className={styles.sponsorsItem}>
							<Image src={Sponsors1} alt={'Moscow Beauty'} />
						</li>
						<li className={styles.sponsorsItem}>
							<Image src={Sponsors2} alt={'Громче! школа музыки'} />
						</li>
						<li className={styles.sponsorsItem}>
							<Image src={Sponsors3} alt={'Nailpro'} />
						</li>
						<li className={styles.sponsorsItem}>
							<Image src={Sponsors4} alt={'Man Man'} />
						</li>
						<li className={styles.sponsorsItem}>
							<Image src={Sponsors5} alt={'Нешкола барабанов'} />
						</li>
						<li className={styles.sponsorsItem}>
							<Image src={Sponsors6} alt={'Modern'} />
						</li>
					</ul>
					{/* {isMobile ? (
						<Image src={SponsorsMobile} alt={''} />
					) : (
						<Image
							src={Sponsors}
							alt={'Партнёры системы записи клиентов Телебон (Telebon)'}
						/>
					)} */}
				</motion.div>
			</div>
			<div className={styles.masterWrap}>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.5 }}
					variants={{
						visible: { opacity: 1, y: 0 },
						hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
					}}
					className={styles.master}
				>
					<div className={styles.masterContent}>
						<div className={styles.masterContentLeft}>
							<h2>Всё что нужно для работы мастера</h2>
							<p>
								<span>Развивайте ваш Бренд, </span>
								<span className={styles.bold}>управляйте расписанием,</span>
								<span className={styles.bold}> сотрудниками и клиентами.</span>
								<span>Поднимайте каждый день ваш бизнес на новый уровень.</span>
							</p>
						</div>
						<div className={styles.masterContentRight}>
							<Image src={MasterImg} alt="Нам доверяют" />
							<p>Нам доверяют более 500+ салонов и частных мастеров</p>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	)
}

export default Hero
