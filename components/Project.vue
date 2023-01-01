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
        <Swiper
            :modules="[SwiperNavigation, SwiperPagination, SwiperKeyboard]"
            :pagination="{el: '.swiper-pagination'}"
            :navigation="{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}"
            :keyboard="{enabled: true}"
        >
            <SwiperSlide
                v-for="screenshot in screenshots"
                :key="screenshot.name"
                class="project-screenshot"
            >
                <img :src="getScreenshotSrc(screenshot.name)" :alt="screenshot.label"/>
                <label>{{ screenshot.label }}</label>
            </SwiperSlide>

            <div class="swiper-pagination swiper-pagination-bullets"/>
            <div class="swiper-button-prev swiper-button-nav" :title="'previous screenshot\n(left arrow key)'"/>
            <div class="swiper-button-next swiper-button-nav" :title="'next screenshot\n(right arrow key)'"/>
        </Swiper>
    </section>
</plain-article>
</template>

<script setup lang="ts">
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

usePageKbd(parentPath)

const summary = computed(() => menuItem.value.desc)
</script>

<style scoped lang="scss">
@import "~/assets/styles/inc.scss";

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

        .swiper-wrapper {
            @include js-disabled {
                display: block;

                .screenshot {
                    margin-top: 2ch;
                }
            }
        }

        .swiper-pagination {
            position: static;

            :deep(.swiper-pagination-bullet) {
                background-color: $cyan;
                opacity: 1;
                border-radius: 0;
                width: 1ch;
                height: 1ch;
                margin: 0 0.5ch;

                &.swiper-pagination-bullet-active {
                    background-color: $cyanBright;
                }
            }
        }

        .swiper-button-nav {
            transform: translateY(-50%);
            background: none;
            color: $cyan;

            &:after {
                display: inline-block;
                font-size: 2rem;
                line-height: 100%;
                content: "➤";
            }

            &:hover,
            &:focus {
                color: $cyanBright;
            }

            &.swiper-button-prev {
                padding: 3rem 3rem 3rem 1rem;
                left: 0;

                &:after {
                    transform: rotate(180deg);
                }
            }

            &.swiper-button-next {
                padding: 3rem 1rem 3rem 3rem;
                right: 0;
            }

            &.swiper-button-disabled {
                display: none;
            }

            @include js-disabled {
                display: none;
            }
        }

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
}
</style>
