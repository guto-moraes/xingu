import brTranslation from "./locales/pt-BR.json";
import enTranslation from "./locales/en.json";
import esTranslation from "./locales/es.json";

export const showDefaultLang = false;

export const languages = {
  "pt-BR": "Português",
  en: "English",
  es: "Español",
};

export const defaultLang = "pt-BR";

export const ui = {
  "pt-BR": {
    ...brTranslation
  },
  en: {
    ...enTranslation
  },
  es: {
    ...esTranslation
  },
} as const;
