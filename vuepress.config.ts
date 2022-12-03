import { defineUserConfig, defaultTheme } from 'vuepress';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';


export default defineUserConfig({
    lang: 'zh-CN',
    title: '子非鱼',
    description: 'Zifeiyu\'s site',
    theme: defaultTheme({
        repo: 'https://github.com/biyingshuai/biyingshuai.github.io',
        toggleColorMode: '切换颜色模式',
        navbar: [{
            text: '说明',
            link: '/',
        },],
        sidebar: [
            // SidebarItem
            {
                text: '菜花炒肉',
                link: '/chcr.html',
            },
        ],
    }),
    plugins: [
        // docsearchPlugin({
        //     apiKey: '',
        //     indexName: '',
        //     appId: '',
        //     disableUserPersonalization: true,
        //     locales: {
        //         '/': {
        //           placeholder: 'Search Documentation',
        //           translations: {
        //             button: {
        //               buttonText: 'Search Documentation',
        //             },
        //           },
        //         },
        //         '/zh/': {
        //           placeholder: '搜索',
        //           translations: {
        //             button: {
        //               buttonText: '搜索',
        //             },
        //           },
        //         },
        //     },
        // }),
    ],
})

