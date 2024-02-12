class AlarmClock {
    constructor() {
        this.alarmCollection = []
        this.intervalId = null
    }

    addClock(time, func) {
        if (!time||!func) {
            throw new Error('Отсутствуют обязательные аргументы')
        }
        console.log(this.alarmCollection)
        if (this.alarmCollection.find(time)) {
            console.warn('Уже присутствует звонок на это же время')
        }
        this.alarmCollection.push({'callback': func, 'time': time, 'canCall': true})
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.time.filter(!time)
    }

    getCurrentFormattedTime() {
        return new Date().getHours()+':'+ new Date().getMinutes();
    }
    start() {
        if (this.intervalId) {
            return this.intervalId;
        } else {
            this.intervalId = setInterval(this.alarmCollection.forEach(time === new Date(),this.alarmCollection.canCall==true), 1000)
            if (this.alarmCollection.canCall) {
                this.alarmCollection.canCall = false;
                this.alarmCollection.callback();
            }
        }

    }

    stop() {
        clearInterval(this.intervalId)
        this.intervalId = null
    }

    resetAllCalls() {
        this.alarmCollection.forEach(this.alarmCollection.canCall = true)
    }

    clearAlarms() {
        stop()
        this.alarmCollection = []
    }
}