class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (typeof printTimeCallback === 'function') {
          printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime/100/60);
    return minutes;
  }

  getSeconds() {
    let remainingSeconds = Math.floor(this.currentTime/100%60);
    return remainingSeconds;
  }

  getCentiseconds() {
    let remainingCentiSeconds = this.currentTime%100
    return remainingCentiSeconds;
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
    const stringSeconds = this.computeTwoDigitNumber(this.getSeconds());
    const stringCentiSeconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return stringMinutes + ":" + stringSeconds + "." + stringCentiSeconds;
  }
}
