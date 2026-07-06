import Icon from '@/components/ui/icon';

const allCompetitors = [
  {
    name: 'BRKNO (Berkano)',
    site: 'https://brkno.com',
    city: 'Екатеринбург',
    direct: true,
    material: 'Пластик',
    note: 'Прямой конкурент: идентичный ассортимент (пластиковые вазоны) и присутствие в целевом регионе.',
  },
  {
    name: 'GURIAN',
    site: 'https://gurian.ru',
    city: 'Липецк',
    distance: '~2 000 км от Екатеринбурга',
    direct: true,
    material: 'Пластик',
    note: 'Прямой конкурент: тот же ассортимент пластиковых вазонов, федеральный охват без локального присутствия.',
  },
  {
    name: 'Технезис',
    site: 'https://technezis.com/',
    city: 'Екатеринбург',
    direct: false,
    material: 'Стеклопластик, композит',
    note: 'Иной ассортимент по материалу, но решает ту же задачу — благоустройство территорий.',
  },
  {
    name: 'ABRIS',
    site: 'https://abris-ur.ru/',
    city: 'Екатеринбург',
    direct: false,
    material: 'Металл, бетон',
    note: 'Производит малые архитектурные формы из металла и бетона для городской среды.',
  },
  {
    name: 'Clean Planet Group',
    site: 'https://cleanplanetgroup.ru',
    city: 'Славянск-на-Кубани',
    distance: '~2 400 км от Екатеринбурга',
    direct: false,
    material: 'Бетон, композит',
    note: 'Собственное производство бетонных вазонов, закрывает ту же потребность заказчика.',
  },
  {
    name: 'Garden of Joy',
    site: 'https://kashpo.sadradosti.ru/',
    city: 'Волгоград',
    distance: '~1 700 км от Екатеринбурга',
    direct: false,
    material: 'Керамика, глина',
    note: 'Декоративные керамические кашпо — иной материал, но тот же сценарий использования.',
  },
  {
    name: 'Marble Collection',
    site: 'https://marble-collection.com/',
    city: 'Санкт-Петербург',
    distance: '~2 200 км от Екатеринбурга',
    direct: false,
    material: 'Мрамор, камень',
    note: 'Премиальный сегмент из натурального камня, конкурирует за бюджет благоустройства.',
  },
  {
    name: 'Светхолл',
    site: 'https://svetholl.ru/katalog/vazony/vazony-dlya-tsvetov/',
    city: 'Казань',
    distance: '~950 км от Екатеринбурга',
    direct: false,
    material: 'Металл, бетон',
    note: 'Комплексные решения по благоустройству территорий в ином материальном исполнении.',
  },
  {
    name: 'АСБ',
    site: 'https://asb-maf.ru/catalog/tsvetochnitsy-i-vazony/vazon-barselona/',
    city: 'Чувашия',
    distance: '~1 100 км от Екатеринбурга',
    direct: false,
    material: 'Бетон',
    note: 'МАФ для городской среды серии «Барселона» — иной материал, та же функция.',
  },
  {
    name: 'ЮАМЕТ',
    site: 'https://yuamet.com/product/dlya-parka/besedki-lavochki-urny-ograzhdeniya/vazony/',
    city: 'Москва',
    distance: '~1 780 км от Екатеринбурга',
    direct: false,
    material: 'Металл',
    note: 'Парковая инфраструктура из металла: беседки, урны и вазоны для благоустройства.',
  },
];

