export default {

    head: {
        title: 'Hello Fresh Interview',
        htmlAttrs: { lang: 'en' },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },

    server: { host: '0.0.0.0' },

    css: [ '~/assets/scss/_normalize.scss', '~/assets/scss/_typography.scss' ],

    styleResources: {
        scss: [
            '~/assets/scss/_mediaqueries.scss',
            '~/assets/scss/_variables.scss',
            '~/assets/scss/_global.scss',
        ],
    },

    plugins: [],

    components: true,

    buildModules: [ '@nuxtjs/style-resources' ],

    modules: [],

    build: {},

    target: 'static',

    router: { base: '/hello-fresh-interview/' }
}
