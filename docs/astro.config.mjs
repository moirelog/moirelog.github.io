// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeBlack from 'starlight-theme-black';
import tailwindcss from '@tailwindcss/vite';



import fs from 'node:fs';
import path from 'node:path';

const shortcutsPath = path.resolve('./public/shortcuts.json');

/** @type {{shortcuts: {id: string, url: string}[]}} */
const shortcutsConfig = JSON.parse(fs.readFileSync(shortcutsPath, 'utf-8'));

/** @type {Record<string, string>} */
const redirects = {};
shortcutsConfig.shortcuts.forEach((/** @type {{ id: string; url: string; }} */ shortcut) => {
  let slug = shortcut.id.replace(/_/g, '-');
  redirects[`/shortcuts/latest/${slug}`] = shortcut.url;
});

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  redirects,
  integrations: [

    starlight({
      title: 'MOIRE LOG',
      logo: {
        src: './src/assets/moire.svg',
        replacesTitle: false,
      },
      plugins: [
        starlightThemeBlack({
          navLinks: [{
            label: { root: '使用指南', 'zh-CN': '使用指南', en: 'User Guide' },
            link: '/introduction',
          },
          {
            label: { root: '预览', 'zh-CN': '预览', en: 'Preview' },
            link: 'https://moire.blog/',
            badge: 'demo',
          }],
          footerText:
            'Moire is a project syncing Apple Notes to GitHub Pages, designed by [Yanxin](https://github.com/anig1scur).'
        })
      ],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/moirelog/moire' },
      ],
      defaultLocale: 'root',
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
        en: {
          label: 'English',
          lang: 'en',
        },
      },

      sidebar: [
        {
          label: '开始',
          translations: { en: 'Start' },
          items: [
            { label: '简介', translations: { en: 'Introduction' }, slug: 'introduction' },
          ],
        },
        {
          label: '安装与部署',
          translations: { en: 'Installation & Deployment' },
          items: [
            { label: '准备工作', translations: { en: 'Prerequisites' }, slug: 'getting-started/prerequisites' },
            { label: '部署网站', translations: { en: 'Website Deployment' }, slug: 'getting-started/installation' },
            { label: '验证状态', translations: { en: 'Verification' }, slug: 'getting-started/verification' },
          ],
        },
        {
          label: '配置快捷指令',
          translations: { en: 'Configure Shortcuts' },
          items: [
            { label: '下载快捷指令', translations: { en: 'Download Shortcuts' }, slug: 'shortcuts/downloads' },
            { label: '填写配置', translations: { en: 'Fill in Configuration' }, slug: 'shortcuts/configuration' },
            { label: '建立同步文件夹', translations: { en: 'Create Sync Folder' }, slug: 'shortcuts/sync-folder' },
            { label: '自动化', translations: { en: 'Automation' }, slug: 'shortcuts/automation' },
          ],
        },
        {
          label: '使用指南',
          translations: { en: 'User Guide' },
          items: [
            { label: '站点配置', translations: { en: 'Site Configuration' }, slug: 'customization/site-config' },
            { label: '主题风格', translations: { en: 'Themes' }, slug: 'customization/themes' },
            { label: 'Markdown 支持', translations: { en: 'Markdown Support' }, slug: 'usage/markdown' },
            { label: '图片上传机制', translations: { en: 'Image Upload Mechanism' }, slug: 'usage/images' },
          ],
        },
        {
          label: '进阶与优化',
          translations: { en: 'Advanced & Optimization' },
          items: [
            { label: 'API 加速', translations: { en: 'API Acceleration' }, slug: 'advanced/api-proxy' },
            { label: '自定义域名', translations: { en: 'Custom Domain' }, slug: 'advanced/custom-domain' },
            { label: '获取更新', translations: { en: 'Get Updates' }, slug: 'advanced/upstream-sync' },
          ],
        },
        {
          label: '帮助',
          translations: { en: 'Help' },
          items: [
            { label: '故障排除', translations: { en: 'Troubleshooting' }, slug: 'troubleshooting' },
            { label: '版本日志', translations: { en: 'Changelog' }, slug: 'changelog' },
          ],
        },
      ],

      components: {
        Head: './src/components/Head.astro',
      },
      customCss: [
        './src/styles/custom.css',
      ],
    }),
  ],
});
