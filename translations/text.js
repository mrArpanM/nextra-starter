/**
 * @typedef {"en"} DefaultLocale
 * @typedef {DefaultLocale | "bn" | "es" | "fr" | "hn" | "ja" | "ko" | "ru"} Locale
 */

/** @type {Readonly<Record<Locale, string>>} */
export const languageMap = {
  "en": "English",
  "bn": "বাংলা",
  "hn": "हिंदी",
  "fr": "Français",
  "es": "Español",
  ru: "Русский",
  ja: "日本語",
  ko: "한국어",
};

/** @type {Readonly<Record<Locale, string>>} */
export const titleMap = {
  "en": "Nextra Starter",
};

/** @type {Readonly<Record<Locale, {lightweight:string;realtime?:string;suspense?:string;pagination?:string;backendAgnostic?:string;renderingStrategies?:string;typescript?:string;remoteLocal?:string;}>>} */
export const featuresMap = {
  // "en": {
  //   lightweight: "Lightweight",
  //   realtime: "Realtime",
  //   suspense: "Suspense",
  //   pagination: "Pagination",
  //   backendAgnostic: "Backend Agnostic",
  //   renderingStrategies: "SSR / SSG Ready",
  //   typescript: "TypeScript Ready",
  //   remoteLocal: "Remote + Local",
  // },
  // "fr": {
  //   lightweight: "Léger",
  //   realtime: "Temps réel",
  //   backendAgnostic: "Indépendant du Backend",
  // },
};

/** @type {Readonly<Record<Locale, string>>} */
export const headDescriptionMap = {
  "en": "Nextjs Nextra Starter with TailwindCSS.",
};

/** @type {Readonly<Record<Locale, string>>} */
export const feedbackLinkMap = {
  "en": "Question? Give us feedback →",
  "es": "¿Dudas? Danos tu feedback →",
  "fr": "Question? Donnez-nous votre avis →",
  "hn": "सवाल? हमें प्रतिक्रिया दें →",
  "bn": "প্রশ্ন? আমাদের মতামত দিন →",
  ko: "질문이 있으신가요? 피드백을 남겨주세요 →",
  ru: "Вопросы? Оставьте нам отзыв →",
};

/** @type {Readonly<Record<Locale, string>>} */
export const editTextMap = {
  "en": "Edit this page on GitHub →",
  "es": "Edite esta página en GitHub →",
  "fr": "Modifier cette page sur GitHub →",
  "hn": "इस पृष्ठ को संपादित करें। GitHub पर →",
  "bn": "এই পৃষ্ঠাটি সম্পাদনা করুন। GitHub এ →",
  ja: "Github で編集する →",
  ko: "Github에서 이 페이지 편집하기 →",
  ru: "Редактировать эту страницу на GitHub →",
};

/** @type {Readonly<Record<Locale, { utmSource: string; text: string; suffix?: string | undefined }>>} */
export const footerTextMap = {
  "en": { utmSource: "lang_en", text: "Powered by" },
};

/** @type {Readonly<Record<Locale, string>>} */
export const tableOfContentsTitleMap = {
  "en": "On This Page",
  "es": "En esta página",
  "fr": "Sur cette page",
  "bn": "এই পৃষ্ঠায়",
  "hn": "इस पृष्ठ पर",
  ru: "На этой странице",
};

/** @type {Readonly<Record<Locale, string>>} */
export const searchPlaceholderMap = {
  "en": "Search documentation...",
  "es": "Buscar documento...",
  "fr": "Rechercher dans la doc...",
  "hn": "दस्तावेज़ खोजें...",
  ko: "문서 검색...",
  bn: "অনুসন্ধান করুন...",
  ru: "Искать в документации...",
};

/** @type {Readonly<Record<Locale, string>>} */
export const gitTimestampMap = {
  "en": "Last updated on",
  "fr": "Dernière mise à jour le",
  ru: "Последнее обновление",
};
