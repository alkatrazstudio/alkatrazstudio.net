<template>
<main-menu/>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import {MenuItem} from '~/mixins/menu'
import {getMenuFont, setNextMenuFont, getArticleFont, setNextArticleFont} from '~/utils/font'

export function menuItems(): MenuItem[] {
    return [{
        title: `Menu font: ${getMenuFont().title}`,
        desc: 'Change the font in the menu',
        click: setNextMenuFont
    }, {
        title: `Article font: ${getArticleFont().title}`,
        desc: 'Change the font of the articles',
        click: setNextArticleFont
    }]
}

@Component({
    components: {
        MainMenu: () => import('~/components/MainMenu.vue')
    }
})
export default class MyClass extends Vue {}
</script>
