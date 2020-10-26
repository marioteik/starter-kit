import { env } from './.env';

export const environment = {
  production: true,
  hmr: false,
  version: env.npm_package_version,
  chuckNorrisServerUrl: 'https://api.chucknorris.io',
  gitHubServerUrl: 'http://localhost:3001',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'fr-FR'],
};
