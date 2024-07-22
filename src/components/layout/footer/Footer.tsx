import React, { FC, useEffect, useState } from 'react'
import styles from './Footer.module.scss'
import { EIcons, Icon, Icon as IconInstance } from '../../../assets/icons/icon'
import Image from 'next/image'
import Link from 'next/link'
import ModalSupport from '@/ui/modal/ModalSupport/ModalSupport'
import FooterImageLeft from '../../../assets/icons/main/footeri/FooterImageLeft.png'
import FooterImageRight from '../../../assets/icons/main/footeri/FooterImageRight.png'
import { motion } from 'framer-motion'
import useMatchMedia from '@/hooks/useMatchMedia'
import LogoImageNewWhite from '../../../assets/icons/LogoImageNewWhite.svg'

const Footer: FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [hidden, setHidden] = useState<boolean>(false)
	const [scrollStarted, setScrollStarted] = useState<boolean>(false)
	const [copiedSuccess, setCopiedSuccess] = useState(false)
	const isMobile = useMatchMedia('768')

	const unsecuredCopyToClipboard = (text: string) => {
		const textArea = document.createElement('textarea')
		textArea.style.position = `fixed`
		textArea.style.top = `0`
		textArea.style.left = `0`
		textArea.style.opacity = `0`
		textArea.value = text
		document.body.appendChild(textArea)
		textArea.focus()
		textArea.select()
		try {
			document.execCommand('copy')
		} catch (err) {
			console.error(`Unable to copy to clipboard`, err)
		}
		document.body.removeChild(textArea)
	}

	const handlePhoneClick = () => {
		const phoneNumber = `+7 (812) 507-63-33`
		if (isMobile) {
			window.location.href = `tel:${phoneNumber.replace(/\s/g, ``)}`
		} else {
			copyToClipboard(phoneNumber)
		}
	}

	const copyToClipboard = async (text: string) => {
		try {
			if (window.isSecureContext && navigator.clipboard) {
				await navigator.clipboard.writeText(text)
				setCopiedSuccess(true)
				setTimeout(() => setCopiedSuccess(false), 1500)
			} else {
				unsecuredCopyToClipboard(text)
			}
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		const handleScroll = () => {
			if (
				window.scrollY <
					document.documentElement.scrollHeight - window.innerHeight &&
				!scrollStarted
			) {
				setScrollStarted(true)
				setHidden(true)
			} else if (
				window.scrollY ===
					document.documentElement.scrollHeight - window.innerHeight &&
				scrollStarted
			) {
				setScrollStarted(false)
				setHidden(false)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [scrollStarted])

	return (
		<div className={styles.footer}>
			<div className={styles.main_container}>
				{isMobile ? null : (
					<div className={styles.common}>
						<IconInstance name={EIcons.footerlogomark} />
						{isMobile ? (
							<p className={styles.title}>Telebon</p>
						) : (
							<p className={styles.title}>Присоединяйтесь</p>
						)}
						{isMobile ? (
							<p>Присоединяйтесь</p>
						) : (
							<p>
								Промокод бонус:{' '}
								<Link
									href={'https://lk.telebon.ru/registration'}
									target={'_blank'}
								>
									START
								</Link>
							</p>
						)}
						{isMobile ? (
							<div className={styles.buttons}>
								<button>
									<Icon name={EIcons.buttonicon} />
									Зарегистрироваться
								</button>
								<button>Войти</button>
							</div>
						) : (
							<div className={styles.buttons}>
								<Link
									href={'https://apps.apple.com/ru/app/telebon/id6502614961'}
									target={'_blank'}
								>
									<IconInstance name={EIcons.footerappstore} />
								</Link>
								<Link href={'/'}>
									<IconInstance name={EIcons.footergoogleplay} />
								</Link>
							</div>
						)}
					</div>
				)}
				{isMobile ? (
					<div className={styles.links}>
						<Image src={LogoImageNewWhite} alt="logotext" />
						{/*<div className={styles.card}>*/}
						{/*	<IconInstance name={EIcons.rightarrow} />*/}
						{/*	<p>Возможности</p>*/}
						{/*</div>*/}
						<Link href={'/price'}>
							<div className={styles.card}>
								<IconInstance name={EIcons.rightarrow} />
								<p>Тарифы</p>
							</div>
						</Link>
						{/*<div className={styles.card}>*/}
						{/*	<IconInstance name={EIcons.rightarrow} />*/}
						{/*	<p>Бот для записи</p>*/}
						{/*</div>*/}
						<Link href={'/document'}>
							<div className={styles.card}>
								<IconInstance name={EIcons.rightarrow} />
								<p>Лицензионный договор</p>
							</div>
						</Link>
						<Link href={'/document'}>
							<div className={styles.card}>
								<IconInstance name={EIcons.rightarrow} />
								<p>Соглашение</p>
							</div>
						</Link>
						<Link href={'/document'}>
							<div className={styles.card}>
								<IconInstance name={EIcons.rightarrow} />
								<p>Конфиденциальность</p>
							</div>
						</Link>
						<div className={styles.contact}>
							<p className={styles.title}>КОНТАКТЫ</p>
							<div className={styles.main}>
								<div className={styles.card} onClick={handlePhoneClick}>
									<IconInstance name={EIcons.footerphone} />
									<IconInstance name={EIcons.footerphonenumber} />
								</div>
								<div
									className={styles.card}
									onClick={() => {
										copyToClipboard('hello@telebon.ru')
									}}
								>
									<IconInstance name={EIcons.footermail} />
									<IconInstance name={EIcons.footeremail} />
								</div>
								<Link href={'https://wa.me/79956780440'} target={'_blank'}>
									<div className={styles.card}>
										<IconInstance name={EIcons.footerwhatsupicon} />
										{/*<IconInstance name={EIcons.footerwhatsup} />*/}
										Написать в WhatsApp
									</div>
								</Link>
							</div>
						</div>
						<div className={styles.line}></div>
					</div>
				) : (
					<div className={styles.links}>
						<div className={styles.row}>
							<div className={styles.contact}>
								<p className={styles.title}>КОНТАКТЫ</p>
								<div className={styles.main}>
									<div className={styles.card} onClick={handlePhoneClick}>
										<IconInstance name={EIcons.footerphone} />
										<IconInstance name={EIcons.footerphonenumber} />
									</div>
									<div
										className={styles.card}
										onClick={() => {
											copyToClipboard('hello@telebon.ru')
										}}
									>
										<IconInstance name={EIcons.footermail} />
										<IconInstance name={EIcons.footeremail} />
									</div>
									<Link href={'https://wa.me/79956780440'} target={'_blank'}>
										<div className={styles.card}>
											<IconInstance name={EIcons.footerwhatsupicon} />
											<IconInstance name={EIcons.footerwhatsup} />
										</div>
									</Link>
								</div>
							</div>
							<div
								style={{
									display: 'flex',
									flexDirection: 'row',
									gap: '3.125vw',
								}}
							>
								<div className={styles.column}>
									<p className={styles.title}>КАРТА САЙТА</p>
									<div className={styles.line}></div>
									<Link href={'/price'}>
										<p>Тарифы</p>
									</Link>
									{/*<Link href={'/'}>*/}
									{/*	<p>Бот для записи</p>*/}
									{/*</Link>*/}
								</div>
								<div className={styles.column}>
									<p className={styles.title}>ДОКУМЕНТЫ</p>
									<div className={styles.line}></div>
									<Link href={'/document'}>
										<p>Пользовательское соглашение</p>
									</Link>
									<Link href={'/document'}>
										<p>Лицензионный договор</p>
									</Link>
									<Link href={'/document'}>
										<p>Конфиденциальность</p>
									</Link>
									{/*<div className={styles.social}>*/}
									{/*	<IconInstance name={EIcons.footertelegramicon} />*/}
									{/*	<IconInstance name={EIcons.footervkicon} />*/}
									{/*</div>*/}
								</div>
							</div>
						</div>
					</div>
				)}

				<div className={styles.present}>
					<div className={styles.box}>
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<p className={styles.title}>Презентация Telebon</p>
							<p>Покажем систему в деле, ответим на все интересующие вопросы</p>
						</div>
						{isMobile ? (
							<button onClick={() => setIsModalOpen(true)}>
								Отправить запрос
							</button>
						) : (
							<button onClick={() => setIsModalOpen(true)}>
								Запросить презентацию
							</button>
						)}
					</div>
				</div>
				<div className={styles.bottom}>
					<p>© ООО Группа Компаний «Белый Медведь»</p>
					{isMobile ? null : (
						<div
							style={{
								width: '0.1042vw',
								height: '0.1042vw',
								borderRadius: '100%',
								background: '#647084',
							}}
						></div>
					)}
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							gap: isMobile ? '2.0513vw' : '0.625vw',
						}}
					>
						<span>4345410051</span>
						{isMobile ? (
							<div
								style={{
									width: '0.1042vw',
									height: '0.1042vw',
									borderRadius: '100%',
									background: '#647084',
								}}
							></div>
						) : null}
						<span>1154345004582</span>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							gap: isMobile ? '4.1026vw' : '0.833vw',
						}}
					>
						<Link href={'https://vk.com/teleboncrm'} target={'_blank'}>
							<IconInstance name={EIcons.footervk} />
						</Link>
						<Link href={'https://t.me/telebon_channel'} target={'_blank'}>
							<IconInstance name={EIcons.footertg} />
						</Link>
					</div>
				</div>
			</div>
			{isModalOpen ? (
				<ModalSupport
					isOpen={isModalOpen}
					setIsModalOpen={setIsModalOpen}
					onClose={() => setIsModalOpen(false)}
				/>
			) : null}
		</div>
	)
}

export default Footer
