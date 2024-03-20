import React, { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import Link from 'next/link'
import Image from 'next/image'
import Img9 from '../../../assets/baza-znaniy/img9.svg'

const SettingUpAWorkSchedule: FC = () => {
	return (
		<Meta
			title="Настройка графика работы организации"
			description="Настройка графика работы организации"
		>
			<div>
				<p
					style={{
						textAlign: 'left',
						margin: '5vh',
						fontSize: '16px',
					}}
				>
					<Link href="/baza-znaniy">Назад</Link>
				</p>
				<div
					style={{
						width: '60vw',
						margin: '0 20vw',
						display: 'flex',
						alignSelf: 'center',
						flexDirection: 'column',
						gap: '5px',
					}}
				>
					<h1 style={{ marginBottom: '20px' }}>
						Настройка графика работы организации
					</h1>
					<p>
						В любой компании всё начинается с малого, так и в Telebon первое,
						что необходимо указать – это «режим работы» организации. Найти его
						просто «Компания» {'>'} «Редактировать» {'>'} «Изменить режим
						работы». Выбираете дни, в которые вы осуществляете услуги, выбираете
						время начала рабочего дня и его окончание. Обязательно сохраните
						выбранные настройки клавишей «Применить изменения».
					</p>
					<br />
					<p>Данная функция позволяет:</p>
					<li>Установить временные рамки в «журнале записи»;</li>
					<li>
						Верно отслеживать аналитику о работе сотрудников и организации;
					</li>
					<li>Исключить ошибки администраторов при записи клиентов.</li>
					<br />
					<Image src={Img9} alt={'Настройка режима работы организации'} />
				</div>
			</div>
		</Meta>
	)
}

export default SettingUpAWorkSchedule