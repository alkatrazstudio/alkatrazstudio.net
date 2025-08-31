<template>
<Project
    homepage="https://github.com/alkatrazstudio/sonus-presto"
    :screenshots="screenshots"
>
<p>
    SonusPresto is a music player for Android.
    It uses a filesystem instead of audio tags to organize your music.
</p>
<p>
    There are already hundreds of music players on Android,
    but I didn't like any of them, so I wrote my own.
    It has a combination of features that are not simultaneously present in any other Android music player
    (at least, in those that I used):
</p>
<ul>
    <li>folder-based</li>
    <li>CUE support</li>
    <li>M3U support</li>
    <li>Internet-radio support</li>
    <li>gapless playback</li>
    <li>opens the last viewed folder on start</li>
    <li>gesture navigation (including a gesture to return to a previous folder on a lower level)</li>
    <li>free, libre, open-source, no ads, no premium versions, no spying</li>
</ul>
<p>
    Since I made this player mostly for myself,
    only bugfixes are expected in the future, but no new functionality.
</p>
</Project>
</template>

<script setup lang="ts">
const screenshots: Screenshot[] = [{
    name: 'main',
    label: 'Dark mode with a track playing'
}, {
    name: 'options',
    label: 'Options'
}, {
    name: 'radio',
    label: 'Internet-radio'
}]
</script>
