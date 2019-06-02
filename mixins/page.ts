import {Component, mixins} from 'nuxt-property-decorator'
import Menu from '~/mixins/menu'
import Kbd from '~/mixins/kbd'

@Component
export default class Page extends mixins(Menu, Kbd) {
    onPageKey(key: string): boolean {
        return false
    }

    onKbd(key: string): boolean {
        if(this.onPageKey(key))
            return true
        if(key == 'Backspace' && this.parentPath)
        {
            this.$router.push(this.parentPath)
            return true
        }
        return false
    }

    head() {
        const title = this.menuItem.parent
            ? `${this.menuRoot.title} > ${this.menuItem.title}`
            : this.menuItem.title

        const description = `${this.menuItem.title}: ${this.menuItem.desc}`

        return {
            title,
            meta: [
                {hid: 'description', name: 'description', content: description}
            ]
        }
    }
}
