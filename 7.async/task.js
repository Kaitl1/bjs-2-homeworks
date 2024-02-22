class AlarmClock {
    constructor() {
        this.alarmCollection = []
        this.intervalId = null
    }

    addClock(time, callback) {
        if (!time||!callback) {
            throw new Error('Отсутствуют обязательные аргументы')
        }
        this.alarmCollection.some(ring => {
            if (ring.time === time) {
                console.warn('Уже присутствует звонок на это же время')
            }
        }
    )
        for (let i = 0; i < this.alarmCollection.length; i++) {
            if(this.alarmCollection[i].time === time ){
                console.warn('Уже присутствует звонок на это же время')
            }
        }
    this.alarmCollection.push({callback:callback, time:time, canCall:true})
    }

    removeClock(time) {
        this.alarmCollection=this.alarmCollection.filter((searchTime)=>searchTime['time']!==time)
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
            this.intervalId = setInterval(()=>{let currentTime = this.getCurrentFormattedTime();
                this.alarmCollection.forEach((ring) => {
                    if(ring['time']===currentTime && ring['canCall']===true){
                        ring['canCall']=false
                        ring['callback']()
                    }
                })}, 1000)
        }

    stop() {
        clearInterval(this.intervalId)
        this.intervalId = null
    }

    resetAllCalls() {
        this.alarmCollection.forEach((n)=> {
            n['canCall']=true
        })
    }

    clearAlarms() {
        this.stop()
        this.alarmCollection = []
    }
}

