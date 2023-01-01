<template>
<a href="#" @click="switchToNextFont">Article font: {{ fontTitle }}</a>
</template>

<script setup lang="ts">
const articleFontId = useArticleFontId()

const fontTitle = computed(() => getFont(articleFontId.value).title)

function switchToNextFont()
{
    const nextId = nextMenuFontId(articleFontId.value)
    articleFontId.value = nextId
}
</script>
