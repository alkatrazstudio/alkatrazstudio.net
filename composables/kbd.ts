import { Ref } from 'vue'
import Kbd, { KbdHandler } from '~/utils/kbd'

export function usePageKbd(parentPath: Ref<string|null>, handler?: KbdHandler) {
    const kbd = new Kbd(key => {
        if(handler && handler(key))
            return true
        if(key == 'Backspace' && parentPath.value)
        {
            useRouter().push(parentPath.value)
            return true
        }
        return false
    })

    onMounted(() => kbd.init())
    onUnmounted(() => kbd.deinit())
}
