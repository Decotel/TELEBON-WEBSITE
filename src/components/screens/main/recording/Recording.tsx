import React, { FC, useState } from 'react'
import styles from './Recording.module.scss'
import cn from 'classnames'
import RecordingPhone from '../../../../assets/icons/recording/RecordingPhone.png'
import Click from '../../../../assets/icons/recording/Click.png'
import Image from 'next/image'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import Cards from '@/screens/main/recording/cards/Cards'
import DescriptionA from '@/screens/main/recording/descriptiona/DescriptionA'
import RecordingBell from '../../../../assets/icons/recording/RecordingBell.png'
import Description from '@/screens/main/description/Description'

const Recording: FC = () => {
	return (
		<div className={cn(styles.base, `wrapper`)}>
			<DescriptionA />
			<div className={styles.up_text}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '0.833vw',
					}}
				>
					<h2>
						Новый модуль для записи
						<br /> через Telegram
					</h2>
					<p>
						Создаем персональные и уникальные Telegram боты для Онлайн-записи
						<br />
						ваших клиентов. Более 85% пользователей оценили этот метод, как
						самый
						<br />
						удобный
					</p>
				</div>
				<IconInstance name={EIcons.recordingtelegram} />
			</div>
			<div className={styles.main_container}>
				<div className={styles.left}>
					<div className={styles.image}>
						<div className={styles.phone}>
							<Image src={RecordingPhone} alt={''} />
						</div>
						<div className={styles.click}>
							<Image src={Click} alt={''} />
						</div>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.right_head}>
						<div className={styles.text}>
							<h3>
								Предоставьте клиентам
								<br /> возможность записываться
								<br /> свободно
							</h3>
							<p>
								Клиентам больше не потребуется искать Ваш <br />
								номер телефона или страницу в соцсетях. Он
								<br /> сможет просто открыть Telegram
							</p>
						</div>
						{/*<IconInstance name={EIcons.recordingbell} />*/}
						<Image src={RecordingBell} alt={''} />
					</div>
					<div className={styles.telegram_block}>
						<IconInstance name={EIcons.recordingtelegramblock} />
						<p>
							У Вас новая запись!
							<br />7 мая, 2024 • 19:00 Анна •<br /> Клиент Ольга
						</p>
					</div>
				</div>
			</div>
			<Description />
			<Cards />
		</div>
	)
}

export default Recording
