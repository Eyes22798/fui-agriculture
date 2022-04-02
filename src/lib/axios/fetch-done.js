export const fetchDone = ({ interceptors }) => {
  interceptors.response((response) => {
    console.log(response)
    response.config.loading.close()

    return response
  }, (error) => {
    error.config.loading.close()

    return error
  })
}
