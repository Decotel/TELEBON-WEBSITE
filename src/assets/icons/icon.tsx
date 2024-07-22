import { WalletOutline } from './WalletOutline'
import { ArrowList } from './ArrowList'
import { Analytic } from './Analytic'
import { ButtonArrowRight } from './ButtonArrowRight'
import { RightArrow } from './RightArrow'
import { Close } from './Close'
import { Success } from './Success'
import { ButtonIcon } from './ButtonIcon'
import { ButtonArrowLeftWhite } from './ButtonArrowLeftWhite'
import { GooglePlayIcon } from './GooglePlayIcon'
import { AppStoreIcon } from './AppStoreIcon'
import { ButtonArrowRightWhite } from './ButtonArrowRightWhite'
import { ButtonArrowRightBlack } from './main/functions/ButtonArrowRightBlack'
import { UserIcon } from './UserIcon'
import { X } from './X'
import { FooterLogomark } from './main/footeri/FooterLogomark'
import { FooterAppStore } from './main/footeri/FooterAppStore'
import { FooterEmail } from './main/footeri/FooterEmail'
import { FooterGooglePlay } from './main/footeri/FooterGooglePlay'
import { FooterPhone } from './main/footeri/FooterPhone'
import { FooterRuStore } from './main/footeri/FooterRuStore'
import { FooterWhatsUp } from './main/footeri/FooterWhatsUp'
import { FooterWhatsUpIcon } from './main/footeri/FooterWhatsUpIcon'
import { FooterVKIcon } from './main/footeri/FooterVKIcon'
import { FooterTelegramIcon } from './main/footeri/FooterTelegramIcon'
import { FooterMail } from './main/footeri/FooterMail'
import { FooterPhoneNumber } from './main/footeri/FooterPhoneNumber'
import { FooterVK } from './main/footeri/FooterVK'
import { FooterTG } from './main/footeri/FooterTG'
import { Triangle } from './Triangle'
import { MapPoint } from './aboutus/map/MapPoint'
import { ListMark } from './aboutus/list/ListMark'
import { AssistantPlus } from './aboutus/hero/AssistantPlus'
import { Scissors } from './price/all/Scissors'

export enum EIcons {
	walletoutline,
	arrowlist,
	analytic,
	buttonarrowright,
	buttonarrowrightwhite,
	buttonarrowleftwhite,
	rightarrow,
	close,
	success,
	buttonicon,
	googleplayicon,
	appstoreicon,
	buttonarrowrightblack,
	usericon,
	x,
	footerlogomark,
	footerappstore,
	footergoogleplay,
	footeremail,
	footerphone,
	footerrustore,
	footerwhatsup,
	footervkicon,
	footerwhatsupicon,
	footertelegramicon,
	footermail,
	footerphonenumber,
	footervk,
	footertg,
	triangle,
	mappoint,
	listmark,
	assistantplus,
	scissors,
}

const ICONS: Record<EIcons, any> = {
	[EIcons.walletoutline]: WalletOutline,
	[EIcons.arrowlist]: ArrowList,
	[EIcons.analytic]: Analytic,
	[EIcons.buttonarrowright]: ButtonArrowRight,
	[EIcons.buttonarrowrightwhite]: ButtonArrowRightWhite,
	[EIcons.buttonarrowleftwhite]: ButtonArrowLeftWhite,
	[EIcons.rightarrow]: RightArrow,
	[EIcons.close]: Close,
	[EIcons.success]: Success,
	[EIcons.buttonicon]: ButtonIcon,
	[EIcons.googleplayicon]: GooglePlayIcon,
	[EIcons.appstoreicon]: AppStoreIcon,
	[EIcons.buttonarrowrightblack]: ButtonArrowRightBlack,
	[EIcons.usericon]: UserIcon,
	[EIcons.x]: X,
	[EIcons.footerlogomark]: FooterLogomark,
	[EIcons.footerappstore]: FooterAppStore,
	[EIcons.footeremail]: FooterEmail,
	[EIcons.footergoogleplay]: FooterGooglePlay,
	[EIcons.footerphone]: FooterPhone,
	[EIcons.footerrustore]: FooterRuStore,
	[EIcons.footerwhatsup]: FooterWhatsUp,
	[EIcons.footerwhatsupicon]: FooterWhatsUpIcon,
	[EIcons.footervkicon]: FooterVKIcon,
	[EIcons.footertelegramicon]: FooterTelegramIcon,
	[EIcons.footermail]: FooterMail,
	[EIcons.footerphonenumber]: FooterPhoneNumber,
	[EIcons.footervk]: FooterVK,
	[EIcons.footertg]: FooterTG,
	[EIcons.triangle]: Triangle,
	[EIcons.mappoint]: MapPoint,
	[EIcons.listmark]: ListMark,
	[EIcons.assistantplus]: AssistantPlus,
	[EIcons.scissors]: Scissors,
}

interface IIconProps {
	name: EIcons
}

export function Icon(props: IIconProps) {
	const { name } = props

	const ChosenIcon = ICONS[name]
	return <ChosenIcon />
}
