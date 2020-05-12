const NextI18Next = require('next-i18next/dist/commonjs').default;

const languages = ['en'];
const options = {
  // defaultLanguage: 'en', TODO: add it when we will have a list on languages
  otherLanguages: ['en'],
};

const NextI18NextInstance = new NextI18Next(options);

/* react-i18next need this extra property */
NextI18NextInstance.i18n.languages = languages;

module.exports = NextI18NextInstance;
