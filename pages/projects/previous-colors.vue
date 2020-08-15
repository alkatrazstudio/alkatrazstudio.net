<template>
<project
    homepage="https://addons.thunderbird.net/thunderbird/addon/previous-colors/"
    :screenshots="screenshots"
>
<p>
    An add-on for <ext-link href="https://www.thunderbird.net">Thunderbird</ext-link>
    that allows you to quickly choose any of the colors
    previously selected via "Choose color for text" dialog window.
</p>
<p>
    The add-on was inspired by
    <ext-link href="https://addons.thunderbird.net/thunderbird/addon/lastcolour/">LastColour</ext-link>
    which is now unsupported by modern versions of Thunderbird.
</p>
<p>
    You can read some other techinical details at
    <ext-link href="https://github.com/alkatrazstudio/prev-colors">the "Previous Colors" repository</ext-link>.
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
        name: 'popup',
        label: 'Main popup dropdown with previously selected colors'
    }]
}
</script>
