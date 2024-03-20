import React, { FC } from 'react'
import Meta from '@/utils/meta/Meta'
import Link from 'next/link'
import Img30 from '../../../assets/baza-znaniy/img30.svg'
import Img31 from '../../../assets/baza-znaniy/img31.svg'
import Img32 from '../../../assets/baza-znaniy/img32.svg'
import Img33 from '../../../assets/baza-znaniy/img33.svg'
import Img52 from '../../../assets/baza-znaniy/img52.svg'
import Img53 from '../../../assets/baza-znaniy/img53.svg'
import Img54 from '../../../assets/baza-znaniy/img54.svg'
import Img55 from '../../../assets/baza-znaniy/img55.svg'
import Img56 from '../../../assets/baza-znaniy/img56.svg'
import Img57 from '../../../assets/baza-znaniy/img57.svg'
import Img58 from '../../../assets/baza-znaniy/img58.svg'
import Img59 from '../../../assets/baza-znaniy/img59.svg'
import Img60 from '../../../assets/baza-znaniy/img60.svg'
import Img61 from '../../../assets/baza-znaniy/img61.svg'
import Img62 from '../../../assets/baza-znaniy/img62.svg'
import Img63 from '../../../assets/baza-znaniy/img63.svg'
import Img64 from '../../../assets/baza-znaniy/img64.svg'
import Img65 from '../../../assets/baza-znaniy/img65.svg'
import Img66 from '../../../assets/baza-znaniy/img66.svg'
import Image from 'next/image'

