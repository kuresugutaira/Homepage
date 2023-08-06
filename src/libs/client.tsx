import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'kuresugutaira',
  apiKey: process.env.API_KEY,
});
