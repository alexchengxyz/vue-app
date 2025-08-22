import { watch, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const LANG_KEY = 'lang';

const useLang = () => {
  const { locale, t } = useI18n();

  // 初始化：讀 localStorage
  onMounted(() => {
    const savedLang = localStorage.getItem(LANG_KEY);

    if (savedLang && savedLang !== locale.value) {
      locale.value = savedLang;
    }
  });

  // 語言切換 + 寫入 localStorage
  const changeLang = (newLang?: string) => {
    if (newLang) {
      locale.value = newLang;
    } else {
      locale.value = locale.value === 'en' ? 'en' : 'zh';
    }

    localStorage.setItem(LANG_KEY, locale.value);
  };

  // 自動同步 localStorage
  watch(locale, (newVal) => {
    localStorage.setItem(LANG_KEY, newVal);
  });

  return {
    t,
    locale,
    changeLang,
  };
};

export default useLang;
