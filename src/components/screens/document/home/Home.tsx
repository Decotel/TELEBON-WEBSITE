import React, { FC, useState } from 'react'
import Meta from '@/utils/meta/Meta'
import styles from './Home.module.scss'
import useMatchMedia from '@/hooks/useMatchMedia'
import License from '@/screens/document/License'
import Politics from '@/screens/document/Politics'
import Agreement from '@/screens/document/Agreement'

const Home: FC = () => {
	const isMobile = useMatchMedia('768')
	const [state, setState] = useState(1)

	return (
		<Meta title="Документы" description="Документы" image="logo_preview.png">
			<div className={styles.up}></div>
			<div className={styles.container}>
				<div className={styles.buttons}>
					<button onClick={() => setState(1)}>Лицензионный договор</button>
					<button onClick={() => setState(2)}>
						Пользовательское соглашение
					</button>
					<button onClick={() => setState(3)}>
						Политика конфиденциальности
					</button>
				</div>

				<div className={styles.content}>
					{state === 1 ? <License /> : null}
					{state === 2 ? <Agreement /> : null}
					{state === 3 ? <Politics /> : null}
				</div>
			</div>
		</Meta>
	)
}

export default Home
