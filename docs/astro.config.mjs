// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Moire Docs',
			logo: {
				src: './src/assets/moire-logo.svg',
				replacesTitle: false,
			},
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
			customCss: [
				'./src/styles/custom.css',
			],
			components: {
				Head: './src/components/Head.astro',
			},
		}),
	],
});
