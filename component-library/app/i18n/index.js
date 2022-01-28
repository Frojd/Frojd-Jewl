import i18n from 'i18next';
// import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
import sv from './translations/sv';

i18n
    // load translation using xhr -> see /public/locales
    // learn more: https://github.com/i18next/i18next-xhr-backend
    // .use(Backend)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        lng: 'sv',
        fallbackLng: 'sv',
        debug: false,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },

        resources: {
            sv: {
                translation: sv,
            }
        }
    });
i18n.addResourceBundle('sv', 'translation', sv, true, true);

export default i18n;
