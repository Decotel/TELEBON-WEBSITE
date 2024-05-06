import React, { FC, useState } from 'react'
import styles from './Cards.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../../assets/icons/icon'

const Cards: FC = () => {
	return (
		<div className={cn(styles.base, `wrapper`)}>
			<div className={styles.main_container}>
				<div className={styles.card}>
					<div className={styles.title}>
						<h4>НЕЗАВИСИМОСТЬ</h4>
					</div>
					<div className={styles.description}>
						<p>
							Вы больше не будете привязаны не к одной из систем. Личный бот -
							это индивидуальность и свобода
						</p>
					</div>
					<div className={styles.column}>
						<div className={styles.row}>
							<IconInstance name={EIcons.colorswatch} />
							<p>Собственный дизайн</p>
						</div>
						<div className={styles.row}>
							<IconInstance name={EIcons.settings} />
							<p>Персональные настройки</p>
						</div>
						<div className={styles.row}>
							<IconInstance name={EIcons.cursor} />
							<p>Свободные текста</p>
						</div>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.title}>
						<h4>УДОБСТВО</h4>
					</div>
					<div className={styles.description}>
						<p>
							Клиенту проще Вас найти, бот всегда под рукой. Создание
							бронирования меньше чем за 1 минуту
						</p>
					</div>
					<div className={styles.column}>
						<div className={styles.row}>
							<IconInstance name={EIcons.filequestion} />
							<p>Без поиска ссылок</p>
						</div>
						<div className={styles.row}>
							<IconInstance name={EIcons.messagechat} />
							<p>Прямое общение</p>
						</div>
						<div className={styles.row}>
							<IconInstance name={EIcons.userprofilestar} />
							<p>История записей</p>
						</div>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.title}>
						<h4>ВЫГОДА</h4>
					</div>
					<div className={styles.description}>
						<p>
							Не надо больше платить за уведомления СМС и WhatsApp. Все
							сообщение и рассылки внутри Telegram абсолютно бесплатны!
						</p>
					</div>
					<div className={styles.column}>
						<div className={styles.row}>
							<IconInstance name={EIcons.coinbroken} />
							<p>Бесплатные сообщения</p>
						</div>
						<div className={styles.row}>
							<IconInstance name={EIcons.bellringing} />
							<p>Бесплатные уведомления</p>
						</div>
						<div className={styles.row}>
							<IconInstance name={EIcons.gift} />
							<p>Бесплатный хостинг бота</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cards
