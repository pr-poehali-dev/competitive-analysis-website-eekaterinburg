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
    direct: false,
    material: 'Бетон, композит',
    note: 'Собственное производство бетонных вазонов, закрывает ту же потребность заказчика.',
  },
  {
    name: 'Garden of Joy',
    site: 'https://kashpo.sadradosti.ru/',
    city: 'Волгоград',
    direct: false,
    material: 'Керамика, глина',
    note: 'Декоративные керамические кашпо — иной материал, но тот же сценарий использования.',
  },
  {
    name: 'Marble Collection',
    site: 'https://marble-collection.com/',
    city: 'Санкт-Петербург',
    direct: false,
    material: 'Мрамор, камень',
    note: 'Премиальный сегмент из натурального камня, конкурирует за бюджет благоустройства.',
  },
  {
    name: 'Светхолл',
    site: 'https://svetholl.ru/katalog/vazony/vazony-dlya-tsvetov/',
    city: 'Казань',
    direct: false,
    material: 'Металл, бетон',
    note: 'Комплексные решения по благоустройству территорий в ином материальном исполнении.',
  },
  {
    name: 'АСБ',
    site: 'https://asb-maf.ru/catalog/tsvetochnitsy-i-vazony/vazon-barselona/',
    city: 'Чувашия',
    direct: false,
    material: 'Бетон',
    note: 'МАФ для городской среды серии «Барселона» — иной материал, та же функция.',
  },
  {
    name: 'ЮАМЕТ',
    site: 'https://yuamet.com/product/dlya-parka/besedki-lavochki-urny-ograzhdeniya/vazony/',
    city: 'Москва',
    direct: false,
    material: 'Металл',
    note: 'Парковая инфраструктура из металла: беседки, урны и вазоны для благоустройства.',
  },
];

const comparisons = [
  {
    title: 'Ваза декоративная №8 «Аура»',
    ours: {
      brand: 'ЗАО «Пластик» (наш)',
      img: 'https://cdn.poehali.dev/projects/1ddc5012-c470-4c26-a827-91ac61619048/bucket/876db766-21c9-4565-8f22-49d05b80dec2.jpg',
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
        img: 'https://cdn.poehali.dev/projects/1ddc5012-c470-4c26-a827-91ac61619048/bucket/be5f4759-3a2b-4e32-bf94-84085b3be37d.jpg',
        size: '800×800×900',
        weight: '—',
        volume: '150 л',
        price: '25 200 ₽',
        priceNum: 25200,
        url: 'https://gurian.ru/catalog/vazony-napolnye/kashpo-vazon-ulichnyy-gurian-classic-900-siniy-150-litrov-ozelenenie-goroda/',
      },
    ],
  },
  {
    title: 'Ваза декоративная №30 «Куб малый»',
    ours: {
      brand: 'ЗАО «Пластик» (наш)',
      img: 'https://cdn.poehali.dev/projects/1ddc5012-c470-4c26-a827-91ac61619048/bucket/056243ea-f15e-490c-b54a-e0887ebaf662.jpg',
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
        img: 'https://cdn.poehali.dev/projects/1ddc5012-c470-4c26-a827-91ac61619048/bucket/be5f4759-3a2b-4e32-bf94-84085b3be37d.jpg',
        size: '800×800×850',
        weight: '30 кг',
        volume: '157 л',
        price: '26 250 ₽',
        priceNum: 26250,
        url: 'https://gurian.ru/catalog/vazony-napolnye/vazon-napolnyy-bolshoy/',
      },
    ],
  },
];

