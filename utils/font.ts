import store from '~/utils/mainLocalStore'

interface Font {
    id: string
    title: string
}

const fonts:Font[] = [{
    id: 'zx',
    title: 'Speccy'
}, {
    id: 'mono',
    title: 'Monospace'
}, {
    id: 'sans',
    title: 'Sans-Serif'
}, {
    id: 'serif',
    title: 'Serif'
}]

function getFont(fontId: string): Font
{
    const font = fonts.find(f => f.id == fontId)
    return font ? font : fonts[0]
}

function getNextFontId(fontId: string): string
{
    let i = fonts.findIndex(f => f.id == fontId)
    i++
    if(i >= fonts.length)
        i = 0
    return fonts[i].id
}

export function getMenuFont(): Font
{
    return getFont(store.menuFont)
}

export function setNextMenuFont()
{
    store.menuFont = getNextFontId(store.menuFont)
}

export function getArticleFont(): Font
{
    return getFont(store.articleFont)
}

export function setNextArticleFont()
{
    store.articleFont = getNextFontId(store.articleFont)
}
