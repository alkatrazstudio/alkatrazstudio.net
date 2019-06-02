import {Component, mixins} from 'nuxt-property-decorator'
import LocalStore from '~/mixins/localStore'

@Component
class MainLocalStore extends mixins(LocalStore) {
    menuFont = 'zx'
    articleFont = 'mono'
}

export default new MainLocalStore()
