import Image from 'next/image'
import React from 'react'
import MasterValeria from '../../../../assets/icons/MasterValeria.png'
import MasterDiana from '../../../../assets/icons/MasterDiana.png'
import MasterKristina from '../../../../assets/icons/MasterKristina.png'

export const propoData = [
	// {
	// 	feedback: (
	// 		<>
	// 			“Приложение очень удобное для использования не только бьюти мастеров.
	// 			Очень порадовала функция ТГ-бота, клиенты очень довольны, ведь
	// 			большинство сейчас пользуются именно телеграмм, не нужно скачивать доп
	// 			приложение! <br />
	// 			Создать бота легко, и записи сразу там отображаются.”
	// 		</>
	// 	),
	// 	name: 'Валерия',
	// 	profession: 'Лашмейкер',
	// 	experience: 'более 7-и лет',
	// 	city: 'Киров',
	// 	image: <Image src={MasterValeria} alt={''} />,
	// 	button: 'Записаться к Валерии',
	//  link: ''
	// },
	{
		feedback: (
			<>
				“Недавно подключила себе сервис Telebon (для ведения онлайн-записи).
				Большим плюсом сервиса является то, что можно подключить телеграмм-бот,
				через который очень удобно записаться на услуги ко мне, это прям
				палочка-выручалочка для мастера и клиентов! В целом, функционал сервиса
				удобен и понятен, легко разобраться. В поддержке быстро консультируют,
				помогли мне разобраться с уведомлениями и ответили на все вопросы.
				<br />
				Благодарю разработчиков!” <br />
				<br />
				“Сделаю красивые брови и макияж любой сложности, в соответствии с
				пожеланиями”
			</>
		),
		name: 'Диана',
		profession: 'Бровист-визажист',
		experience: 'более 1,5-х лет',
		city: 'Ульяновск',
		image: <Image src={MasterDiana} alt={''} />,
		button: 'Записаться к Диане',
		link: 'https://t.me/DkMakeupBrows_bot',
	},
	{
		feedback: (
			<>
				“Очень удобное приложение, <br />
				Пользоваться им, одно <br />
				удовольствие 😍 <br />
				<br />
				Современный дизайн, <br />
				запись через Telegram-бот <br />
				очень крутая!”
			</>
		),
		name: 'Кристина',
		profession: (
			<>
				Мастер депиляции
				<br />и аппаратного массажа
			</>
		),
		experience: 'более 3-х лет',
		city: 'Липецк',
		image: <Image src={MasterKristina} alt={''} />,
		button: 'Записаться к Кристине',
		link: 'https://t.me/Massagedepilationbot',
	},
]
