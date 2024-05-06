import React, { FC, useState } from 'react'
import styles from './DescriptionA.module.scss'
import cn from 'classnames'
import TextAnimation from '@/ui/animation/text-animation/TextAnimation'
import DescriptionBackground from '../../../../assets/icons/DescriptionBackground.png'
import Image from 'next/image'
import { propoData } from '@/screens/main/descriptiona/propo-data'

interface PropoData {
	title: string
	icon: React.ReactNode
	img: React.ReactNode
	description: string
}

const DescriptionA: FC = () => {
	const texts = ['простая', 'удобная']
	const [activeIndex, setActiveIndex] = useState<number>(0)

	const handleClick = (index: number) => {
		setActiveIndex(index)
	}

	return (
		<div className={cn(styles.fuck, `wrapper`)}>
			<h1>
				По-настоящему&nbsp; <TextAnimation texts={texts} />
			</h1>
			<h1>запись клиентов</h1>
			<div className={styles.row}>
				<div className={styles.column}>
					{propoData?.map((item: PropoData, index) => (
						<div
							className={cn(styles.card, {
								[styles.active]: index === activeIndex,
							})}
							key={index}
							onMouseEnter={() => handleClick(index)}
						>
							<div className={styles.circle}>{item.icon}</div>
							<p>{item.title}</p>
							{index === activeIndex ? (
								<div className={styles.additional_text}>
									<div className={styles.container}>
										<p>{item.description}</p>
										<button className={styles.additional_button}>
											Перейти
										</button>
									</div>
								</div>
							) : null}
						</div>
					))}
					<button>Попробовать бесплатно</button>
				</div>
				<div className={styles.image}>
					<Image
						src={DescriptionBackground}
						alt="Описание фона"
						className={styles.background}
					/>

					{propoData[activeIndex]?.img}
				</div>
			</div>
		</div>
	)
}

export default DescriptionA
