class AlarmClock {
    constructor() {
        this.alarmCollection = []
        this.intervalId = null
    }

    addClock(time, callback) {
        if (!time||!callback) {
            throw new Error('Отсутствуют обязательные аргументы')
        }
        // this.alarmCollection.some(ring => {
        //     if (ring.time === time) {
        //         console.warn('Уже присутствует звонок на это же время')
        //     }

        if(this.alarmCollection.some((ring)=>ring.time===time)){
            console.warn('Уже присутствует звонок на это же время')
        }

            // filter((searchTime)=>searchTime.time!==time)
        // }
    // )
        for (let i = 0; i < this.alarmCollection.length; i++) {
            if(this.alarmCollection[i].time === time ){
                console.warn('Уже присутствует звонок на это же время')
            }
        }
    this.alarmCollection.push({callback:callback, time:time, canCall:true})
    }

    removeClock(time) {
        this.alarmCollection=this.alarmCollection.filter((searchTime)=>searchTime.time!==time)
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    start() {
        if (this.intervalId) {
            return;
        }
            this.intervalId = setInterval(()=>{let currentTime = this.getCurrentFormattedTime();
                this.alarmCollection.forEach((ring) => {
                    if(ring.time===currentTime && ring.canCall===true){
                        ring.canCall=false
                        ring.callback()
                    }
                })}, 1000)
        }

    stop() {
        clearInterval(this.intervalId)
        this.intervalId = null
    }

    resetAllCalls() {
        this.alarmCollection.forEach((ring)=> {
            ring.canCall=true
        })
    }

    clearAlarms() {
        this.stop()
        this.alarmCollection = []
    }
}

