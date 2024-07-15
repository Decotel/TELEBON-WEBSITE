import React, { FC, useEffect, useState } from 'react'
import styles from './HelpBusines.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
import Image from 'next/image'
import { useFormik } from 'formik'
import Link from 'next/link'
import useMatchMedia from '@/hooks/useMatchMedia'
import HelpBusinesPhone from '../../../../assets/icons/main/help_busines/HelpBusinesPhone.png'
import HelpBusinesTablet from '../../../../assets/icons/main/help_busines/HelpBusinesTablet.png'
import { motion } from 'framer-motion'

const HelpBusines: FC = () => {
	const isMobile = useMatchMedia('768')

	return (
		<div className={cn(styles.body, 'wrapper')}>
			<div className={styles.container}>
				<div className={styles.card}>
					<motion.div
						className={styles.phone}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '40vw' : '10vw' },
						}}>
						<Image src={HelpBusinesPhone} alt={''} />
					</motion.div>
					<motion.div
						className={styles.text}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: isMobile ? '40vw' : '10vw' },
						}}>
						<h3>Телебон помогает {isMobile ? null : <br />}вашему бизнесу{isMobile ? null : <br />} расти</h3>
						<button>Начать бесплатно</button>
					</motion.div>
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}
						variants={{
							visible: { opacity: 1 },
							hidden: { opacity: 0 },
						}}>
						<Image src={HelpBusinesTablet} alt={''} />
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default HelpBusines
