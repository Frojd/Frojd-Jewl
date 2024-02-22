import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import sv from './translations/sv';

const isDebug = process.env?.NODE_ENV === 'development';

i18n
    .use(initReactI18next)
    .init({
        lng: 'sv',
        fallbackLng: 'sv',
        debug: isDebug,

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
