import { request } from '@/lib/axios/index'

export const testApi = () => request.get('/fui/settings/test')
