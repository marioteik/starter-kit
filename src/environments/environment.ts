import { env } from './.env';

export const environment = {
  production: true,
  hmr: true,
  version: env.npm_package_version + '-dev',
  chuckNorrisServerUrl: '/api',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'fr-FR'],
};
