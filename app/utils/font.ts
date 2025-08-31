export enum FontId {
    ZX = 'zx',
    MONO = 'mono',
    SANS = 'sans',
    SERIF = 'serif'
}

export interface Font {
    id: FontId
    title: string
}

export const FONTS: Font[] = [{
    id: FontId.ZX,
    title: 'Speccy'
}, {
    id: FontId.MONO,
    title: 'Monospace'
}, {
    id: FontId.SANS,
    title: 'Sans-Serif'
}, {
    id: FontId.SERIF,
    title: 'Serif'
}]

export const defaultFont = FONTS[0]!

export function getFont(fontId: FontId): Font
{
    const font = FONTS.find(f => f.id === fontId)
    return font ? font : defaultFont
}

export function nextMenuFontId(curId: FontId): FontId
{
    const curIndex = FONTS.findIndex(f => f.id === curId)
    if(curIndex === -1)
        return defaultFont.id
    if(curIndex >= (FONTS.length - 1))
        return FONTS[0]!.id
    return FONTS[curIndex + 1]!.id;
}
