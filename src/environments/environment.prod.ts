import { env } from './.env';

export const environment = {
  production: true,
  hmr: false,
  version: env.npm_package_version,
  chuckNorrisServerUrl: 'https://api.chucknorris.io',
  usersApiUrl: 'http://localhost:4000/users',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'fr-FR'],
};
