import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import hy from "./locales/hy.json"
import en from "./locales/en.json"
import ru from "./locales/ru.json"

i18next.use(initReactI18next).init({
    resources: {
        en: {
            translation: en
        },
        hy: {
            translation: hy
        },
        ru: {
            translation: ru
        }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    }
})