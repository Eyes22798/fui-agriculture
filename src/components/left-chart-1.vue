<template>
  <dv-border-box-13 :color="['#0EFCFF']" :reverse="true" style="padding: 10px;">
    <div class="left-chart-1">
      <div class="lc1-header">风速时间统计</div>
      <dv-decoration-3 style="width:200px;height:20px;" />

      <!-- <dv-capsule-chart class="lc1-chart" :config="config" /> -->
      <dv-charts :option="option" />
    </div>

    <div class="left-chart-2">
      <div class="lc1-header">风速时间统计</div>
      <dv-decoration-3 style="width:200px;height:20px;" />
      <div class="rc1-chart-container">
        <dv-charts class="right" :option="option2" />
      </div>
    </div>
  </dv-border-box-13>
</template>

<script>
import { testApi } from '@/api'
export default {
  name: 'LeftChart1',
  data () {
    return {
      config: {
        data: [
          {
            name: '收费系统',
            value: 167
          },
          {
            name: '通信系统',
            value: 67
          },
          {
            name: '监控系统',
            value: 123
          },
          {
            name: '供配电系统',
            value: 55
          },
          {
            name: '其他',
            value: 98
          }
        ],
        colors: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        unit: '件'
      },
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
          min: 95,
          max: 100,
          interval: 0.5
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
              { name: '收费系统', value: 93 },
              { name: '通信系统', value: 66 },
              { name: '监控系统', value: 52 },
              { name: '供配电系统', value: 34 },
              { name: '其他', value: 22 }
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
                fill: '#fff'
              }
            }
          }
        ],
        color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b']
      }
    }
  },
  methods: {
    async getData () {
      const data = await testApi()

      console.log(data)
    }
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
