import {Component, Vue} from 'nuxt-property-decorator'

@Component
export default class LocalStore extends Vue {
    init() {
        const props = Object.keys(this)
        props.forEach(prop => {
            const itemKey = `localStore-${prop}`
            const val = localStorage.getItem(itemKey)
            if(val !== null)
                this[prop] = JSON.parse(val)
            this.$watch(prop, val => {
                localStorage.setItem(itemKey, JSON.stringify(val))
            })
        })
    }

    created() {
        if(process.browser)
            setTimeout(() => this.init(), 0)
    }
}
