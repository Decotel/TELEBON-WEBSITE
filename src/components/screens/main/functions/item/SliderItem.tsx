import React, { FC } from 'react'
import styles from './SliderItem.module.scss'
import cn from 'classnames'
import { ICard } from '@/screens/main/functions/Functions'
import Link from 'next/link'

interface IProps {
	item: ICard
	index: number
}

const SliderItem: FC<IProps> = props => {
	const { item, index } = props
	return (
		<div className={styles.base}>
			<div className={cn(styles.card, styles[`card${index}`])}>
				<div className={styles.text}>
					<p>{item.title}</p>
					<span>{item.description}</span>
					<Link href={'https://lk.telebon.ru/registration'} target={'_blank'}>
						<button>Подробнее</button>
					</Link>
				</div>
				{item.image}
			</div>
		</div>
	)
}

export default SliderItem
