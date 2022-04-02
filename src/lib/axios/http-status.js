export const httpStatus = ({ interceptors }) => {
  interceptors.response((response) => {
    const config = response.config
    const data = response.data || {}
    const message = data.msg ?? ''
    const status = data.code
    // blob处理，返回blob
    if (config.responseType === 'blob') return response.data
    // const params = { data, message, status, response }
    if (![0, 200].includes(status)) {
      console.log(message) // message 弹窗

      return Promise.reject(response)
    }

    return response.data
  }, (error) => {
    const config = error.config
    const showErrorMessage = config.showErrorMessage // 添加错误防御
    const response = error.response
    if (response) {
      const data = response.data || {}
      const message = data.msg || response.statusText
      showErrorMessage && console.log(message) // message 弹窗
    } else {
      showErrorMessage && console.log(error.message) // message 弹窗
    }

    return error
  })
}
