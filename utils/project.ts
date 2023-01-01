export interface File {
    platform: string
    link: string
    size: number
}

export interface Screenshot {
    name: string
    label: string
}

export interface ProjectMeta {
    name?: string
    summary?: string
    version: string
    updatedOn: string
    homepage: string
    files?: File[]
}
