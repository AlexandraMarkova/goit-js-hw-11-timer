const refs = {
    days: document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    mins: document.querySelector('span[data-value="mins"]'),
    secs: document.querySelector('span[data-value="secs"]'),
}

class CountdownTimer {
    constructor (selector, targetDate) {
        this.selector = selector;
        this.targetDate = targetDate;
    }

    start() { 
        setInterval(() => {
            const currentTime = Date.now();
            // console.log('targetTime:', this.targetDate)
            // console.log('currentTime:', currentTime)
            
            const time = this.targetDate - currentTime;
            // console.log(time);

            this.updateClockFace(time);
   }, 1000);
    } 

    updateClockFace(time) { 
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        // console.log(`${days}:${hours}:${mins}:${secs}`);
        refs.days.textContent = `${days}`;
        refs.hours.textContent = `${hours}`;
        refs.mins.textContent = `${mins}`;
        refs.secs.textContent = `${secs}`;
    }

    pad(value) { 
        return String(value).padStart(2, '0');
    }
};

const timer = new CountdownTimer('#timer-1', new Date('Jun 20, 2021'));



timer.start();