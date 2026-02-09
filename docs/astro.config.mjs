// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeBlack from 'starlight-theme-black';
import tailwindcss from '@tailwindcss/vite';



// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    '/shortcuts/latest/config': 'https://www.icloud.com/shortcuts/028169245b6a49b7afb1c2c147defd7a',
    '/shortcuts/latest/sync': 'https://www.icloud.com/shortcuts/4b342969796c4a87a031874de0d69992',
    '/shortcuts/latest/upload-image': 'https://www.icloud.com/shortcuts/b22a7c469c714d34a63fb922ed45c560',
    '/shortcuts/latest/clean-note': 'https://www.icloud.com/shortcuts/5493417834a34bbca64c67d742a6ddae',
  },
  integrations: [

    starlight({
      title: 'MOIRE BLOG',
      logo: {
        src: './src/assets/moire.svg',
        replacesTitle: false,
      },
      plugins: [
        starlightThemeBlack({
          navLinks: [{
            label: '使用指南',
            link: '/introduction',
          },
            {
              label: '预览',
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
        },
      },
      sidebar: [
        {
          label: '开始',
          items: [
            { label: '简介', slug: 'introduction' },
          ],
        },
        {
          label: '安装与部署',
          items: [
            { label: '准备工作', slug: 'getting-started/prerequisites' },
            { label: '部署网站', slug: 'getting-started/installation' },
            { label: '验证状态', slug: 'getting-started/verification' },
          ],
        },
        {
          label: '配置快捷指令',
          items: [
            { label: '下载快捷指令', slug: 'shortcuts/downloads' },
            { label: '填写配置', slug: 'shortcuts/configuration' },
            { label: '建立同步文件夹', slug: 'shortcuts/sync-folder' },
            { label: '自动化', slug: 'shortcuts/automation' },
          ],
        },
        {
          label: '使用指南',
          items: [
            { label: '站点配置', slug: 'customization/site-config' },
            { label: '主题风格', slug: 'customization/themes' },
            { label: 'Markdown 支持', slug: 'usage/markdown' },
            { label: '图片上传机制', slug: 'usage/images' },
          ],
        },
        {
          label: '进阶与优化',
          items: [
            { label: 'API 加速', slug: 'advanced/api-proxy' },
            { label: '自定义域名', slug: 'advanced/custom-domain' },
            { label: '获取更新', slug: 'advanced/upstream-sync' },
          ],
        },
        {
          label: '帮助',
          items: [
            { label: '故障排除', slug: 'troubleshooting' },
            { label: '版本日志', slug: 'changelog' },
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
