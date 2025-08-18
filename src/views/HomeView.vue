<template lang="pug">
  Select(
    v-model="lang"
    :options="langOptions"
    optionLabel="name"
    placeholder="選擇語系"
    class="w-full md:w-56"
  )

  DatePicker(v-model="date")
</template>

<script setup lang="ts">
import useLang from '@/composables/useLang';

const { t, locale, changeLang } = useLang();

const langOptions = [
  { name: 'English', code: 'en' },
  { name: '中文', code: 'zh' },
];

const lang = ref(langOptions.find((opt) => opt.code === locale.value) || langOptions[0]);
const date = ref();

watch(
  () => lang.value,
  (val) => {
    if (val.code !== locale.value) changeLang(val.code);
  },
  { immediate: true },
);
</script>
