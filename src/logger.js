class Logger {
    static LEVELS = {
        ERROR: 4,
        WARN: 3,
        INFO: 2,
        DEBUG: 1
    }

    constructor ({level}) {
        const numbered = Number.parseInt(level)
        this.level = Number.isNaN(numbered) ? Logger.LEVELS.ERROR : numbered
    }

    get now() {
        const date = new Date()
        return date.toLocaleTimeString()
    }

    error(...message) {
        process.stdout.write(`\n\x1b[31m[ ${this.now} ]: ERROR - ${message.map(JSON.stringify).join('\n')}\x1b[0m`)
    }

    warn(...message) {
        if(this.level <= Logger.LEVELS.WARN)
            process.stdout.write(`\n\x1b[33m[ ${this.now} ]: WARN  - ${message.map(JSON.stringify).join('\n')}\x1b[0m`)
    }

    info(...message) {
        if(this.level <= Logger.LEVELS.INFO)
            process.stdout.write(`\n\x1b[34m[ ${this.now} ]: INFO  - ${message.map(JSON.stringify).join('\n')}\x1b[0m`)
    }

    debug(...message) {
        if(this.level === Logger.LEVELS.DEBUG)
            process.stdout.write(`\n[ ${this.now} ]: DEBUG - ${message.map(JSON.stringify).join('\n')}\x1b[0m`)
    }
}

export default new Logger({level: 1})