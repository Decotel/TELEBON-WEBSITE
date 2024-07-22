import Head from 'next/head'
import NextProgressBar from 'nextjs-progressbar'
import { FC } from 'react'

import Favicons from './Favicons'
import { IType } from '@/shared/types/option.types'
import { accessColor } from '@/config/constants'

const HeadProvider: FC<IType> = ({ children }) => {
	return (
		<>
			{/*<NextProgressBar*/}
			{/*	color={accessColor}*/}
			{/*	startPosition={0.3}*/}
			{/*	stopDelayMs={200}*/}
			{/*	height={3}*/}
			{/*/>*/}

			<Head>
				{/* <!-- Top.Mail.Ru counter --> */}
				<noscript>6zk0syi22z79zb81</noscript>
				<script
					type="text/javascript"
					dangerouslySetInnerHTML={{
						__html: `
							var _tmr = window._tmr || (window._tmr = []);
							_tmr.push({id: "3518034", type: "pageView", start: (new Date()).getTime()});
							(function (d, w, id) {
							if (d.getElementById(id)) return;
							var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
							ts.src = "https://top-fwz1.mail.ru/js/code.js";
							var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
							if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
							})(document, window, "tmr-code");
            `,
					}}
				/>
				<noscript>
					<div>
						<img
							src="https://top-fwz1.mail.ru/counter?id=3478248;js=na"
							style={{ position: 'absolute', left: '-9999px' }}
							alt="Top.Mail.Ru"
						/>
					</div>
				</noscript>
				{/* <!-- /Top.Mail.Ru counter --> */}
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1.0"
				/>
				<meta name="yandex-verification" content="71a52d8ec1db8eaa" />
				<Favicons />
				<meta name="theme-color" content={'#181B1E'} />
				<meta name="msapplication-navbutton-color" content={'#181B1E'} />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content={'#181B1E'}
				/>
			</Head>
			{children}
		</>
	)
}

export default HeadProvider
