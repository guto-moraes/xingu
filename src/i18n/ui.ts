import brTranslation from "./locales/pt-br.json";
import enTranslation from "./locales/en.json";
import esTranslation from "./locales/es.json";

export const showDefaultLang = false;

export const languages = {
  "pt-br": "Português",
  en: "English",
  es: "Español",
};

export const defaultLang = "pt-br";

export const ui = {
  "pt-br": {
    ...brTranslation
  },
  en: {
    ...enTranslation
  },
  es: {
    ...esTranslation
  },
} as const;
