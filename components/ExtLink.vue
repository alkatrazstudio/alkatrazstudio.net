<template>
<a target="_blank" rel="noreferrer" :href="href"><slot>{{ href }}</slot></a>
</template>

<script setup lang="ts">
defineProps<{
    href: string
}>()
</script>
