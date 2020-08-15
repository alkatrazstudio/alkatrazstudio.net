<template>
<project
    homepage="https://sourceforge.net/projects/lockonlidclose/"
>
<p>
    LockOnLidClose will lock your screen when you close your laptop's lid.
    So the next time you open the lid, you will be prompted for your user password.
    You'd think that such a simple feature must be included in every OS by default, right?
    Wrong!
    Microsoft knows what's better for you after all.
</p>
<p>
    There are a lot of implementations of this feature,
    but only few of them are open source.
    And for some reason the open source ones use a lot of hardcoded declarations
    like GUIDs or library imports.
    My implementation uses values from standard Windows headers only.
    That's pretty much all the difference.
</p>
<p>
    The application archive contains control *.bat files.
    Use them to start/stop the application.
    No administrative privileges required.
</p>
<p>
    This application is only for Windows Vista or later!
    Also read README.TXT before use!
</p>
</project>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component({
    components: {
        Project: () => import('~/components/Project.vue')
    }
})
export default class extends Vue {}
</script>
