<template>
<span>
    <a v-if="email" :href="`mailto:${email}`">{{ email }}</a>
    <a
        v-else
        @click.prevent="reveal"
        tabindex="0"
        @keypress.enter.prevent="reveal"
    >[click to reveal]</a>
    <noscript>(you need JavaScript enabled for this)</noscript>
</span>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'nuxt-property-decorator'

@Component
export default class extends Vue {
    // email.split('').map((x, i) => String.fromCharCode(x.charCodeAt(0) + 2*(i%2) - 1)).join('')
    @Prop(String) scramble!: string

    email = ''

    reveal() {
        this.email = this.scramble.split('').map((x, i) => String.fromCharCode(x.charCodeAt(0) - 2*(i%2) + 1)).join('')
    }
}
</script>

<style scoped lang="scss">
span {
    a {
        white-space: nowrap;
    }
}
</style>
