import { Ref } from 'vue'

export function bindToStorage<T>(
    name: string,
    getInitial: () => T,
    getComputed: ((val: T) => T) | null = null,
    set: ((val: T) => T) | null = null
): Ref<T>
{
    const ref = useState(name, getInitial)

    const comp = computed({
        get() {
            let storedVal
            try {
                const storedJson = localStorage.getItem(name)
                storedVal = storedJson ? JSON.parse(storedJson) as T : null
            } catch(_) {
                storedVal = null
            }
            const refVal = ref.value // trigger re-compute
            const rawVal = storedVal ?? refVal
            const computedVal = getComputed ? getComputed(rawVal) : rawVal
            return computedVal
        },

        set(newValue)  {
            const normalizedVal = set ? set(newValue) : newValue
            const json = JSON.stringify(normalizedVal)
            ref.value = normalizedVal
            try {
                localStorage.setItem(name, json)
            } catch(_) {
            }
            return normalizedVal
        }
    })

    if(process.client)
        setTimeout(() => comp.value = comp.value, 0)

    return comp
}
