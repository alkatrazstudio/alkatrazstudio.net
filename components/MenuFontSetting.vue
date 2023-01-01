<template>
<a href="#" @click="switchToNextFont">Menu font: {{ fontTitle }}</a>
</template>

<script setup lang="ts">
const menuFontId = useMenuFontId()

const fontTitle = computed(() => getFont(menuFontId.value).title)

function switchToNextFont()
{
    const nextId = nextMenuFontId(menuFontId.value)
    menuFontId.value = nextId
}
</script>
