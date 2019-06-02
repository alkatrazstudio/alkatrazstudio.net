export default ({app, store}) => {
    app.router.beforeEach((to, from, next) => {
        store.commit('main/fromPath', from.fullPath)
        next()
    })
}
