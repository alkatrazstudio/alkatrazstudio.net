import MenuFontSetting from '~/components/MenuFontSetting.vue'
import ArticleFontSetting from '~/components/ArticleFontSetting.vue'
import { MenuItem } from './menu'

const activeProjects = [{
    to: '/projects/konik',
    title: 'Konik',
    desc: 'Music player controlled by global hotkeys'
},{
    to: '/projects/humanpwd',
    title: 'humanpwd',
    desc: 'Generate strong passwords that are easy to remember '
}, {
    to: '/projects/neodim',
    title: 'Neodim',
    desc: 'Set of applications for natural text generation'
}, {
    to: '/projects/sonuspresto',
    title: 'SonusPresto',
    desc: 'Folder-based music player for Android'
}, {
    to: '/projects/feedmash',
    title: 'FeedMash',
    desc: 'Web feeds multiplexer'
}, {
    to: '/projects/musbconv',
    title: 'musbconv',
    desc: 'Audio files converter'
}, {
    to: '/projects/previous-colors',
    title: 'Previous Colors',
    desc: ' Quickly choose from previously used colors in Thunderbird'
}]

const archivedProjects: MenuItem[] = [{
    to: '/projects/meson-player', // Jul 31, 2021
    title: 'Meson Player',
    desc: 'Music player with no GUI, controlled only by global hotkeys '
}, {
    to: '/projects/gpu-fan-meister', // May 23, 2021
    title: 'GPU Fan Meister',
    desc: ' Control your video card fan speed with simple and/or advanced methods'
}, {
    to: '/projects/gottext', // Sep 27, 2020
    title: 'GotText',
    desc: ' Translation engine for PHP with features of gettext'
}, {
    to: '/projects/basszxtune', // 23 Aug, 2020
    title: 'BASSZXTUNE',
    desc: 'Chiptune support for BASS audio library'
}, {
    to: '/projects/xmpzxtune', // 23 Aug, 2020
    title: 'XMPZXTUNE',
    desc: 'Chiptune support for XMPlay'
}, {
    to: '/projects/wifi-idle-timeout', // Sep 21, 2014
    title: 'Wi-Fi Idle Timeout',
    desc: ' Auto-disable Android Wi-Fi when unused'
}, {
    to: '/projects/lockonlidclose', // Jun 20, 2014
    title: 'LockOnLidClose',
    desc: 'Locks your laptop screen when the lid is closed'
}, {
    to: '/projects/mesoncast', // Nov 21, 2012
    title: 'MesonCast',
    desc: 'Internet radio server with web GUI for broadcasting stream and tracker music from a folder '
}, {
    to: '/projects/radiosymba', // Sep 22, 2012
    title: 'RadioSymba',
    desc: ' Internet radio player and recorder for S60v5+ devices'
}, {
    to: '/projects/rhapsodie', // Jun 04, 2012
    title: 'Rhapsodie',
    desc: 'Audio player for Nokia N900'
}, {
    to: '/projects/volume-step-adjuster', // Jan 11, 2012
    title: 'Volume Step Adjuster',
    desc: ' Controls volume increment/decrement step  for media keys '
}, {
    to: '/projects/work-time-logger', // Nov 20, 2011
    title: 'Work Time Logger',
    desc: 'Shows your computer uptime history '
}, {
    to: '/projects/stealth-player', // Dec 25, 2010
    title: 'Stealth Player',
    desc: 'Music player, almost without GUI, controlled mostly by global hotkeys '
}, {
    to: '/projects/kingdom-3', // Jul 25 2010
    title: 'Kingdom 3',
    desc: 'Medieval text-based strategy '
}, {
    to: '/projects/dizzy-quest-editor', // May 09, 2009
    title: 'Dizzy Quest Editor',
    desc: '   Advanced IDE for developing Dizzy-style adventure games'
}]

const settings: MenuItem[] = [{
    title: MenuFontSetting,
    desc: 'Change the font in the menu',
}, {
    title: ArticleFontSetting,
    desc: 'Change the font of the articles',
}]

const index: MenuItem[] = [{
    to: '/about',
    title: 'About',
    desc: 'About this site and its author '
}, {
    to: '/projects/active',
    title: 'Active projects',
    desc: 'Current projects that are still supported to varying degrees',
    children: activeProjects
}, {
    to: '/projects/archived',
    title: 'Archived projects',
    desc: 'Abandoned projects that are no longer maintained or supported ',
    children: archivedProjects
}, {
    to: '/settings',
    title: 'Settings',
    desc: 'Site settings',
    children: settings
}]

export const menuRoot = {
    to: '/',
    title: 'Alkatraz Studio',
    desc: '',
    children: index
}

function setParent(item: MenuItem, parent: MenuItem|null = null)
{
    item.parent = parent
    if(item.children)
        item.children.forEach(i => setParent(i, item))
}

setParent(menuRoot)
