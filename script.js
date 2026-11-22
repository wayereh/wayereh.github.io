// Словарь переводов (UA / EN / RU)
const translations = {
    uk: {
        nav_about: "Про мене",
        nav_projects: "Проєкти",
        nav_contact: "Контакти",
        hero_status: "Відкритий до нових проєктів",
        hero_greeting: "Привіт, я Анатолій —",
        hero_role: "Frontend-розробник",
        hero_subtitle: "Створюю швидкі, адаптивні та сучасні лендінги на чистому коді (HTML5, CSS3, JavaScript, Bootstrap) без важких конструкторів.",
        hero_btn_projects: "Дивитись портфоліо",
        hero_btn_contact: "Обговорити проєкт",
        about_title: "Про мене та підхід до роботи",
        about_p1: "Я спеціалізуюся на сучасній адаптивній верстці та розробці лендінгів під ключ. Не працюю на «конвеєрі» з десятками замовлень одночасно — беру 1–2 проєкти в роботу, щоб приділити 100% уваги деталям та довести код до ідеалу без багів.",
        about_p2: "Окрім верстки з нуля, швидко знаходжу та виправляю помилки в чужому коді, налаштовую мобільну адаптивність, додаю інтерактивні елементи (калькулятори, фільтри, форми) та допомагаю з публікацією сайту на хостинг або GitHub Pages.",
        feat1_title: "Чистий та швидкий код",
        feat1_desc: "Ніякого зайвого сміття від конструкторів — сторінки миттєво завантажуються на будь-яких пристроях.",
        feat2_title: "Ідеальний адаптив",
        feat2_desc: "Коректне відображення на смартфонах, планшетах і широкоформатних моніторах у всіх сучасних браузерах.",
        feat3_title: "Англійська C1 та прозорість",
        feat3_desc: "Працюю з англомовними проєктами без бар'єрів, надаю live-посилання під час розробки та дотримуюсь дедлайнів.",
        projects_title: "Виконані проєкти",
        btn_live: "Живе демо ↗",
        implemented_label: "Що було реалізовано:",
        proj1_title: "APEX Detailing — Лендінг студії автодетейлінгу",
        proj1_item1: "Адаптивна верстка з нуля на семантичному HTML5 та CSS3 (Flexbox/Grid) з темною преміальною стилістикою.",
        proj1_item2: "Інтерактивний калькулятор вартості послуг на чистому JavaScript з миттєвим перерахунком ціни залежно від класу авто та пакету послуг.",
        proj1_item3: "Фільтрація галереї виконаних робіт за категоріями та модальні вікна швидкого запису з валідацією полів.",
        proj1_item4: "Кросбраузерна оптимізація та деплой проєкту на GitHub Pages.",
        contact_title: "Готові розпочати співпрацю?",
        contact_desc: "Напишіть мені на зручній фриланс-біржі або в месенджері — обговоримо завдання, терміни та вартість вашого сайту.",
        contact_fh: "Безпечна угода через Сейф ↗",
        contact_fiverr: "International Orders (EN) ↗",
        footer_rights: "Усі права захищено."
    },
    en: {
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_status: "Available for new projects",
        hero_greeting: "Hi, I'm Anatolii —",
        hero_role: "Frontend Web Developer",
        hero_subtitle: "I build fast, responsive, and modern landing pages from scratch using clean code (HTML5, CSS3, JavaScript, Bootstrap) without bloated page builders.",
        hero_btn_projects: "View Portfolio",
        hero_btn_contact: "Discuss a Project",
        about_title: "About Me & My Workflow",
        about_p1: "I specialize in modern responsive web layout and turnkey landing page development. Instead of running an assembly line with dozens of orders, I focus on 1–2 projects at a time to dedicate 100% of my attention to details and bug-free execution.",
        about_p2: "Beyond building from scratch, I quickly track down and fix layout/JS bugs in existing websites, configure mobile responsiveness, add interactive features (calculators, filters, forms), and deploy sites to hosting or GitHub Pages.",
        feat1_title: "Clean & Lightweight Code",
        feat1_desc: "Zero bloat from heavy page builders—pages load rapidly across all devices.",
        feat2_title: "Pixel-Accurate Responsiveness",
        feat2_desc: "Seamless display on smartphones, tablets, and wide desktop screens across all modern browsers.",
        feat3_title: "C1 English & Transparency",
        feat3_desc: "Smooth communication in English, live preview links during development, and strict adherence to deadlines.",
        projects_title: "Featured Projects",
        btn_live: "Live Demo ↗",
        implemented_label: "Key features implemented:",
        proj1_title: "APEX Detailing — Car Detailing Studio Landing Page",
        proj1_item1: "Responsive layout built from scratch with semantic HTML5 and CSS3 (Flexbox/Grid) in a dark premium aesthetic.",
        proj1_item2: "Interactive service cost calculator in Vanilla JS with real-time price updates based on vehicle class and package.",
        proj1_item3: "Portfolio gallery category filtering and quick-booking modal windows with form validation.",
        proj1_item4: "Cross-browser optimization and live deployment via GitHub Pages.",
        contact_title: "Ready to Start Your Project?",
        contact_desc: "Message me on your preferred freelance platform—let's discuss your goals, timeline, and project estimate.",
        contact_fh: "Safe Escrow Collaboration ↗",
        contact_fiverr: "Order Directly on Fiverr ↗",
        footer_rights: "All rights reserved."
    },
    ru: {
        nav_about: "Обо мне",
        nav_projects: "Проекты",
        nav_contact: "Контакты",
        hero_status: "Открыт к новым проектам",
        hero_greeting: "Привет, я Анатолий —",
        hero_role: "Frontend-разработчик",
        hero_subtitle: "Создаю быстрые, адаптивные и современные лендинги на чистом коде (HTML5, CSS3, JavaScript, Bootstrap) без тяжёлых конструкторов.",
        hero_btn_projects: "Смотреть портфолио",
        hero_btn_contact: "Обсудить проект",
        about_title: "Обо мне и подходе к работе",
        about_p1: "Я специализируюсь на современной адаптивной вёрстке и разработке лендингов под ключ. Не работаю на «конвейере» с десятками заказов одновременно — беру 1–2 проекта в работу, чтобы уделить 100% внимания деталям и довести код до идеала без багов.",
        about_p2: "Помимо вёрстки с нуля, быстро нахожу и исправляю ошибки в чужом коде, настраиваю мобильную адаптивность, добавляю интерактивные элементы (калькуляторы, фильтры, формы) и помогаю с публикацией сайта на хостинг или GitHub Pages.",
        feat1_title: "Чистый и быстрый код",
        feat1_desc: "Никакого лишнего мусора от конструкторов — страницы мгновенно загружаются на любых устройствах.",
        feat2_title: "Идеальный адаптив",
        feat2_desc: "Корректное отображение на смартфонах, планшетах и широкоформатных мониторах во всех современных браузерах.",
        feat3_title: "Английский C1 и прозрачность",
        feat3_desc: "Работаю с англоязычными проектами без барьеров, даю live-ссылку во время разработки и соблюдаю дедлайны.",
        projects_title: "Выполненные проекты",
        btn_live: "Живое демо ↗",
        implemented_label: "Что было реализовано:",
        proj1_title: "APEX Detailing — Лендинг студии автодетейлинга",
        proj1_item1: "Адаптивная вёрстка с нуля на семантическом HTML5 и CSS3 (Flexbox/Grid) в тёмной премиальной стилистике.",
        proj1_item2: "Интерактивный калькулятор стоимости услуг на чистом JavaScript с мгновенным пересчётом цены в зависимости от класса авто и пакета услуг.",
        proj1_item3: "Фильтрация галереи выполненных работ по категориям и модальные окна быстрой записи с валидацией полей.",
        proj1_item4: "Кроссбраузерная оптимизация и деплой проекта на GitHub Pages.",
        contact_title: "Готовы начать сотрудничество?",
        contact_desc: "Напишите мне на удобной фриланс-бирже — обсудим задачу, сроки и стоимость вашего сайта.",
        contact_fh: "Безопасная сделка через Сейф ↗",
        contact_fiverr: "International Orders (EN) ↗",
        footer_rights: "Все права защищены."
    }
};

