<template>
<div id="error-page" :class="`font-${font}`">
    <article>
        <p>{{ errMessage }}</p>
        <p class="err-code"><span>{{ errCodeMessage }}</span>{{ errCodeMessagePad }}</p>
        <p>
            <nuxt-link to="/" class="back-link"
                >return back<span class="js-visible">(backspace key)</span></nuxt-link>
        </p>
    </article>
    <footer>
        <p>R Tape loading error, 0:1</p>
    </footer>
</div>
</template>

<script lang="ts">
import {Component, Vue, Prop, mixins} from 'nuxt-property-decorator'
import Kbd from '~/mixins/kbd'
import {getMenuRoot} from '~/mixins/menu'
import {getMenuFont} from '~/utils/font'

@Component
export default class extends mixins(Kbd) {
    @Prop(Object) error!: any

    get font(): string {
        return getMenuFont().id
    }

    getEvenPad(s: string): string {
        return '\xa0'.repeat(s.length % 2)
    }

    makeEven(s: string): string {
        return `${s}${this.getEvenPad(s)}`
    }

    get errMessage(): string {
        return this.makeEven(this.error.message)
    }

    get errCodeMessage(): string {
        return `Error ${this.error.statusCode}`
    }

    get errCodeMessagePad(): string {
        return this.getEvenPad(this.errCodeMessage)
    }

    onKbd(key: string): boolean {
        if(key == 'Backspace')
        {
            this.$router.push('/')
            return true
        }
        return false
    }

    head() {
        return {
            title: `${getMenuRoot().title} - ${this.error.message}`
        }
    }
}
</script>

<style scoped lang="scss">
@import "style/inc";

@keyframes flash {
    from {
        background: $white;
        color: $black;
    }

    50% {
        background: $black;
        color: $white;
    }

    to {
        background: $white;
        color: $black;
    }
}

#error-page {
    display: flex;
    flex-direction: column;
    width: 100%;

    @include font-setting;

    > article {
        flex: 1;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;

        .err-code span {
            animation: 0.64s step-end infinite flash;
        }

        .back-link {
            display: inline-block;
            background: $black;
            color: $white;
        }
    }

    > footer {
        p {
            margin-bottom: 0;
        }
    }
}
</style>
