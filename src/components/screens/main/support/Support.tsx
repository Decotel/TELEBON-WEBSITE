import React, { FC, useState, useEffect } from 'react'
import styles from './Support.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import { Field, Form, Formik, useFormik } from 'formik'
import InputMask from 'react-input-mask'
import Modal from '@/ui/modal/Modal'

interface SupportProps {
	nextBlockRef: React.RefObject<HTMLDivElement>
}

export interface FormValues {
	name: string
	phoneNumber: string
	consent: boolean
	isValidForm: boolean
}

const Support: FC<SupportProps> = ({ nextBlockRef }) => {
	const [copyActivePhone, setCopyActivePhone] = useState(false)
	const [copyActiveMail, setCopyActiveMail] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const initialValues: FormValues = {
		name: '',
		phoneNumber: '',
		consent: false,
		isValidForm: false,
	}

	const validate = (values: FormValues) => {
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

	const onSubmit = (values: FormValues) => {
		console.log(values)
		setIsModalOpen(true)
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

	const clickPhone = () => {
		setCopyActivePhone(true)
		setTimeout(() => setCopyActivePhone(false), 600)
		copyToClipboard('+7 (812) 507-63-33')
	}

	const clickMail = () => {
		setCopyActiveMail(true)
		setTimeout(() => setCopyActiveMail(false), 600)
		copyToClipboard('hello@telebon.ru')
	}

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text)
	}

	return (
		<div className={cn(styles.fuck, 'wrapper')} ref={nextBlockRef}>
			<div className={styles.main_container}>
				<div className={styles.left}>
					<div className={styles.title}>
						<h2>Всегда на связи!</h2>
						<p>Ответим в течение дня ✌🏻</p>
					</div>
					<form onSubmit={formik.handleSubmit}>
						<div className={styles.input_container}>
							<div className={styles.inputs}>
								<input
									type="text"
									name="name"
									placeholder="Введите Ваше Имя"
									className={styles.custom_input}
									value={formik.values.name}
									onChange={formik.handleChange}
								/>
								<InputMask
									mask="+7 (999) 999-99-99"
									maskChar=" "
									value={formik.values.phoneNumber}
									onChange={formik.handleChange}
									type="text"
									name="phoneNumber"
									placeholder="Номер телефона"
									className={styles.custom_input}
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
									Вы соглашаетесь на обработку персональных данных и обязуетесь
									соблюдать условия{' '}
									<span>
										<Link href="/info/agreement">
											Пользовательского соглашения
										</Link>
									</span>
								</p>
							</label>
							<button
								type="submit"
								className={cn(styles.button, {
									[styles.disabled]:
										!formik.isValid || !formik.values.isValidForm,
								})}
								disabled={!formik.isValid || !formik.values.isValidForm}
							>
								Связаться
							</button>
						</div>
					</form>
					<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
				</div>
				<div className={styles.right}>
					<div className={styles.card}>
						<IconInstance name={EIcons.supportcall} />
						<div
							className={cn(styles.copyboard, {
								[styles.active]: copyActivePhone,
							})}
							onClick={clickPhone}
						>
							<IconInstance name={EIcons.supportphone} />
						</div>
					</div>
					<div className={styles.card}>
						<IconInstance name={EIcons.supportmail} />
						<div
							className={cn(styles.copyboard, {
								[styles.active]: copyActiveMail,
							})}
							onClick={clickMail}
						>
							<IconInstance name={EIcons.supportmailaddress} />
						</div>
					</div>
					<div className={styles.card}>
						<IconInstance name={EIcons.supportworkinghours} />
						<div className={styles.working_hours}>
							<p>
								<span>Рабочие: </span>
								Пн-Пт, 9:00 - 18:00
							</p>
							<p>
								<span>Выходные: </span>
								Сб-Вс
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Support
