<template>
<div class="screenshot swiper-slide">
    <img :src="src" :alt="label"/>
    <label>{{ label }}</label>
</div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'nuxt-property-decorator'

@Component
export default class extends Vue {
    @Prop(String) src!: string
    @Prop(String) label!: string
}
</script>

<style scoped lang="scss">
@import "style/inc";

.screenshot {
    > img {
        display: block;
        max-width: 100%;
        max-height: 35rem;
        margin: 0 auto;
    }

    > label {
        display: block;
        text-align: center;
        background: $yellow;
    }
}
</style>
