<template>
  <div class="circle-chart">
    <div class="circle-chart-container">
      <dv-charts class="right" :option="option2" />
    </div>
  </div>
</template>

<script>
import { getPersentInfo } from '@/api'
import dayjs from 'dayjs'
export default {
  name: 'CircleChart',
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
      option2: {
        series: [
          {
            type: 'pie',
            data: [
              { name: '氮(N2)', value: 78 },
              { name: '氧(O2)', value: 21 },
              { name: '稀有气体', value: 1 }
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
      persentParams: {
        itemNo: 1,
        time: ''
      }
    }
  },
  async mounted  () {
    const currentTime = dayjs()
    this.persentParams.time = currentTime.format('YYYY-MM-DD HH:mm:ss')
    this.persentParams.itemNo = this.itemNo

    // await this.getData()
    this.resizeWindow()
  },
  methods: {
    async getData () {
      const data2 = await getPersentInfo(this.persentParams)

      this.chartBottomTitle = data2.data.title
      this.option2.series[0].data = data2.data.content.map((item) => {
        return {
          name: item.desc,
          value: item.percent
        }
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
.header {
  text-align: center;
  height: 40px;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 0.8vw;
  margin-top: .2vw;
  color: #0efcff;
}

.circle-chart {
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  color: #0efcff;
  .circle-chart-container {
    flex: 1;
    display: flex;
  }
  .right {
    flex: 1;
    box-sizing: border-box;
  }
}
</style>
