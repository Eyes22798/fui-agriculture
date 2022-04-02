import { getToken } from '@/utils/auth'
import qs from 'qs'

const dataToFormData = (data) => {
  const formData = new FormData()

  for (const key in data) {
    formData.append(key, data[key])
  }

  return formData
}

export const setRequestConfig = ({ interceptors }) => {
  interceptors.request((config) => {
    if (typeof config.useToken !== 'boolean') config.useToken = true
    // 设置Authorization
    config.headers.token = `Bearer ${config.useToken ? getToken() : ''}`

    // 填充路径数据

    // formData类型数据特殊处理
    if (config.useFormData) {
      config.data = dataToFormData(config.data)
    }

    // 序列化 post put patch // TODO
    if (['post', 'put', 'patch'].includes(config.method)) {
      config.data = qs.stringify(config.data)
    }

    return config
  })

  interceptors.response((response) => {
    // 下载乱码问题
    if (response.headers['content-disposition']) {
      const name = response.headers['content-disposition'].replace('attachment:filename=', '')
      sessionStorage.setItem('content-disposition', decodeURIComponent(name))
    }

    return response
  })
}
