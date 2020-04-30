<template>
  <swiper>
    <swiper-item v-for="item in banners" >
      <a :href="item.link">
        <img class="img_h" :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>
<!--首页轮播图-->
<script>
  import {Swiper,SwiperItem} from "components/common/swiper"
    export default {
        name: "HomeSwiper",
        props:{
          banners:{
            type:Array,
            default(){
              return []
            }
          }
        },
        data(){
          return{
            isLoad:false
          }
        },
        components:{
          Swiper,
          SwiperItem
        },
      methods:{
        imageLoad(){
          if(!this.isLoad){
            this.$emit('swiperImageLoad')
            this.isLoad = true
          }

        }
      }
    }
</script>

<style scoped>
.img_h{
  height: 170px;
}
</style>
