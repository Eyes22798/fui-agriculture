// 模块化组织axios拦截器
const requestList = []

const responseList = []

const isFunction = (value) => typeof value === 'function'

async function execFulfillFunc (interceptorMap, params) {
  let result = params
  for (const { onFulfilled } of interceptorMap) {
    if (!isFunction(onFulfilled)) continue
    result = await onFulfilled(result)
    if (!result) return params
  }

  return Promise.resolve(result)
}

async function execRejectFunc (interceptorMap, error) {
  let result = error
  for (const { onRejected } of interceptorMap) {
    if (!isFunction(onRejected(result))) continue
    result = await onRejected(result)
    if (!result) return Promise.reject(error)
  }

  return Promise.reject(result)
}

function runInterceptors (instance) {
  instance.interceptors.request.use((config) => {
    return execFulfillFunc(requestList, config)
  }, (error) => {
    return execRejectFunc(responseList, error)
  })

  instance.interceptors.response.use((response) => {
    return execFulfillFunc(requestList, response)
  }, (error) => {
    return execRejectFunc(responseList, error)
  })
}

export const interceptors = {
  use (instance, registerFuncs = []) {
    registerFuncs.forEach((func) => {
      if (isFunction(func)) func({ axios: instance, interceptors })
    })

    runInterceptors(instance)
    return instance
  },
  request (onFulfilled, onRejected) {
    requestList.push({
      onFulfilled, onRejected
    })
  },
  response (onFulfilled, onRejected) {
    responseList.push({
      onFulfilled, onRejected
    })
  }
}
