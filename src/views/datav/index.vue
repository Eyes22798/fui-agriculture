<template>
  <div id="data-view">
    <dv-full-screen-container class="main" style="height: 100%">
      <div class="nav">XXXXX气象站数据指挥舱</div>

      <div class="content">
        <div class="centerBox">
          <div class="baseBox centerMainBox1" style="height: 70%">
            <div class="baseBoxLeft left">
              <LeftChart1 />
            </div>

            <div class="baseBoxRight right">
              <div class="maps">
                <img class="land_level" src="@/assets/img/landLevel.png" alt="">
                <img class="wifi_gif" src="@/assets/img/wifi.gif">
                <img class="sun_pic" src="@/assets/img/sun.png" alt="">
                <img class="wrj_pic" src="@/assets/img/wrj.png" alt="">
                <img class="wind_gif" src="@/assets/img/wind_shape.gif" alt="">
                <img class="plant_pic display_box" src="@/assets/img/plant.png" alt="">
                <div class="windows display_box">
                    <ul>
                        <li>土地信息</li>
                        <li>本模板收集于网络</li>
                        <li>无需任何付费操作</li>
                        <li>如需获取更多模板：</li>
                        <li>关注公众号【DreamCoders】</li>
                        <li>即可免费获取</li>
                    </ul>
                </div>
                <div class="window_two display_box">
                    <ul>
                        <li>刘新武</li>
                        <li>年龄：41岁</li>
                        <li>农事活动：6次</li>
                        <li>信用等级：良好</li>
                    </ul>
                </div>
                <div class="window_three display_box">
                    <ul>
                        <li>土壤数据</li>
                        <li>湿度:63%</li>
                        <li>酸碱度：PH4.8</li>
                        <li>肥沃度：56%</li>
                    </ul>
                </div>
                <div class="window_four display_box">
                    <ul>
                        <li>气象信息</li>
                        <li>温度:19℃</li>
                        <li>湿度：52%</li>
                        <li>风速：2m/s</li>
                        <li>降水：0mm</li>
                    </ul>
                </div>
                <div class="window_five display_box">
                    <ul>
                        <li>植被信息</li>
                        <li>品种名称:云台山大叶良种</li>
                        <li>植株数量：76000株</li>
                        <li>所属生长周期：幼年期</li>
                        <li>长势情况：良好</li>
                    </ul>
                </div>
                <div class="window_six display_box">
                    <ul>
                        <li>设备信息</li>
                        <li>设备名称:无人机</li>
                        <li>所属人：安化云台八角有限公司</li>
                        <li>持续工作：3h</li>
                        <li>连接状态：正常</li>
                    </ul>
                </div>
                <a href="">
                    <div class="peasant"></div>
                </a>
                <div class="land_box1"></div>
                <div class="land_box2"></div>
                <div class="land_box3"></div>
                <div class="land_box4"></div>
                <div class="plant"></div>
                <div class="soil_data"></div>
                <div class="weather_info"></div>
                <!-- <div class="plant_info"></div> -->
              </div>
            </div>
          </div>

          <div class="baseBox centerMainBox2" style="height:30%;">
            <img src="@/assets/img/down2.png" class="first_border" alt="">
            <div class="boxTitle2" style="width:26%;">统计数据</div>
            <div class="boxTitle2" style="width:26%;margin-left:22vw;margin-top: -1.4vw;">生长数据</div>
            <div class="boxTitle2" style="width:26%;margin-left:53vw;margin-top: -1.4vw;">气象数据</div>
            <div class="leftBottom">
                <div class="land_data">
                  <p>土壤温度{{ infoData.soiLTemp }}℃ 土壤湿度{{ infoData.soiLMoisture }}℃</p>
                </div>
            </div>
            <div class="right_box">
              <div class="weather_data">
                <div class="weather_text text_one">
                  <span>空气温度：{{ infoData.airTemp }}℃</span>
                  <span>空气湿度：{{ infoData.airMoisture }}%</span>
                  <span>风向：东南风</span>
                  <span>风速：{{ infoData.windSpeed }}m/s</span>
                </div>
                <div class="weather_text text_two">
                  <span>累计雨量：{{ infoData.cumulativeRainFall }}mm</span>
                  <span>日雨量：{{ infoData.currentRainFall }}mm</span>
                  <span>气压：{{ infoData.atmosphericPressure }}MPa</span>
                </div>
              </div>

              <span class="weather_data_right">
                <span class="info-item">
                  <img src="@/assets/img/zaosheng.svg" alt="">
                  <span>噪声：{{ infoData.noise }}db</span>
                </span>
                <span class="info-item">
                  <img src="@/assets/img/eryanghuatan.svg" alt="">
                  <span>二氧化碳：{{ infoData.cO2 }}ppm</span>
                </span>
                <span class="info-item">
                  <img src="@/assets/img/loudianwendu.svg" alt="">
                  <span>露点温度：{{ infoData.dewPointSoiLTemp }}℃</span>
                </span>
                <span class="info-item">
                  <img src="@/assets/img/guangzhaoqiangdu.svg" alt="">
                  <span>光照强度：{{ infoData.lightIntensity }}Lux</span>
                </span>
                <span class="info-item">
                  <img src="@/assets/img/kongqishidu.svg" alt="">
                  <span>空气湿度：{{ infoData.airMoisture}}%RH</span>
                </span>
                <span class="info-item">
                  <img src="@/assets/img/lishiyuliang.svg" alt="">
                  <span>PM2.5：{{ infoData.pm25 }}ug/m3</span>
                </span>
                <span class="info-item">
                  <img src="@/assets/img/turangEC.svg" alt="">
                  <span>土壤EC3：{{ infoData.soiLTempEc }}us/cm</span>
                </span>
                <span class="info-item">
                  <img src="@/assets/img/fengli.svg" alt="">
                  <span>风力：{{ infoData.wind }}级</span>
                </span>
              </span>
            </div>
          </div>
        </div>

        <div class="leftBox right" style="width: 22%">
          <div class="baseBox baseBox1" style="margin-bottom:15px;height:40%">
            <img src="@/assets/img/right.png" class="hardware" alt="">
            <div class="csbaseBox1">
                <div class="boxTitle">硬件设备展示</div>
                <ul class="boxLis">
                    <li class="left active">农业无人机</li>
                    <li class="left">田间控制器</li>
                    <li class="left">监控摄像头</li>
                    <li class="left">土壤检测仪</li>
                </ul>
                <div class="content1">
                    <ul>
                        <li style="display: block;" class="contList">
                            <!-- 四个角描边 stat -->
                            <div class="leftTopLine1"></div>
                            <div class="leftTopLine2"></div>
                            <div class="rightTopLine1"></div>
                            <div class="rightTopLine2"></div>
                            <div class="leftBottomLine1"></div>
                            <div class="leftBottomLine2"></div>
                            <div class="rightBottomLine1"></div>
                            <div class="rightBottomLine2"></div>

                            <div class="equipment_pic">
                                <img class="first" src="@/assets/img/uva.png" alt="">
                                <img class="second" src="@/assets/img/control.png" alt="">
                                <img class="third" src="@/assets/img/camera.png" alt="">
                                <img class="fourth" src="@/assets/img/detector.png" alt="">
                            </div>
                        </li>

                    </ul>

                </div>
                <div class="liSpan">介绍</div>
                <p class="liP">
                    </p>
            </div>
          </div>
          <div class="baseBox baseBox2" style="margin-bottom:15px;height:29.5%">
            <img src="@/assets/img/right2.png" alt="">
            <!-- 四个角描边 end -->
            <div class="boxTitle2">灌溉数据</div>
            <div class="irrigate_data">
                <div class="irrigate_top">
                    <div class="centerList">
                        <div class="centerListFont">累计灌溉水量（m2）</div>
                        <div class="centerListNum">
                            <span class="">23678</span>
                        </div>
                    </div>
                    <div class="centerList">
                        <div class="centerListFont">灌溉压力（MPa）</div>
                        <div class="centerListNum">
                            <span class="">0.29</span>
                        </div>
                    </div>
                </div>
                <div class="irrigate_bottom">
                    <div class="every_line">
                        <span>当前灌溉流量（m²/h）</span>
                        <i class="">0.78</i>
                    </div>
                    <div class="every_line">
                        <span>当前灌溉阀门数量</span>

                        <i class="counter-value">49</i>
                        <i class="counter-value">2</i>
                    </div>
                    <div class="every_line">
                        <span>茶园水池液位</span>
                        <i>2.30</i>
                    </div>
                </div>
            </div>
          </div>
          <div class="baseBox baseBox3" style="height:28%">
            <img src="@/assets/img/right3.png" alt="">
            <!-- 四个角描边 end -->
            <div class="boxTitle2">数据日志</div>
            <!-- <div class="data_day" id="demo" > -->
            <div class="data_day" id="demo" style="width:100%;overflow:hidden;height: 75%;">
                <table style="text-align: left;margin-left:10%;height:80%;">
                    <tbody id="demo1">
                        <!-- <tr class="head">
                            <td>编号</td>
                            <td>数据类型</td>
                            <td>数据值</td>
                            <td>时间</td>
                        </tr> -->
                        <tr>
                            <td>u78</td>
                            <td>传感器数据</td>
                            <td>163.28</td>
                            <td>2019年10月26日</td>
                        </tr>

                        <tr>
                            <td>006</td>
                            <td>无人机数据</td>
                            <td>130.67</td>
                            <td>2019年10月25日</td>
                        </tr>

                        <tr>
                            <td>s07</td>
                            <td>控制器数据</td>
                            <td>163.28</td>
                            <td>2019年10月25日</td>
                        </tr>
                        <tr>
                            <td>872</td>
                            <td>监视器数据</td>
                            <td>130.67</td>
                            <td>2019年10月24日</td>
                        </tr>
                        <tr>
                            <td>d59</td>
                            <td>土壤仪数据</td>
                            <td>163.28</td>
                            <td>2019年10月23日</td>
                        </tr>

                        <tr>
                            <td>299</td>
                            <td>灌溉阀数据</td>
                            <td>130.67</td>
                            <td>2019年10月23日</td>
                        </tr>
                        <tr>
                            <td>256</td>
                            <td>传感器数据</td>
                            <td>163.28</td>
                            <td>2019年10月22日</td>
                        </tr>
                        <tr>
                            <td>026</td>
                            <td>无人机数据</td>
                            <td>130.67</td>
                            <td>2019年10月20日</td>
                        </tr>
                        <tr>
                            <td>037</td>
                            <td>传感器数据</td>
                            <td>163.28</td>
                            <td>2019年10月22日</td>
                        </tr>
                    </tbody>
                    <tbody id="demo2" style="text-align: left;margin-left:10%"></tbody>
                </table>
            </div>
          </div>
        </div>
      </div>

    </dv-full-screen-container>
  </div>
