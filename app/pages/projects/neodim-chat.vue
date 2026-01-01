<template>
<Project
    homepage="https://github.com/alkatrazstudio/neodim-chat"
    :screenshots="screenshots"
>
<p>
    A mobile chat application where you can talk with AI bot.
</p>
<p>
    Neodim Chat is mostly suited to have a short chit-chat with AI,
    where each participant says only a couple of sentences in each line of the dialog.
    It also can be used, to some extent, to play a text-adventure game or to write a story.
</p>
<p>
    It was created because at the time there was no mobile-first AI chats
    that allowed you to connect to local models.
    Neodim Chat specifically maximizes the ease of use on mobile devices,
    making the user to do as few actions as possible to perform most tasks,
    while utilizing the limited screen space efficiently.
    Another distinctive feature is that it allows you to quickly switch the roles.
    So, for example, in the User-Assistant scenario you can become the "Assistant",
    and AI will be the "User", or AI can be both, talking to itself.
</p>
<p>
    The project requires an external AI server.
    In the beginning, Neodim Chat used <NuxtLink to="/projects/neodim-server">Neodim Server</NuxtLink>
    (hence the name), but that server is no longer maintained, so the support for Neodim Server was removed.
    Currently, Neodim Chat can use <ExtLink href="https://github.com/ggml-org/llama.cpp">llama.cpp</ExtLink>.
</p>
</Project>
</template>

<script setup lang="ts">
const screenshots: Screenshot[] = [{
    name: 'chat',
    label: 'Chat mode'
}, {
    name: 'group-chat',
    label: 'Group chat mode'
}, {
    name: 'adventure',
    label: 'Text adventure game mode'
}, {
    name: 'story',
    label: 'Story mode'
}, {
    name: 'settings',
    label: 'Settings'
}, {
    name: 'debug',
    label: 'Server API debug view'
}]
</script>
