import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Bahasa default jika bahasa yang dipilih tidak tersedia
    debug: true, // Aktifkan mode debug
    interpolation: {
      escapeValue: false, // Tidak mengescape teks yang diterjemahkan
    },
  });

export default i18n;
