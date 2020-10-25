import { env } from './.env';

export const environment = {
  production: true,
  hmr: false,
  version: env.npm_package_version,
  chuckNorrisServerUrl: 'https://api.chucknorris.io',
  gitHubApi: 'https://api.github.com',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'fr-FR'],
};
