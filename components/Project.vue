<template>
<plain-article class="project" :flex="true">
    <section class="project-meta">
        <div>
            <label class="meta-summary">{{ summary }}</label>
        </div>
        <div>
            <label class="meta-homepage" v-if="homepage">
                <ext-link :href="homepage"/>
            </label>
        </div>
    </section>
    <section class="project-main">
        <slot/>
    </section>
    <section class="project-screenshots" v-if="screenshots">
        <div v-swiper:swiper="swiperOption">
            <div class="swiper-wrapper">
                <screenshot
                    v-for="screenshot in screenshots"
                    :key="screenshot.name"
                    :label="screenshot.label"
                    :src="getScreenshotSrc(screenshot.name)"/>
            </div>
            <div class="swiper-pagination swiper-pagination-bullets"/>
            <div class="swiper-button-prev swiper-button-nav" :title="'previous screenshot\n(left arrow key)'"/>
            <div class="swiper-button-next swiper-button-nav" :title="'next screenshot\n(right arrow key)'"/>
        </div>
    </section>
</plain-article>
</template>

<script lang="ts">
import {Component, Prop, mixins} from 'nuxt-property-decorator'
import Page from '~/mixins/page'

export interface File {
    platform: string
    link: string
    size: number
}

export interface Screenshot {
    name: string
    label: string
}

export interface ProjectMeta {
    name?: string
    summary?: string
    version: string
    updatedOn: string
    homepage: string
    files?: File[]
}

@Component({
    components: {
        PlainArticle: () => import('~/components/PlainArticle.vue'),
        ExtLink: () => import('~/components/ExtLink.vue'),
        Screenshot: () => import('~/components/Screenshot.vue')
    }
})
export default class extends mixins(Page) {
    @Prop(String) homepage!: string
    @Prop(Array) screenshots!: Screenshot[]

    swiper

    swiperOption = {
        pagination: {
            el: '.swiper-pagination'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    }

    getScreenshotSrc(name) {
        return require(`~/assets/projects/${this.lastUriSegment}/${name}.png`)
    }

    onPageKey(k: string){
        switch(k)
        {
            case 'ArrowLeft':
                if(this.screenshots)
                    this.swiper.slidePrev()
                return true

            case 'ArrowRight':
                if(this.screenshots)
                    this.swiper.slideNext()
                return true
        }
        return false
    }

    get summary() {
        return this.menuItem.desc
    }
}
</script>

<style scoped lang="scss">
@import "style/inc";

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

        .swiper-pagination {
            position: static;

            ::v-deep .swiper-pagination-bullet {
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
            }

            &:hover,
            &:focus {
                color: $cyanBright;
            }

            &.swiper-button-prev {
                padding: 3rem 3rem 3rem 1rem;
                left: 0;

                &:after {
                    content: "⮜";
                }
            }

            &.swiper-button-next {
                padding: 3rem 1rem 3rem 3rem;
                right: 0;

                &:after {
                    content: "⮞";
                }
            }

            &.swiper-button-disabled {
                display: none;
            }
        }
    }
}
</style>
