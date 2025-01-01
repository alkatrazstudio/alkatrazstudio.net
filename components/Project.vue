<template>
<plain-article class="project" :flex="true">
    <section class="project-meta">
        <div>
            <label class="meta-summary">{{ summary }}</label>
        </div>
        <div>
            <label class="meta-homepage" v-if="homepage">
                <ExtLink :href="homepage"/>
            </label>
        </div>
    </section>
    <section class="project-main">
        <slot/>
    </section>
    <section class="project-screenshots" v-if="screenshots">
        <swiper-container
            ref="swiperRef"
            :navigation="true"
            :keyboard="false"
            :pagination="true"
        >
            <swiper-slide
                v-for="screenshot in screenshots"
                :key="screenshot.name"
                class="project-screenshot"
            >
                <img :src="getScreenshotSrc(screenshot.name)" :alt="screenshot.label"/>
                <label>{{ screenshot.label }}</label>
            </swiper-slide>
        </swiper-container>
    </section>
</plain-article>
</template>

<script setup lang="ts">
import type { SwiperContainer } from 'swiper/element'

defineProps<{
    homepage?: string,
    screenshots?: Screenshot[]
}>()

const menuItem = useMenuItem()
const parentPath = useParentPath(menuItem)

const images = import.meta.glob('~/assets/projects/*/*.png', { eager: true })

function getScreenshotSrc(name: string) {
    const localPath = `/assets/projects/${lastUriSegment(menuItem.value)}/${name}.png`
    const image = images[localPath] as unknown as {default: string}
    const href = image.default
    return href
}

const swiperRef = ref<SwiperContainer | null>(null)
const swiper = useSwiper(swiperRef)

usePageKbd(parentPath, key => {
    switch(key) {
        case 'ArrowRight':
            swiper.next()
            return true

        case 'ArrowLeft':
            swiper.prev()
            return true
    }
    return false
})

const summary = computed(() => menuItem.value.desc)
</script>

<style scoped lang="scss">
@use "~/assets/styles/inc.scss" as *;

.project {
    .project-meta {
        label {
            background: $whiteBright;
            color: $black;
            display: block;

            &.meta-update {
                background: $whiteBright;
                color: $black;
            }
        }
    }

    .project-main {
        flex: 1;
    }

    .project-screenshots {
        margin-bottom: 1rem;
        max-width: 100%;
        overflow: hidden;

        .project-screenshot {
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
    }

    swiper-container {
        &::part(pagination) {
            position: static;
        }

        &::part(bullet),
        &::part(bullet-active) {
            background-color: $cyan;
            opacity: 1;
            border-radius: 0;
            width: 1ch;
            height: 1ch;
            margin: 0 0.5ch;
        }

        &::part(bullet-active) {
            background-color: $cyanBright;
        }

        &::part(button-prev),
        &::part(button-next) {
            color: $cyan;

            &:hover,
            &:focus {
                color: $cyanBright;
            }
        }

        @include js-disabled {
            swiper-slide label {
                margin-bottom: 2ch;
            }

            swiper-slide:last-child label {
                margin-bottom: 0;
            }
        }
    }
}
</style>
