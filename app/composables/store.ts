export const useMenuFontId = () => bindToStorage(
    'menuFontId',
    () => FontId.ZX,
    fontId => getFont(fontId).id,
    null
)

export const useArticleFontId = () => bindToStorage(
    'articleFontId',
    () => FontId.MONO,
    fontId => getFont(fontId).id,
    null
)

export const useFromPath = () => useState('fromPath', () => '')
