import brTranslation from "./locales/pt-br.json";
import enTranslation from "./locales/en.json";
import esTranslation from "./locales/es.json";

export const showDefaultLang = false;

export const languages = {
  "pt-br": "lang.portuguese",
  en: "lang.english",
  es: "lang.spanish",
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

export const routes = {
  "pt-br": {
    "resources": "recursos",
  },
  en: {
    "resources": "resources",
  },
  es: {
    "resources": "materiales-adicionales",
  },  
}
