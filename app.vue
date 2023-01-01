<template>
<App>
    <Head>
        <Title>{{ title }}</Title>
        <Meta name="description" :content="description" />
    </Head>
    <NuxtPage />
</App>
</template>

<script setup lang="ts">
const menuItem = useMenuItem()

const title = computed(() =>
    menuItem.value.parent
        ? `${menuRoot.title} > ${menuItem.value.title}`
        : menuItem.value.title
)

const description = computed(() => `${menuItem.value.title}: ${menuItem.value.desc}`)
</script>
