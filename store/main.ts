export const state = () => ({
    fromPath: ''
})

export const mutations = {
    fromPath(state, val) {
        state.fromPath = val
    }
}
