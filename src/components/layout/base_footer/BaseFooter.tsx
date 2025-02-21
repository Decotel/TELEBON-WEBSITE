import { FC } from 'react'
import styles from './BaseFooter.module.scss'
import Link from 'next/link'
import { EIcons, Icon } from '../../../assets/icons/icon'

const BaseFooter: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.logo}>
				<Icon name={EIcons.footervk}/>
				<Link href={'/'} className={styles.link}>© 2024, Telebon</Link>
			</div>
			<div className={styles.links}>
				<Link href={'https://vk.com/teleboncrm'}>
					<Icon name={EIcons.footervk}/>
				</Link>
				<Link href={'https://t.me/telebon_channel'}>
					<Icon name={EIcons.footertg}/>
				</Link>
			</div>
		</div>
	)
}

export default BaseFooter