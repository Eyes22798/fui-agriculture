export class Polling {
  time = 1000
  fn = null
  timerId = null // 模拟计时器id，唯一性
  constructor (fn, time) {
    this.fn = fn
    this.time = time
    fn()
  }

  start () {
    if (this.timerId !== null) {
      stop()
    }
    const fn = this.fn

    this.timerId = setInterval(async () => {
      await fn()
    }, this.time * 1000 || 1000)
  }

  stop () {
    clearInterval(this.timerId)
    this.timerId = null
  }
}
