<template>
  <div id="data-view">
    <dv-full-screen-container>
      <div class="main">
        <div class="nav">XXXXX产业大数据指挥舱</div>
      </div>

    </dv-full-screen-container>
  </div>
</template>

<script>
export default {
  name: 'DataView',
  components: {
  },
  data () {
    return {}
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
  }

}
</style>
