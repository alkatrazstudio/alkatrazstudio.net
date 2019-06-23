<template>
<main-menu/>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import {MenuItem} from '~/mixins/menu'

export function menuItems(): MenuItem[] {
    return [{
        to: '/projects/gpu-fan-meister',
        title: 'GPU Fan Meister',
        desc: 'Control your video card fan speed with simple and/or advanced methods'
    }, {
        to: '/projects/meson-player',
        title: 'Meson Player',
        desc: 'Music player with no GUI, controlled only by global hotkeys'
    }, {
        to: '/projects/basszxtune',
        title: 'BASSZXTUNE',
        desc: 'Chiptune support for BASS audio library'
    }, {
        to: '/projects/xmpzxtune',
        title: 'XMPZXTUNE',
        desc: 'Chiptune support for XMPlay'
    }, {
        to: '/projects/gottext',
        title: 'GotText',
        desc: 'Translation engine for PHP with features of gettext'
    }]
}

@Component({
    components: {
        MainMenu: () => import('~/components/MainMenu.vue')
    }
})
export default class MyClass extends Vue {}
</script>
