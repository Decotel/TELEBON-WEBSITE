import { FC, useEffect, useState } from 'react'
import { IType } from '@/shared/types/option.types'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'
import styles from './Layout.module.scss'
import { useRouter } from 'next/router'

const Layout: FC<IType> = ({ children }) => {
	const [is404Page, setIs404Page] = useState(false)
	const router = useRouter()

	useEffect(() => {
		const handleRouteChange = (url: string) => {
			if (
				url === '/404' ||
				(url !== '/price' &&
					url !== '/' &&
					url !== '/aboutus' &&
					url !== '/document')
			) {
				setIs404Page(true)
			} else {
				setIs404Page(false)
			}
		}

		handleRouteChange(router.pathname)

		router.events.on('routeChangeComplete', handleRouteChange)

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
		}
	}, [router.pathname])

	return (
		<div className={styles.container}>
			<>
				{!is404Page ? (
					<>
						<Header />
						{children}
						<Footer />
					</>
				) : (
					<>{children}</>
				)}
			</>
		</div>
	)
}

export default Layout
