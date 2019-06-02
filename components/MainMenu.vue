<template>
<div id="main-menu" :class="`font-${font}`">
    <div id="menu-container">
        <header>
            <h1>{{ menuItem.title }}</h1>
            <div class="stripe red"/>
            <div class="stripe yellow"/>
            <div class="stripe green"/>
            <div class="stripe cyan"/>
        </header>

        <nav>
            <ul ref="items">
                <li v-for="(item, i) in realItems" :key="item.to">
                    <nuxt-link
                        class="item"
                        v-if="item.to"
                        :key="item.to"
                        :to="item.to"
                        :class="{active: i == curIndex}"
                        @focus.native="onFocus(i)"
                        @blur.native="onBlur(i)"
                        @mouseenter.native="hoveredIndex = i"
                        @mouseleave.native="hoveredIndex = -1"
                    >{{ item.title }}</nuxt-link>
                    <a
                        v-else
                        class="item"
                        :key="item.to"
                        href="#"
                        :class="{active: i == curIndex}"
                        @focus="onFocus(i)"
                        @blur="onBlur(i)"
                        @mouseenter="hoveredIndex = i"
                        @mouseleave="hoveredIndex = -1"
                        @click="item.click()"
                    >{{ item.title }}</a>
                </li>
            </ul>
        </nav>
    </div>

    <label>{{ label }}</label>
</div>
</template>

<script lang="ts">
import {Component, Prop, namespace, mixins} from 'nuxt-property-decorator'
import Page from '~/mixins/page'
import {getMenuFont} from '~/utils/font'

const store = namespace('main')

@Component
export default class extends mixins(Page) {
    @store.State fromPath

    curIndex = -1
    hoveredIndex = -1
    focusedIndex = -1

    updateFocus(i: number) {
        const ul = this.$refs.items as HTMLElement
        const li = ul.children[i] as HTMLElement
        const link = li.children[0] as HTMLElement
        link.focus()
        this.curIndex = i // in case the focus is not set
    }

    onFocus(i: number) {
        this.focusedIndex = i
        this.curIndex = i
    }

    onBlur(i: number) {
        this.focusedIndex = -1
    }

    get realItems() {
        const items = this.menuItem.children || []
        if(!this.parentPath)
            return items
        return [{
            to: this.parentPath,
            title: '(back)',
            desc: 'Return back (backspace key)'
        }, ...items]
    }

    get label() {
        if(this.hoveredIndex != -1)
            return this.realItems[this.hoveredIndex].desc
        if(this.curIndex != -1)
            return this.realItems[this.curIndex].desc
        return ''
    }

    onPageKey(key) {
        switch(key)
        {
            case 'ArrowUp':
                if(this.curIndex > 0)
                    this.updateFocus(this.curIndex - 1)
                else
                    this.updateFocus(this.realItems.length - 1)
                return true

            case 'ArrowDown':
                if(this.curIndex < (this.realItems.length - 1))
                    this.updateFocus(this.curIndex + 1)
                else
                    this.updateFocus(0)
                return true

            case 'Enter':
                if(this.focusedIndex == -1 && this.curIndex != -1 && this.realItems[this.curIndex].to)
                {
                    this.$router.push(this.realItems[this.curIndex].to!)
                    return true
                }
                break
        }
        return false
    }

    get font(): string {
        return getMenuFont().id
    }

    mounted() {
        let i = this.realItems.findIndex(i => i.to == this.fromPath)
        if(i == -1)
            i = 0
        this.updateFocus(i)
    }
}
</script>

<style scoped lang="scss">
@import "style/inc";

$itemsBg: $whiteBright;
$activeItemBg: $cyanBright;
$hoveredItemBg: $cyan;

#main-menu {
    display: inline-block;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    @include font-setting;

    > #menu-container {
        display: inline-block;
        margin: 0 auto;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;

        > header {
            display: flex;
            background: $black;
            padding-left: 2px solid $black;

            h1 {
                font-size: 1rem;
                padding: 0;
                margin: 0;
                line-height: 1rem;
                font-weight: normal;
                color: $whiteBright;
                display: inline-block;
                margin-right: 1.5ch;
                flex: 1;
            }

            .stripe {
                width: 1rem;
                display: inline-block;
                transform: skewX(-45deg);

                &.red    {background: $redBright;}
                &.yellow {background: $yellowBright;}
                &.green  {background: $greenBright;}
                &.cyan   {background: $cyanBright;}

                &:last-child {
                    margin-right: 1.5rem;
                }
            }
        }

        > nav {
            background: $itemsBg;
            padding-bottom: 1rem;
            border: 2px solid $black;
            border-top: none;

            > ul {
                list-style-type: none;
                margin: 0;
                padding: 0;

                li {
                    margin: 0;
                }
            }

            .item {
                padding: 0 1ch;
                display: block;
                text-decoration: none;
                color: $mainFg;
                outline: none;

                &.active {
                    background: $activeItemBg;
                }

                &:hover {
                    background: $hoveredItemBg;
                }
            }
        }
    }

    > label {
        display: block;
        height: 4rem;
        text-align: center;
    }
}
</style>
