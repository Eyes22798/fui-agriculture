export const fetchDone = ({ interceptors }) => {
  interceptors.response((response) => {
    response.config.loading && response.config.loading.close()

    return response.data
  }, (error) => {
    error.config.loading && error.config.loading.close()

    return error
  })
}
