<template>
  <div class="left-chart">
    <div class="chart-header">{{ title }}</div>
    <dv-decoration-6 style="width:300px;height:10px;" />

    <dv-charts :option="option" />
  </div>
</template>

<script>
import { getDevlopInfo } from '@/api'
import dayjs from 'dayjs'
export default {
  name: 'LeftChart1',
  props: {
    title: {
      type: String,
      default: ''
    },
    itemNo: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      option: {
        legend: {
          data: ['空气湿度'],
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
      developParams: {
        itemNo: 10,
        startTime: '',
        endTime: '',
        instance: 30
      },
      chartTopTitle: '',
      chartBottomTitle: ''
    }
  },
  async mounted  () {
    const currentTime = dayjs()

    this.developParams.itemNo = this.itemNo
    this.developParams.startTime = currentTime.subtract(7, 'minute').format('YYYY-MM-DD HH:mm:ss')
    this.developParams.endTime = currentTime.format('YYYY-MM-DD HH:mm:ss')

    await this.getData()
    this.resizeWindow()
  },
  methods: {
    async getData () {
      const { data } = await getDevlopInfo(this.developParams)

      this.chartTopTitle = data.title
      this.option.xAxis.data = data.map((item) => {
        return String(dayjs(item.update_time).format('mm:ss'))
      })
      this.option.series[0].data = data.map((item) => {
        return item.value === '0.0' ? 0 : Number(item.value)
      })
    },
    resizeWindow () {
      var myEvent = new Event('resize')
      window.dispatchEvent(myEvent)
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize')
  }
}
</script>

<style lang="less">
.chart-header {
  text-align: center;
  height: 20px;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 0.8vw;
  color: #0efcff;
}
.left-chart {
  width: 100%;
  height: 48%;
  display: flex;
  flex-grow: 0;
  flex-direction: column;
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
</style>
