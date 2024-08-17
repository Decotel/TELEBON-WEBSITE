import React, { FC } from 'react'
import styles from './AccountDeletion.module.scss'
import Meta from '@/utils/meta/Meta'
import DeleteImage from './delete_screen.png'
import Image from 'next/image'

const AccountDeletion: FC = () => {
	return (
		<Meta
			title="Удаление аккаунта"
			description="Удаление аккаунта"
			image="logo_preview.png"
		>
			<div className={styles.up}></div>

			<div className={styles.wrapper}>
				<h1 className={styles.title}>Удаление аккаунта</h1>

				<p>
					Пошаговая инструкция для удаления аккаунта Telebon, через мобильное
					приложение.
				</p>
				<p className={styles.bold}>
					1. В вашем профиле, перейдите в раздел «Настройки» - выберите пункт
					меню «Telebon App»
				</p>
				<p>• Перейдите в раздел «Удаление аккаунта»</p>
				<Image src={DeleteImage} alt="logotext" />
				<p className={styles.bold}>2. Выберите действие «Удалить аккаунт»</p>
				<p>• Подтвердите действие</p>
				<p className={styles.bold}>
					3. Готово, ваш аккаунт будет немедленно удален
				</p>
				<p className={styles.red}>
					Обратите внимание! Отправка запроса и его подтверждение, приведет к
					необратимому действию. Аккаунт и вся ваша личная информация будет
					немедленно удалена, безвозвратно.
				</p>
			</div>
		</Meta>
	)
}

export default AccountDeletion
