import React, { FC, useState } from 'react'
import styles from './Recording.module.scss'
import cn from 'classnames'
import RecordingPhone from '../../../../assets/icons/RecordingPhone.png'
import RecordingTelegram from '../../../../assets/icons/RecordingTelegram.png'
import Image from 'next/image'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'

const Recording: FC = () => {
	return (
		<div className={cn(styles.fuck, `wrapper`)}>
			<div className={styles.main_container}>
				<div className={styles.left}>
					<div className={styles.left_head}>
						<h2>Уникальный инструмент для записи</h2>
						<p>Персональный Telegram бот</p>
					</div>
					<div className={styles.row}>
						<div className={styles.phone}>
							<Image src={RecordingPhone} alt={''} />
						</div>
						<div className={styles.column}>
							<Image src={RecordingTelegram} alt={''} />
							<button>СОЗДАТЬ ЗА 5 МИНУТ</button>
						</div>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.right_head}>
						<span>ЗАПИСЬ НА УСЛУГИ ПО НОВОМУ</span>
						<h3>Предоставьте клиентам возможность записываться удобно</h3>
						<p>
							Вашим клиентам больше не потребуется искать Ваш номер телефона или
							страницу в соцсетях. Он сможет просто открыть Telegram{' '}
						</p>
					</div>
					<div>
						<IconInstance name={EIcons.recordingtelegram} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Recording