// Переключение языков
const langButtons = document.querySelectorAll('.lang-btn');

function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    localStorage.setItem('portfolio_lang', lang);
}

langButtons.forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

const savedLang = localStorage.getItem('portfolio_lang') || 'uk';
setLanguage(savedLang);

// Логика полноширинного слайдера проектов
const track = document.getElementById('sliderTrack');
const slides = document.querySelectorAll('.project-slide');
const sliderControls = document.getElementById('sliderControls');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('sliderDots');
const currentSlideEl = document.getElementById('currentSlide');
const totalSlidesEl = document.getElementById('totalSlides');

let currentIndex = 0;
totalSlidesEl.textContent = slides.length;

// Если слайд пока один — прячем стрелки и точки, чтобы не путать посетителя
if (slides.length <= 1) {
    sliderControls.style.display = 'none';
    dotsContainer.style.display = 'none';
} else {
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'slider-dot' + (index === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Go to project ${index + 1}`);
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.slider-dot');

    function goToSlide(index) {
        if (index < 0) {
            currentIndex = slides.length - 1;
        } else if (index >= slides.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        currentSlideEl.textContent = currentIndex + 1;

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

    let touchStartX = 0;
    const viewport = document.getElementById('sliderViewport');

    viewport.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    viewport.addEventListener('touchend', e => {
        const touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) goToSlide(currentIndex + 1);
        if (touchEndX - touchStartX > 50) goToSlide(currentIndex - 1);
    }, { passive: true });
}
