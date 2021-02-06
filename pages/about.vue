<template>
<plain-article>
<p>
    Welcome to the Alkatraz Studio homepage!!
</p>
<p>
    As for now, Alkatraz Studio is a one man army that consists only of yours truly,
    Alexey Parfenov (rus: Алексей Парфёнов).
    I'm a software programmer from Russia.
    On this website you can find my projects that are decent enough
    to show them to a general audience.
    Mostly, these projects are multimedia and system applications and libraries.
</p>
<p>
    The theme of this website is inspired by
    <ext-link href="https://en.wikipedia.org/wiki/ZX_Spectrum">ZX Spectrum</ext-link>
    and
    <ext-link href="https://en.wikipedia.org/wiki/TR-DOS">TR-DOS</ext-link>.
</p>
<p>
    To save you some eye damage the ZX Spectrum fonts are used by default only in the menus.
    You can also change the fonts in the <nuxt-link to="/settings">Settings</nuxt-link>.
    The speccy font was found
    <ext-link href="https://zx-pk.ru/threads/14785-russkij-ttf-shrift-kak-na-spektrume.html?p=348597&amp;viewfull=1#post348597">here</ext-link>.
</p>
<p>
    The site can be operated using a keyboard only,
    but the browser window needs to be in focus
    (e. g. you may need to click inside the window for a keyboard to work).
    The site can also be comfortably viewed without JavaScript enabled
    or in text-only browsers.
</p>
<p>
    If you want to contact me regarding any of my projects then
    consider the following:
</p>
<ul>
    <li>If the project is no longer maintained then forget about it.</li>
    <li>
        If you want to file an issue or make a suggestion regarding an active project,
        then use the appropriate issue tracker on the project's homepage,
        or use a corresponding forum if applicable.
    </li>
    <li>
        If none of the above applies then as a last resort
        you may contact me via email:
        <mail-to scramble="yyde?bkl`uqbytsvcjn/mfs"/>.
    </li>
</ul>
<p>
    All content on this site (text and images) is licensed under
    <ext-link href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</ext-link>.
    The source code for the site is
    <ext-link href="https://github.com/alkatrazstudio/alkatrazstudio.net">here</ext-link>.
</p>
</plain-article>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component({
    components: {
        PlainArticle: () => import('~/components/PlainArticle.vue'),
        ExtLink: () => import('~/components/ExtLink.vue'),
        MailTo: () => import('~/components/MailTo.vue')
    }
})
export default class extends Vue {}
</script>
