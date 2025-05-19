const IN_PRODUCTION = process.env.NODE_ENV === 'production';
const bootstrap = 'node_modules/bootstrap';

import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { purgeCSSPlugin as purgecss } from '@fullhuman/postcss-purgecss';

export default async () => {
  const plugins = [
    purgecss({
      content: [
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.svelte',
        // --- Import only the required components.
        // `${bootstrap}/js/dist/alert.js`,
        // `${bootstrap}/js/dist/base-component.js`,
        // `${bootstrap}/js/dist/button.js`,
        // `${bootstrap}/js/dist/carousel.js`,
        // `${bootstrap}/js/dist/collapse.js`,
        // `${bootstrap}/js/dist/dropdown.js`,
        `${bootstrap}/js/dist/modal.js`
        // `${bootstrap}/js/dist/offcanvas.js`,
        // `${bootstrap}/js/dist/popover.js`,
        // `${bootstrap}/js/dist/scrollspy.js`,
        // `${bootstrap}/js/dist/tab.js`,
        // `${bootstrap}/js/dist/toast.js`,
        // `${bootstrap}/js/dist/tooltip.js`,
      ],
      whitelistPatterns: [/svelte-/, /fa-icon/],
      safelist: [/svelte-/, /modal-backdrop/],
      defaultExtractor(content) {
        const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '');
        return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [];
      },
      keyframes: true,
      variables: true
    }),
  ];


  plugins.push(
    purgecss({
      content: [
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.svelte',
        // --- Import only the required components.
        // `${bootstrap}/js/dist/alert.js`,
        // `${bootstrap}/js/dist/base-component.js`,
        // `${bootstrap}/js/dist/button.js`,
        // `${bootstrap}/js/dist/carousel.js`,
        // `${bootstrap}/js/dist/collapse.js`,
        // `${bootstrap}/js/dist/dropdown.js`,
        `${bootstrap}/js/dist/modal.js`
        // `${bootstrap}/js/dist/offcanvas.js`,
        // `${bootstrap}/js/dist/popover.js`,
        // `${bootstrap}/js/dist/scrollspy.js`,
        // `${bootstrap}/js/dist/tab.js`,
        // `${bootstrap}/js/dist/toast.js`,
        // `${bootstrap}/js/dist/tooltip.js`,
      ],
      whitelistPatterns: [/svelte-/, /fa-icon/],
      safelist: [/svelte-/, /modal-backdrop/],
      defaultExtractor(content) {
        const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '');
        return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [];
      },
      keyframes: true,
      variables: true
    }),
    autoprefixer(),
    cssnano({
      preset: ['default', { discardComments: { removeAll: true } }]
    })
  );


  return {
    plugins
  };
};
