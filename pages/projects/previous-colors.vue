<template>
<Project
    homepage="https://addons.thunderbird.net/thunderbird/addon/previous-colors/"
    :screenshots="screenshots"
>
<p>
    An add-on for <ExtLink href="https://www.thunderbird.net">Thunderbird</ExtLink>
    that allows you to quickly choose any of the colors
    previously selected via "Choose color for text" dialog window.
</p>
<p>
    The add-on was inspired by
    <ExtLink href="https://addons.thunderbird.net/thunderbird/addon/lastcolour/">LastColour</ExtLink>
    which is now unsupported by modern versions of Thunderbird.
</p>
<p>
    You can read some other techinical details at
    <ExtLink href="https://github.com/alkatrazstudio/prev-colors">the "Previous Colors" repository</ExtLink>.
</p>
</Project>
</template>

<script setup lang="ts">
const screenshots: Screenshot[] = [{
    name: 'popup',
    label: 'Main popup dropdown with previously selected colors'
}]
</script>
