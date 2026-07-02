/* =========================================================================
   Saving Astronomy in Ukraine — behaviour
   1. Editable links (the three values to fill in).
   2. Language toggle (EN / UK).
   3. Top-bar shadow, scroll reveals, starfield, constellation draw-in.
   All motion respects prefers-reduced-motion.
   ========================================================================= */

/* -------------------------------------------------------------------------
   1. EDIT ME: the three values from the brief.
   Fill these in, save, redeploy. Nothing else needs to change.
   ------------------------------------------------------------------------- */
const LINKS = {
  email: "REPLACE@example.org", // contact email for the team
  plan:  "#REPLACE-plan-pdf",   // URL of the full recovery plan (PDF)
  form:  "#REPLACE-feedback",   // URL of the feedback form (Google Form)
};

document.querySelectorAll("[data-link]").forEach((el) => {
  const k = el.getAttribute("data-link");
  el.setAttribute("href", k === "email" ? "mailto:" + LINKS.email : LINKS[k]);
});

/* -------------------------------------------------------------------------
   2. Language toggle. English lives in the HTML; Ukrainian lives here.
   NOTE: the Ukrainian copy below is a first-pass draft for review.
   ------------------------------------------------------------------------- */
const UK = {
  "brand": "Порятунок астрономії в Україні",
  "nav.about": "Про ініціативу",
  "nav.directions": "Чотири напрями",
  "nav.actions": "Як допомогти",
  "nav.contact": "Контакти",

  "city.lviv": "Львів",
  "city.kyiv": "Київ",
  "city.kharkiv": "Харків",
  "city.mykolaiv": "Миколаїв",
  "city.odesa": "Одеса",
  "city.crimea": "Крим · втрачено 2014",

  "hero.eyebrow": "Ініціатива української астрономічної спільноти",
  "hero.h1": "Порятунок астрономії <em>в Україні</em>",
  "hero.lede": "Двісті років астрономії, що працює навіть під обстрілами. Тут партнери, дослідники та друзі української науки знаходять шлях до співпраці.",
  "hero.cta.plan": "Читати план відновлення",
  "hero.cta.contact": "Зв’язатися",
  "hero.scroll": "Гортайте",

  "note.since.k": "Від",
  "note.since.d": "Найстаріша обсерваторія, що досі працює, у Миколаєві",
  "note.inst.k": "Установ",
  "note.inst.d": "Активні у Києві, Харкові, Одесі, Львові та інших містах",
  "note.pub.k": "Опубліковано 2020–25",
  "note.pub.d": "Статей, багато написано під час блекаутів та обстрілів",
  "note.utr.v": "Найбільший у світі",
  "note.utr.d": "Декаметровий радіотелескоп, шість місяців в окупації у 2022",

  "about.label": "Що це",
  "about.lead": "Не прохання про допомогу і не перелік проблем, які має вирішити хтось інший. Українська астрономія знає свої сильні сторони, ясно бачить свої межі і пропонує <b>партнерство</b>.",
  "about.p1": "Попри повномасштабну війну, спільнота зберегла свій науковий, освітній та міжнародний потенціал. Спостереження тривають на частково відновлених об’єктах. Студенти захищають дипломи з бомбосховищ. Статті продовжують з’являтися у провідних журналах.",
  "about.p2": "План відновлення, що стоїть за цією сторінкою, окреслює, де перебуває галузь і що їй потрібно далі, за чотирма взаємопов’язаними напрямами. Цей сайт є вхідними дверима: єдине місце, де партнери й колеги можуть зрозуміти ініціативу та зв’язатися з тими, хто її веде.",

  "dir.label": "Структура",
  "dir.h2": "Чотири напрями,<br>одна система",
  "dir.note": "Не за ступенем важливості. Вони утворюють систему, у якій розрив будь-якої ланки підриває ціле.",
  "dir.tag1": "Напрям 1",
  "dir.tag2": "Напрям 2",
  "dir.tag3": "Напрям 3",
  "dir.tag4": "Напрям 4",
  "dir.1.name": "Людський капітал і наукові мережі",
  "dir.1.desc": "Науки не існує без людей. Зберегти дослідників, з’єднати діаспору і перетворити розрізнені контакти на тривкі партнерства.",
  "dir.2.name": "Наукова та дослідницька інфраструктура",
  "dir.2.desc": "Відбудувати краще, а не просто повернути. Спершу визначити науку, потім інструменти: від радіоантенних решіток до національного центру астрономічних даних.",
  "dir.3.name": "Інновації та економічний розвиток",
  "dir.3.desc": "Wi-Fi, CCD-сенсори й дистанційне зондування беруть початок в астрономії. Це рушій відновлення, а не розкіш мирного часу.",
  "dir.4.name": "Освіта та популяризація науки",
  "dir.4.desc": "Від дитсадка до докторантури астрономія є входом у STEM і способом, у який відтворюється нове покоління науковців.",

  "act.label": "Як допомогти",
  "act.lead": "П’ять простих кроків для початку.",
  "act.intro": "Найцінніша підтримка не вирішує за Україну, а зміцнює рішення, які Україна ухвалює сама. Партнерства, а не благодійність. Довгострокові угоди, а не разові жести.",
  "act.1": "Фінансувати відкритий доступ до журналів і баз даних для українських установ.",
  "act.2": "Залучати українські групи до консорціумів місій і мереж телескопів: CTAO, LOFAR, EVN, LSST.",
  "act.3": "Підтримувати спільні докторські та постдокторські програми, що дають молодим науковцям реальний шлях додому.",
  "act.4": "Співорганізовувати навчальні школи та освітні програми за перевіреними форматами.",
  "act.5": "Обстоювати інтереси України в ESA та Horizon Europe.",

  "contact.label": "Перша точка контакту",
  "contact.h2": "Почати розмову",
  "contact.sub": "Українська астрономія пропонує партнерство, збудоване на реальних компетенціях і спільних наукових питаннях. Якщо ви можете відчинити одні з дверей на цій сторінці, напишіть нам.",
  "contact.email": "Написати команді",
  "person.plotko": "Павло Плотко",
  "person.sushch": "Юрій Сущ",
  "person.frantseva": "Катерина Францева",
  "role.coorg": "Співорганізатор",
  "door.ss43a": "Чт, ранок",
  "door.ss43b": "Чт, обід",
  "door.form.lbl": "Залишити коментар до плану",
  "door.form.meta": "Форма відгуку",

  "closing.quote": "Небо над Україною таке саме, як над Лейденом, Парижем чи Чилі. У відповідей немає кордонів.",
  "closing.cite": "Перспективний план відновлення української астрономії",
  "foot.left": "Порятунок астрономії в Україні · SS43 · EAS 2026",
  "foot.right": "Партнерство української астрономічної спільноти",
};

