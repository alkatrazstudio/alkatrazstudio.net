import type { Ref } from 'vue'
import type { MenuItem } from '~/utils/menu'

function findItem(item: MenuItem, f: (i: MenuItem) => boolean): MenuItem|null {
    if(f(item))
        return item
    if(item.children)
    {
        for(let a=0; a<item.children.length; a++)
        {
            const found = findItem(item.children[a]!, f)
            if(found)
                return found
        }
    }
    return null
}

export const useMenuItem = () => computed(() => {
    let path = useRoute().path
    if(path.length > 1 && path[path.length - 1] == '/')
        path = path.substring(0, path.length-1)
    const item = findItem(menuRoot, i => i.to == path)
    if(!item)
        throw new Error(`Cannot find menu for path: ${path}`)
    return item
})

export const useParentPath = (menuItem: Ref<MenuItem>) => computed(() => {
    const item = menuItem.value
    if(item.parent && item.parent.to)
        return item.parent.to
    return null
})
