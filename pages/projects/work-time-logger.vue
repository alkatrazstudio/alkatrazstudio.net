<template>
<project
    :screenshots="screenshots"
>
<p>
    In a nutshell, this program shows you when your computer
    was turned off and when it was turned on.
    Program collects that information from the records of EventLog system service.
    Then it displays info in a user-friendly manner (YY-MM-DD hh:mm:ss).
    If any of the records can not be read they will be represented as a blank field.
</p>
<p>
    Work Time Logger can obtain such statistics for any computer in local network,
    but only if the user has an access to a system events log of that computer.
</p>
<p>
    <ext-link href="https://mega.nz/#!4Z8nBa7L!LzSpJzo12Pkals6UKBJ5SYptwbxfRMegfPjkhoL0nvc">
        Download the binary and the source code.
    </ext-link>
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
        name: 'output',
        label: "Program's output"
    }]
}
</script>
