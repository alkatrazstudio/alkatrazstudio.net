<template>
<div id="main-menu" :class="`font-${menuFontId}`">
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
                    <component
                        v-if="typeof item.title !== 'string'"
                        :is="item.title"
                        class="item"
                        :class="{active: i == curIndex}"
                        @focus="onFocus(i)"
                        @blur="onBlur()"
                        @mouseenter="hoveredIndex = i"
                        @mouseleave="hoveredIndex = -1"/>
                    <template v-else>
                        <NuxtLink
                            class="item"
                            v-if="item.to"
                            :key="`NuxtLink-${item.title}`"
                            :to="item.to"
                            :class="{active: i == curIndex}"
                            @focus.native="onFocus(i)"
                            @blur.native="onBlur()"
                            @mouseenter.native="hoveredIndex = i"
                            @mouseleave.native="hoveredIndex = -1"
                        >
                            {{ item.title }}
                        </NuxtLink>
                        <a
                            v-else
                            class="item"
                            :key="`link-${item.title}`"
                            href="#"
                            :class="{active: i == curIndex}"
                            @focus="onFocus(i)"
                            @blur="onBlur()"
                            @mouseenter="hoveredIndex = i"
                            @mouseleave="hoveredIndex = -1"
                            @click="item.click && item.click()"
                        >
                            {{ item.title }}
                        </a>
                    </template>
                </li>
            </ul>
        </nav>
    </div>

    <label>{{ label }}</label>
</div>
</template>

<script setup lang="ts">
const curIndex = ref(-1)
const hoveredIndex = ref(-1)
const focusedIndex = ref(-1)

const items = ref(null)
const router = useRouter()

const menuFontId = useMenuFontId()

const menuItem = useMenuItem()
const parentPath = useParentPath(menuItem)


function updateFocus(i: number) {
    const ul = items.value as HTMLElement|null
    const li = ul?.children[i] as HTMLElement|null
    const link = li?.children[0] as HTMLElement|null
    link?.focus()
    curIndex.value = i // in case the focus is not set
}

function onFocus(i: number) {
    focusedIndex.value = i
    curIndex.value = i
}

function onBlur() {
    focusedIndex.value = -1
}

const realItems = computed(() => {
    const items = menuItem.value.children || []
    if(!parentPath.value)
        return items
    return [{
        to: parentPath.value,
        title: '(back)',
        desc: 'Return back (backspace key)'
    }, ...items]
})

const label = computed(() => {
    if(hoveredIndex.value != -1)
        return realItems.value[hoveredIndex.value].desc
    if(curIndex.value != -1)
        return realItems.value[curIndex.value].desc
    return ''
})

usePageKbd(parentPath, key => {
    switch(key)
    {
        case 'ArrowUp':
            if(curIndex.value > 0)
                updateFocus(curIndex.value - 1)
            else
                updateFocus(realItems.value.length - 1)
            return true

        case 'ArrowDown':
            if(curIndex.value < (realItems.value.length - 1))
                updateFocus(curIndex.value + 1)
            else
                updateFocus(0)
            return true

        case 'Enter':
            if(focusedIndex.value == -1 && curIndex.value != -1 && realItems.value[curIndex.value].to)
            {
                router.push(realItems.value[curIndex.value].to!)
                return true
            }
            break
    }
    return false
})

onMounted(() => {
    let i = realItems.value.findIndex(i => i.to == useFromPath().value)
    if(i == -1)
        i = 0
    updateFocus(i)
})
</script>

<style scoped lang="scss">
@use "~/assets/styles/inc.scss" as *;

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
            border-left: 2px solid $black;

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
                width: 27ch;

                &.active,
                &:focus {
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
        white-space: pre-wrap;
    }
}
</style>
