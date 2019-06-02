import {Component, Vue} from 'nuxt-property-decorator'
import {menuItems} from '~/pages/index.vue'

export interface MenuItem {
    to?: string;
    click?: ()=>void
    title: string;
    desc: string;
    children?: MenuItem[],
    parent?: MenuItem|null
}

function findItem(item: MenuItem, f:(i:MenuItem)=>boolean): MenuItem|null {
    if(f(item))
        return item
    if(item.children)
    {
        for(let a=0; a<item.children.length; a++)
        {
            const found = findItem(item.children[a], f)
            if(found)
                return found
        }
    }
    return null
}

function setParent(item: MenuItem, parent: MenuItem|null = null)
{
    item.parent = parent
    if(item.children)
        item.children.forEach(i => setParent(i, item))
}

export function getMenuRoot(): MenuItem
{
    const root = {
        to: '/',
        title: 'Alkatraz Studio',
        desc: '',
        children: menuItems()
    }
    setParent(root)
    return root
}

@Component
export default class Menu extends Vue {
    get menuRoot(): MenuItem {
        return getMenuRoot()
    }

    get menuItem(): MenuItem {
        let path = this.$route.path
        if(path.length > 1 && path[path.length - 1] == '/')
            path = path.substring(0, path.length-1)
        const item = findItem(this.menuRoot, i => i.to == path)
        if(!item)
            throw new Error(`Cannot find menu for path: ${path}`)
        return item
    }

    get lastUriSegment(): string {
        const segments = this.menuItem.to!.split('/')
        return segments[segments.length - 1]
    }

    get parentPath(): string|null {
        if(this.menuItem.parent && this.menuItem.parent.to)
            return this.menuItem.parent.to
        return null
    }
}
