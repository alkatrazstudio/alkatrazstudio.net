import {Component, Vue} from 'nuxt-property-decorator'

@Component
export default class Kbd extends Vue {
    kbdEvent?: (e: KeyboardEvent) => void

    onKbd(key: string): boolean {
        return false
    }

    mounted() {
        this.kbdEvent = (e: KeyboardEvent) => {
            if(this.onKbd(e.code))
            {
                e.preventDefault();
                e.stopPropagation()
            }
        }
        document.addEventListener('keydown', this.kbdEvent)
    }

    destroyed() {
        if(this.kbdEvent)
            document.removeEventListener('keydown', this.kbdEvent)
    }
}
