/**
 * BUILDR PORTFOLIO - MULTILINGUAL i18n ENGINE
 * Supports: Uzbek ('uz'), Russian ('ru'), English ('en')
 * Default: 'uz' (or persisted user selection via localStorage)
 */

(function () {
  'use strict';

  const TRANSLATIONS = {
    uz: {
      // Navbar
      nav_projects: 'Loyihalar',
      nav_about: 'Men haqimda',
      nav_pricing: 'Narxlar',
      nav_contact: "Bog'lanish",

      // Hero Section
      hero_badge: 'Ishga tayyorman',
      hero_hello: 'Hello',
      hero_im: 'I’m',
      hero_abdulloh: 'Abdulloh',
      hero_archviz: 'ArchViz',
      hero_artist: 'Artist',
      hero_intro: "Men asoschilarga aniqlik va real natijalarni o'zida mujassam etgan zamonaviy, yuqori samarali veb-saytlar va 3D vizualizatsiyalarni yaratishda yordam beraman.",
      hero_talk: "Bog'lanish",
      hero_clients_label: 'Mamnun mijozlar',

      // Ticker Bar
      ticker_clients: 'Butun dunyo bo‘ylab mamnun mijozlar',
      ticker_satisfaction: 'mijozlar qoniqish darajasi',
      ticker_years: 'yillik amaliy tajriba',
      ticker_projects: 'yakunlangan loyihalar',
      ticker_brands: 'qo‘llab-quvvatlangan brendlar',

      // Selected Works
      projects_badge: '{02} Tanlangan ishlar',
      projects_title: 'Raqamli tajribalarni yaratish',
      projects_sub: 'Aniqlik, unumdorlik va kengayish uchun yaratilgan loyihalar, veb-saytlar va interfeyslar to‘plami.',
      proj_card_1_title: 'Aniq UX oqimlariga ega mobil banking ilovasi',
      proj_card_1_tag: 'Fintex ilovasi',
      proj_card_2_title: 'Zamonaviy dasturlar uchun B2B dizayn tizimi',
      proj_card_2_tag: 'Dizayn tizimi',
      proj_card_3_title: 'Yuqori konversiyali fintex lending sahifasi',
      proj_card_3_tag: 'Veb-sayt dizayni',
      proj_card_4_title: 'Tezlik va qulaylik uchun yaratilgan SaaS boshqaruv paneli',
      proj_card_4_tag: 'SaaS platformasi',
      proj_view_all: 'Barcha loyihalarni ko‘rish',

      // Services Section
      services_badge: '{03} Xizmatlar',
      services_title: 'Qanday yordam bera olaman',
      services_sub: 'Mahsulotingiz bosqichi va rivojlanish maqsadlariga moslashtirilgan to‘liq sikldagi dizayn va 3D xizmatlari.',
      srv_1_name: '/01 Brend identifikatsiyasi',
      srv_1_desc: 'Brendingizni ilg‘or o‘ringa olib chiqadigan esda qolarli vizual identifikatsiya, dizayn tili va qo‘llanmalar yaratish.',
      srv_1_tag1: 'Strategiya',
      srv_1_tag2: 'Vizual identifikatsiya',
      srv_1_tag3: 'Qo‘llanmalar',
      srv_2_name: '/02 Mahsulot dizayni',
      srv_2_desc: 'Foydalanuvchi tadqiqotidan tortib interaktiv prototiplargacha — odamlar sevib ishlatadigan qulay raqamli mahsulotlarni loyihalash.',
      srv_2_tag1: 'Dizayn tizimlari',
      srv_2_tag2: 'Prototiplash',
      srv_2_tag3: 'UX tadqiqotlar',
      srv_3_name: '/03 Framer dasturlash',
      srv_3_desc: 'Dizaynlarni piksellarigacha aniq, silliq animatsiyali va qulay CMS tizimiga ega responsive veb-saytlarga aylantirish.',
      srv_3_tag1: 'Moslashuvchan',
      srv_3_tag2: 'Silliq harakat',
      srv_3_tag3: 'CMS sozlash',
      srv_4_name: '/04 Art-direktsiya & 3D',
      srv_4_desc: 'Barcha aloqa nuqtalarida umumiy vizual uslub, fotorealistik 3D ArchViz va kreativ yo‘nalishni professional boshqarish.',
      srv_4_tag1: '3D Vizualizatsiya',
      srv_4_tag2: 'Kreativ konsept',
      srv_4_tag3: 'ArchViz',

      // Experience Section
      exp_badge: '{04} Tajriba',
      exp_title: '7 yildan ortiq raqamli mahsulotlar yaratish tajribasi',
      exp_sub: 'Startaplardan tortib yirik korxonalargacha — samarali interfeyslar va vizual tajribalar yaratishda ishonchli tajriba.',
      exp_circle_text: '7+ YILLIK TAJRIBA • TAJRIBA • ',
      exp_card_1_role: 'Yetakchi mahsulot dizayneri',
      exp_card_1_date: '2023 — Hozirgacha',
      exp_card_2_role: 'Katta UI/UX dizayner',
      exp_card_2_date: '2021 — 2023',
      exp_card_3_role: 'Asoschi dizayner',
      exp_card_3_date: '2018 — 2021',
      exp_card_4_role: 'Vizual dizayner',
      exp_card_4_date: '2017 — 2018',

      // Testimonials Section
      testimonials_badge: '{05} Fikrlar',
      testimonials_title: 'Mijozlar nima deydi',
      testimonials_sub: 'Asoschilar, mahsulot rahbarlari va dasturchilar jamoasining samimiy fikrlari.',

      // Why Me Section
      why_me_badge: '{06} Nega aynan men',
      why_me_title: 'Natijalaringizga befarq bo‘lmagan ishonchli hamkor',
      why_me_desc: 'Men nafaqat chiroyli piksellarni chizaman, balki biznesingiz muammolarini hal qiluvchi, konversiyani oshiruvchi va foydalanuvchilar mehrini qozonuvchi mahsulotlarni barpo etaman.',

      // Pricing Section
      pricing_badge: '{07} Narxlar',
      pricing_title: 'Shaffof va qulay narxlar',
      pricing_sub: 'Turli hajmdagi loyihalar va maqsadlar uchun maxsus moslashtirilgan aniq paketlar.',
      pricing_basic_title: 'Basic',
      pricing_basic_sub: 'Kichik loyihalar uchun',
      pricing_period: '/oyiga',
      pricing_included: 'Paket ichiga kiradi:',
      pricing_b_item_1: 'Mavjud ekranlarning UX & UI auditi',
      pricing_b_item_2: 'Tuzilma, ierarxiya va oraliqlarni to‘g‘rilash',
      pricing_b_item_3: 'Vizual uslubni uyg‘unlashtirish (rang, shrift)',
      pricing_b_item_4: 'Dizaynni yaxshilash bo‘yicha aniq tavsiyalar',
      pricing_get_started: 'Boshlash',
      pricing_prem_title: 'Premium',
      pricing_prem_sub: 'To‘liq mahsulotlar uchun',
      pricing_p_item_1: 'UX oqimlari va interfeys dizayni',
      pricing_p_item_2: 'Qayta ishlatiladigan komponentlar va dizayn tizimi',
      pricing_p_item_3: 'Moslashuvchan maketlar (kompyuter, planshet, mobil)',
      pricing_p_item_4: 'Dasturchilarga topshirish uchun tayyor fayllar',
      pricing_p_item_5: 'Yuqori aniqlikdagi UI ekranlar',
      pricing_p_item_6: 'Tahrirlash va mukammallashtirish bosqichlari',

      // FAQ Section
      faq_badge: '{08} FAQ',
      faq_title: 'Ko‘p beriladigan savollar',
      faq_q1: 'Loyihani yakunlash qancha vaqt oladi?',
      faq_a1: 'Loyiha hajmiga qarab: kichikroq vazifalar odatda 1-2 hafta, to‘liq veb-sayt yoki murakkab dizayn tizimi esa 3-6 hafta davom etadi.',
      faq_q2: 'Dizayn jarayoni qanday bosqichlardan iborat?',
      faq_a2: 'Jarayon tadqiqot va arxitekturadan boshlanadi, so‘ngra simli karkaslar (wireframes), vizual dizayn, interaktiv prototip va topshirish bosqichlaridan o‘tadi.',
      faq_q3: 'Faqat dizayn qilasizmi yoki saytni ham qurasizmi?',
      faq_a3: 'Men to‘liq siklda ishlayman — ham dizayn qilaman, ham Framer yordamida tezkor, animatsiyali va qulay saytlarni yaratib beraman.',
      faq_q4: 'Loyiha davomida o‘zgartirishlar kiritish mumkinmi?',
      faq_a4: 'Albatta, har bir bosqichda siz bilan kelishiladi va 2-3 bosqichli bepul tahrirlash imkoniyati mavjud.',
      faq_q5: 'Hamkorlikni qanday boshlasak bo‘ladi?',
      faq_a5: 'Tugmani bosing yoki to‘g‘ridan-to‘g‘ri bog‘laning — loyihangizni muhokama qilamiz va eng yaxshi yechimni taklif etaman.',

      // Blog Section
      blog_badge: '{09} Maqolalar',
      blog_title: 'So‘nggi fikrlar va tajribalar',
      blog_sub: 'Dizayn, tizimlar, mahsulot strategiyasi va vizual mahorat haqida mulohazalar.',
      blog_p1_title: 'O‘sish bilan birga kengayadigan mahsulotlarni loyihalash',
      blog_p1_cat: 'Mahsulot dizayni',
      blog_p2_title: 'Dizayn tizimlari dasturlash vaqtini qanday tejaydi',
      blog_p2_cat: 'Dizayn tizimi',
      blog_p3_title: 'Nega toza va tushunarli UI foydalanuvchi qarorlarini yaxshilaydi',
      blog_p3_cat: 'UI/UX Dizayn',

      // CTA & Footer
      cta_heading: 'Keling, birgalikda ajoyib loyiha yarataylik',
      cta_sub: 'Mahsulotingizni yangi bosqichga olib chiqishga tayyormisiz? Bugunoq bog‘laning.',
      cta_btn: "Bog'lanish",
      footer_title: 'Keling, birgalikda<br>mo‘jiza yarataylik',
      footer_menu: 'Menyu',
      footer_home: 'Bosh sahifa',
      footer_follow: 'Ijtimoiy tarmoqlar',
      footer_follow_desc: 'Dizayn ishlari, tajribalar va yangiliklar.',
      footer_form_title: 'Hamkorlik qilamiz',
      footer_name_ph: 'Ismingiz',
      footer_email_ph: 'Elektron pochtangiz',
      footer_msg_ph: 'Qanday yordam bera olamiz?',
      footer_submit: 'Bog‘lanish',
      footer_rights: '© 2026 — Barcha huquqlar himoyalangan',
      footer_created: 'Muallif: Flux'
    },

    ru: {
      // Navbar
      nav_projects: 'Проекты',
      nav_about: 'Обо мне',
      nav_pricing: 'Цены',
      nav_contact: 'Связаться',

      // Hero Section
      hero_badge: 'Доступен для проектов',
      hero_hello: 'Hello',
      hero_im: 'I’m',
      hero_abdulloh: 'Abdulloh',
      hero_archviz: 'ArchViz',
      hero_artist: 'Artist',
      hero_intro: 'Я помогаю фаундерам создавать современные, эффективные веб-сайты и 3D-визуализации, сочетающие ясность и реальный результат.',
      hero_talk: 'Обсудить проект',
      hero_clients_label: 'Довольных клиентов',

      // Ticker Bar
      ticker_clients: 'Довольных клиентов по всему миру',
      ticker_satisfaction: 'уровень удовлетворенности',
      ticker_years: 'лет опыта в дизайне',
      ticker_projects: 'сданных проектов',
      ticker_brands: 'поддержанных брендов',

      // Selected Works
      projects_badge: '{02} Избранные работы',
      projects_title: 'Создание цифрового опыта',
      projects_sub: 'Коллекция продуктов, сайтов и интерфейсов, созданных для ясности, производительности и масштабирования.',
      proj_card_1_title: 'Мобильное банковское приложение с понятным UX',
      proj_card_1_tag: 'Финтех приложение',
      proj_card_2_title: 'B2B дизайн-система для современного ПО',
      proj_card_2_tag: 'Дизайн-система',
      proj_card_3_title: 'Конверсионный лендинг для финтех-платформы',
      proj_card_3_tag: 'Дизайн сайта',
      proj_card_4_title: 'SaaS дашборд, созданный для скорости и ясности',
      proj_card_4_tag: 'SaaS платформа',
      proj_view_all: 'Все проекты',

      // Services Section
      services_badge: '{03} Услуги',
      services_title: 'Чем я могу помочь',
      services_sub: 'Полный спектр услуг дизайна и 3D, адаптированный под цели и стадию развития вашего продукта.',
      srv_1_name: '/01 Айдентика бренда',
      srv_1_desc: 'Создание запоминающейся визуальной айдентики, дизайн-языка и гайдлайнов, выводящих ваш бренд вперед.',
      srv_1_tag1: 'Стратегия',
      srv_1_tag2: 'Визуальная айдентика',
      srv_1_tag3: 'Гайдлайны',
      srv_2_name: '/02 Продуктовый дизайн',
      srv_2_desc: 'От исследований пользователей до интерактивных прототипов — проектирование удобных продуктов, которые любят пользователи.',
      srv_2_tag1: 'Дизайн-системы',
      srv_2_tag2: 'Прототипирование',
      srv_2_tag3: 'UX исследования',
      srv_3_name: '/03 Разработка на Framer',
      srv_3_desc: 'Превращение дизайн-макетов в адаптивные сайты на Framer с плавной анимацией и удобной CMS.',
      srv_3_tag1: 'Адаптивность',
      srv_3_tag2: 'Плавная анимация',
      srv_3_tag3: 'Настройка CMS',
      srv_4_name: '/04 Арт-дирекшн & 3D',
      srv_4_desc: 'Управление визуальным стилем, фотореалистичным 3D ArchViz и креативным направлением во всех точках контакта.',
      srv_4_tag1: '3D Визуализация',
      srv_4_tag2: 'Креативный концепт',
      srv_4_tag3: 'ArchViz',

      // Experience Section
      exp_badge: '{04} Опыт',
      exp_title: 'Более 7 лет создания цифровых продуктов',
      exp_sub: 'От стартапов до крупных компаний — надежный опыт создания эффективных интерфейсов и визуальных решений.',
      exp_circle_text: '7+ ЛЕТ ОПЫТА • ДИЗАЙН • ',
      exp_card_1_role: 'Ведущий продуктовый дизайнер',
      exp_card_1_date: '2023 — Настоящее время',
      exp_card_2_role: 'Старший UI/UX дизайнер',
      exp_card_2_date: '2021 — 2023',
      exp_card_3_role: 'Дизайнер-основатель',
      exp_card_3_date: '2018 — 2021',
      exp_card_4_role: 'Визуальный дизайнер',
      exp_card_4_date: '2017 — 2018',

      // Testimonials Section
      testimonials_badge: '{05} Отзывы',
      testimonials_title: 'Что говорят клиенты',
      testimonials_sub: 'Честные отзывы от основателей, лидеров продуктов и команд инженеров.',

      // Why Me Section
      why_me_badge: '{06} Почему я',
      why_me_title: 'Надежный партнер, нацеленный на ваш результат',
      why_me_desc: 'Я не просто рисую красивые пиксели, а решаю бизнес-задачи, повышаю конверсию и создаю продукты, которые любят пользователи.',

      // Pricing Section
      pricing_badge: '{07} Цены',
      pricing_title: 'Прозрачные тарифы',
      pricing_sub: 'Понятные тарифы, созданные под разные масштабы проектов и задачи.',
      pricing_basic_title: 'Базовый',
      pricing_basic_sub: 'Для небольших проектов',
      pricing_period: '/в месяц',
      pricing_included: 'Что включено:',
      pricing_b_item_1: 'UX и UI аудит существующих экранов',
      pricing_b_item_2: 'Исправление структуры, иерархии и отступов',
      pricing_b_item_3: 'Синхронизация визуального стиля (цвет, шрифты)',
      pricing_b_item_4: 'Понятные рекомендации по улучшению дизайна',
      pricing_get_started: 'Начать',
      pricing_prem_title: 'Премиум',
      pricing_prem_sub: 'Для комплексных продуктов',
      pricing_p_item_1: 'UX-сценарии и дизайн интерфейсов',
      pricing_p_item_2: 'Библиотека компонентов и дизайн-система',
      pricing_p_item_3: 'Адаптивные макеты (ПК, планшет, мобильные)',
      pricing_p_item_4: 'Файлы для передачи разработчикам',
      pricing_p_item_5: 'Высокодетализированные UI-экраны',
      pricing_p_item_6: 'Итерации правок и доработка деталей',

      // FAQ Section
      faq_badge: '{08} Частые вопросы',
      faq_title: 'Часто задаваемые вопросы',
      faq_q1: 'Сколько времени занимает проект?',
      faq_a1: 'В зависимости от масштаба: небольшие задачи занимают 1-2 недели, а комплексный сайт или дизайн-система — от 3 до 6 недель.',
      faq_q2: 'Как устроен процесс работы?',
      faq_a2: 'Процесс начинается с исследования и структуры, затем прототипирование, визуальный дизайн и подготовка к передаче в разработку.',
      faq_q3: 'Вы делаете только дизайн или верстку тоже?',
      faq_a3: 'Я работаю под ключ: проектирую интерфейсы и создаю готовые быстрые сайты на Framer с плавной анимацией.',
      faq_q4: 'Сколько правок включено в работу?',
      faq_a4: 'Да, на каждом этапе проводятся согласования, в стоимость включены раунды необходимых правок.',
      faq_q5: 'Как начать сотрудничество?',
      faq_a5: 'Нажмите кнопку связи или напишите мне — мы обсудим проект и подберем оптимальный формат.',

      // Blog Section
      blog_badge: '{09} Статьи',
      blog_title: 'Свежие мысли и статьи',
      blog_sub: 'Инсайты о дизайне, дизайн-системах, стратегии продуктов и визуальном мастерстве.',
      blog_p1_title: 'Проектирование продуктов, масштабируемых с ростом',
      blog_p1_cat: 'Продуктовый дизайн',
      blog_p2_title: 'Как дизайн-системы экономят время разработки',
      blog_p2_cat: 'Дизайн-система',
      blog_p3_title: 'Почему понятный UI помогает пользователям принимать решения',
      blog_p3_cat: 'UI/UX Дизайн',

      // CTA & Footer
      cta_heading: 'Давайте создадим что-то великое вместе',
      cta_sub: 'Готовы вывести ваш продукт на новый уровень? Свяжитесь со мной сегодня.',
      cta_btn: 'Связаться',
      footer_title: 'Давайте создадим<br>магию вместе',
      footer_menu: 'Меню',
      footer_home: 'Главная',
      footer_follow: 'Мы в соцсетях',
      footer_follow_desc: 'Работы по дизайну, эксперименты и новости продуктов.',
      footer_form_title: 'Давайте работать вместе',
      footer_name_ph: 'Ваше имя',
      footer_email_ph: 'Ваш email',
      footer_msg_ph: 'Чем мы можем помочь?',
      footer_submit: 'Отправить заявку',
      footer_rights: '© 2026 — Все права защищены',
      footer_created: 'Создано Flux'
    },

    en: {
      // Navbar
      nav_projects: 'Projects',
      nav_about: 'About me',
      nav_pricing: 'Pricing',
      nav_contact: 'Get in touch',

      // Hero Section
      hero_badge: 'Available for work',
      hero_hello: 'Hello',
      hero_im: 'I’m',
      hero_abdulloh: 'Abdulloh',
      hero_archviz: 'ArchViz',
      hero_artist: 'Artist',
      hero_intro: 'I help founders design modern, high-performing websites that balance clarity & real outcomes.',
      hero_talk: "Let's talk",
      hero_clients_label: 'Happy clients',

      // Ticker Bar
      ticker_clients: 'Happy clients worldwide',
      ticker_satisfaction: 'client satisfaction rate',
      ticker_years: 'years shipping products',
      ticker_projects: 'projects delivered',
      ticker_brands: 'brands supported',

      // Selected Works
      projects_badge: '{02} Selected Works',
      projects_title: 'Crafting digital experiences',
      projects_sub: 'A curated collection of products, websites, and interfaces built for clarity, performance, and scale.',
      proj_card_1_title: 'Mobile banking app with clear UX flows',
      proj_card_1_tag: 'Fintech app',
      proj_card_2_title: 'B2B design system for modern software',
      proj_card_2_tag: 'Design system',
      proj_card_3_title: 'High-converting fintech landing page',
      proj_card_3_tag: 'Website design',
      proj_card_4_title: 'SaaS dashboard designed for speed & clarity',
      proj_card_4_tag: 'SaaS platform',
      proj_view_all: 'View all projects',

      // Services Section
      services_badge: '{03} Services',
      services_title: 'How I can help',
      services_sub: 'Full-cycle design services tailored to your product stage and growth goals.',
      srv_1_name: '/01 Brand Identity',
      srv_1_desc: 'Creating memorable visual identities, design languages, and guidelines that position your brand ahead.',
      srv_1_tag1: 'Strategy',
      srv_1_tag2: 'Visual Identity',
      srv_1_tag3: 'Guidelines',
      srv_2_name: '/02 Product Design',
      srv_2_desc: 'From user research to interactive prototypes, designing intuitive digital products that users love.',
      srv_2_tag1: 'Design Systems',
      srv_2_tag2: 'Prototyping',
      srv_2_tag3: 'User Research',
      srv_3_name: '/03 Framer Development',
      srv_3_desc: 'Turning designs into pixel-perfect, responsive Framer websites with smooth animations and CMS.',
      srv_3_tag1: 'Responsive',
      srv_3_tag2: 'Smooth Motion',
      srv_3_tag3: 'CMS Setup',
      srv_4_name: '/04 Art Direction',
      srv_4_desc: 'Guiding the visual tone, 3D assets, and creative direction across all touchpoints.',
      srv_4_tag1: '3D Visualization',
      srv_4_tag2: 'Creative Concept',
      srv_4_tag3: 'ArchViz',

      // Experience Section
      exp_badge: '{04} Experience',
      exp_title: 'Over 7 years of shaping digital products',
      exp_sub: 'A proven track record of designing impactful interfaces for fast-growing startups and established tech companies.',
      exp_circle_text: '7+ YEARS EXPERIENCE • DESIGN • ',
      exp_card_1_role: 'Lead Product Designer',
      exp_card_1_date: '2023 — Present',
      exp_card_2_role: 'Senior UI/UX Designer',
      exp_card_2_date: '2021 — 2023',
      exp_card_3_role: 'Founding Designer',
      exp_card_3_date: '2018 — 2021',
      exp_card_4_role: 'Visual Designer',
      exp_card_4_date: '2017 — 2018',

      // Testimonials Section
      testimonials_badge: '{05} Testimonials',
      testimonials_title: 'What clients say',
      testimonials_sub: 'Real feedback from founders, product leaders, and engineering teams.',

      // Why Me Section
      why_me_badge: '{06} Why Me',
      why_me_title: 'A collaborative partner who cares about your outcomes',
      why_me_desc: 'I bridge the gap between business strategy, human experience, and technical execution.',

      // Pricing Section
      pricing_badge: '{07} Pricing',
      pricing_title: 'Simple pricing',
      pricing_sub: 'Clear packages designed to fit different project sizes and goals.',
      pricing_basic_title: 'Basic',
      pricing_basic_sub: 'For small projects',
      pricing_period: '/month',
      pricing_included: "What's Included:",
      pricing_b_item_1: 'UX & UI audit of existing screens',
      pricing_b_item_2: 'Layout, hierarchy, and spacing fixes',
      pricing_b_item_3: 'Visual style alignment (color, type)',
      pricing_b_item_4: 'Clear design improvement notes',
      pricing_get_started: 'Get started',
      pricing_prem_title: 'Premium',
      pricing_prem_sub: 'For full products',
      pricing_p_item_1: 'UX flows and interface design',
      pricing_p_item_2: 'Reusable components and design system',
      pricing_p_item_3: 'Responsive layouts (desktop, tablet, mobile)',
      pricing_p_item_4: 'Webflow-ready structure or dev handoff files',
      pricing_p_item_5: 'High-fidelity UI screens',
      pricing_p_item_6: 'Iteration rounds and refinements',

      // FAQ Section
      faq_badge: '{08} FAQ',
      faq_title: 'Frequently asked questions',
      faq_q1: 'How long does a typical project take?',
      faq_a1: 'Most website projects take 2–4 weeks. Complex web applications or design systems typically require 4–8 weeks depending on scope.',
      faq_q2: 'What is your design process?',
      faq_a2: 'Discovery & research → Wireframing & UX flows → High-fidelity UI design → Interactive prototyping → Dev handoff & QA.',
      faq_q3: 'Do you build websites or only design them?',
      faq_a3: 'Both. I design in Figma and build production-ready, responsive websites in Framer with custom interactions and CMS.',
      faq_q4: 'How do revisions work?',
      faq_a4: 'Each milestone includes 2–3 structured review rounds. I work closely with you via Slack or Loom to keep feedback tight.',
      faq_q5: 'How do we get started?',
      faq_a5: "Click 'Get in touch' to send a message. We'll schedule a 20-minute intro call to discuss your goals, timeline, and fit.",

      // Blog Section
      blog_badge: '{09} Blog',
      blog_title: 'Recent thoughts',
      blog_sub: 'Insights on design, systems, product strategy, and visual craft.',
      blog_p1_title: 'Designing products that scale with growth',
      blog_p1_cat: 'Product Design',
      blog_p2_title: 'How design systems save development time',
      blog_p2_cat: 'Design System',
      blog_p3_title: 'Why clean & intuitive UI improves user decisions',
      blog_p3_cat: 'UI/UX Design',

      // CTA & Footer
      cta_heading: 'Let’s build something great together',
      cta_sub: 'Ready to take your product to the next level? Get in touch today.',
      cta_btn: 'Get in touch',
      footer_title: 'Let\'s create<br>magic together',
      footer_menu: 'Menu',
      footer_home: 'Home',
      footer_follow: 'Follow us',
      footer_follow_desc: 'Design work, experiments, and product updates.',
      footer_form_title: 'Let\'s work together',
      footer_name_ph: 'Your name',
      footer_email_ph: 'Your email',
      footer_msg_ph: 'How can we help?',
      footer_submit: 'Get in touch',
      footer_rights: '© 2026 — All rights reserved',
      footer_created: 'Created by Flux'
    }
  };

  let currentLang = localStorage.getItem('buildr_lang') || 'uz';

  function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) lang = 'uz';
    currentLang = lang;
    localStorage.setItem('buildr_lang', lang);
    document.documentElement.lang = lang;

    const dict = TRANSLATIONS[lang];

    // 1. Update all standard data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        // If element has button roll spans (.text-primary and .text-clone), update both
        const p1 = el.querySelector('.text-primary');
        const p2 = el.querySelector('.text-clone');
        if (p1 && p2) {
          p1.textContent = dict[key];
          p2.textContent = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // 2. Update all data-i18n-html elements (if any)
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // 3. Update all data-i18n-placeholder elements (if any)
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // 4. Update active class on all language buttons across page
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // 5. Notify Lenis or window that content might have resized
    window.dispatchEvent(new Event('resize'));
  }

  function initI18n() {
    // Bind click events on all language switcher buttons
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const selected = btn.getAttribute('data-lang');
        if (selected) {
          setLanguage(selected);
        }
      });
    });

    // Apply current language
    setLanguage(currentLang);
  }

  // Auto-init on DOMContentLoaded or immediately if already loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
  } else {
    initI18n();
  }

  window.BuildrI18n = {
    setLanguage: setLanguage,
    getLanguage: function () {
      return currentLang;
    },
    translations: TRANSLATIONS
  };
})();
