<template>
<project
    homepage="https://github.com/alkatrazstudio/humanpwd"
>
<p>
    humanpwd generates several passwords that consist of four words each.
    The passwords will only contain lower-case English words without numbers, special symbols, etc.
    Based on the idea from the popular
    <ext-link href="https://xkcd.com/936/">XKCD comic</ext-link>.
</p>
<p>
    There were already some password generators based on that idea,
    but most of them are over-engineered and will only give you one password at a time.
    humanpwd is much simpler and straightforward.
</p>
<p>
    humanpwd is available as a <ext-link href="https://humanpwd.alkatrazstudio.net">website</ext-link>
    and as a <ext-link href="https://github.com/alkatrazstudio/humanpwd/releases">stand-alone binary</ext-link>.
</p>
</project>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component({
    components: {
        Project: () => import('~/components/Project.vue'),
        ExtLink: () => import('~/components/ExtLink.vue')
    }
})
export default class extends Vue {}
</script>
