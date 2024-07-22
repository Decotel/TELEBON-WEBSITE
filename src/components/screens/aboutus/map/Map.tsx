import React, { FC, useState } from 'react'
import styles from './Map.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import useMatchMedia from '@/hooks/useMatchMedia'
import { motion } from 'framer-motion'

const Map: FC = () => {
	const [scrollStarted, setScrollStarted] = useState<boolean>(false)
	const [hidden, setHidden] = useState<boolean>(false)
	const isMobile = useMatchMedia('768')
	const [platformLink, setPlatformLink] = useState('')
	const [isOpenDownload, setIsOpenDownload] = useState<boolean>(true)

	return (
		<div className={cn(styles.body, 'wrapper')}>
			<div className={styles.container}>
				<div className={styles.text}>
					<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
							}}>
						<h3>Получите сайт для</h3>
					</motion.div>
					<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: isMobile ? '30vw' : '10vw' },
							}}>
						<h3>размещения на карте</h3>
					</motion.div>
				</div>
				<div className={styles.map}>
					<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
							variants={{
								visible: { opacity: 1, x: 0 },
								hidden: { opacity: 0, x: isMobile ? '-30vw' : '-5vw' },
							}}
					className={styles.point}>
						<IconInstance name={EIcons.mappoint} />
						{isMobile ? null : <p>Студия PRO Nail</p>}
					</motion.div>
					<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
							variants={{
								visible: { opacity: 1, x: 0 },
								hidden: { opacity: 0, x: isMobile ? '-30vw' : '-5vw' },
							}}
					className={styles.point}>
						<IconInstance name={EIcons.mappoint} />
						{isMobile ? null : <p>Эрмитаж профи</p>}
					</motion.div>
					<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
							variants={{
								visible: { opacity: 1, x: 0 },
								hidden: { opacity: 0, x: isMobile ? '-30vw' : '-5vw' },
							}}
					className={styles.point}>
						<IconInstance name={EIcons.mappoint} />
						{isMobile ? null : <p>Лаборатория Anna Nail</p>}
					</motion.div>
					<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
							variants={{
								visible: { opacity: 1, x: 0 },
								hidden: { opacity: 0, x: isMobile ? '-30vw' : '-5vw' },
							}}
					className={styles.point}>
						<IconInstance name={EIcons.mappoint} />
						{isMobile ? null : <p>Барбершоп Man</p>}
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default Map
