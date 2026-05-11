import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                home: "Home",
                coiffeur: "Hairdresser",
                barbier: "Barber",
                manucure: "Manicure",
                institut: "Beauty Institute",
                add_establishment: "Add your establishment",
                login: "Sign in",
            },
        },
        fr: {
            translation: {
                home: "Accueil",
                coiffeur: "Coiffure",
                barbier: "Barbier",
                manucure: "Manucure",
                institut: "Institut de beauté",
                add_establishment: "Ajoutez votre établissement",
                login: "Se connecter",
            },
        },
        ar: {
            translation: {
                home: "الرئيسية",
                coiffeur: "الحلاق",
                barbier: "الحلاق",
                manucure: "تجميل الأظافر",
                institut: "معهد التجميل",
                add_establishment: "إضافة صالونك",
                login: "تسجيل الدخول",
            },
        },
    },
    lng: "fr", // Default language
    fallbackLng: "fr", // Fallback if the selected language is not found
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
