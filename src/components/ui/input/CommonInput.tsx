import React, { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'
import ModalSupport from '@/ui/modal/ModalSupport/ModalSupport'
import { FormValues } from '@/screens/main/support/Support'
import {
	CheckboxContainer,
	Input,
	InputContainer,
	MainContainer,
} from '@/ui/input/CommonInput.styled'
import CommonButton from '@/ui/button/CommonButton'

interface CommonInputProps {
	palette?: 'primary' | 'orange'
}

const CommonInput: FC<CommonInputProps> = ({ palette }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)
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
		setIsModalOpen(true)
		try {
			const response = await fetch(
				`https://code101.ru/bot_prod/send_info?name=${values.name}&phone=${values.phoneNumber}`,
				{
					method: 'POST',
				},
			)
			if (response.ok) {
				console.log('Данные успешно отправлены', response)
				setIsModalOpen(true)
				setTimeout(() => formik.resetForm(), 1000)
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

	return (
		<MainContainer>
			<form onSubmit={formik.handleSubmit}>
				<InputContainer>
					<Input palette={palette}>
						<input
							type="text"
							name="name"
							placeholder="Введите Ваше Имя"
							className="custom_input"
							value={formik.values.name}
							onChange={formik.handleChange}
						/>
						<InputMask
							mask="+7 (999) 999-99-99"
							maskChar=" "
							type="text"
							name="phoneNumber"
							placeholder="Номер телефона"
							className="custom_input"
							value={formik.values.phoneNumber}
							onChange={formik.handleChange}
						/>
					</Input>
					<CheckboxContainer palette={palette}>
						<input
							type="checkbox"
							name="consent"
							className="checkbox"
							checked={formik.values.consent}
							onChange={formik.handleChange}
						/>
						<p>
							Вы соглашаетесь на обработку персональных данных и обязуетесь
							соблюдать условия{' '}
							<span>
								<Link href={'/info/agreement'}>
									Пользовательского соглашения
								</Link>
							</span>
						</p>
					</CheckboxContainer>
					<CommonButton
						size={'l'}
						color={palette}
						disabled={
							!formik.isValid || !formik.values.isValidForm || isModalOpen
						}
						type={'submit'}
					>
						Связаться
					</CommonButton>
					{/*<Button*/}
					{/*	type="submit"*/}
					{/*	disabled={*/}
					{/*		!formik.isValid || !formik.values.isValidForm || isModalOpen*/}
					{/*	}*/}
					{/*>*/}
					{/*	Связаться*/}
					{/*</Button>*/}
				</InputContainer>
			</form>
			{isModalOpen ? (
				<ModalSupport
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
				/>
			) : null}
		</MainContainer>
	)
}

export default CommonInput
