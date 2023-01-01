<template>
<App>
    <Head>
        <Title>{{ menuRoot.title }} - {{ props.error.message }}</Title>
    </Head>
    <div id="error-page" :class="`font-${menuFontId}`">
        <article>
            <p>{{ errMessage }}</p>
            <p class="err-code"><span>{{ errCodeMessage }}</span>{{ errCodeMessagePad }}</p>
            <p>
                <NuxtLink to="/" class="back-link"
                    >return back <span class="js-visible">(backspace key)</span></NuxtLink>&nbsp;
            </p>
        </article>
        <footer>
            <p>R Tape loading error, 0:1</p>
        </footer>
    </div>
</App>
</template>

<script setup lang="ts">
const props = defineProps<{
    error: {
        message: string
        statusCode: number
    }
}>()

const menuFontId = useMenuFontId()
const menuItem = useMenuItem()
const parentPath = useParentPath(menuItem)

usePageKbd(parentPath, key => {
    if(key == 'Backspace') {
        clearError({redirect: '/'})
        return true
    }
    return false
})


function getEvenPad(s: string): string {
    return s.length % 2 ? '\xa0' : ''
}

function makeEven(s: string): string {
    return `${s}${getEvenPad(s)}`
}

const errMessage = computed(() => makeEven(props.error.message))
const errCodeMessage = computed(() => `Error ${props.error.statusCode}`)
const errCodeMessagePad = computed(() => getEvenPad(errCodeMessage.value))
</script>

<script lang="ts">
if(process.client)
    setTimeout(() => document.getElementById('app')?.classList.add('js'))
</script>

<style scoped lang="scss">
@import "~/assets/styles/inc.scss";

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
