 
class CountdownTimer {
    constructor (selector, targetDate) {
        this.targetDate = targetDate;
        this.refs = {
          days: document.querySelector(`${selector} [data-value="days"]`),
          hours: document.querySelector(`${selector} [data-value="hours"]`),
          mins: document.querySelector(`${selector} [data-value="mins"]`),
          secs: document.querySelector(`${selector} [data-value="secs"]`),     
      };
        this.start();    
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
   
          this.refs.days.textContent = `${days}`;
          this.refs.hours.textContent = `${hours}`;
          this.refs.mins.textContent = `${mins}`;
          this.refs.secs.textContent = `${secs}`;     
    }

    pad(value) { 
        return String(value).padStart(2, '0');
    } 
    
};

const timer = new CountdownTimer('#timer-1', new Date('Jun 20, 2021'));
// const timer2 = new CountdownTimer('#timer-2', new Date('Jun 20, 2022'));
