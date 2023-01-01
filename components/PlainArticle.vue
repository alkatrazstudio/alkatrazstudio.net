<template>
<div class="plain" :class="`font-${fontId}`">
    <header>
        <h1>{{ menuItem.title }}</h1>
    </header>
    <article :class="{flex}">
        <slot/>
    </article>
    <footer>
        <p>
            <NuxtLink v-if="parentPath" :to="parentPath"
                >return back <span class="js-visible">(backspace key)</span></NuxtLink>&nbsp;
        </p>
    </footer>
</div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
    flex?: boolean
}>(), {
    flex: false
})

const menuItem = useMenuItem()
const parentPath = useParentPath(menuItem)
const fontId = useArticleFontId()

usePageKbd(parentPath)
</script>

<style scoped lang="scss">
@import "~/assets/styles/inc.scss";

.plain {
    font-family: monospace;
    display: flex;
    flex-direction: column;
    width: 100%;

    @include font-setting;

    > header {
        background: $black;
        color: $white;

        h1 {
            font-size: 1rem;
            padding: 0;
            margin: 0;
            font-weight: normal;
        }
    }

    > article {
        flex: 1;

        &.flex {
            display: flex;
            flex-direction: column;
        }
    }

    > footer {
        text-align: center;

        p {
            margin-bottom: 0;
        }

        a {
            display: inline-block;
            background: $black;
            color: $white;
        }
    }

    :deep(img) {
        display: block;
        max-width: 100%;

        &.qr {
            width: 350px;
        }
    }
}
</style>
