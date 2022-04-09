<template>
  <dv-border-box-13 :color="['#0EFCFF']" :reverse="true" style="padding: 10px;">
    <div class="left-chart-1">
      <div class="lc1-header">{{ chartTopTitle || '风力风速统计' }}</div>
      <dv-decoration-3 style="width:200px;height:20px;" />

      <!-- <dv-capsule-chart class="lc1-chart" :config="config" /> -->
      <dv-charts :option="option" />
    </div>

    <dv-decoration-10 style="width:100%;height:5px;" />

    <div class="left-chart-2">
      <div class="lc1-header">{{ chartBottomTitle || '风力风速占比' }}</div>
      <dv-decoration-3 style="width:200px;height:20px;" />
      <div class="rc1-chart-container">
        <dv-charts class="right" :option="option2" />
      </div>
    </div>
  </dv-border-box-13>
</template>

<script>
import { getDevlopInfo } from '@/api'
import dayjs from 'dayjs'
import { Polling } from '@/utils/polling'
export default {
  name: 'LeftChart1',
  data () {
    return {
      // config: {
      //   data: [
      //     {
      //       name: '收费系统',
      //       value: 167
      //     },
      //     {
      //       name: '通信系统',
      //       value: 67
      //     },
      //     {
      //       name: '监控系统',
      //       value: 123
      //     },
      //     {
      //       name: '供配电系统',
      //       value: 55
      //     },
      //     {
      //       name: '其他',
      //       value: 98
      //     }
      //   ],
      //   colors: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
      //   unit: '件'
      // },
      option: {
        legend: {
          data: ['风力'],
          textStyle: {
            fill: '#fff'
          }
        },
        xAxis: {
          data: [
            '10/01', '10/02', '10/03', '10/04', '10/05', '10/06',
            '10/07', '10/07', '10/08', '10/09', '10/10', '10/11',
            '10/12', '10/13', '10/14', '10/15'
          ],
          name: '时间',
          nameTextStyle: {
            fill: '#b1afc6',
            fontSize: 14
          },
          boundaryGap: false,
          axisLine: {
            style: {
              stroke: '#999'
            }
          },
          axisLabel: {
            style: {
              fill: '#999'
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          data: 'value',
          name: 'm/s',
          nameTextStyle: {
            fill: '#b1afc6',
            fontSize: 14
          },
          splitLine: {
            show: false
          },
          axisLine: {
            style: {
              stroke: '#999'
            }
          },
          axisLabel: {
            style: {
              fill: '#999'
            },
            formatter ({ value }) {
              return value.toFixed(2)
            }
          },
          axisTick: {
            show: false
          },
          min: 0
        },
        series: [
          {
            data: [
              99.56, 99.66, 99.84, 99.22, 99.11, 99.45,
              99.44, 99.81, 99.84, 99.32, 99.14, 99.45,
              99.15, 99.45, 99.64, 99.89
            ],
            type: 'line',
            name: '风力',
            smooth: true,
            lineArea: {
              show: true,
              gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)']
            },
            linePoint: {
              radius: 4,
              style: {
                fill: '#00db95'
              }
            }
          }
        ]
      },
      option2: {
        series: [
          {
            type: 'pie',
            data: [
              { name: '无风', value: 93 },
              { name: '软风', value: 66 },
              { name: '轻风', value: 52 },
              { name: '微风', value: 34 },
              { name: '强风', value: 22 }
            ],
            radius: ['45%', '65%'],
            insideLabel: {
              show: false
            },
            outsideLabel: {
              labelLineEndLength: 10,
              formatter: '{percent}%\n{name}',
              style: {
                fontSize: 14,
                fill: '#0efcff'
              }
            }
          }
        ],
        color: ['#00baff', '#3de7c9', '#fff', '#003D4A', '#427C5C']
      },
      developParams: {
        itemNo: 3,
        startTime: '',
        endTime: '',
        instance: 30
      },
      persentParams: {
        itemNo: 1,
        time: ''
      },
      chartTopTitle: '',
      chartBottomTitle: '',
      resizeEvent: null,
      polling: null
    }
  },
  async mounted  () {
    this.polling = new Polling(this.getData, 30)
    this.polling.start()
  },
  methods: {
    async getData () {
      const currentTime = dayjs()
      this.persentParams.time = currentTime.format('YYYY-MM-DD HH:mm:ss')

      this.developParams.startTime = currentTime.subtract(7, 'minute').format('YYYY-MM-DD HH:mm:ss')
      this.developParams.endTime = currentTime.format('YYYY-MM-DD HH:mm:ss')
      const { data } = await getDevlopInfo(this.developParams)
      // const data2 = await getPersentInfo(this.persentParams)

      this.chartTopTitle = data.title
      this.option.xAxis.data = data.map((item) => {
        return String(dayjs(item.update_time).format('mm:ss'))
      })
      this.option.series[0].data = data.map((item) => {
        return item.value === '0.0' ? 0 : Number(item.value)
      })

      // this.chartBottomTitle = data2.data.title
      // this.option2.series[0].data = data2.data.content.map((item) => {
      //   return {
      //     name: item.desc,
      //     value: item.percent
      //   }
      // })
      this.resizeWindow()
    },
    resizeWindow () {
      this.resizeEvent = new Event('resize')
      window.dispatchEvent(this.resizeEvent)
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resizeEvent)
    this.polling.stop()
  }
}
</script>

<style lang="less">
.lc1-header {
  text-align: center;
  height: 40px;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 0.8vw;
  margin-top: .2vw;
  color: #0efcff;
}
.left-chart-1 {
  width: 100%;
  height: 50%;
  display: flex;
  flex-grow: 0;
  flex-direction: column;
  margin-top: .4vw;
  .lc1-details {
    height: 50px;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-indent: 20px;
    span {
      color: #096dd9;
      font-weight: bold;
      font-size: 35px;
      margin-left: 20px;
    }
  }
  .lc1-chart {
    flex: 1;
  }
}

.left-chart-2 {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  color: #0efcff;
  .rc1-chart-container {
    flex: 1;
    display: flex;
  }
  .right {
    flex: 1;
    box-sizing: border-box;
  }
}
</style>
