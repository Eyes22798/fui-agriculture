const isFunction = (value) => typeof value === 'function'

export class Interceptors {
  requestList = []
  responseList = []

  async execFulfillFunc (interceptorMap, params) {
    let result = params
    for (const { onFulfilled } of interceptorMap) {
      if (!isFunction(onFulfilled(result))) continue
      result = await onFulfilled(result)
      if (!result) return params
    }

    return result
  }

  async execRejectFunc (interceptorMap, error) {
    let result = error
    for (const { onRejected } of interceptorMap) {
      if (!isFunction(onRejected(result))) continue
      result = await onRejected(result)
      if (!result) return Promise.reject(error)
    }

    return Promise.reject(result)
  }

  runInterceptors (instance) {
    instance.interceptors.request.use((config) => {
      return this.execFulfillFunc(this.requestList, config)
    }, (error) => {
      return this.execRejectFunc(this.requestList, error)
    })

    instance.interceptors.response.use((response) => {
      return this.execFulfillFunc(this.responseList, response)
    }, (error) => {
      return this.execRejectFunc(this.responseList, error)
    })
  }

  use (instance, registerFuncs = [], classinstance) {
    const interceptors = classinstance
    registerFuncs.forEach((func) => {
      if (isFunction(func)) func({ axios: instance, interceptors })
    })

    this.runInterceptors(instance)
    return instance
  }

  request (onFulfilled, onRejected) {
    this.requestList.push({
      onFulfilled, onRejected
    })
  }

  response (onFulfilled, onRejected) {
    this.responseList.push({
      onFulfilled, onRejected
    })
  }
}
