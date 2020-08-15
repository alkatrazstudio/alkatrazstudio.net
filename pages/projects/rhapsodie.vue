<template>
<project
    homepage="https://garage.maemo.org/projects/rhapsodie"
    :screenshots="screenshots"
>
<p>
    Rhapsodie is a folder-based music player for Maemo.
    It lets you navigate through the filesystem
    and play all files in a particular folder and subfolders.
</p>
<p>
    Main features:
</p>
<ul>
    <li>plays music from folders and subfolders</li>
    <li>playback gap between tracks is minimal (but it's not gapless)</li>
    <li>
        it can play all audio formats, which are supported by gstreamer plugins installed;
        it detects not only supported MIMEs, but also all supported file extensions as well
    </li>
    <li>10 bands equalizer with presets</li>
    <li>unzip may be used to play compressed module music files such as *.xmz, *.s3z, etc.</li>
    <li>file/folder search</li>
    <li>skins and language files support</li>
</ul>
<p>
    Due to Phonon and/or GStreamer being buggy as hell (on Maemo),
    one may experience some glitches when equalizer is enabled.
</p>
<p>
    Also, note that app is available in extras-testing,
    so you must add/enable this repository to install this package.
    Use one-click installer provided below.
    <img class="qr" src="~/assets/projects/rhapsodie/qr.png" alt="QR code"/><br>
    or <ext-link href="/rhapsodie/rhapsodie.install">click here</ext-link>.
</p>
</project>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import {Screenshot} from '~/components/Project.vue'

@Component({
    components: {
        Project: () => import('~/components/Project.vue'),
        ExtLink: () => import('~/components/ExtLink.vue')
    }
})
export default class extends Vue {
    screenshots: Screenshot[] = [{
        name: 'main',
        label: 'Main screen'
    }, {
        name: 'options',
        label: 'Options window'
    }, {
        name: 'main-white',
        label: 'Main screen using a different skin'
    }, ]
}
</script>
