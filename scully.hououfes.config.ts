import '@scullyio/scully-plugin-puppeteer';
import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { baseHrefRewrite } from '@scullyio/scully-plugin-base-href-rewrite';

const defaultPostRenderers = ['seoHrefOptimise', baseHrefRewrite];
setPluginConfig(baseHrefRewrite, { href: '/hououfes2021/' });
export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'hououfes',
  outDir: './dist/static',
  defaultPostRenderers,
  routes: {},
};
