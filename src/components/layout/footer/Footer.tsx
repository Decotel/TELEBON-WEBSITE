import React, { FC, useEffect, useState } from 'react'
import styles from './Footer.module.scss'
import { EIcons, Icon, Icon as IconInstance } from '../../../assets/icons/icon'
import Image from 'next/image'
import Link from 'next/link'
import ModalSupport from '@/ui/modal/ModalSupport/ModalSupport'
import useMatchMedia from '@/hooks/useMatchMedia'
import LogoImageNewWhite from '../../../assets/icons/LogoImageNewWhite.svg'
import MasterImg from '../../../assets/icons/main/hero/master.svg'
import RustoreImg from '../../../assets/icons/rustore.webp'
import LogoImageWhite from '../../../assets/icons/LogoImageWhite.svg'

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

	const handleEmailClick = () => {
		const emailAddress = `hello@telebon.ru`
		if (isMobile) {
			window.location.href = `mailto:${emailAddress}`
		} else {
			copyToClipboard(emailAddress)
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
				{/* {isMobile ? null : (
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
								<Link href={'https://lk.telebon.ru/auth'} target={'_blank'}>
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
								<Link
									href={
										'https://play.google.com/store/apps/details?id=com.telebon'
									}
									target={'_blank'}
								>
									<IconInstance name={EIcons.footergoogleplay} />
								</Link>
								<Link
									href={'https://www.rustore.ru/catalog/app/com.telebon'}
									target={'_blank'}
								>
									<IconInstance name={EIcons.footerrustoreicon} />
								</Link>
							</div>
						)}
					</div>
				)} */}

				<div className={styles.footer__top}>
					<div className={styles.storeWrap}>
						<ul className={styles.storeList}>
							<li className={styles.storeItem}>
								<Link
									href={'https://apps.apple.com/ru/app/telebon/id6502614961'}
									target={'_blank'}
								>
									<Icon name={EIcons.appstore} />{' '}
								</Link>
							</li>
							<li className={styles.storeItem}>
								<Link
									href={
										'https://play.google.com/store/apps/details?id=com.telebon'
									}
									target={'_blank'}
								>
									<Icon name={EIcons.googleplay} />{' '}
								</Link>
							</li>
							<li className={styles.storeItem}>
								<Link
									href={'https://www.rustore.ru/catalog/app/com.telebon'}
									target={'_blank'}
								>
									<Image src={RustoreImg} alt="Rustore" />
								</Link>
							</li>
						</ul>
						<Image className={styles.icon} src={MasterImg} alt="Нам доверяют" />
					</div>
					<div className={styles.columnWrap}>
						<div className={styles.column}>
							<h4 className={styles.columnTitle}>Компания</h4>
							<ul className={styles.columnList}>
								<li className={styles.columnItem}>
									<Link href={'https://telebon.ru/aboutus'}>О нас</Link>
								</li>
								<li className={styles.columnItem}>
									<Link href={'https://telebon.ru/info/agreement'}>
										Документы
									</Link>
								</li>
								<li className={styles.columnItem}>
									<Link href={'https://telebon.ru/price'}>Цены</Link>
								</li>
								<li className={styles.columnItem}>
									<Link href={'https://telebon.ru/'}>Контакты</Link>
								</li>
								<li className={styles.columnItem}>
									<Link href={'https://telebon.ru/'}>База знаний</Link>
								</li>
							</ul>
						</div>
						<div className={styles.column}>
							<h4 className={styles.columnTitle}>Возможности</h4>
							<ul className={styles.columnList}>
								<li className={styles.columnItem}>
									<span>Электронный журнал</span>
								</li>
								<li className={styles.columnItem}>
									<span>Онлайн-запись</span>
								</li>
								<li className={styles.columnItem}>
									<span>Запись в Telegram</span>
								</li>
								<li className={styles.columnItem}>
									<span>Уведомления</span>
								</li>
								<li className={styles.columnItem}>
									<span>Аналитика и отчеты</span>
								</li>
							</ul>
						</div>
						<div className={styles.column}>
							<h4 className={styles.columnTitle}>Для любого бизнеса</h4>
							<ul className={styles.columnList}>
								<li className={styles.columnItem}>
									<span>Красота</span>
								</li>
								<li className={styles.columnItem}>
									<span>Медицина</span>
								</li>
								<li className={styles.columnItem}>
									<span>Спорт</span>
								</li>
								<li className={styles.columnItem}>
									<span>Бытовые услуги</span>
								</li>
							</ul>
						</div>
					</div>
					<div className={styles.feedback}>
						<span className={styles.link} onClick={handlePhoneClick}>
							8 812 507-63-33
						</span>
						<p>
							Покажем систему в деле на ваших примерах и ответим на все вопросы.
							Свяжемся в течение рабочего дня.
						</p>
						<button onClick={() => setIsModalOpen(true)}>
							Оставить заявку
						</button>
					</div>
					{/* <div className={styles.row}> */}
					{/* <div className={styles.contact}>
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
							</div> */}
					{/* <div
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
									<Link href={'/aboutus'}>
										<p>Почему Telebon</p>
									</Link>
									{/*<Link href={'/'}>*/}
					{/*	<p>Бот для записи</p>*/}
					{/*</Link>
								</div>
								<div className={styles.column}>
									<p className={styles.title}>ДОКУМЕНТЫ</p>
									<div className={styles.line}></div>
									<Link href={'/info/licence'} target={'_blank'}>
										<p>Пользовательское соглашение</p>
									</Link>
									<Link href={'/info/agreement'} target={'_blank'}>
										<p>Лицензионный договор</p>
									</Link>
									<Link href={'/info/privacy-policy'} target={'_blank'}>
										<p>Конфиденциальность</p>
									</Link>
									{/*<div className={styles.social}>*/}
					{/*	<IconInstance name={EIcons.footertelegramicon} />*/}
					{/*	<IconInstance name={EIcons.footervkicon} />*/}
					{/*</div>
								</div>
							</div> */}
					{/* </div> */}
				</div>

				{/* <div className={styles.present}>
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
				</div> */}
				<div className={styles.footer__bottom}>
					<div>
						<Link href="/">
							<div className={styles.logo}>
								<Image src={LogoImageWhite} alt="logotext" />
							</div>
						</Link>
					</div>
					{/* <p>© ООО Группа Компаний «Белый Медведь»</p>
					{isMobile ? null : (
						<div
							style={{
								width: '0.1042vw',
								height: '0.1042vw',
								borderRadius: '100%',
								background: '#647084',
							}}
						></div>
					)} */}
					{/* <div
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
					</div> */}
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							gap: isMobile ? '4.1026vw' : '2.552vw',
							maxWidth: isMobile ? 'none' : '4.4271vw',
						}}
					>
						<Link
							href={'https://t.me/telebon_channel'}
							target={'_blank'}
							aria-label="telegram"
							className={styles.socialLink}
						>
							<IconInstance name={EIcons.telegramicon} />
							<span>Telegram</span>
						</Link>
						<Link
							href={'https://vk.com/teleboncrm'}
							target={'_blank'}
							aria-label="vk"
							className={styles.socialLink}
						>
							<IconInstance name={EIcons.vkicon} />
							<span>Вконтакте</span>
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
