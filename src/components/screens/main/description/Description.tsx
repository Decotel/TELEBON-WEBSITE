import React, { FC } from 'react'
import styles from './Description.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import Description0 from '../../../../assets/icons/Description0.png'
import { EIcons, Icon as IconInstance } from '../../../../assets/icons/icon'
const Description: FC = () => {
	return (
		<div className={cn(styles.fuck, 'wrapper')}>
			<div className={styles.main_container}>
				<div className={styles.text}>
					<h2>
						По-настоящему <span>простая</span>
						<br /> запись клиентов
					</h2>
					<p>
						Telebon CRM - Российская программа для записи и учёта клиентов на
						услуги, разработана в г. Кирове (Кировская обл.)
					</p>
				</div>
				<div className={styles.gradient}></div>
				<div className={styles.anim_container}>
					<div className={styles.box}>
						<div className={styles.row}>
							<div className={styles.column}>
								<IconInstance name={EIcons.img1} />
								<IconInstance name={EIcons.img2} />
								<IconInstance name={EIcons.img3} />
								<IconInstance name={EIcons.img4} />
								<IconInstance name={EIcons.img5} />
								<IconInstance name={EIcons.img6} />
								<IconInstance name={EIcons.img7} />
								<IconInstance name={EIcons.img1} />
								<IconInstance name={EIcons.img2} />
								<IconInstance name={EIcons.img3} />
								<IconInstance name={EIcons.img4} />
								<IconInstance name={EIcons.img5} />
								<IconInstance name={EIcons.img6} />
								<IconInstance name={EIcons.img7} />
							</div>
							<div className={styles.column}>
								<IconInstance name={EIcons.img8} />
								<IconInstance name={EIcons.img9} />
								<IconInstance name={EIcons.img10} />
								<IconInstance name={EIcons.img11} />
								<IconInstance name={EIcons.img12} />
								<IconInstance name={EIcons.img13} />
								<IconInstance name={EIcons.img14} />
								<IconInstance name={EIcons.img8} />
								<IconInstance name={EIcons.img9} />
								<IconInstance name={EIcons.img10} />
								<IconInstance name={EIcons.img11} />
								<IconInstance name={EIcons.img12} />
								<IconInstance name={EIcons.img13} />
								<IconInstance name={EIcons.img14} />
							</div>
							<div className={styles.column}>
								<IconInstance name={EIcons.img15} />
								<IconInstance name={EIcons.img16} />
								<IconInstance name={EIcons.img17} />
								<IconInstance name={EIcons.img18} />
								<IconInstance name={EIcons.img19} />
								<IconInstance name={EIcons.img20} />
								<IconInstance name={EIcons.img21} />
								<IconInstance name={EIcons.img15} />
								<IconInstance name={EIcons.img16} />
								<IconInstance name={EIcons.img17} />
								<IconInstance name={EIcons.img18} />
								<IconInstance name={EIcons.img19} />
								<IconInstance name={EIcons.img20} />
								<IconInstance name={EIcons.img21} />
							</div>
							<div className={styles.column}>
								<IconInstance name={EIcons.img22} />
								<IconInstance name={EIcons.img23} />
								<IconInstance name={EIcons.img24} />
								<IconInstance name={EIcons.img25} />
								<IconInstance name={EIcons.img26} />
								<IconInstance name={EIcons.img27} />
								<IconInstance name={EIcons.img28} />
								<IconInstance name={EIcons.img22} />
								<IconInstance name={EIcons.img23} />
								<IconInstance name={EIcons.img24} />
								<IconInstance name={EIcons.img25} />
								<IconInstance name={EIcons.img26} />
								<IconInstance name={EIcons.img27} />
								<IconInstance name={EIcons.img28} />
							</div>
							<div className={styles.column}>
								<IconInstance name={EIcons.img29} />
								<IconInstance name={EIcons.img30} />
								<IconInstance name={EIcons.img31} />
								<IconInstance name={EIcons.img32} />
								<IconInstance name={EIcons.img33} />
								<IconInstance name={EIcons.img34} />
								<IconInstance name={EIcons.img35} />
								<IconInstance name={EIcons.img29} />
								<IconInstance name={EIcons.img30} />
								<IconInstance name={EIcons.img31} />
								<IconInstance name={EIcons.img32} />
								<IconInstance name={EIcons.img33} />
								<IconInstance name={EIcons.img34} />
								<IconInstance name={EIcons.img35} />
							</div>
							<div className={styles.column}>
								<IconInstance name={EIcons.img36} />
								<IconInstance name={EIcons.img37} />
								<IconInstance name={EIcons.img38} />
								<IconInstance name={EIcons.img39} />
								<IconInstance name={EIcons.img40} />
								<IconInstance name={EIcons.img41} />
								<IconInstance name={EIcons.img42} />
								<IconInstance name={EIcons.img36} />
								<IconInstance name={EIcons.img37} />
								<IconInstance name={EIcons.img38} />
								<IconInstance name={EIcons.img39} />
								<IconInstance name={EIcons.img40} />
								<IconInstance name={EIcons.img41} />
								<IconInstance name={EIcons.img42} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Description
