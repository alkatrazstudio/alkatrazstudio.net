import type { Component } from 'vue';

export interface MenuItem {
    to?: string;
    click?: () => void
    title: string|Component;
    desc: string;
    children?: MenuItem[],
    parent?: MenuItem|null
}

export function lastUriSegment(menuItem: MenuItem): string {
    const segments = menuItem.to!.split('/')
    return segments[segments.length - 1]
}
