<template>
<project
    homepage="https://sourceforge.net/projects/xmpzxtune/"
>
<p>
    XMPZXTUNE is a chiptune plugin for
    <ext-link href="https://www.un4seen.com/xmplay.html">XMPlay</ext-link>.
</p>
<p>
    Basically it's the same as <nuxt-link to="/projects/basszxtune">BASSZXTUNE</nuxt-link>, only for XMPlay.
    Nothing more to add.
</p>
<p>
    Visit the
    <ext-link href="https://sourceforge.net/projects/xmpzxtune/">project's homepage</ext-link>
    or
    <ext-link href="https://www.un4seen.com/forum/?topic=16496.0">forum page on un4seen.com</ext-link>
    for more details.
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
