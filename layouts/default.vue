<template>
<div id="app" :class="{ready}">
    <div id="content">
        <Nuxt/>
    </div>
    <div id="startup-bg"/>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component
export default class extends Vue {
    ready = false

    mounted() {
        if(process.browser)
            setTimeout(() => this.ready = true, 500)
    }
}
</script>

<style scoped lang="scss">
@import "style/inc";

#app {
    max-width: 54rem;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    font-family: monospace;
    position: relative;

    #content {
        flex: 1;
        display: flex;
        opacity: 0;
    }

    #startup-bg {
        width: 100%;
        max-width: 54rem;
        border: 2rem solid $white;
        position: fixed;
        top: 0;
        left: 50%;
        right: 0;
        bottom: 0;
        background: $black;
        transform: translateX(-50%);
    }

    &.ready {
        #content {
            opacity: 1;
        }

        #startup-bg {
            display: none;
        }
    }

    @media (max-width: 666px) {
        padding: 1rem;

        #startup-bg {
            border-width: 1rem;
        }
    }
}
</style>
