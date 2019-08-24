import NuxtConfiguration from '@nuxt/config'
import Sass from 'sass'

const config: NuxtConfiguration = {
    head: {
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Alkatraz Studio homepage'},
            {rel: 'manifest', href: '/manifest.json'},

            {rel: 'apple-touch-icon', sizes: '180x180', href:'/icons/apple-touch-icon.png'},
            {rel: 'icon', type: 'image/png', sizes: '48x48', href: '/icons/favicon-48x48.png'},
            {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png'},
            {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png'},
            {rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#000000'},
            {name: 'msapplication-TileColor', content:'#C0C0C0'},
            {name: 'theme-color', content:'#C0C0C0'}
        ]
    },

    css: [
        'normalize.css/normalize.css',
        '@/style/base.scss',
        'swiper/dist/css/swiper.css'
    ],

    plugins: [
        '~/plugins/fromPath.ts',
        {src: '~/plugins/swiper.ts', ssr: false}
    ],

    build: {
        extractCSS: true,
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
        }
    },

    generate: {
        fallback: '404.html'
    },

    router: {
        linkPrefetchedClass: 'nuxt-link-prefetched'
    },

    server: {
        host: '0.0.0.0'
    },

    buildModules: [
        '@nuxt/typescript-build'
    ]
}

export default config
