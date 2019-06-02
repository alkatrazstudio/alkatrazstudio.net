<template>
<main-menu/>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import {MenuItem} from '~/mixins/menu'

export function menuItems(): MenuItem[] {
    return [
       { // Sep 21, 2014
        to: '/projects/wifi-idle-timeout',
        title: 'Wi-Fi Idle Timeout',
        desc: 'Auto-disable Android Wi-Fi when unused'
    }, { // Jun 20, 2014
        to: '/projects/lockonlidclose',
        title: 'LockOnLidClose',
        desc: 'Locks your laptop screen when the lid is closed'
    }, { // Nov 21, 2012
        to: '/projects/mesoncast',
        title: 'MesonCast',
        desc: 'Internet radio server with web GUI for broadcasting stream and tracker music from folders'
    }, { // Sep 22, 2012
        to: '/projects/radiosymba',
        title: 'RadioSymba',
        desc: 'Internet radio player and recorder for S60v5+ devices'
    }, { // Jun 04, 2012
        to: '/projects/rhapsodie',
        title: 'Rhapsodie',
        desc: 'Audio player for Nokia N900'
    }, { // Jan 11, 2012
        to: '/projects/volume-step-adjuster',
        title: 'Volume Step Adjuster',
        desc: 'Controls volume increment/decrement step for media keys'
    }, { // Nov 20, 2011
        to: '/projects/work-time-logger',
        title: 'Work Time Logger',
        desc: 'Shows your computer uptime history'
    }, { // Dec 25, 2010
        to: '/projects/stealth-player',
        title: 'Stealth Player',
        desc: 'Music player, almost without GUI, controlled mostly by global hotkeys'
    }, { // Jul 25 2010
        to: '/projects/kingdom-3',
        title: 'Kingdom 3',
        desc: 'Medieval text-based strategy'
    }, { // May 09, 2009
        to: '/projects/dizzy-quest-editor',
        title: 'Dizzy Quest Editor',
        desc: 'Advanced IDE for developing Dizzy-style adventure games'
    }]
}

@Component({
    components: {
        MainMenu: () => import('~/components/MainMenu.vue')
    }
})
export default class MyClass extends Vue {}
</script>
