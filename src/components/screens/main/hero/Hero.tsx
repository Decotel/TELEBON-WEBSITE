import React, { FC, useEffect, useRef } from 'react'
import styles from './Hero.module.scss'
import cn from 'classnames'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'

const Hero: FC = () => {
	return (
		<div className={cn(styles.fuck, 'wrapper')}>
			<div className={styles.row}>
				<div className={styles.column}>
					<IconInstance name={EIcons.img1} />
				</div>
				<div className={styles.column}>
					<IconInstance name={EIcons.img2} />
					<IconInstance name={EIcons.img3} />
				</div>
				<div className={styles.column}>
					<IconInstance name={EIcons.img4} />
					<IconInstance name={EIcons.img5} />
				</div>
				<div className={styles.column}>
					<IconInstance name={EIcons.img6} />
					<IconInstance name={EIcons.img7} />
				</div>
				<div className={styles.column}>
					<IconInstance name={EIcons.img8} />
					<IconInstance name={EIcons.img9} />
					<IconInstance name={EIcons.img10} />
				</div>
				<div className={styles.column}>
					<IconInstance name={EIcons.img11} />
					<IconInstance name={EIcons.img12} />
					<IconInstance name={EIcons.img13} />
				</div>
				<div className={styles.column}>
					<IconInstance name={EIcons.img14} />
					<IconInstance name={EIcons.img15} />
					<IconInstance name={EIcons.img16} />
					<IconInstance name={EIcons.img17} />
				</div>
				<div className={styles.column}>
					<IconInstance name={EIcons.img18} />
					<IconInstance name={EIcons.img19} />
					<IconInstance name={EIcons.img20} />
					<IconInstance name={EIcons.img28} />
				</div>
				<div className={styles.column}>
					<IconInstance name={EIcons.img21} />
					<IconInstance name={EIcons.img22} />
					<IconInstance name={EIcons.img23} />
					<IconInstance name={EIcons.img26} />
					<div style={{ width: '5vw', height: '5vw' }}></div>
				</div>
				<div className={styles.column}>
					<IconInstance name={EIcons.img24} />
					<IconInstance name={EIcons.img25} />
					<IconInstance name={EIcons.img27} />
					<IconInstance name={EIcons.img32} />
				</div>
				<div className={styles.column}>
					<IconInstance name={EIcons.img29} />
					<IconInstance name={EIcons.img30} />
					<IconInstance name={EIcons.img31} />
					<IconInstance name={EIcons.img33} />
				</div>
				<div className={styles.column}>
					<IconInstance name={EIcons.img34} />
					<IconInstance name={EIcons.img35} />
					<IconInstance name={EIcons.img36} />
				</div>
				<div className={styles.column}>
					<IconInstance name={EIcons.img37} />
					<IconInstance name={EIcons.img38} />
					<IconInstance name={EIcons.img39} />
				</div>
				<div className={styles.column}>
					<IconInstance name={EIcons.img40} />
					<IconInstance name={EIcons.img41} />
				</div>
				<div className={styles.column}>
					<IconInstance name={EIcons.img42} />
					<IconInstance name={EIcons.img43} />
				</div>
				<div className={styles.column}>
					<IconInstance name={EIcons.img44} />
					<IconInstance name={EIcons.img45} />
				</div>
				<div className={styles.column}>
					<IconInstance name={EIcons.img46} />
				</div>
			</div>
		</div>
	)
}

export default Hero
