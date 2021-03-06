import { defineNuxtConfig } from 'nuxt3'
import ViteComponents from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    // meta
    meta: {
        title: 'Nuxt 3 Awesome Starter',
        meta: [
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "Nuxt3 Awesome Starter" },
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        ],
    },

    // css
    css: [
        '~/assets/sass/app.scss',
        '~/assets/sass/vendor.scss',
    ],

    // plugins
    plugins: [
        '~/plugins/navbar.ts',
    ],

    // build
    build: {
        transpile: [
            '@headlessui/vue',
        ],
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                }
            }
        }
    },

    // build modules
    buildModules: [
        '@nuxtjs/svg',
        '@pinia/nuxt',
        'unplugin-icons/nuxt',
        '@intlify/nuxt3',
    ],

    // auto import components
    components: true,

    // vite plugins
    vite: {
        plugins: [
            ViteComponents({
                dts: true,
                resolvers: [
                    IconsResolver({
                        prefix: 'Icon',
                    }),
                ],
            }),
        ],
    },
})