const comparisons = [
  {
    title: 'Сравнение №1 · Средний вазон',
    ours: {
      brand: 'ЗАО «Пластик»',
      shop: 'ap-plastic.ru',
      model: 'Ваза декоративная №8 «Аура»',
      img: 'https://cdn.poehali.dev/projects/1ddc5012-c470-4c26-a827-91ac61619048/bucket/40f50d6c-af71-4b88-afbd-460eb58f1aa1.jpg',
      size: '750×750×550',
      weight: '6 кг',
      volume: '161 л',
      price: '8 700 ₽',
      priceNum: 8700,
      url: 'https://www.ap-plastic.ru/product/vazony-dlya-tsvetov/vaza-dekorativnaya-8-aura-tsvet-antratsit/?sphrase_id=4139',
    },
    rivals: [
      {
        brand: 'BERKANO',
        shop: 'brkno.com',
        model: 'Кашпо Classic 60',
        img: 'https://cdn.poehali.dev/projects/1ddc5012-c470-4c26-a827-91ac61619048/bucket/9bdb59d4-c7a9-4a27-bae3-ebdcceba2ed3.jpg',
        size: '650×340×600',
        weight: '6 кг',
        volume: '110 л',
        price: '14 790 ₽',
        priceNum: 14790,
        url: 'https://brkno.com/catalog/kashpo-classic-60-snow-white',
      },
      {
        brand: 'GURIAN',
        shop: 'gurian.ru',
        model: 'Вазон уличный «GURIAN Classic»',
        img: 'https://cdn.poehali.dev/projects/1ddc5012-c470-4c26-a827-91ac61619048/bucket/c7053abe-9588-4ef2-b8f1-d10170b3e29a.jpg',
        size: '900×900×800',
        weight: '—',
        volume: '150 л',
        price: '25 200 ₽',
        priceNum: 25200,
        url: 'https://gurian.ru/catalog/vazony-napolnye/kashpo-vazon-ulichnyy-gurian-classic-900-siniy-150-litrov-ozelenenie-goroda/',
      },
    ],
    conclusion: 'Цель разбора — показать реальную конкурентоспособность нашего товара «в моменте выбора» покупателем: при сопоставимом объёме (150–161 л) наша модель дешевле BERKANO на 41% и дешевле GURIAN почти в 3 раза. Это готовый аргумент для отдела продаж и рекламных объявлений при выходе на рынок Екатеринбурга.',
  },
  {
    title: 'Сравнение №2 · Крупный вазон',
    ours: {
      brand: 'ЗАО «Пластик»',
      shop: 'ap-plastic.ru',
      model: 'Ваза декоративная №30 «Куб малый»',
      img: 'https://cdn.poehali.dev/projects/1ddc5012-c470-4c26-a827-91ac61619048/bucket/d5a16f54-8b80-47ea-97b7-ebc3e15b2201.jpg',
      size: '790×790×790',
      weight: '30,2 кг',
      volume: '180 л',
      price: '30 000 ₽',
      priceNum: 30000,
      url: 'https://www.ap-plastic.ru/product/vazony-dlya-tsvetov/vaza-dekorativnaya-30-kub-malyy/',
    },
    rivals: [
      {
        brand: 'BERKANO',
        shop: 'brkno.com',
        model: 'Кашпо Cubo 80',
        img: 'https://cdn.poehali.dev/projects/1ddc5012-c470-4c26-a827-91ac61619048/bucket/75169cef-33cc-4be5-baff-1497a909f83d.jpg',
        size: '800×800×640',
        weight: '19 кг',
        volume: '190 л',
        price: '36 960 ₽',
        priceNum: 36960,
        url: 'https://brkno.com/catalog/kashpo-cubo-80-snow-white',
      },
      {
        brand: 'GURIAN',
        shop: 'gurian.ru',
        model: 'Вазон напольный большой «Кадка 85»',
        img: 'https://cdn.poehali.dev/projects/1ddc5012-c470-4c26-a827-91ac61619048/bucket/be5f4759-3a2b-4e32-bf94-84085b3be37d.jpg',
        size: '800×800×850',
        weight: '30 кг',
        volume: '157 л',
        price: '26 250 ₽',
        priceNum: 26250,
        url: 'https://gurian.ru/catalog/vazony-napolnye/vazon-napolnyy-bolshoy/',
      },
    ],
    conclusion: 'Этот срез нужен, чтобы понять расстановку сил в сегменте крупных вазонов: наша модель даёт наибольший объём (180 л) и стоит на 19% дешевле BERKANO. GURIAN дешевле нас по цене, но проигрывает в объёме на 23 литра — итог показывает, где мы сильнее по цене за литр, а где конкурент демпингует за счёт меньшего размера.',
  },
];

