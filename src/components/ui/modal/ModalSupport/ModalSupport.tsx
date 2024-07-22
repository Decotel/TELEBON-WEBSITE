import React, { useEffect, useRef } from 'react'
import styles from './ModalSupport.module.scss'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import cn from 'classnames'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'
import Link from 'next/link'
import useMatchMedia from '@/hooks/useMatchMedia'

interface ModalProps {
	isOpen: boolean
	setIsModalOpen: (isOpen: boolean) => void
	onClose: () => void
}

export interface FormValues {
	name: string
	phoneNumber: string
	consent: boolean
	isValidForm: boolean
}

const ModalSupport: React.FC<ModalProps> = ({
	isOpen,
	setIsModalOpen,
	onClose,
}) => {
	const isMobile = useMatchMedia('768')
	const modalOverlayRef = useRef(null)
	const [isClosing, setIsClosing] = React.useState(false)
	const [isSuccess, setIsSuccess] = React.useState(false)
	const initialValues = {
		name: '',
		phoneNumber: '',
		consent: false,
		isValidForm: false,
	}

	const validate = (values: any) => {
		const errors: any = {}
		if (!values.name) {
			errors.name = 'Введите имя'
		} else if (!/^[а-яёЁА-Я\s]+$/i.test(values.name.trim())) {
			errors.name = 'Имя должно содержать только русские буквы'
		}
		if (!values.phoneNumber) {
			errors.phoneNumber = 'Введите корректный номер телефона'
		}
		if (!values.consent) {
			errors.consent = 'Необходимо дать согласие'
		}
		return errors
	}

	const onSubmit = async (values: FormValues) => {
		try {
			const response = await fetch(
				`https://code10.ru/bot_prod/send_info?name=${values.name}&phone=${values.phoneNumber}`,
				{
					method: 'POST',
				},
			)
			if (response.ok) {
				console.log('Данные успешно отправлены', response)
				setIsSuccess(true)
				formik.resetForm()
			} else {
				console.error('Ошибка при отправке данных:', response.statusText)
			}
		} catch (error) {
			console.error('Ошибка при отправке данных:', error)
		}
	}

	const formik = useFormik({
		initialValues,
		onSubmit,
		validate,
	})

	useEffect(() => {
		const isValidForm =
			formik.values.name !== '' &&
			formik.values.phoneNumber !== '' &&
			formik.values.phoneNumber.replace(/[()-]/g, '').trim().length === 14 &&
			/^[а-яёЁА-Я\s]+$/i.test(formik.values.name.trim()) &&
			formik.values.consent
		formik.setFieldValue('isValidForm', isValidForm)
	}, [formik.values])

	useEffect(() => {
		if (!isOpen) {
			setIsClosing(true)
			setIsSuccess(false)
		}
	}, [isOpen])

	const handleClose = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (event.target === event.currentTarget) {
			setIsSuccess(false)
			setIsClosing(false)
			onClose()
		}
	}

	const onSubmitHandler: React.MouseEventHandler<HTMLButtonElement> = event => {
		event.preventDefault()
		onSubmit(formik.values)
	}

	return (
		<noindex>
			<div
				className={cn(styles.modalOverlay, {
					[styles.active]: isOpen,
					[styles.closing]: isClosing,
				})}
				onClick={handleClose}
			>
				{isSuccess ? (
					<div className={styles.modal} style={{ background: '#00BE70' }}>
						<div className={styles.success}>
							<IconInstance name={EIcons.success} />
						</div>
						<div style={{ height: '0.83vw' }}></div>
						<div className={styles.success}>
							<p>
								Заявка отправлена.
								<br />
								Мы скоро свяжется с Вами
							</p>
						</div>
						<div style={{ height: '3.6979vw' }}></div>
						<button
							type={'button'}
							onClick={() => {
								setIsSuccess(false)
								setIsClosing(false)
								onClose()
							}}
							style={{ background: '#ffffff', color: '#2A2C32' }}
						>
							<div className={styles.arrow}>ОК, СПАСИБО</div>
						</button>
					</div>
				) : (
					<div className={styles.modal}>
						<div className={styles.header}>
							<IconInstance name={EIcons.close} />
							{isMobile ? (
								<p className={styles.title}>Презентация</p>
							) : (
								<p className={styles.title}>Презентация Telebon</p>
							)}
						</div>
						<p style={{ width: '100%' }}>
							Покажем систему в деле, поможем с переездом и ответим
							{isMobile ? null : <br />} на вопросы. Перед оформлением подписки
							можно
							{isMobile ? null : <br />} протестировать бесплатно
						</p>
						<div className={styles.input_container}>
							<div className={styles.input}>
								<input
									type="text"
									name="name"
									placeholder="Укажите Ваше Имя"
									className={styles.custom_input}
									value={formik.values.name}
									onChange={formik.handleChange}
								/>
								<InputMask
									mask="+7 (999) 999-99-99"
									maskChar=" "
									type="text"
									name="phoneNumber"
									placeholder="Номер телефона"
									className={styles.custom_input}
									value={formik.values.phoneNumber}
									onChange={formik.handleChange}
								/>
							</div>
							<label className={styles.checkbox_container}>
								<input
									type="checkbox"
									name="consent"
									className={styles.checkbox}
									checked={formik.values.consent}
									onChange={formik.handleChange}
								/>
								<p>
									Согласие на обработку{' '}
									<span>
										<Link href={'/'}>персональных данных</Link>
									</span>
								</p>
							</label>
						</div>
						<button
							type={'button'}
							disabled={!formik.isValid || !formik.values.isValidForm}
							onClick={onSubmitHandler}
						>
							<div className={styles.arrow}>ОТПРАВИТЬ ЗАЯВКУ</div>
						</button>
					</div>
				)}
			</div>
		</noindex>
	)
}

export default ModalSupport