const Clients: FC = () => {
	return (
		<Meta title="Клиенты" description="Клиенты">
			<div>
				<p
					style={{
						textAlign: 'left',
						margin: '5vh',
						fontSize: '16px',
					}}
				>
					<Link href="/baza-znaniy">Назад</Link>
				</p>
				<div
					style={{
						width: '60vw',
						margin: '0 20vw',
						display: 'flex',
						alignSelf: 'center',
						flexDirection: 'column',
						gap: '5px',
					}}
				>
					<h1 style={{ marginBottom: '20px' }}>Клиенты</h1>
					<p>
						Раздел «Клиенты» позволяет отслеживать Вашу Клиентскую базу, видеть
						новых, повторных, ушедших Клиентов. Вся информация о конкретном
						Клиенте также доступна в этом разделе.{' '}
					</p>
					<Image src={Img30} alt={''} />
					<p>
						Добавить нового Клиента достаточно просто, для этого Telebon
						предлагает три варианта:
					</p>
					<li>
						Во вкладке «Клиенты» нажмите кнопку «+Добавить». Появится окно для
						заполнения данных по Клиенту. ФИО и номер телефона пригодятся Вам
						при поиске Клиента в системе, указание дня рождения позволит не
						забывать и поздравить Ваших Клиентов повышая тем самым свою
						репутацию, варианты как и во сколько связаться с Клиентом будет
						Вашим преимуществом, чтобы не оказаться в неловкой ситуации и не
						позвонить или не написать в неудобное для Клиента время.
						<Image src={Img31} alt={''} />
					</li>
					<li>
						Если у Вас уже есть определенная база Клиентов, то можно
						воспользоваться импортом. Функциональная кнопка находится в правом
						верхнем углу <Image src={Img32} alt={''} />. Импорт возможен через
						Copy/Paste (Копировать/вставить элементы таблицы), либо через
						подгружаемый файл (таблица Excel) <Image src={Img33} alt={''} />.
						Подробно импорт клиентов рассмотрен в разделе «Импорт клиентов»
					</li>
					<li>Клиент автоматически создается при создании записи.</li>
					<h1 style={{ marginBottom: '20px' }}>Импорт Клиентов</h1>
					<p>
						«Импорт Клиентов» подразумевает добавление, уже существующей у Вас,
						базы в систему Telebon. Данная функция расположена в блоке
						«Клиенты».
					</p>
					<Image src={Img52} alt={''} />
					<br />
					<p>Возможны два варианта добавления через импорт:</p>
					<li>
						«Скопировать/вставить данные» (из таблицы). <br /> Для этого способа
						необходимо скопировать ячейки из таблицы Excel{' '}
						<Image src={Img53} alt={''} />, вставить в поле импорта и нажать
						кнопку «Загрузить». <Image src={Img54} alt={''} /> Далее нужно
						сопоставить Ваши данные с заголовками таблицы и нажать кнопку
						«Загрузить» <Image src={Img55} alt={''} />. Клиенты появятся в базе
						данных системы Telebon в статусе «новых Клиентов»;
					</li>
					<li>
						«Загрузить готовый документ» Excel-файлом. <br />
						Чтобы воспользоваться данным способом, необходимо выбрать
						Excel-файл, который содержит информацию о Ваших Клиентах, и
						перенести его в поле добавления, либо найти файл по указанному
						адресу на Вашем компьютере <Image src={Img56} alt={''} />.
						Сопоставьте Ваши данные с заголовками таблицы и нажмите кнопку
						«Загрузить». <Image src={Img57} alt={''} /> <br />
						Клиенты будут успешно добавлены в систему Telebon.
						<br /> Примечание: система не добавит вновь Клиента, который уже
						есть в базе Telebon, ориентиром послужит номер телефона Клиента.
					</li>
					<h1 style={{ marginBottom: '20px' }}>
						Классификаторы категорий услуг
					</h1>
					<p>
						Классификаторы необходимы для разграничения Клиентов на определенные
						категории при записи на услуги. Настройка осуществляется при
						создании «Категории услуг» в разделе «Компания» {'>'} «Услуги
						компании» {'>'} «Добавить категорию». Если категория услуги уже
						создана, но нажмите кнопку «редактировать» напротив названия.{' '}
						<Image src={Img58} alt={''} /> Названия (не должны повторяться)
						классификаторов могут быть различные и выделяются определенным
						цветом (не должен повторяться), как пример:{' '}
						<Image src={Img59} alt={''} />
					</p>
					<br />
					<p>
						Важно, чтобы после ввода каждого классификатора вы нажали на кнопку
						«Добавить классификатор»
					</p>
					<Image src={Img60} alt={''} />
					<br />
					<p>
						Раздел с заполненными классификаторами выглядит следующим образом:
					</p>
					<Image src={Img61} alt={''} />
					<br />
					<p>
						При добавлении записи в журнал, классификатор добавляется нажатием
						«+» рядом с выбранным Клиентом. Выбираете нужны и он привязывается в
						записи.
					</p>
					<Image src={Img62} alt={''} />
					<Image src={Img63} alt={''} />
					<br />
					<h1 style={{ marginBottom: '20px' }}>
						Ролевая модель системы Telebon
					</h1>
					<p>
						В зависимости от функционала и доступных возможностей система
						предусматривает три варианта ролей:
					</p>
					<li>
						Владелец – человек, который создал аккаунт - имеет полный
						функционал, наделяется им при регистрации;
					</li>
					<li>
						Администратор - получает роль при создании его в системе владельцем
						<Image src={Img64} alt={''} />, не имеет доступа:
						<br />– Раздел «Портал»;
						<br />– Удаление сотрудников.
					</li>
					<li>
						Менеджер, получает роль при создании его в системе владельцем{' '}
						<Image src={Img64} alt={''} />, не имеет доступа:
						<br />– Раздел «Портал»;
						<br />– Раздел «Финансы»;
						<br />– Удаление сотрудников;
						<br />– Удаление Клиентов.
					</li>
					<p>
						Узнать, какая роль установлена для Вас, можно в «Личном кабинете»
						строка «Тип занятости».
					</p>
					<Image src={Img65} alt={''} />
					<h1 style={{ marginBottom: '20px' }}>
						Техническая поддержка пользователя в системе Telebon
					</h1>
					<p>
						Связь с технической поддержкой можно осуществить одним из трех
						способов:
						<br />- через Техподдержку в блоке «Мессенджеры» и выделена синим
						значком. <Image src={Img66} alt={''} />;
						<br />- по телефону 8-812-507-63-33;
						<br />- по электронной почте hello@telebon.ru.
					</p>
				</div>
			</div>
		</Meta>
	)
}

export default Clients