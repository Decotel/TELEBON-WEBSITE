import { FC, useEffect, useRef, useState } from 'react'
import styles from './Header.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import LogoImageNew from '../../../assets/icons/LogoImageNew.svg'
import Link from 'next/link'
import { motion } from 'framer-motion'
import useMatchMedia from '@/hooks/useMatchMedia'

const Header: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [hidden, setHidden] = useState<boolean>(false)
	const [scrollStarted, setScrollStarted] = useState<boolean>(false)
	const isMobile = useMatchMedia('768')
	const menuRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0 && !scrollStarted) {
				setScrollStarted(true)
				setHidden(true)
			} else if (window.scrollY === 0 && scrollStarted) {
				setScrollStarted(false)
				setHidden(false)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [scrollStarted])

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
				<motion.nav
					className={cn('wrapper', styles.header)}
					//variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
					//animate={hidden ? 'hidden' : 'visible'}
					//transition={{ duration: 0.35, ease: 'easeInOut' }}
				>
					<motion.nav
						variants={{ visible: { height: '100%' }, hidden: { height: '0' } }}
						animate={hidden ? 'hidden' : 'visible'}
						transition={{ duration: 0.1, ease: 'easeInOut' }}
					>
						<div className={styles.indent}></div>
					</motion.nav>
					<div className={styles.headerContent} ref={menuRef}>
						<div className={styles.navmenu}>
							<Link href="/" onClick={() => setIsOpen(false)}>
								<div className={styles.logo}>
									<Image src={LogoImageNew} alt="logotext" />
								</div>
							</Link>
							<div className={styles.tabs}>
								<Link href="/solution/journal">
									<div className={styles.item}>Журнал записи</div>
								</Link>
								<Link href="/price">
									<div className={styles.item}>Ценовая политика</div>
								</Link>
								<Link href="/telegram-bot">
									<div className={styles.item}>Бот для онлайн-записи</div>
								</Link>
							</div>
						</div>
						<ul className={cn(isOpen && styles.active)}>
							<li className={cn(styles.auth, styles.reg)}>
								<Link href="https://lk.telebon.ru/registration">
									Зарегистрироваться
								</Link>
							</li>
							<li className={styles.auth}>
								<Link href="https://lk.telebon.ru/auth">
									<span>Войти</span>
								</Link>
							</li>
							{isMobile ? (
								<li className={styles.auth} onClick={() => setIsOpen(!isOpen)}>
									<Link href="/telegram-bot">
										<span>Бот для онлайн-записи</span>
									</Link>
								</li>
							) : null}
							{isMobile ? (
								<li className={styles.auth} onClick={() => setIsOpen(!isOpen)}>
									<Link href="/solution/journal">
										<span>Журнал записи</span>
									</Link>
								</li>
							) : null}
							{isMobile ? (
								<li className={styles.auth} onClick={() => setIsOpen(!isOpen)}>
									<Link href="/price">
										<span>Ценовая политика</span>
									</Link>
								</li>
							) : null}
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
