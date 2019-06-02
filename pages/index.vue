<template>
<main-menu/>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import {MenuItem} from '~/mixins/menu'

import {menuItems as settingsMenuItems} from '~/pages/settings.vue'
import {menuItems as projectsActiveMenuItems} from '~/pages/projects/active.vue'
import {menuItems as projectsArchivedMenuItems} from '~/pages/projects/archived.vue'

export function menuItems(): MenuItem[] {
    return [{
        to: '/about',
        title: 'About',
        desc: 'About this site and its author'
    }, {
        to: '/projects/active',
        title: 'Active projects',
        desc: 'Current projects that are still evolving and supported to varying degrees',
        children: projectsActiveMenuItems()
    }, {
        to: '/projects/archived',
        title: 'Archived projects',
        desc: 'Abandoned projects that are no longer maintained or supported',
        children: projectsArchivedMenuItems()
    }, {
        to: '/settings',
        title: 'Settings',
        desc: 'Site settings',
        children: settingsMenuItems()
    }]
}

@Component({
    components: {
        MainMenu: () => import('~/components/MainMenu.vue')
    }
})
export default class MyClass extends Vue {}
</script>
