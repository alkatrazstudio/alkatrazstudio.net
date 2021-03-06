import { NuxtConfig } from '@nuxt/types'
import Sass from 'sass'

const config: NuxtConfig = {
    head: {
        __dangerouslyDisableSanitizers: ['script'],
        script: [{innerHTML: "document.documentElement.classList.add('js')"}],

        htmlAttrs: {
            lang: 'en-US'
        },

        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Alkatraz Studio homepage'},
            {name: 'msapplication-TileColor', content:'#C0C0C0'},
            {name: 'theme-color', content:'#C0C0C0'}
        ],

        link: [
            {rel: 'manifest', href: '/manifest.json'},
            {rel: 'apple-touch-icon', sizes: '180x180', href:'/icons/apple-touch-icon-180x180.png'},
            {rel: 'icon', type: 'image/png', sizes: '48x48', href: '/icons/favicon-48x48.png'},
            {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png'},
            {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png'},
            {rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#000000'},
        ]
    },

    css: [
        'normalize.css/normalize.css',
        '@/style/base.scss'
    ],

    plugins: [
        '~/plugins/fromPath.ts',
        '~/plugins/swiper.ts'
    ],

    build: {
        extractCSS: false,
        optimizeCSS: true,

        loaders: {
            scss: {
                implementation: Sass
            },

            vue: {
                compilerOptions: {
                    preserveWhitespace: false
                }
            }
        },

        // https://github.com/nuxt/nuxt.js/issues/9224#issuecomment-830577523
        babel: {
            plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]]
        }
    },

    generate: {
        fallback: '404.html'
    },

    target: 'static',

    router: {
        linkPrefetchedClass: 'nuxt-link-prefetched'
    },

    server: {
        host: '127.0.0.1'
    },

    buildModules: [
        '@nuxt/typescript-build'
    ],

    telemetry: false
}

export default config
