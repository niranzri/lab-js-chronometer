class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (typeof printTimeCallback === 'function') {
          printTimeCallback(this.currentTime);
      }
    }, 1000);
  }
  

  getMinutes() {
    let minutes = Math.floor(this.currentTime/60);
    return minutes;
  }

  getSeconds() {
    let remainingSeconds = this.currentTime%60
    return remainingSeconds;
  }

  computeTwoDigitNumber(value) {
    let text = value.toString();
    if (text.length == 1) {
      const zero = "0";
      text = zero + text.slice();
    }
    return text
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const stringMinutes = this.computeTwoDigitNumber(this.getMinutes());
    const stringSeconds = this. computeTwoDigitNumber(this.getSeconds());
    return stringMinutes + ":" + stringSeconds;
  }
}
