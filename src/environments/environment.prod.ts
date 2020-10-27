import { env } from './.env';

export const environment = {
  production: true,
  hmr: false,
  version: env.npm_package_version,
  apiBaseUrl: 'https://crudcrud.com/api/5594c5a9cafb42e4ba818d497bc31e7a',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'fr-FR'],
};
