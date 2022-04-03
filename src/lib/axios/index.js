import axios from 'axios'
import { HTTP } from '@/config/common'
import { Interceptors } from '@/utils/interceptors'
import { fetchDone } from './fetch-done'
import { httpStatus } from './http-status'
import { setRequestConfig } from './set-request-config'

export const fetch = axios.create({
  baseURL: HTTP.baseURL
})

const interceptorsInstance = new Interceptors()

interceptorsInstance.use(fetch, [httpStatus, fetchDone, setRequestConfig], interceptorsInstance)

export const request = {
  post (url, data, config) {
    return fetch.post(url, data, config)
  },
  get (url, config) {
    return fetch.get(url, config)
  },
  delete (url, config) {
    return fetch.delete(url, config)
  },
  put (url, data, config) {
    return fetch.put(url, data, config)
  }
}
