import React, { FC } from 'react'
import styles from './SliderItem.module.scss'
import { ICard } from '@/screens/main/feedback/Feedback'
import cn from 'classnames'
import useMatchMedia from '@/hooks/useMatchMedia'
import Link from 'next/link'
import Image from 'next/image'
import { EIcons, Icon as IconInstance } from '../../../../../assets/icons/icon'

interface IProps {
	item: ICard
	index: number
}

const SliderItem: FC<IProps> = props => {
	const { item, index } = props
	const cardClass =
		index === 0
			? `${styles.card} ${styles['card-2']}`
			: index === 1
				? `${styles.card} ${styles['card-3']}`
				: `${styles.card} ${styles['card-3']}`
	const isMobile = useMatchMedia('768')

	return (
		<div className={styles.container}>
			<div className={cn(cardClass)}>
				{isMobile ? (
					<>
						<div>
							<div className={styles.image}>
								{/*<Image src={item.image} alt={''} />*/}
								{item.image}
							</div>
							<div className={styles.master}>
								<div className={styles.name}>
									<p>{item.name}</p>
								</div>
								<p>
									<span>{item.profession}</span>
								</p>
							</div>
							<div className={styles.feedback}>
								<p>{item.feedback}</p>
							</div>
						</div>
						<Link href={item.link} target={'_blank'}>
							<button>{item.button}</button>
						</Link>
					</>
				) : (
					<>
						<div className={styles.image}>
							{item.image}
							<div>{item.description}</div>
						</div>
						<div className={styles.master}>
							<div className={styles.name}>
								<p>{item.name}</p>
							</div>
							<p>
								Профессия: <span>{item.profession}</span>
								<br />
								Стаж работы: <span>{item.experience}</span>
								<br />
								Город: <span>{item.city}</span>
							</p>
						</div>
						<div className={styles.feedback}>
							<p>{item.feedback}</p>
						</div>
						<div className={styles.button_container}>
							<Link href={item.link} target={'_blank'}>
								<button>{item.button}</button>
							</Link>
							<Link href={item.linkvk} target={'_blank'}>
								<IconInstance name={EIcons.vklogo} />
							</Link>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default SliderItem