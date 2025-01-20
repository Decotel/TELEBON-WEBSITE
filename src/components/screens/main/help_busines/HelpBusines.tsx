import React, { FC } from 'react'
import styles from './HelpBusines.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import useMatchMedia from '@/hooks/useMatchMedia'
import HelpBusinesPhone from '../../../../assets/icons/main/help_busines/HelpBusinesPhone.webp'
import HelpBusinesTablet from '../../../../assets/icons/main/help_busines/HelpBusinesTablet.webp'
import { motion } from 'framer-motion'

const HelpBusines: FC = () => {
	const isMobile = useMatchMedia('768')

	return (
		<div className={cn(styles.body, 'wrapper')}>
			<div className={styles.container}>
				<div className={styles.card}>
					<motion.div
						className={styles.phone}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '40vw' : '10vw' },
						}}
					>
						<Image src={HelpBusinesPhone} alt={''} loading="lazy" />
					</motion.div>
					<motion.div
						className={styles.text}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '40vw' : '10vw' },
						}}
					>
						<h3>
							Телебон помогает {isMobile ? null : <br />}вашему бизнесу
							{isMobile ? null : <br />} расти
						</h3>
						<Link href={'https://lk.telebon.ru/auth'} target={'_blank'}>
							<button aria-labelledby="Начать бесплатно">
								Начать бесплатно
							</button>
						</Link>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}
						variants={{
							visible: { opacity: 1 },
							hidden: { opacity: 0 },
						}}
					>
						<Image
							src={HelpBusinesTablet}
							alt={'Онлайн-запись для сферы услуг'}
							loading="lazy"
						/>
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default HelpBusines
