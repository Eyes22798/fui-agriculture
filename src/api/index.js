import { request } from '@/lib/axios/index'

export const testApi = () => request.get('/settings/test')

// 查询当前气息数据（图标展示
export const getBaseInfo = () => request.get('/julia/info')

// 查询某时间范围内数据(折线统计)
export const getDevlopInfo = (data) => request.post('/julia/devlop-info', data)

// 查询某时刻某指标各成分占比(饼图统计)
export const getPersentInfo = (data) => request.post('/julia/persent-info', data)
