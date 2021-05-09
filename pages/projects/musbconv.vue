<template>
<project
    homepage="https://github.com/alkatrazstudio/musbconv"
>
<p>
    musbconv converts music files between formats.
    It mainly targets the conversion from lossless to lossy formats.
    It takes folders with music as input, converts audio files in them
    and saves the resulting encoded files to files
    following a user-specified filename template which can use audio tags as its parts.
    The actual conversion is performed by ffmpeg.
</p>
<p>
    It's easier to explain with examples,
    so head out to the <ext-link href='https://github.com/alkatrazstudio/musbconv'>project's homepage</ext-link>
    and read the examples in the docs.
</p>
<p>
    Main features:
    <ul>
        <li>Batch convertion of multiple folders with music</li>
        <li>Parallel processing of files using multiple CPU cores</li>
        <li>CUE-sheet support</li>
        <li>External album art embedding and optional recoding</li>
        <li>Advanced filename templates based on audio tags</li>
    </ul>
</p>
<p>
    The name musbconv is kind of ugly but all other similar cool short names were taken.
</p>
</project>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import ExtLink from '~/components/ExtLink.vue';

@Component({
    components: {
        Project: () => import('~/components/Project.vue'),
        ExtLink: () => import('~/components/ExtLink.vue')
    }
})
export default class extends Vue {}
</script>
