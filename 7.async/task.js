class Ring{
    constructor(callback, time, canCall) {
        this.callback = callback
        this.time = time
        this.canCall = canCall
    }

    getTime()
    {
        return this.time;
    }

    getCanCall()
    {
        return this.canCall;
    }

    setCanCall(canCall)
    {
        this.canCall = canCall;
    }
}

class AlarmClock {
    constructor() {
        this.alarmCollection = []
        this.intervalId = null
    }

    addClock(time, callback) {
        if (!time||!callback) {
            throw new Error('Отсутствуют обязательные аргументы')
        }
        this.alarmCollection.forEach((ring) => {
            if (ring.time === time) {
                console.log('Уже присутствует звонок на это же время')
            }
        }
    )
        for (let i = 0; i < this.alarmCollection.length; i++) {
            if(this.alarmCollection[i].time === time ){
                console.log('Уже присутствует звонок на это же время')
            }
        }
    this.alarmCollection.push(new Ring(callback, time, true))
    }

    removeClock(time) {
        let existingRings = this.alarmCollection.filter(function (ring) {
            return (ring.getTime() === time);
        })
    }

    getCurrentFormattedTime() {
        let hh = new Date().getHours()
        let mm = new Date().getMinutes()
        if(hh<=9){
            hh='0'+hh
        }
        if (mm<=9){
            mm='0'+mm
        }
        return hh+':'+mm;
    }

    start() {
        if (this.intervalId) {
            return;
        }
        this.intervalId = setInterval(this.runInterval(), 1000)
    }

    runInterval() {
        let currentTime = this.getCurrentFormattedTime();

        this.alarmCollection.forEach((ring) => {
            if(ring.getTime()===currentTime && ring.getCanCall()===true){
                ring.getCanCall(false)
                ring.callback()
            }
        })
    }

    stop() {
        clearInterval(this.intervalId)
        this.intervalId = null
    }

    resetAllCalls() {
        this.alarmCollection.forEach((n)=> {
            n.setCanCall(true)
        })
    }

    clearAlarms() {
        this.stop()
        this.alarmCollection = []
    }
}