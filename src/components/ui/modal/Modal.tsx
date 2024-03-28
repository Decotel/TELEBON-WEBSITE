import React from 'react'
import styles from './Modal.module.scss'
import { EIcons, Icon as IconInstance } from '../../../assets/icons/icon'
import cn from 'classnames'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	if (!isOpen) return null

	return (
		<div className={styles.modalOverlay} onClick={onClose}>
			<div className={styles.modal}>
				<IconInstance name={EIcons.success} />
				<p className={styles.title}>Спасибо!</p>
				<p>Скоро мы с Вами свяжемся 🤙🏻 </p>
				<button>
					<div className={styles.arrow}>
						<IconInstance name={EIcons.arrowleft} />
						Вернуться на главную
					</div>
				</button>
			</div>
		</div>
	)
}

export default Modal
