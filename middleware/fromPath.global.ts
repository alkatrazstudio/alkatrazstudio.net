export default defineNuxtRouteMiddleware((_, from) => {
    useFromPath().value = from.fullPath
})