const serpGroups = [
  {
    query: 'уличный пластиковый вазон',
    results: [
      {
        brand: 'BERKANO',
        domain: 'brkno.com',
        path: '› Кашпо-BERKANO...',
        title: 'Уличный пластиковый вазон для сада и улицы',
        desc: 'Дизайнерские кашпо разных размеров и цветов, с LED подсветкой и влагозащитой... В наличии и под заказ. Широкий ассортимент на магазин',
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
        brand: 'GURIAN',
        domain: 'gurian.ru',
        path: '› Напольные и подвесные вазоны для уличного озеленения...',
        title: 'Напольные и подвесные вазоны для уличного озеленения',
        desc: 'Вазоны от производителя',
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
        brand: 'ЗАО «Пластик» (наш)',
        domain: 'ap-plastic.ru',
        path: '› Уличные пластиковые вазоны от производителя ЗАО «Пластик»...',
        title: 'Уличные пластиковые вазоны от производителя ЗАО...',
        desc: 'Качественные и долговечные вазоны для ландшафтного дизайна садового участка. Прямоугольные. Квадратные. Круглые. Доставка по всей России. Большие. Малые. Выгодные цены. Для дачи. Для дома. Оптом и в розницу. Для парков',
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
    conclusion: 'BERKANO использует рейтинг, эмоциональные УТП (LED-подсветка, 17 цветов) и явно указывает часы работы — это повышает CTR. У GURIAN нет рейтинга и слабый текст. Наш сниппет близок к BERKANO по рейтингу (4,5 против 4,6), но стоит добавить конкретные цифры в заголовок (например, «от 8 700 ₽») и указать преимущество по цене.',
  },
  {
    query: 'большой пластиковый вазон',
    note: 'GURIAN в этой выдаче отсутствует',
    results: [
      {
        brand: 'ЗАО «Пластик» (наш)',
        domain: 'ap-plastic.ru',
        path: '› Пластиковые вазоны для больших цветов от завода...',
        title: 'Пластиковые вазоны для больших цветов от завода',
        desc: 'Прочные и надёжные пластиковые вазоны. Выгодные цены. Прямоугольные. Квадратные. Круглые. Доставка по всей России. Большие. Малые. Выгодные цены. Для дачи. Для дома. Оптом и в розницу. Для парков',
        rating: '4,5',
        reviews: '10 отзывов на магазин',
        tags: ['Собственное производство', 'Контактная информация', 'Каталог вазонов для цветов'],
        phone: '+7 (800) 775-XX-XX',
        hours: 'будни 8:30–17:00, перерыв 11:30–12:30',
        metro: null,
        badge: 'Выгода до 50% вазоны из долговечного пластика',
        icon: '🔵',
        iconBg: 'bg-blue-500',
        ours: true,
      },
      {
        brand: 'BERKANO',
        domain: 'brkno.com',
        path: '› Кашпо-BERKANO...',
        title: 'Большие пластиковые кашпо BERKANO — широкий выбор в...',
        desc: 'Дизайнерские кашпо разных размеров и цветов с доставкой по РФ. В наличии и под заказ. Широкий ассортимент. В любую точку РФ и мира',
        rating: '4,6',
        reviews: '28 отзывов на магазин',
        tags: ['Широкая палитра — 17 цветов', 'Одинарное и двойное дно', 'LED', 'Защита IP68'],
        phone: '+7 (800) 511-XX-XX',
        hours: 'ежедневно 10:00–22:00',
        metro: 'м. Международная',
        icon: 'B',
        iconBg: 'bg-red-500',
      },
    ],
    conclusion: 'По этому запросу мы занимаем первую позицию — раньше BERKANO. У нас есть уникальное расширение «Выгода до 50%», которого нет у конкурента. Стоит закрепить позицию: добавить фильтры «Цена» и «Бренд», как в выдаче, и усилить визуальный акцент на скидке.',
  },
  {
    query: 'купить уличные вазоны',
    results: [
      {
        brand: 'GURIAN',
        domain: 'gurian.ru',
        path: '› Уличные вазоны — купить у производителя... Промо',
        title: 'Уличные вазоны — купить у производителя',
        desc: 'Вазоны для городского озеленения от производителя. Купить в...',
        rating: null,
        reviews: null,
        tags: ['Вазоны напольные', 'Гидровазоны', 'Металлоконструкции', 'Контакты'],
        phone: null,
        hours: null,
        metro: 'м. Автозаводская',
        icon: '🌿',
        iconBg: 'bg-green-600',
      },
    ],
    conclusion: 'По транзакционному запросу «купить» лидирует GURIAN с промо-меткой и явным словом «купить» в заголовке — это увеличивает конверсию клика в покупку. Нас и BERKANO в этой выдаче нет — стоит занять эту нишу с коммерческим заголовком.',
  },
];

const dataNeeds = [
  { icon: 'Tag', title: 'Цены и прайс-листы', desc: 'Собрать цены по сопоставимым моделям (объём, высота, форма). Источник: сайты конкурентов, запрос КП под видом клиента.' },
  { icon: 'Package', title: 'Ассортимент и размеры', desc: 'Кол-во SKU, линейки объёмов, материалы, цветовая палитра. Источник: каталоги на сайтах, выгрузки товаров.' },
  { icon: 'Truck', title: 'Логистика и сроки', desc: 'Стоимость и сроки доставки в Екатеринбург, наличие склада/шоурума. Источник: калькуляторы доставки, звонок менеджеру.' },
  { icon: 'Search', title: 'Поисковый спрос', desc: 'Частотность запросов «уличные вазоны Екатеринбург», сезонность. Источник: Яндекс.Вордстат, Google Keyword Planner.' },
  { icon: 'Star', title: 'Отзывы и репутация', desc: 'Оценки на Яндекс.Картах, 2ГИС, отзовиках. Выявить боли клиентов конкурентов. Источник: Яндекс.Карты, 2ГИС, Отзовик.' },
  { icon: 'Users', title: 'Каналы продаж', desc: 'Работа с B2B (муниципалитеты, УК), тендеры, маркетплейсы. Источник: zakupki.gov.ru, Wildberries/Ozon, соцсети.' },
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
            Конкуренты в платной выдаче Яндекса
          </h1>
          <p className="animate-fade-up mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl" style={{ animationDelay: '0.2s' }}>
            Анализ конкурентов: ассортимент, регион присутствия и разбор рекламных объявлений в поиске Яндекса
          </p>
          <div className="animate-fade-up mt-10 flex flex-wrap gap-4" style={{ animationDelay: '0.3s' }}>
            {[
              { n: '9', t: 'конкурентов в анализе' },
              { n: '1', t: 'прямой конкурент по ассортименту' },
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
          Один игрок совпадает с нами по ассортименту напрямую — производит вазоны из пластика. Остальные восемь работают с иным материалом (бетон, металл, керамика, камень), но решают ту же задачу заказчика — благоустройство территории — и поэтому тоже являются нашими конкурентами за бюджет клиента.
        </p>

        {/* Прямой конкурент */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-5">
            <Icon name="Crosshair" className="text-destructive" size={18} />
            <span className="text-xs font-700 uppercase tracking-widest text-destructive">Прямой конкурент · совпадение по ассортименту</span>
          </div>
          {allCompetitors.filter((c) => c.direct).map((c) => (
            <div key={c.name} className="hover-lift bg-card rounded-2xl border-2 border-destructive/30 ring-2 ring-destructive/10 p-7 max-w-xl">
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
                          <div className="relative h-52 bg-white overflow-hidden">
                            <img src={p.img} alt={p.brand} className="w-full h-full object-cover" />
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
          Как выглядят наши и конкурентные сниппеты по трём ключевым запросам покупателей.
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

      {/* КАКИЕ ДАННЫЕ НУЖНЫ */}
      <section className="container py-20">
        <SectionTitle icon="Database" pre="Методология" title="Какие данные собрать и где взять" />
        <p className="text-muted-foreground max-w-2xl mt-4">
          Чтобы отчёт был точным, соберите эти данные по каждому конкуренту. Ниже — что искать и в каких источниках.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {dataNeeds.map((d) => (
            <div key={d.title} className="hover-lift bg-card rounded-2xl border border-border p-7">
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                <Icon name={d.icon} className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-xl uppercase mb-2">{d.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
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