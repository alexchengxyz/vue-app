import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGlobalStore = defineStore('global', () => {
  const errorCode = ref<number | null>(null);

  return { errorCode };
});
