import {Component, Vue} from 'nuxt-property-decorator'

@Component({
    components: {
        Project: () => import('~/components/Project.vue'),
        Screenshot: () => import('~/components/Screenshot.vue'),
        ExtLink: () => import('~/components/ExtLink.vue')
    }
})
export default class Project extends Vue {}
