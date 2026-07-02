import { useState } from 'react';
import Icon from '@/components/ui/icon';

const competitors = [
  {
    name: 'BRKNO Урал',
    site: 'ural.brkno.com',
    city: 'Екатеринбург',
    showroom: true,
    presence: 'Прямой конкурент',
    color: 'destructive',
    strengths: ['Физический шоурум в Екатеринбурге', 'Локальная логистика', 'Доверие местных клиентов'],
    weaknesses: ['Ограниченный ассортимент уличных серий', 'Средний ценовой сегмент'],
    threat: 90,
  },
  {
    name: 'Gurian',
    site: 'gurian.ru',
    city: 'Липецк',
    showroom: false,
    presence: 'Федеральный игрок',
    color: 'accent',
    strengths: ['Широкий каталог напольных вазонов', 'Развитая онлайн-витрина', 'Опт и розница'],
    weaknesses: ['Удалённая логистика до Урала', 'Нет присутствия в регионе', 'Долгая доставка'],
    threat: 55,
  },
  {
    name: 'Clean Planet Group',
    site: 'cleanplanetgroup.ru',
    city: 'Славянск-на-Кубани',
    showroom: false,
    presence: 'Южный регион',
    color: 'primary',
    strengths: ['Специализация на уличных кашпо', 'Собственное производство'],
    weaknesses: ['Огромное транспортное плечо до Екб', 'Слабая узнаваемость на Урале', 'Высокая стоимость доставки'],
    threat: 35,
  },
];

const metrics = [
  { label: 'Близость к рынку Екб', values: [95, 40, 15], us: 60 },
  { label: 'Ассортимент вазонов', values: [55, 90, 70], us: 80 },
  { label: 'Качество пластика', values: [65, 60, 75], us: 90 },
  { label: 'Ценовая доступность', values: [50, 70, 45], us: 75 },
  { label: 'Онлайн-присутствие', values: [70, 85, 55], us: 45 },
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
  const [active, setActive] = useState(0);

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
            Рынок уличных вазонов из&nbsp;пластика
          </h1>
          <p className="animate-fade-up mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl" style={{ animationDelay: '0.2s' }}>
            Отчёт по конкурентной среде в Екатеринбурге. Мы производим вазоны из высококачественного пластика и находимся в Челябинске — этот анализ показывает, как выйти на соседний рынок.
          </p>
          <div className="animate-fade-up mt-10 flex flex-wrap gap-4" style={{ animationDelay: '0.3s' }}>
            {[
              { n: '3', t: 'ключевых конкурента' },
              { n: '~200 км', t: 'от Челябинска до Екб' },
              { n: '1', t: 'локальный шоурум у соперников' },
            ].map((s) => (
              <div key={s.t} className="bg-primary-foreground/10 backdrop-blur rounded-xl px-6 py-4 border border-primary-foreground/15">
                <div className="font-display text-3xl text-accent">{s.n}</div>
                <div className="text-sm text-primary-foreground/70">{s.t}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* КОНКУРЕНТЫ */}
      <section className="container py-20">
        <SectionTitle icon="Target" pre="Кто на рынке" title="Профили конкурентов" />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {competitors.map((c, i) => (
            <div
              key={c.name}
              onClick={() => setActive(i)}
              className={`hover-lift cursor-pointer bg-card rounded-2xl border p-7 ${active === i ? 'border-accent ring-2 ring-accent/30' : 'border-border'}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Icon name="Building2" className="text-primary" size={24} />
                </div>
                <span className={`text-xs font-600 px-3 py-1 rounded-full ${i === 0 ? 'bg-destructive/10 text-destructive' : 'bg-secondary text-secondary-foreground'}`}>
                  {c.presence}
                </span>
              </div>
              <h3 className="font-display text-2xl uppercase">{c.name}</h3>
              <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                <Icon name="MapPin" size={14} /> {c.city}
                {c.showroom && <span className="text-accent flex items-center gap-1"><Icon name="Store" size={14} /> шоурум</span>}
              </div>

              <div className="mt-5">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Уровень угрозы</span>
                  <span className="font-600">{c.threat}%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full bg-destructive rounded-full transition-all duration-700" style={{ width: `${c.threat}%` }} />
                </div>
              </div>

              <div className="mt-5 space-y-2 text-sm">
                {c.strengths.slice(0, 2).map((s) => (
                  <div key={s} className="flex items-start gap-2 text-foreground/80">
                    <Icon name="Plus" size={16} className="text-primary mt-0.5 shrink-0" /> {s}
                  </div>
                ))}
                {c.weaknesses.slice(0, 1).map((s) => (
                  <div key={s} className="flex items-start gap-2 text-muted-foreground">
                    <Icon name="Minus" size={16} className="text-destructive mt-0.5 shrink-0" /> {s}
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-border text-xs text-muted-foreground font-mono">{c.site}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ГРАФИК СРАВНЕНИЯ */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <SectionTitle icon="BarChart3" pre="Сравнение по факторам" title="Мы против конкурентов" light />
          <div className="mt-12 grid lg:grid-cols-2 gap-x-16 gap-y-10">
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="flex justify-between items-baseline mb-3">
                  <span className="font-600">{m.label}</span>
                  <span className="font-display text-accent text-lg">Мы: {m.us}%</span>
                </div>
                <div className="space-y-2">
                  <Bar label="Мы (Челябинск)" value={m.us} highlight />
                  {m.values.map((v, idx) => (
                    <Bar key={idx} label={competitors[idx].name} value={v} />
                  ))}
                </div>
              </div>
            ))}
          </div>
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
              { icon: 'Award', t: 'Ставка на качество', d: 'Ваш козырь — высококачественный пластик. Подчёркивайте морозостойкость и срок службы в B2B-предложениях.' },
              { icon: 'Truck', t: 'Скорость доставки', d: '200 км от Челябинска — это быстрее, чем у Липецка и Кубани. Делайте акцент на срочную доставку в регион.' },
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

const Bar = ({ label, value, highlight }: { label: string; value: number; highlight?: boolean }) => (
  <div className="flex items-center gap-3">
    <span className={`w-40 shrink-0 text-xs truncate ${highlight ? 'text-accent font-600' : 'text-primary-foreground/60'}`}>{label}</span>
    <div className="flex-1 h-6 rounded-md bg-primary-foreground/10 overflow-hidden">
      <div
        className={`h-full rounded-md transition-all duration-1000 ${highlight ? 'bg-accent' : 'bg-primary-foreground/30'}`}
        style={{ width: `${value}%` }}
      />
    </div>
    <span className="w-10 text-right text-xs font-600">{value}%</span>
  </div>
);

export default Index;
