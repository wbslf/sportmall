<template>
  <div >
    <div class="d_name">本周流行</div>
    <div class="feature">
      <div v-for="item in features" class="feature-item">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Feature",
      props:{
        features:{
          type:Array,
          default(){
            return []
          }
        }
      }
    }
</script>

<style scoped>
  .feature{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 0px;
  }
  .feature-item{
    flex:1;
  }
  .feature-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
  .d_name{
    text-align: center;
    width: 100%;
    font-size: 16px;
  }
</style>
