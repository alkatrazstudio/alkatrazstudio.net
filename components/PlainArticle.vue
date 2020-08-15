<template>
<div class="plain" :class="`font-${font}`">
    <header>
        <h1>{{ menuItem.title }}</h1>
    </header>
    <article :class="{flex}">
        <slot/>
    </article>
    <footer>
        <p>
            <nuxt-link v-if="parentPath" :to="parentPath">return back (backspace key)</nuxt-link>
        </p>
    </footer>
</div>
</template>

<script lang="ts">
import {Component, Vue, Prop, mixins} from 'nuxt-property-decorator'
import Page from '~/mixins/page'
import {getArticleFont} from '~/utils/font'

@Component
export default class extends mixins(Page) {
    @Prop(Boolean) flex?: boolean

    get font(): string {
        return getArticleFont().id
    }
}
</script>

<style scoped lang="scss">
@import "style/inc";

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

    ::v-deep img {
        max-width: 100%;

        &.qr {
            width: 350px;
        }
    }
}
</style>
