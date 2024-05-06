import React, { FC } from 'react'
import styles from './SliderItem.module.scss'
import cn from 'classnames'
import { ICard } from '@/screens/main/slider/SliderBlock'

interface IProps {
	item: ICard
}

const SliderItem: FC<IProps> = props => {
	const { item } = props
	return (
		<div className={styles.base}>
			<div className={styles.card}>
				<div className={styles.icon}>{item.icon}</div>
				<p>{item.title}</p>
				<div className={styles.image}>{item.image}</div>
			</div>
		</div>
	)
}

export default SliderItem
