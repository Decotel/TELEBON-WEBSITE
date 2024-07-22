import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './Header.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import LogoImageWhite from '../../../assets/icons/LogoImageWhite.svg'
import Link from 'next/link'
import { motion } from 'framer-motion'
import useMatchMedia from '@/hooks/useMatchMedia'
import { EIcons, Icon as IconInstance } from '../../../assets/icons/icon'
import BackgroundShadows from '../../../assets/BackgroundShadows.png'
import BackgroundShadowsMobile from '../../../assets/BackgroundShadowsMobile.png'
import AppleIcon from '../../../assets/icons/AppleIcon.png'

const Header: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [hidden, setHidden] = useState<boolean>(false)
	const [scrollStarted, setScrollStarted] = useState<boolean>(false)
	const [scrollY, setScrollY] = useState(0)
	const isMobile = useMatchMedia('768')
	const menuRef = useRef<HTMLDivElement>(null)
	const [second, setSecond] = useState<boolean>(false)

	useEffect(() => {
		const handleScroll = () => {
			if (isMobile) {
				setHidden(false)
				setScrollStarted(false)
			} else {
				if (window.scrollY > scrollY && !scrollStarted) {
					setScrollStarted(true)
					setHidden(true)
				} else if (window.scrollY === 0 && scrollStarted) {
					setScrollStarted(false)
					setHidden(false)
				}
			}

			setScrollY(window.scrollY)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [scrollStarted, scrollY, isMobile])

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		if (isMobile) {
	// 			if (window.scrollY > 0 && !scrollStarted) {
	// 				setScrollStarted(true)
	// 				setHidden(true)
	// 			} else if (window.scrollY === 0 && scrollStarted) {
	// 				setScrollStarted(false)
	// 				setHidden(false)
	// 			} else if (window.scrollY !== 0 && window.scrollY > scrollY) {
	// 				setIsOpen(false)
	// 				setHidden(true)
	// 			} else if (window.scrollY !== 0 && window.scrollY < scrollY) {
	// 				setIsOpen(false)
	// 				setHidden(false)
	// 			}
	// 			if (window.scrollY !== 0) {
	// 				setSecond(true)
	// 			} else {
	// 				setSecond(false)
	// 			}
	// 		} else {
	// 			if (window.scrollY > scrollY && !scrollStarted) {
	// 				setScrollStarted(true)
	// 				setHidden(true)
	// 			} else if (window.scrollY < scrollY && scrollStarted) {
	// 				setScrollStarted(false)
	// 				setHidden(false)
	// 			} else if (window.scrollY === 0 && scrollStarted) {
	// 				setScrollStarted(false)
	// 				setHidden(false)
	// 			}
	// 		}
	//
	// 		setScrollY(window.scrollY)
	// 	}
	//
	// 	window.addEventListener('scroll', handleScroll)
	//
	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll)
	// 	}
	// }, [scrollStarted, scrollY])

	useEffect(() => {
		const closeMenuOnClickOutside = (event: MouseEvent | TouchEvent) => {
			if (
				isOpen &&
				menuRef.current &&
				!menuRef.current.contains(event.target as Node)
			) {
				setIsOpen(false)
			}
		}

		document.addEventListener('mousedown', closeMenuOnClickOutside)
		document.addEventListener('touchstart', closeMenuOnClickOutside)

		return () => {
			document.removeEventListener('mousedown', closeMenuOnClickOutside)
			document.removeEventListener('touchstart', closeMenuOnClickOutside)
		}
	}, [isOpen])

	return (
		<noindex>
			<div className={isOpen ? styles.darken : undefined}>
				{/*<div className={styles.shadows} style={{ pointerEvents: 'none' }}>*/}
				{/*	{isMobile ? (*/}
				{/*		<Image src={BackgroundShadowsMobile} alt={''} />*/}
				{/*	) : (*/}
				{/*		<Image src={BackgroundShadows} alt={''} />*/}
				{/*	)}*/}
				{/*</div>*/}
				<motion.nav
					className={cn(
						'wrapper',
						isMobile ? styles.header_mobile : styles.header,
					)}
					variants={{
						visible: {
							background: 'transparent',
							translateY: '0vw',
							marginTop: '0',
						},
						hidden: {
							background: isMobile ? 'transparent' : '#2A2C32',
							translateY: isMobile ? '-14.3589vw' : '-1.9271vw',
							marginTop: isMobile ? '-14.3589vw' : '0',
						},
					}}
					animate={hidden ? 'hidden' : 'visible'}
					transition={{ duration: 0.35, ease: 'easeInOut' }}
				>
					{/*<motion.nav*/}
					{/*	variants={{ visible: { height: '100%' }, hidden: { height: '0' } }}*/}
					{/*	animate={hidden ? 'hidden' : 'visible'}*/}
					{/*	transition={{ duration: 0.1, ease: 'easeInOut' }}*/}
					{/*>*/}
					{/*	<div className={styles.indent}></div>*/}
					{/*</motion.nav>*/}
					{isMobile ? null : (
						<div className={styles.up}>
							{/*<Link href={'/'} target={'_blank'}>*/}
							{/*	<div className={styles.help}>Помощь</div>*/}
							{/*</Link>*/}
							<Link href={'https://lk.telebon.ru/auth'} target={'_blank'}>
								<div className={styles.help}>
									Войти
									<IconInstance name={EIcons.usericon} />
								</div>
							</Link>
						</div>
					)}
					<div className={styles.headerContent} ref={menuRef}>
						<Link href="/">
							<div className={styles.logo} onClick={() => setIsOpen(false)}>
								<Image src={LogoImageWhite} alt="logotext" />
							</div>
						</Link>
						<div className={styles.navmenu}>
							<div className={styles.tabs}>
								<Link href="/aboutus">
									<div className={styles.item}>Почему Telebon</div>
								</Link>
								<Link href="/price">
									<div className={styles.item}>Стоимость</div>
								</Link>
								{/*<Link href="/">*/}
								{/*	<div className={styles.item}>*/}
								{/*		Возможности*/}
								{/*		<IconInstance name={EIcons.arrowlist} />*/}
								{/*	</div>*/}
								{/*</Link>*/}
								{/*<Link href="/">*/}
								{/*	<div className={styles.item}>Бот для записи</div>*/}
								{/*</Link>*/}
							</div>
						</div>
						<ul className={cn(isOpen && styles.active)}>
							{isMobile ? (
								<li
									className={cn(styles.auth, styles.links)}
									onClick={() => setIsOpen(!isOpen)}
								>
									<Link href="/aboutus">
										<div className={styles.icon_button}>
											<IconInstance name={EIcons.rightarrow} />
											<span>Почему Telebon</span>
										</div>
									</Link>
								</li>
							) : null}
							{isMobile ? (
								<li
									className={cn(styles.auth, styles.links)}
									onClick={() => setIsOpen(!isOpen)}
								>
									<Link href="/price">
										<div className={styles.icon_button}>
											<IconInstance name={EIcons.rightarrow} />
											<span>Стоимость</span>
										</div>
									</Link>
								</li>
							) : null}
							{/*{isMobile ? (*/}
							{/*	<li*/}
							{/*		className={cn(styles.auth, styles.links)}*/}
							{/*		onClick={() => setIsOpen(!isOpen)}*/}
							{/*	>*/}
							{/*		<Link href="/">*/}
							{/*			<div className={styles.icon_button}>*/}
							{/*				<IconInstance name={EIcons.rightarrow} />*/}
							{/*				<span>Возможности</span>*/}
							{/*			</div>*/}
							{/*		</Link>*/}
							{/*	</li>*/}
							{/*) : null}*/}
							{/*{isMobile ? (*/}
							{/*	<li*/}
							{/*		className={cn(styles.auth, styles.links)}*/}
							{/*		onClick={() => setIsOpen(!isOpen)}*/}
							{/*	>*/}
							{/*		<Link href="/">*/}
							{/*			<div className={styles.icon_button}>*/}
							{/*				<IconInstance name={EIcons.rightarrow} />*/}
							{/*				<span>Бот для записи</span>*/}
							{/*			</div>*/}
							{/*		</Link>*/}
							{/*	</li>*/}
							{/*) : null}*/}
							{/*{isMobile ? (*/}
							{/*	<li*/}
							{/*		className={cn(styles.auth, styles.links)}*/}
							{/*		onClick={() => setIsOpen(!isOpen)}*/}
							{/*	>*/}
							{/*		<Link href="/">*/}
							{/*			<div className={styles.icon_button}>*/}
							{/*				<IconInstance name={EIcons.rightarrow} />*/}
							{/*				<span>Помощь</span>*/}
							{/*			</div>*/}
							{/*		</Link>*/}
							{/*	</li>*/}
							{/*) : null}*/}
							{isMobile ? (
								<li
									className={cn(styles.auth, styles.download)}
									onClick={() => setIsOpen(!isOpen)}
								>
									<Link
										href="https://apps.apple.com/ru/app/telebon/id6502614961"
										target={'_blank'}
									>
										<div className={styles.icon_button}>
											<IconInstance name={EIcons.appstoreicon} />
											<span>Скачать App Store</span>
										</div>
									</Link>
								</li>
							) : null}
							{isMobile ? (
								<li
									className={cn(styles.auth, styles.download)}
									onClick={() => setIsOpen(!isOpen)}
								>
									<Link href="/" target={'_blank'}>
										<div className={styles.icon_button}>
											<IconInstance name={EIcons.googleplayicon} />
											<span>Скачать Google Play</span>
										</div>
									</Link>
								</li>
							) : null}
							{/*<li className={cn(styles.auth, styles.reg)}>*/}
							{/*	<Link*/}
							{/*		href='https://lk.telebon.ru/registration'*/}
							{/*		target={'_blank'}*/}
							{/*	>*/}
							{/*		<div className={styles.icon_button}>*/}
							{/*			<IconInstance name={EIcons.buttonicon} />*/}
							{/*			Зарегистрироваться*/}
							{/*		</div>*/}
							{/*	</Link>*/}
							{/*</li>*/}
							<li className={styles.auth}>
								<Link
									href="https://lk.telebon.ru/registration"
									target={'_blank'}
								>
									<span>Начать</span>
								</Link>
							</li>
						</ul>
						<button
							onClick={() => setIsOpen(!isOpen)}
							className={cn(isOpen && styles.activeMenu, styles.menu)}
						>
							<span></span>
							<span></span>
							<span></span>
						</button>
					</div>
				</motion.nav>
			</div>
		</noindex>
	)
}

export default Header
