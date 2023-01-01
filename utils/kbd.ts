export type KbdHandler = (key: string) => boolean

export default class Kbd {
    protected kbdEvent?: (e: KeyboardEvent) => void
    protected handler: KbdHandler

    constructor(handler: KbdHandler) {
        this.handler = handler
    }

    init() {
        this.kbdEvent = (e: KeyboardEvent) => {
            if(this.handler && this.handler(e.code))
            {
                e.preventDefault();
                e.stopPropagation()
            }
        }
        document.addEventListener('keydown', this.kbdEvent)
    }

    deinit() {
        if(this.kbdEvent)
            document.removeEventListener('keydown', this.kbdEvent)
    }
}
