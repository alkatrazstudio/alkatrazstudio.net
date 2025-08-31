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

<script setup lang="ts">
const props = defineProps<{
    scramble: string
}>()

const email = ref('')

function reveal()
{
    email.value = props.scramble.split('').map(
        (x, i) => String.fromCharCode(x.charCodeAt(0) - 2*(i%2) + 1)
    ).join('')
}
</script>

<style scoped lang="scss">
span {
    a {
        white-space: nowrap;
    }
}
</style>
