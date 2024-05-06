import { WalletOutline } from './WalletOutline'
import { ArrowList } from './ArrowList'
import { RecordingTelegram } from './recording/RecordingTelegram'
import { img1 } from './main/img1'
import { img2 } from './main/img2'
import { img3 } from './main/img3'
import { img4 } from './main/img4'
import { img7 } from './main/img7'
import { img6 } from './main/img6'
import { img5 } from './main/img5'
import { img8 } from './main/img8'
import { img9 } from './main/img9'
import { img10 } from './main/img10'
import { img11 } from './main/img11'
import { img12 } from './main/img12'
import { img13 } from './main/img13'
import { img14 } from './main/img14'
import { img15 } from './main/img15'
import { img16 } from './main/img16'
import { img17 } from './main/img17'
import { img18 } from './main/img18'
import { img19 } from './main/img19'
import { img20 } from './main/img20'
import { img21 } from './main/img21'
import { img22 } from './main/img22'
import { img23 } from './main/img23'
import { img24 } from './main/img24'
import { img25 } from './main/img25'
import { img26 } from './main/img26'
import { img27 } from './main/img27'
import { img28 } from './main/img28'
import { img29 } from './main/img29'
import { img30 } from './main/img30'
import { img31 } from './main/img31'
import { img32 } from './main/img32'
import { img33 } from './main/img33'
import { img34 } from './main/img34'
import { img35 } from './main/img35'
import { img36 } from './main/img36'
import { img37 } from './main/img37'
import { img38 } from './main/img38'
import { img39 } from './main/img39'
import { img40 } from './main/img40'
import { img41 } from './main/img41'
import { img42 } from './main/img42'
import { img43 } from './main/img43'
import { img44 } from './main/img44'
import { img45 } from './main/img45'
import { img46 } from './main/img46'
import { Analytic } from './Analytic'
import { BellRinging } from './recording/BellRinging'
import { CoinBroken } from './recording/CoinBroken'
import { ColorSwatch } from './recording/ColorSwatch'
import { Cursor } from './recording/Cursor'
import { FileQuestion } from './recording/FileQuestion'
import { Gift } from './recording/Gift'
import { MessageChat } from './recording/MessageChat'
import { Settings } from './recording/Settings'
import { UserProfileStar } from './recording/UserProfileStar'
import { ButtonArrowRight } from './ButtonArrowRight'
import { Brush } from './slider/Brush'

export enum EIcons {
	walletoutline,
	arrowlist,
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img7,
	img8,
	img9,
	img10,
	img11,
	img12,
	img13,
	img14,
	img15,
	img16,
	img17,
	img18,
	img19,
	img20,
	img21,
	img22,
	img23,
	img24,
	img25,
	img26,
	img27,
	img28,
	img29,
	img30,
	img31,
	img32,
	img33,
	img34,
	img35,
	img36,
	img37,
	img38,
	img39,
	img40,
	img41,
	img42,
	img43,
	img44,
	img45,
	img46,
	analytic,
	recordingtelegram,
	bellringing,
	coinbroken,
	colorswatch,
	cursor,
	filequestion,
	gift,
	messagechat,
	settings,
	userprofilestar,
	buttonarrowright,
	brush,
}

const ICONS: Record<EIcons, any> = {
	[EIcons.walletoutline]: WalletOutline,
	[EIcons.arrowlist]: ArrowList,
	[EIcons.img1]: img1,
	[EIcons.img2]: img2,
	[EIcons.img3]: img3,
	[EIcons.img4]: img4,
	[EIcons.img5]: img5,
	[EIcons.img6]: img6,
	[EIcons.img7]: img7,
	[EIcons.img8]: img8,
	[EIcons.img9]: img9,
	[EIcons.img10]: img10,
	[EIcons.img11]: img11,
	[EIcons.img12]: img12,
	[EIcons.img13]: img13,
	[EIcons.img14]: img14,
	[EIcons.img15]: img15,
	[EIcons.img16]: img16,
	[EIcons.img17]: img17,
	[EIcons.img18]: img18,
	[EIcons.img19]: img19,
	[EIcons.img20]: img20,
	[EIcons.img21]: img21,
	[EIcons.img22]: img22,
	[EIcons.img23]: img23,
	[EIcons.img24]: img24,
	[EIcons.img25]: img25,
	[EIcons.img26]: img26,
	[EIcons.img27]: img27,
	[EIcons.img28]: img28,
	[EIcons.img29]: img29,
	[EIcons.img30]: img30,
	[EIcons.img31]: img31,
	[EIcons.img32]: img32,
	[EIcons.img33]: img33,
	[EIcons.img34]: img34,
	[EIcons.img35]: img35,
	[EIcons.img36]: img36,
	[EIcons.img37]: img37,
	[EIcons.img38]: img38,
	[EIcons.img39]: img39,
	[EIcons.img40]: img40,
	[EIcons.img41]: img41,
	[EIcons.img42]: img42,
	[EIcons.img43]: img43,
	[EIcons.img44]: img44,
	[EIcons.img45]: img45,
	[EIcons.img46]: img46,
	[EIcons.analytic]: Analytic,
	[EIcons.recordingtelegram]: RecordingTelegram,
	[EIcons.bellringing]: BellRinging,
	[EIcons.coinbroken]: CoinBroken,
	[EIcons.colorswatch]: ColorSwatch,
	[EIcons.cursor]: Cursor,
	[EIcons.filequestion]: FileQuestion,
	[EIcons.gift]: Gift,
	[EIcons.messagechat]: MessageChat,
	[EIcons.settings]: Settings,
	[EIcons.userprofilestar]: UserProfileStar,
	[EIcons.buttonarrowright]: ButtonArrowRight,
	[EIcons.brush]: Brush,
}

interface IIconProps {
	name: EIcons
}

export function Icon(props: IIconProps) {
	const { name } = props

	const ChosenIcon = ICONS[name]
	return <ChosenIcon />
}
