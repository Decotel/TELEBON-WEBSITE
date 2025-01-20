import styles from './Card.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import useMatchMedia from '@/hooks/useMatchMedia'
import { motion } from 'framer-motion'
import { formatDescription } from '@/screens/posts/post/home/Home'
import React, { FC } from 'react'
import Link from 'next/link'
import { ComponentPageCard } from '@/screens/posts/interfaces'

interface DescriptionProps {
	data: ComponentPageCard
}

const Card: FC<DescriptionProps> = ({ data }) => {
	const isMobile = useMatchMedia('768')

	return (
		<div className={cn(styles.body, 'wrapper')}>
			<div className={styles.container}>
				<div
					className={cn(
						styles.card,
						data.view == 'right' ? styles.right : null,
					)}
				>
					{data.view == 'left' ? (
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.5 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
							}}
						>
							{data?.image && data.image?.data ? (
								<Image
									src={
										process.env.NEXT_PUBLIC_API_URL +
										data.image.data.attributes.url
									}
									alt={data.image.data.attributes.alternativeText}
									loading="lazy"
									width={data.image.data.attributes.width}
									height={data.image.data.attributes.height}
								/>
							) : (
								<div className={styles.emptyImg}></div>
							)}
						</motion.div>
					) : null}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
						}}
						className={styles.text}
					>
						<h2>{data.title}</h2>
						<p>{formatDescription(data.description)}</p>
					</motion.div>
					{data.view == 'right' ? (
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.5 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
							}}
						>
							{data?.image && data?.image?.data ? (
								<Image
									src={
										process.env.NEXT_PUBLIC_API_URL +
										data.image.data.attributes.url
									}
									alt={data.image.data.attributes.alternativeText}
									loading="lazy"
									width={data.image.data.attributes.width}
									height={data.image.data.attributes.height}
								/>
							) : (
								<div className={styles.emptyImg}></div>
							)}
						</motion.div>
					) : null}
				</div>
				{data.button ? (
					<Link
						href={'https://lk.telebon.ru/auth'}
						target={'_blank'}
						style={{
							display: 'flex',
							justifyContent: isMobile ? 'center' : 'flex-start',
						}}
					>
						<button aria-labelledby="Попробовать сейчас">
							Попробовать сейчас
						</button>
					</Link>
				) : null}
			</div>
		</div>
	)
}

export default Card
