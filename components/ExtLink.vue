<template>
<a target="_blank" rel="noreferrer" :href="href"><slot>{{ href }}</slot></a>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'nuxt-property-decorator'

@Component
export default class extends Vue {
    @Prop(String) href!: string
}
</script>