const i18nNodes = document.querySelectorAll("[data-i18n]");

function setLang(lang) {
  const dict = lang === "uk" ? UK : null;
  i18nNodes.forEach((el) => {
    if (el.dataset.en === undefined) el.dataset.en = el.innerHTML; // cache English
    const val = dict ? dict[el.getAttribute("data-i18n")] : el.dataset.en;
    if (val != null) el.innerHTML = val;
  });
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang button").forEach((b) => {
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  });
  try { localStorage.setItem("sau-lang", lang); } catch (e) {}
}

document.querySelectorAll(".lang button").forEach((b) => {
  b.addEventListener("click", () => setLang(b.dataset.lang));
});

let stored = null;
try { stored = localStorage.getItem("sau-lang"); } catch (e) {}
const prefersUk = (navigator.language || "").toLowerCase().startsWith("uk");
setLang(stored || (prefersUk ? "uk" : "en"));

/* -------------------------------------------------------------------------
   3. Interaction and motion.
   ------------------------------------------------------------------------- */
const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;

// mobile menu
const header = document.getElementById("topbar");
const menuBtn = document.querySelector(".menu-btn");
if (menuBtn) {
  const setOpen = (open) => {
    header.classList.toggle("nav-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
  };
  menuBtn.addEventListener("click", () =>
    setOpen(!header.classList.contains("nav-open"))
  );
  document.querySelectorAll("nav.links a").forEach((a) =>
    a.addEventListener("click", () => setOpen(false))
  );
}

// top-bar shadow on scroll
addEventListener("scroll", () =>
  header.classList.toggle("scrolled", scrollY > 20)
);

// scroll reveal
const io = new IntersectionObserver(
  (es) => {
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = Math.min(i, 6) * 60 + "ms";
  io.observe(el);
});

// starfield
const cv = document.getElementById("starfield");
const ctx = cv.getContext("2d");
let stars = [], w, h;
function size() {
  w = cv.width = cv.offsetWidth * devicePixelRatio;
  h = cv.height = cv.offsetHeight * devicePixelRatio;
  const n = Math.round((w * h) / (24000 * devicePixelRatio));
  stars = Array.from({ length: n }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: (Math.random() * 1.3 + 0.2) * devicePixelRatio,
    base: Math.random() * 0.5 + 0.25,
    tw: Math.random() * Math.PI * 2,
    sp: Math.random() * 0.02 + 0.005,
  }));
}
function draw(t) {
  ctx.clearRect(0, 0, w, h);
  for (const s of stars) {
    const a = reduce ? s.base : s.base + Math.sin(s.tw + t * s.sp) * 0.28;
    ctx.globalAlpha = Math.max(0, Math.min(1, a));
    ctx.fillStyle = Math.random() < 0.0008 ? "#E0B23C" : "#F3EFE6";
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, 7);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  if (!reduce) requestAnimationFrame(draw);
}
addEventListener("resize", size);
size();
if (reduce) draw(0);
else requestAnimationFrame(draw);

// constellation draw-in
if (!reduce) {
  document.querySelectorAll(".cx-lines line").forEach((ln, i) => {
    if (ln.getAttribute("stroke-dasharray")) return; // keep the dashed "lost" link static
    const len = ln.getTotalLength();
    ln.style.strokeDasharray = len;
    ln.style.strokeDashoffset = len;
    ln.animate(
      [{ strokeDashoffset: len }, { strokeDashoffset: 0 }],
      { duration: 1200, delay: 400 + i * 160, fill: "forwards", easing: "ease-out" }
    );
  });
  document.querySelectorAll(".cx-stars .star circle").forEach((c, i) => {
    c.animate(
      [{ opacity: 0, transform: "scale(0)" }, { opacity: 1, transform: "scale(1)" }],
      { duration: 600, delay: 700 + i * 140, fill: "backwards", easing: "cubic-bezier(.2,1.4,.4,1)" }
    );
  });
}
