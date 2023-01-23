import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'mana-web-component',
  globalStyle: 'www/tailwind.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      empty:false,
      serviceWorker: null, // disable service workers
    },
  ],
};
