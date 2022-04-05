<template>
  <div class="left-chart-2">
    <dv-charts class="right" :option="option" />
  </div>
</template>

<script>
import { testApi } from '@/api'
export default {
  name: 'LeftChart1',
  data () {
    return {
      option: {
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

<style lang="less" scoped>

.left-chart-2 {
  .right {
    flex: 1;
    padding-bottom: 20px;
    padding-right: 20px;
    box-sizing: border-box;
  }
}
</style>
