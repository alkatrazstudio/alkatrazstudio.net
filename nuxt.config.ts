// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        shim: false,
        strict: true
    },

    css: [
        '~/node_modules/modern-normalize/modern-normalize.css',
        '~/assets/styles/base.scss'
    ],

    app: {
        head: {
            htmlAttrs: {
                lang: 'en-US'
            },

            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {hid: 'description', name: 'description', content: 'Alkatraz Studio homepage'}
            ],

            link: [
                {rel: 'icon', type: 'image/png', href: '/icon.png'}
            ]
        }
    },

    modules: ['nuxt-swiper'],
    swiper: {
        modules: ['navigation', 'pagination', 'keyboard']
    },

    experimental: {
        payloadExtraction: false
    }
})