const serpGroups = [
  {
    query: 'купить уличные вазоны',
    note: 'Высококонкурентная выдача — 10 промо-объявлений на странице',
    results: [
      {
        brand: 'GURIAN',
        domain: 'gurian.ru',
        path: '› Уличные вазоны... Промо',
        title: 'Уличные вазоны',
        desc: 'Вазоны для городского озеленения от производителя',
        rating: null,
        reviews: null,
        tags: ['Вазоны напольные', 'Гидровазоны', 'Металлоконструкции', 'Контакты'],
        phone: null,
        hours: null,
        metro: null,
        icon: '🌿',
        iconBg: 'bg-green-600',
      },
      {
        brand: 'Технезис',
        domain: 'technezis.com',
        path: '› Садовые вазоны и цветочницы от производителя!... Промо',
        title: 'Садовые вазоны и цветочницы от производителя! Яркий...',
        desc: 'Уличные и парковые. Из высококачественного фибробетона. Прочные и надежные. Закажите! Высокое качество. Удобная оплата. Консультация эксперта',
        rating: null,
        reviews: null,
        tags: ['О компании', 'Контакты', 'Наши преимущества', 'Большой ассортимент'],
        phone: null,
        hours: null,
        metro: null,
        icon: 'T',
        iconBg: 'bg-orange-500',
      },
      {
        brand: 'SVETHOLL',
        domain: 'svetholl.ru',
        path: '› Вазоны-для-цветов-Sv... Промо',
        title: 'Вазоны для цветов уличные SVETHOLL',
        desc: 'Изготовление и монтаж вазонов для цветов. Выгодные партнерские условия · Бесплатная обрешетка. 3D визуализация. Индивидуальная разработка. Изготовление на заказ. Доставка по России',
        rating: null,
        reviews: null,
        tags: [],
        phone: '+7 (800) 550-XX-XX',
        hours: 'будни 8:00–17:00',
        metro: null,
        icon: 'S',
        iconBg: 'bg-indigo-600',
      },
      {
        brand: 'ЮАМЕТ',
        domain: 'yuamet.com',
        path: '› Уличные вазоны от производителя. Работаем с юр. лицами... Промо',
        title: 'Уличные вазоны от производителя. Работаем с юр. лицами',
        desc: 'Материалы премиум-качества. Индивидуальное проектирование. Работаем по всей России! Установка. Под ключ. Эко-премиум материалы. Оптом и в розницу',
        rating: null,
        reviews: null,
        tags: ['Детские площадки и городки', 'Спортивные площадки', 'Реализованные проекты'],
        phone: '+7 (800) 707-XX-XX',
        hours: 'будни 9:00–18:00, перерыв 13:00–14:00',
        metro: 'м. Коломенская',
        icon: 'Ю',
        iconBg: 'bg-amber-700',
      },
      {
        brand: 'АСБ',
        domain: 'asb-maf.ru',
        path: '› Вазоны для сада... Промо',
        title: 'Вазоны для сада. Надежность',
        desc: 'Универсальность деталей. Экологичные материалы. Свое производство. Обращайтесь к нам! Технологичность. Безопасность. Реализуем сложные проекты',
        rating: null,
        reviews: null,
        tags: ['Каталог', 'Контакты', 'Доставка и оплата', 'Отзывы'],
        phone: null,
        hours: null,
        metro: null,
        icon: 'А',
        iconBg: 'bg-orange-600',
      },
      {
        brand: 'Clean Planet Group',
        domain: 'cleanplanetgroup.ru',
        path: '› уличные-кашпо... Промо',
        title: 'Купить уличные вазоны для цветов. Гарантия 20 лет',
        desc: 'Экологичные кашпо из вторичного пластика. Красивое и прочное решение для города · Готовые решения. Собственное производство. Эко-материалы',
        rating: null,
        reviews: null,
        tags: ['Скамейки и диваны', 'Шезлонги и лежаки', 'Уличные кашпо', 'Урны для мусора'],
        phone: '+7 (995) 736-XX-XX',
        hours: 'будни 8:00–20:00',
        metro: null,
        icon: '🍃',
        iconBg: 'bg-blue-600',
      },
      {
        brand: 'ABRIS',
        domain: 'abris-ur.ru',
        path: '› городские-маф... Промо',
        title: 'Производство городских МАФ для улиц, парков, набережных',
        desc: 'Сроки от 3 недель. Индивидуальные заказы, свое конструкторское бюро. Доставка по РФ · Гарантия год. Доставка по РФ. Для парков, ЖК, пляжей',
        rating: null,
        reviews: null,
        tags: ['Любые материалы и сложность', 'Расчет проекта за 2 часа'],
        phone: '+7 (993) 519-XX-XX',
        hours: 'будни 10:00–19:00',
        metro: 'м. Геологическая, Екатеринбург',
        icon: '🏗',
        iconBg: 'bg-neutral-700',
      },
      {
        brand: 'Garden of Joy',
        domain: 'kashpo.sadradosti.ru',
        path: '› Вазоны... Промо',
        title: 'Кашпо и вазоны от производителя. Опт и розница. В...',
        desc: 'Собственное производство. Большой выбор форм, цветов и размеров. Оставьте заявку! Антивандальные каркасы. Индивидуальные проекты. Срок службы 50 лет',
        rating: null,
        reviews: null,
        tags: ['Под ключ', 'Индивидуальные проекты', 'Визуализация - бесплатно'],
        phone: '+7 (800) 100-XX-XX',
        hours: 'будни 9:00–18:00',
        metro: null,
        icon: '🌸',
        iconBg: 'bg-pink-600',
      },
      {
        brand: 'Marble Collection',
        domain: 'marble-collection.com',
        path: '› Дизайнерские кашпо из полимербетона. Бесплатная ... Промо',
        title: 'Дизайнерские кашпо из полимербетона. Бесплатная доставка',
        desc: 'Кашпо в форме чаши, куба, трапеции, многогранника или цилиндра',
        rating: '5,0',
        reviews: '25 отзывов на магазин',
        tags: ['Бесплатная доставка по России', 'Прослужит более 50 лет'],
        phone: '+7 (911) 920-XX-XX',
        hours: 'будни 9:00–18:00',
        metro: null,
        icon: 'M',
        iconBg: 'bg-purple-600',
      },
      {
        brand: 'ЗАО «Пластик» (наш)',
        domain: 'ap-plastic.ru',
        path: '› Купить уличные вазоны по выгодной цене от... Промо',
        title: 'Купить уличные вазоны по выгодной цене от...',
        desc: 'Огромный выбор форм, цветов и конфигураций. Очень прочные и надежные. Выгодные цены... · Прямоугольные. Квадратные. Круглые. Доставка по всей России. Большие. Малые. Выгодные цены. Для дачи. Для дома. Оптом и в розницу. Для парков',
        rating: '4,5',
        reviews: '10 отзывов на магазин',
        tags: ['Собственное производство', 'Контактная информация', 'Каталог вазонов для цветов'],
        phone: '+7 (800) 775-XX-XX',
        hours: 'будни 8:30–17:00, перерыв 11:30–12:30',
        metro: null,
        icon: '🔵',
        iconBg: 'bg-blue-500',
        ours: true,
      },
    ],
    conclusion: 'Запрос «купить уличные вазоны» — самый конкурентный: 10 промо-объявлений на первом экране. Лидер по рейтингу — Marble Collection (5,0), у большинства конкурентов рейтинга нет вовсе. Наш сниппет — единственный с явным указанием рейтинга 4,5 и отзывов среди производителей пластика, но заголовок стоит усилить словом «уличные» в начале и указать скидку, как в других наших объявлениях.',
  },
  {
    query: 'большие вазоны купить',
    note: 'GURIAN в этой выдаче отсутствует — конкурируют в основном бетон и полимербетон',
    results: [
      {
        brand: 'SVETHOLL',
        domain: 'svetholl.ru',
        path: '› Вазоны-для-цветов-Sv... Промо',
        title: 'Купить цветочный горшок (вазон) SVETHOLL',
        desc: 'Изготовление и монтаж вазонов для цветов. Выгодные партнерские условия · Бесплатная обрешетка. 3D визуализация. Индивидуальная разработка. Изготовление на заказ. Доставка по России',
        rating: null,
        reviews: null,
        tags: [],
        phone: '+7 (800) 550-XX-XX',
        hours: 'будни 8:00–17:00',
        metro: null,
        icon: 'S',
        iconBg: 'bg-indigo-600',
      },
      {
        brand: 'ЮАМЕТ',
        domain: 'yuamet.com',
        path: '› Уличные вазоны от производителя. Работаем с юр. лицами... Промо',
        title: 'Уличные вазоны от производителя. Работаем с юр. лицами',
        desc: 'Материалы премиум-качества. Индивидуальное проектирование. Работаем по всей России! Установка. Под ключ. Эко-премиум материалы. Оптом и в розницу',
        rating: null,
        reviews: null,
        tags: ['Детские площадки и городки', 'Спортивные площадки', 'Реализованные проекты'],
        phone: '+7 (800) 707-XX-XX',
        hours: 'будни 9:00–18:00, перерыв 13:00–14:00',
        metro: 'м. Коломенская',
        icon: 'Ю',
        iconBg: 'bg-amber-700',
      },
      {
        brand: 'BERKANO',
        domain: 'brkno.com',
        path: '› Кашпо-BERKANO... Промо',
        title: 'Огромные кашпо BERKANO — широкий выбор размеров и цветов',
        desc: 'Купите дизайнерские кашпо для цветов от производителя с доставкой по РФ · В наличии и под заказ. Широкий ассортимент. В любую точку РФ и мира',
        rating: '4,6',
        reviews: '28 отзывов на магазин',
        tags: ['Широкая палитра — 17 цветов', 'Одинарное и двойное дно', 'LED', 'Защита IP68'],
        phone: '+7 (800) 511-XX-XX',
        hours: 'ежедневно 10:00–22:00',
        metro: 'м. Международная',
        icon: 'B',
        iconBg: 'bg-red-500',
      },
      {
        brand: 'АСБ',
        domain: 'asb-maf.ru',
        path: '› Вазон-Барселона-купи... Промо',
        title: 'Вазон «Барселона» от производителя АСБ Поволжья',
        desc: 'Купите вазон для благоустройства и общественных пространств по доступной цене! · Безопасность. Технологичность. Универсальность деталей',
        rating: null,
        reviews: null,
        tags: ['О компании', 'Услуги', 'Каталог продукции', 'Веранды'],
        phone: null,
        hours: null,
        metro: null,
        icon: 'А',
        iconBg: 'bg-orange-600',
      },
      {
        brand: 'Marble Collection',
        domain: 'marble-collection.com',
        path: '› Купить-квадратное-ка... Промо',
        title: 'Купить квадратное кашпо. Напольное кашпо для цветов',
        desc: 'Официальный поставщик дизайнерских кашпо из полимербетона от Мраморной Коллекции',
        rating: '5,0',
        reviews: '25 отзывов на магазин',
        tags: ['Бесплатная доставка по России', 'Прослужит более 50 лет'],
        phone: '+7 (911) 920-XX-XX',
        hours: 'будни 9:00–18:00',
        metro: null,
        icon: 'M',
        iconBg: 'bg-purple-600',
      },
      {
        brand: 'ЗАО «Пластик» (наш)',
        domain: 'ap-plastic.ru',
        path: '› Большие вазоны по низким ценам!... Промо',
        title: 'Большие вазоны по низким ценам!',
        desc: 'Огромный выбор форм, цветов и конфигураций. Очень прочные и надежные. Выгодные цены · Прямоугольные. Квадратные. Круглые. Доставка по всей России. Большие. Малые. Выгодные цены. Для дачи. Для дома. Оптом и в розницу. Для парков',
        rating: '4,5',
        reviews: '10 отзывов на магазин',
        tags: ['Собственное производство', 'Контактная информация', 'Каталог вазонов для цветов'],
        phone: '+7 (800) 775-XX-XX',
        hours: 'будни 8:30–17:00, перерыв 11:30–12:30',
        metro: null,
        icon: '🔵',
        iconBg: 'bg-blue-500',
        ours: true,
      },
    ],
    conclusion: 'По коммерческому запросу «большие вазоны купить» в топе преобладают производители из бетона и полимербетона: Marble Collection лидирует по рейтингу (5,0), у остальных конкурентов рейтинга нет. Наш сниппет уступает по рейтингу только Marble Collection, но выигрывает по цене — стоит добавить конкретную цифру скидки в заголовок и указать присутствие в регионе.',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen leaf-bg">
      {/* HERO */}
      <header className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute -right-16 -top-16 opacity-10">
          <Icon name="Leaf" size={320} />
        </div>
        <div className="container relative z-10 py-20 md:py-28">
          <div className="animate-fade-up flex items-center gap-2 text-accent font-display uppercase tracking-widest text-sm mb-6">
            <Icon name="Sprout" size={20} />
            Конкурентный анализ · 2026
          </div>
          <h1 className="animate-fade-up font-display font-700 text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl uppercase" style={{ animationDelay: '0.1s' }}>
            Конкуренты в платной выдаче Яндекса в Екатеринбурге
          </h1>
          <p className="animate-fade-up mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl" style={{ animationDelay: '0.2s' }}>
            Анализ конкурентов: ассортимент, регион присутствия и разбор рекламных объявлений в поиске Яндекса
          </p>
          <div className="animate-fade-up mt-10 flex flex-wrap gap-4" style={{ animationDelay: '0.3s' }}>
            {[
              { n: '10', t: 'конкурентов в анализе' },
              { n: '2', t: 'прямых конкурента по ассортименту' },
              { n: '8', t: 'решают ту же задачу иным материалом' },
            ].map((s) => (
              <div key={s.t} className="bg-primary-foreground/10 backdrop-blur rounded-xl px-6 py-4 border border-primary-foreground/15">
                <div className="font-display text-3xl text-accent">{s.n}</div>
                <div className="text-sm text-primary-foreground/70">{s.t}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ПРОФИЛИ КОНКУРЕНТОВ */}
      <section className="container py-20">
        <SectionTitle icon="Target" pre="Кто на рынке" title="Профили конкурентов" />
        <p className="text-muted-foreground max-w-2xl mt-4">
          Два игрока совпадают с нами по ассортименту напрямую — производят вазоны из пластика. Остальные восемь работают с иным материалом (бетон, металл, керамика, камень), но решают ту же задачу заказчика — благоустройство территории — и поэтому тоже являются нашими конкурентами за бюджет клиента.
        </p>

        {/* Прямые конкуренты */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-5">
            <Icon name="Crosshair" className="text-destructive" size={18} />
            <span className="text-xs font-700 uppercase tracking-widest text-destructive">Прямые конкуренты · совпадение по ассортименту</span>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          {allCompetitors.filter((c) => c.direct).map((c) => (
            <div key={c.name} className="hover-lift bg-card rounded-2xl border-2 border-destructive/30 ring-2 ring-destructive/10 p-7">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <Icon name="Building2" className="text-destructive" size={24} />
                </div>
                <span className="text-xs font-600 px-3 py-1 rounded-full bg-destructive/10 text-destructive">
                  Прямой конкурент
                </span>
              </div>
              <h3 className="font-display text-2xl uppercase">{c.name}</h3>
              <div className="flex items-center gap-4 text-muted-foreground text-sm mt-1">
                <span className="flex items-center gap-1"><Icon name="MapPin" size={14} /> {c.city}</span>
                <span className="flex items-center gap-1 text-foreground/80 font-600"><Icon name="Package" size={14} /> {c.material}</span>
              </div>
              {c.distance && (
                <div className="flex items-center gap-1 text-muted-foreground/70 text-xs mt-1">
                  <Icon name="Navigation" size={12} /> {c.distance}
                </div>
              )}
              <p className="text-sm text-foreground/80 leading-relaxed mt-4">{c.note}</p>
              <a
                href={c.site}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 pt-4 border-t border-border flex items-center gap-2 font-700 text-primary hover:text-accent transition-colors group"
              >
                <Icon name="ExternalLink" size={16} />
                <span className="underline underline-offset-4 decoration-2">Перейти на сайт</span>
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
          </div>
        </div>

        {/* Конкуренты с иным ассортиментом */}
        <div className="mt-16">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="Layers" className="text-primary" size={18} />
            <span className="text-xs font-700 uppercase tracking-widest text-primary">Косвенные конкуренты · иной материал, та же задача</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-2xl mb-6">
            Материал изготовления отличается от нашего, но потребность заказчика — озеленение и благоустройство территории — идентична. Это делает их прямыми соперниками за один и тот же тендер или бюджет.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {allCompetitors.filter((c) => !c.direct).map((c) => (
              <div key={c.name} className="hover-lift bg-card rounded-2xl border border-border p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Factory" className="text-primary" size={20} />
                </div>
                <h3 className="font-display text-lg uppercase leading-tight">{c.name}</h3>
                <div className="flex items-center gap-1 text-muted-foreground text-xs mt-1.5">
                  <Icon name="MapPin" size={12} /> {c.city}
                </div>
                {c.distance && (
                  <div className="flex items-center gap-1 text-muted-foreground/70 text-[11px] mt-0.5">
                    <Icon name="Navigation" size={11} /> {c.distance}
                  </div>
                )}
                <div className="mt-3 flex items-center gap-2 text-xs">
                  <span className="bg-primary/10 text-primary font-600 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Icon name="Package" size={12} /> {c.material}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{c.note}</p>
                <a
                  href={c.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 pt-3 border-t border-border flex items-center gap-2 font-700 text-sm text-primary hover:text-accent transition-colors group"
                >
                  <Icon name="ExternalLink" size={14} />
                  <span className="underline underline-offset-4 decoration-2">Сайт</span>
                  <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* СРАВНЕНИЕ ТОВАРОВ */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <SectionTitle icon="Scale" pre="Товар против товара" title="Мы против конкурентов" light />
          <p className="text-primary-foreground/70 max-w-2xl mt-4">
            Сравнение наших вазонов с сопоставимыми моделями BERKANO и GURIAN по размеру, объёму и цене.
          </p>

          <div className="mt-12 space-y-16">
            {comparisons.map((cmp) => {
              const all = [cmp.ours, ...cmp.rivals];
              const maxPrice = Math.max(...all.map((p) => p.priceNum));
              return (
                <div key={cmp.title}>
                  <h3 className="font-display text-2xl md:text-3xl uppercase text-accent mb-6 flex items-center gap-3">
                    <Icon name="Flower2" size={26} /> {cmp.title}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {all.map((p, idx) => {
                      const isOurs = idx === 0;
                      const cheapest = p.priceNum === Math.min(...all.map((x) => x.priceNum));
                      return (
                        <div
                          key={p.brand + idx}
                          className={`rounded-2xl overflow-hidden border ${isOurs ? 'bg-accent/15 border-accent ring-2 ring-accent/40' : 'bg-primary-foreground/5 border-primary-foreground/15'}`}
                        >
                          <div className="relative h-64 bg-white overflow-hidden p-4">
                            <img src={p.img} alt={p.brand} className="w-full h-full object-contain" />
                            <span className={`absolute top-3 left-3 text-xs font-700 px-3 py-1 rounded-full ${isOurs ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'}`}>
                              {p.brand}
                            </span>
                            {cheapest && (
                              <span className="absolute top-3 right-3 text-xs font-700 px-3 py-1 rounded-full bg-white text-primary flex items-center gap-1">
                                <Icon name="BadgeCheck" size={14} /> Дешевле
                              </span>
                            )}
                          </div>
                          <div className="p-6">
                            <div className="mb-4 pb-4 border-b border-primary-foreground/15">
                              <div className="font-600 text-primary-foreground leading-snug">{p.model}</div>
                              <div className="text-xs text-primary-foreground/50 mt-1 flex items-center gap-1">
                                <Icon name="Store" size={12} /> {p.shop}
                              </div>
                            </div>
                            <Spec icon="Ruler" label="Размер, мм" value={p.size} />
                            <Spec icon="Box" label="Объём" value={p.volume} />
                            <Spec icon="Weight" label="Вес" value={p.weight} />
                            <div className="mt-4 pt-4 border-t border-primary-foreground/15">
                              <div className="flex items-end justify-between mb-2">
                                <span className="text-sm text-primary-foreground/60">Цена</span>
                                <span className="font-display text-2xl text-accent">{p.price}</span>
                              </div>
                              <div className="h-1.5 rounded-full bg-primary-foreground/10 overflow-hidden">
                                <div className={`h-full rounded-full ${isOurs ? 'bg-accent' : 'bg-primary-foreground/40'}`} style={{ width: `${(p.priceNum / maxPrice) * 100}%` }} />
                              </div>
                            </div>
                            <a
                              href={p.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-4 flex items-center gap-2 font-700 text-sm text-accent hover:opacity-80 transition group"
                            >
                              <Icon name="ExternalLink" size={15} />
                              <span className="underline underline-offset-4 decoration-2">Открыть товар</span>
                              <Icon name="ArrowRight" size={15} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-6 bg-primary-foreground/5 border border-primary-foreground/15 rounded-2xl p-6 flex gap-4">
                    <Icon name="Lightbulb" className="text-accent shrink-0" size={22} />
                    <p className="text-sm text-primary-foreground/80 leading-relaxed">
                      <span className="font-700 text-primary-foreground">Вывод:</span> {cmp.conclusion}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* СРАВНЕНИЕ ОБЪЯВЛЕНИЙ В ПОИСКЕ */}
      <section className="container py-20">
        <SectionTitle icon="SearchCheck" pre="Поисковая выдача Яндекса" title="Сравнение объявлений" />
        <p className="text-muted-foreground max-w-2xl mt-4">
          Как выглядят наши и конкурентные сниппеты по ключевым запросам покупателей.
        </p>

        <div className="mt-12 space-y-20">
          {serpGroups.map((group) => (
            <div key={group.query}>
              <div className="flex items-center gap-3 mb-6 max-w-3xl">
                <div className="flex items-center gap-3 bg-card border border-border rounded-full px-5 py-2.5 flex-1">
                  <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-700">Я</span>
                  <span className="font-600">{group.query}</span>
                  <Icon name="Search" size={16} className="ml-auto text-muted-foreground" />
                </div>
                {group.note && (
                  <span className="text-xs text-muted-foreground italic hidden md:block">{group.note}</span>
                )}
              </div>
              {group.note && (
                <p className="text-xs text-muted-foreground italic mb-4 md:hidden">{group.note}</p>
              )}
              {group.filters && (
                <div className="flex items-center gap-2 mb-4">
                  {group.filters.map((f) => (
                    <span key={f} className="flex items-center gap-1 text-sm text-muted-foreground border border-border rounded-full px-3 py-1">
                      {f} <Icon name="ChevronDown" size={14} />
                    </span>
                  ))}
                </div>
              )}

              <div className="space-y-5 max-w-3xl">
                {group.results.map((r) => (
                  <div
                    key={r.brand}
                    className={`rounded-2xl border p-6 transition-all ${r.ours ? 'bg-accent/10 border-accent ring-2 ring-accent/30' : 'bg-card border-border'}`}
                  >
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                      <span className={`w-5 h-5 rounded-full ${r.iconBg} text-white flex items-center justify-center text-[10px] font-700`}>
                        {r.icon}
                      </span>
                      <span className="font-600 text-foreground/70">{r.domain}</span>
                      <span>{r.path}</span>
                      <Icon name="ShoppingCart" size={14} className="ml-auto" />
                      {r.ours && (
                        <span className="bg-accent text-accent-foreground text-[10px] font-700 px-2 py-0.5 rounded-full uppercase">Мы</span>
                      )}
                    </div>

                    <h3 className="text-lg text-blue-700 font-500 leading-snug hover:underline cursor-pointer">
                      {r.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{r.desc}</p>

                    {r.rating && (
                      <div className="flex items-center gap-2 mt-2 text-sm">
                        <span className="text-amber-500 font-600 flex items-center gap-1">
                          <Icon name="Star" size={14} className="fill-amber-500" /> {r.rating}
                        </span>
                        <span className="text-muted-foreground">{r.reviews}</span>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-x-2 gap-y-1 text-sm text-blue-600 mt-2">
                      {r.tags.map((t, i) => (
                        <span key={t} className="flex items-center">
                          {t}
                          {i < r.tags.length - 1 && <span className="text-muted-foreground mx-2">·</span>}
                        </span>
                      ))}
                    </div>

                    {(r.phone || r.hours || r.metro) && (
                      <div className="mt-3 pt-3 border-t border-border text-sm text-muted-foreground space-y-0.5">
                        {r.phone && <div className="flex items-center gap-2"><Icon name="Phone" size={13} /> {r.phone}</div>}
                        {r.hours && <div className="flex items-center gap-2"><Icon name="Clock" size={13} /> {r.hours}</div>}
                        {r.metro && <div className="flex items-center gap-2"><Icon name="MapPin" size={13} /> {r.metro}</div>}
                      </div>
                    )}

                    {r.badge && (
                      <div className="mt-3 flex items-center gap-2 text-sm text-accent font-600">
                        <Icon name="Tag" size={14} /> {r.badge}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 max-w-3xl bg-primary/5 border border-primary/20 rounded-2xl p-6 flex gap-4">
                <Icon name="Lightbulb" className="text-primary shrink-0" size={22} />
                <p className="text-sm text-foreground/80 leading-relaxed">
                  <span className="font-700">Вывод:</span> {group.conclusion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* РЕКОМЕНДАЦИИ */}
      <section className="bg-secondary py-20">
        <div className="container">
          <SectionTitle icon="Lightbulb" pre="Выводы" title="Рекомендации по выходу в Екатеринбург" />
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {[
              { icon: 'Store', t: 'Точка присутствия', d: 'У BRKNO есть шоурум — это их главное преимущество. Рассмотрите пункт выдачи или партнёрский шоурум в Екатеринбурге.' },
              { icon: 'Award', t: 'Ставка на цену и качество', d: 'Наша «Аура» на 40–65% дешевле аналогов BERKANO и GURIAN. Делайте акцент на выгодной цене при высоком качестве пластика.' },
              { icon: 'Truck', t: 'Скорость доставки', d: '200 км от Челябинска — быстрее, чем у Липецка и Кубани. Акцент на срочную доставку в регион.' },
              { icon: 'Building', t: 'Работа с B2B и городом', d: 'Муниципальные закупки, УК, ландшафтные компании. Заходите через тендеры на zakupki.gov.ru.' },
            ].map((r) => (
              <div key={r.t} className="bg-card rounded-2xl border border-border p-7 flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <Icon name={r.icon} className="text-primary-foreground" size={22} />
                </div>
                <div>
                  <h3 className="font-display text-xl uppercase mb-1">{r.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground/60 py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2 font-display uppercase tracking-wider text-primary-foreground">
            <Icon name="Leaf" size={20} className="text-accent" /> Отчёт по конкурентному анализу
          </div>
          <span>Уличные вазоны из пластика · Челябинск → Екатеринбург</span>
        </div>
      </footer>
    </div>
  );
};

const SectionTitle = ({ icon, pre, title, light }: { icon: string; pre: string; title: string; light?: boolean }) => (
  <div>
    <div className={`flex items-center gap-2 font-display uppercase tracking-widest text-sm ${light ? 'text-accent' : 'text-primary'}`}>
      <Icon name={icon} size={18} /> {pre}
    </div>
    <h2 className={`font-display font-700 text-3xl md:text-5xl uppercase mt-3 ${light ? 'text-primary-foreground' : 'text-foreground'}`}>{title}</h2>
  </div>
);

const Spec = ({ icon, label, value }: { icon: string; label: string; value: string }) => (
  <div className="flex items-center justify-between py-1.5 text-sm">
    <span className="flex items-center gap-2 text-primary-foreground/60">
      <Icon name={icon} size={15} /> {label}
    </span>
    <span className="font-600">{value}</span>
  </div>
);

export default Index;