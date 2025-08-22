import { createI18n } from 'vue-i18n';

export interface MessageSchema {
  [key: string]: string | MessageSchema;
}

const modules = import.meta.glob('@/locales/*.json', { eager: true });
const messages: Record<string, MessageSchema> = {};

Object.keys(modules).forEach((path) => {
  const lang = path.match(/\/locales\/(.+)\.json$/)?.[1];

  if (lang) {
    messages[lang] = modules[path] as MessageSchema;
  }
});

const i18n = createI18n({
  legacy: false,
  locale: 'en', // 預設語言
  fallbackLocale: 'zh', // 找不到 key 時回退
  messages,
  globalInjection: true,
});

export default i18n;
