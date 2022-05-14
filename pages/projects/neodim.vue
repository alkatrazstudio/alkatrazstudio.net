<template>
<project
    homepage="https://github.com/alkatrazstudio/neodim-server"
>
<p>There are currently two applications in this group</p>
<p>
    1. <ext-link href="https://github.com/alkatrazstudio/neodim-server">Neodim Server</ext-link>
    - an HTTP-server that provides natural language text generation using a selected language model.
</p>
<p>
    This is basically an HTTP-wrapper around some of the existing language models on Hugging Face.
    Most of these models are on
    <ext-link href="https://huggingface.co/models?library=pytorch&amp;pipeline_tag=text-generation&amp;sort=downloads">Hugging Face</ext-link>.
    The project also includes a simple HTML page to test the server.
</p>
<p>
    Inspired by various "AI Dungeon"-like projects.
</p>
<p>
    2. <ext-link href="https://github.com/alkatrazstudio/neodim-chat">Neodim Chat</ext-link>
    - a chat application where you can talk with a bot, which is powered by Neodim Server.
</p>
<p>
    This is a chat between two participants where each reply can be written either by you or AI.
    All Neodim Server request parameters are configurable from the settings.
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