</template>

<script>
import LeftChart1 from '@/components/left-chart-1.vue'
import { getBaseInfo } from '@/api'

export default {
  name: 'DataView',
  components: {
    LeftChart1
  },
  data () {
    return {
      option: null,
      infoData: null
    }
  },
  async mounted () {
    await this.getData()
  },
  methods: {
    async getData () {
      const { data } = await getBaseInfo()

      this.infoData = data
    }
  }
}
</script>

<style lang="less">
@import "../../assets/new_index.css";
@import "../../assets/reset.css";
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    background-image: url('../../assets/img/bg.png');
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;

    /* ---public---- */
    .centerBox {
        width: 75%;
        margin-right: 15px;
        background: transparent;
    }

    .boxFont {
        font-size: 1.2vw;
    }

    .centerMainBox1 {
        width: 100%;
        height: 60.5%;
    }

    .centerMainBox2 {
        width: 100%;
        height: 38%;
        position: relative;
        margin-top: 15px;
    }

    .centerMainBox2 .first_border {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .boxTitle2 {
        width: 100%;
        height: 10%;
        font-size: .6vw;
        text-align: center;
        line-height: 10%;
        margin-top: 1vw;
        color: #0efcff;
    }

    .contList {
        position: relative;
        width: 70%;
        height: 8vw;
        margin: 1vw auto 0;

    }

    .content1 li {
        display: none;
    }

    .baseBox {
        width: 100%;
        border: none;
        background: none;
    }

    .boxTitle {
        font-size: .8vw;
        width: 38%;
        margin-top: 1vw;
        text-align: center;
    }

    .right {
        float: right;
    }

    .baseBoxLeft {
        width: 30%;
        height: 95%;
        position: relative;
    }

    .baseBoxRight {
        width: 68%;
        height: 100%;
    }

    .baseBoxLeft .first_border {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    .baseBox1,
    .baseBox2,
    .baseBox3 {
        position: relative;
    }

    .baseBox1 .hardware,
    .baseBox2 img,
    .baseBox3 img {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .csbaseBox1 {
        position: relative;
        z-index: 999;
    }

    #canvas {
        display: block;
        margin: 0 auto;
        width: 10vw;
        height: 5vw;
    }

    .progress {
        position: relative;
    }

    .progress img {
        width: 12.5vw;
        height: 2vw;
        position: absolute;
        top: .4vw;
        right: -.2vw;
    }

    .progress .disease {
        position: absolute;
        top: .7vw;
        left: .5vw;
        color: #fff;
        font-size: .8vw;
    }

    .progress .similar {
        position: absolute;
        top: .8vw;
        left: 3vw;
        color: #0efcff;
        font-size: .5vw;
    }

    /* 返回图标 */
    .navLeft {
        position: absolute;
        top: 5%;
        left: 35%;
        width: 3.5%;
        height: 8%;
        z-index: 999;
    }

    .navLeft>img {
        width: 100%;
        height: 100%;
    }
  }

}
</style>
