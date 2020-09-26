<template>
<project
    homepage="https://github.com/alkatrazstudio/gottext"
>
<p>
    GotText is a translation engine for PHP 7.
    It can be used instead of gettext, but it's not a drop-in replacement.
    The main goal of this project is to build a translation engine
    with gettext features but without any gettext shortcomings.
    GotText solves most of the fundamental problems of using gettext in PHP
    and also has an extra functionality on top.
</p>
<p>
    GotText is fully documented
    and can be built at least on Debian, Ubuntu  and CentOS.
</p>
<p>
    The project most likely will remain source-only
    until someone decides to be the package maintainer.
</p>
<p>
    You can read all the other details at the
    <ext-link href="https://github.com/alkatrazstudio/gottext">GotText homepage</ext-link>.
</p>
</project>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component({
    components: {
        Project: () => import('~/components/Project.vue'),
        ExtLink: () => import('~/components/ExtLink.vue')
    }
})
export default class extends Vue {}
</script>
