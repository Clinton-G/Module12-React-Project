import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to the Product Catalog',
      addToCart: 'Add to Cart',
    },
  },
  es: {
    translation: {
      welcome: 'Bienvenido al Catálogo de Productos',
      addToCart: 'Añadir al Carrito',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
