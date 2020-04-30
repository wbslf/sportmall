<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>
    <tab-control :titles="['流行', '新款', '精选']"
                 @tabClick="tabClick"
                 ref="tabControl1"
                 class="tab-control" v-show="isTabFixed"/>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll">
      <home-swiper class="home-swiper" :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view :features="features" />
      <tab-control
        :titles="['流行','新款','精选']"
        @tabClick="tabClick"
        ref="tabControl2"/>
      <goods-list  :goods="goods[currentType].list"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
    <main-tab-bar/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl"
  import MainTabBar from "components/content/mainTabbar/MainTabBar";
  import GoodsList from "components/content/goods/GoodsList"
  import GoodsListItem from "components/content/goods/GoodsListItem"
  import Scroll from "components/common/scroll/Scroll"
  import BackTop from "components/content/backTop/BackTop"

  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from './childComps/Feature'

  import {
    getHomeMultidata,
    getHomeGoods
  } from "network/home";



  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      MainTabBar,
      GoodsList,
      GoodsListItem,
      Scroll,
      BackTop
    },
    data(){
      return{
        //轮播图数据
        banners: [
          {
            image: "https://img.alicdn.com/tps/TB1.DhgLpXXXXbOXpXXXXXXXXXX-520-280.jpg"
          },
          {
            image: "https://img.alicdn.com/tps/TB16PVePVXXXXXZXFXXXXXXXXXX-1053-612.jpg"
          },
          {
            image: "//img20.360buyimg.com/babel/s1980x918_jfs/t1/110710/16/4226/121319/5e995980Ed4f57d8e/677aa2d649d9ef2a.jpg!cc_1980x918.webp"
          },
          {
            image: "//img30.360buyimg.com/babel/s1980x918_jfs/t1/104940/37/16463/168365/5e7affe6Ed2722121/c13536e48ae3aae5.jpg!cc_1980x918.webp"
          }
        ],
        //推荐信息数据
        recommends: [
          {
            image: "//gw.alicdn.com/bao/uploaded/TB16SmhJH5YBuNjSspoSuveNFXa.jpg",
            title:"每日推荐"
          },
          {
            image: "//gw.alicdn.com/bao/uploaded/TB1eu0dqVzqK1RjSZFCSuvbxVXa.jpg",
            title:"天天特卖"
          },
          {
            image: "//gw.alicdn.com/bao/uploaded/TB1fvgLrW61gK0jSZFlXXXDKFXa.jpg",
            title:"品质好物"
          },
          {
            image: "//gw.alicdn.com/bao/uploaded/TB1Bb1XjYj1gK0jSZFOXXc7GpXa.jpg",
            title:"初夏上新"
          }
        ],
        //本周流行数据
        features:[
          {
            image:"//img20.360buyimg.com/babel/s320x320_jfs/t5986/281/1835683683/259644/4030fac3/59365c09N873f8658.jpg",
            title:"乔丹运动鞋"
          },
          {
            image:"//img11.360buyimg.com/babel/s320x320_jfs/t1/57334/9/5246/236443/5d2ef584Eb0eebb0d/3dc8c9863e356307.jpg!cc_320x320.webp",
            title:"比纳拳击沙袋"
          },
          {
            image:"//img30.360buyimg.com/babel/s320x320_jfs/t1/95162/37/2613/313218/5dd36134Ee7e0b7bf/3e5868cd884addc0.jpg!cc_320x320.webp",
            title:"骆驼户外帐篷"
          },
          {
            image:"//img11.360buyimg.com/babel/s320x320_jfs/t1/71646/36/11489/83765/5d8eb0f1Ea32a9c8e/09accd96ef2f5437.jpg!cc_320x320.webp",
            title:"运动护膝"
          }
        ],
        //商品数据
        goods:{
          'pop':{page:0,list:[
              {
                cfav:49,
                iid:"1m70y5k",
                price:"599",
                title:"NIKE耐克男鞋2020春季Air跑步鞋CD7510-100",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200221_5i12e16b2a733eeegf2hcij3fa1h0_800x800.jpg"
                }
              },
              {
                cfav:73,
                iid:"1m745k0",
                price:"619",
                title:"PUMA彪马情侣缓震跑步鞋 LQDCELL192560-05",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200407_6d0k5bijedhla02glle0eclbb7a0c_800x800.jpg"
                }
              },
              {
                cfav:1079,
                iid:"1lrzvr8",
                price:"79",
                title:"网红ins超火老爹鞋韩版风厚底系带运动鞋增高小白鞋",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/190624_3b2b16fd46aig9747ahcf0hbj249i_640x960.jpg_468x468.jpg"
                }
              },
              {
                cfav:1260,
                iid:"1jw0sr2",
                price:"719",
                title:"Adidas阿迪达斯清风透气网面跑步运动鞋EE4639",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200331_4di6g7fc486kjdhki80ej1ibab1g5_800x800.jpg"
                }
              },
              {
                cfav:179,
                iid:"1m7s9c4",
                price:"579",
                title:"Nike 詹姆斯使节 实战篮球鞋BQ5436-005-500",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200320_7le01d60gdlj1akc3hcdi1aea2ei7_800x800.jpg"
                }
              },
              {
                cfav:167,
                iid:"1m7rp9w",
                price:"659",
                title:"NIKE耐克外套双钩字母夹克外套CJ4889-010-011",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200318_0fi97h0f56e7c7j81j30bgiai18lj_800x800.jpg"
                }
              },
              {
                cfav:170,
                iid:"1lyp2vg",
                price:"309",
                title:"NIKE耐克2020夏新款运动服上衣健身训练T恤CJ4705",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200402_12kdee6hf313i1kabc7jkcd472lhg_800x800.jpg"
                }
              },
              {
                cfav:156,
                iid:"1m4tdhy",
                price:"169",
                title:"NIKE耐克短袖男JORDAN透气飞人运动服T恤BQ6741",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200402_47dkdjcdc6abb32362lh12e1ai8be_800x800.jpg"
                }
              },
              {
                cfav:49,
                iid:"1m70y5k",
                price:"599",
                title:"NIKE耐克男鞋2020春季Air跑步鞋CD7510-100",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200221_5i12e16b2a733eeegf2hcij3fa1h0_800x800.jpg"
                }
              },
              {
                cfav:73,
                iid:"1m745k0",
                price:"619",
                title:"PUMA彪马情侣缓震跑步鞋 LQDCELL192560-05",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200407_6d0k5bijedhla02glle0eclbb7a0c_800x800.jpg"
                }
              },
              {
                cfav:1079,
                iid:"1lrzvr8",
                price:"629",
                title:"Nike耐克女子气垫黑白运动跑步鞋休闲鞋AQ8228-003",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/191120_2452blbbi4218b001ddhdc4574315_800x800.jpg"
                }
              },
              {
                cfav:1260,
                iid:"1jw0sr2",
                price:"719",
                title:"Adidas阿迪达斯清风透气网面跑步运动鞋EE4639",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200331_4di6g7fc486kjdhki80ej1ibab1g5_800x800.jpg"
                }
              },
              {
                cfav:179,
                iid:"1m7s9c4",
                price:"579",
                title:"Nike 詹姆斯使节 实战篮球鞋BQ5436-005-500",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200320_7le01d60gdlj1akc3hcdi1aea2ei7_800x800.jpg"
                }
              },
              {
                cfav:167,
                iid:"1m7rp9w",
                price:"659",
                title:"NIKE耐克外套双钩字母夹克外套CJ4889-010-011",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200318_0fi97h0f56e7c7j81j30bgiai18lj_800x800.jpg"
                }
              },
              {
                cfav:170,
                iid:"1lyp2vg",
                price:"309",
                title:"NIKE耐克2020夏新款运动服上衣健身训练T恤CJ4705",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200402_12kdee6hf313i1kabc7jkcd472lhg_800x800.jpg"
                }
              },
              {
                cfav:156,
                iid:"1m4tdhy",
                price:"169",
                title:"NIKE耐克短袖男JORDAN透气飞人运动服T恤BQ6741",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200402_47dkdjcdc6abb32362lh12e1ai8be_800x800.jpg"
                }
              },
              {
                cfav:49,
                iid:"1m70y5k",
                price:"599",
                title:"NIKE耐克男鞋2020春季Air跑步鞋CD7510-100",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200221_5i12e16b2a733eeegf2hcij3fa1h0_800x800.jpg"
                }
              },
              {
                cfav:73,
                iid:"1m745k0",
                price:"619",
                title:"PUMA彪马情侣缓震跑步鞋 LQDCELL192560-05",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200407_6d0k5bijedhla02glle0eclbb7a0c_800x800.jpg"
                }
              },
              {
                cfav:1079,
                iid:"1lrzvr8",
                price:"629",
                title:"Nike耐克女子气垫黑白运动跑步鞋休闲鞋AQ8228-003",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/191120_2452blbbi4218b001ddhdc4574315_800x800.jpg"
                }
              },
              {
                cfav:1260,
                iid:"1jw0sr2",
                price:"719",
                title:"Adidas阿迪达斯清风透气网面跑步运动鞋EE4639",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200331_4di6g7fc486kjdhki80ej1ibab1g5_800x800.jpg"
                }
              },
              {
                cfav:179,
                iid:"1m7s9c4",
                price:"579",
                title:"Nike 詹姆斯使节 实战篮球鞋BQ5436-005-500",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200320_7le01d60gdlj1akc3hcdi1aea2ei7_800x800.jpg"
                }
              },
              {
                cfav:167,
                iid:"1m7rp9w",
                price:"659",
                title:"NIKE耐克外套双钩字母夹克外套CJ4889-010-011",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200318_0fi97h0f56e7c7j81j30bgiai18lj_800x800.jpg"
                }
              },
              {
                cfav:170,
                iid:"1lyp2vg",
                price:"309",
                title:"NIKE耐克2020夏新款运动服上衣健身训练T恤CJ4705",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200402_12kdee6hf313i1kabc7jkcd472lhg_800x800.jpg"
                }
              },
              {
                cfav:156,
                iid:"1m4tdhy",
                price:"169",
                title:"NIKE耐克短袖男JORDAN透气飞人运动服T恤BQ6741",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200402_47dkdjcdc6abb32362lh12e1ai8be_800x800.jpg"
                }
              }
            ]},
          'new':{page:0,list:[
              {
                cfav:1260,
                iid:"1jw0sr2",
                price:"719",
                title:"Adidas阿迪达斯清风透气网面跑步运动鞋EE4639",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200331_4di6g7fc486kjdhki80ej1ibab1g5_800x800.jpg"
                }
              },
              {
                cfav:179,
                iid:"1m7s9c4",
                price:"579",
                title:"Nike 詹姆斯使节 实战篮球鞋BQ5436-005-500",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200320_7le01d60gdlj1akc3hcdi1aea2ei7_800x800.jpg"
                }
              },
              {
                cfav:49,
                iid:"1m70y5k",
                price:"599",
                title:"NIKE耐克男鞋2020春季Air跑步鞋CD7510-100",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200221_5i12e16b2a733eeegf2hcij3fa1h0_800x800.jpg"
                }
              },
              {
                cfav:73,
                iid:"1m745k0",
                price:"619",
                title:"PUMA彪马情侣缓震跑步鞋 LQDCELL192560-05",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200407_6d0k5bijedhla02glle0eclbb7a0c_800x800.jpg"
                }
              },
              {
                cfav:1079,
                iid:"1lrzvr8",
                price:"629",
                title:"Nike耐克女子气垫黑白运动跑步鞋休闲鞋AQ8228-003",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/191120_2452blbbi4218b001ddhdc4574315_800x800.jpg"
                }
              },
              {
                cfav:167,
                iid:"1m7rp9w",
                price:"659",
                title:"NIKE耐克外套双钩字母夹克外套CJ4889-010-011",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200318_0fi97h0f56e7c7j81j30bgiai18lj_800x800.jpg"
                }
              },
              {
                cfav:170,
                iid:"1lyp2vg",
                price:"309",
                title:"NIKE耐克2020夏新款运动服上衣健身训练T恤CJ4705",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200402_12kdee6hf313i1kabc7jkcd472lhg_800x800.jpg"
                }
              },
              {
                cfav:156,
                iid:"1m4tdhy",
                price:"169",
                title:"NIKE耐克短袖男JORDAN透气飞人运动服T恤BQ6741",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200402_47dkdjcdc6abb32362lh12e1ai8be_800x800.jpg"
                }
              },
              {
                cfav:49,
                iid:"1m70y5k",
                price:"599",
                title:"NIKE耐克男鞋2020春季Air跑步鞋CD7510-100",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200221_5i12e16b2a733eeegf2hcij3fa1h0_800x800.jpg"
                }
              },
              {
                cfav:73,
                iid:"1m745k0",
                price:"619",
                title:"PUMA彪马情侣缓震跑步鞋 LQDCELL192560-05",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200407_6d0k5bijedhla02glle0eclbb7a0c_800x800.jpg"
                }
              },
              {
                cfav:1079,
                iid:"1lrzvr8",
                price:"629",
                title:"Nike耐克女子气垫黑白运动跑步鞋休闲鞋AQ8228-003",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/191120_2452blbbi4218b001ddhdc4574315_800x800.jpg"
                }
              },
              {
                cfav:1260,
                iid:"1jw0sr2",
                price:"719",
                title:"Adidas阿迪达斯清风透气网面跑步运动鞋EE4639",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200331_4di6g7fc486kjdhki80ej1ibab1g5_800x800.jpg"
                }
              },
              {
                cfav:179,
                iid:"1m7s9c4",
                price:"579",
                title:"Nike 詹姆斯使节 实战篮球鞋BQ5436-005-500",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200320_7le01d60gdlj1akc3hcdi1aea2ei7_800x800.jpg"
                }
              },
              {
                cfav:167,
                iid:"1m7rp9w",
                price:"659",
                title:"NIKE耐克外套双钩字母夹克外套CJ4889-010-011",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200318_0fi97h0f56e7c7j81j30bgiai18lj_800x800.jpg"
                }
              },
              {
                cfav:170,
                iid:"1lyp2vg",
                price:"309",
                title:"NIKE耐克2020夏新款运动服上衣健身训练T恤CJ4705",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200402_12kdee6hf313i1kabc7jkcd472lhg_800x800.jpg"
                }
              },
              {
                cfav:156,
                iid:"1m4tdhy",
                price:"169",
                title:"NIKE耐克短袖男JORDAN透气飞人运动服T恤BQ6741",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200402_47dkdjcdc6abb32362lh12e1ai8be_800x800.jpg"
                }
              },
              {
                cfav:49,
                iid:"1m70y5k",
                price:"599",
                title:"NIKE耐克男鞋2020春季Air跑步鞋CD7510-100",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200221_5i12e16b2a733eeegf2hcij3fa1h0_800x800.jpg"
                }
              },
              {
                cfav:73,
                iid:"1m745k0",
                price:"619",
                title:"PUMA彪马情侣缓震跑步鞋 LQDCELL192560-05",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200407_6d0k5bijedhla02glle0eclbb7a0c_800x800.jpg"
                }
              },
              {
                cfav:1079,
                iid:"1lrzvr8",
                price:"629",
                title:"Nike耐克女子气垫黑白运动跑步鞋休闲鞋AQ8228-003",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/191120_2452blbbi4218b001ddhdc4574315_800x800.jpg"
                }
              },
              {
                cfav:1260,
                iid:"1jw0sr2",
                price:"719",
                title:"Adidas阿迪达斯清风透气网面跑步运动鞋EE4639",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200331_4di6g7fc486kjdhki80ej1ibab1g5_800x800.jpg"
                }
              },
              {
                cfav:179,
                iid:"1m7s9c4",
                price:"579",
                title:"Nike 詹姆斯使节 实战篮球鞋BQ5436-005-500",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200320_7le01d60gdlj1akc3hcdi1aea2ei7_800x800.jpg"
                }
              },
              {
                cfav:167,
                iid:"1m7rp9w",
                price:"659",
                title:"NIKE耐克外套双钩字母夹克外套CJ4889-010-011",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200318_0fi97h0f56e7c7j81j30bgiai18lj_800x800.jpg"
                }
              },
              {
                cfav:170,
                iid:"1lyp2vg",
                price:"309",
                title:"NIKE耐克2020夏新款运动服上衣健身训练T恤CJ4705",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200402_12kdee6hf313i1kabc7jkcd472lhg_800x800.jpg"
                }
              },
              {
                cfav:156,
                iid:"1m4tdhy",
                price:"169",
                title:"NIKE耐克短袖男JORDAN透气飞人运动服T恤BQ6741",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200402_47dkdjcdc6abb32362lh12e1ai8be_800x800.jpg"
                }
              }
            ]},
          'sell':{page:0,list:[
              {
                cfav:167,
                iid:"1m7rp9w",
                price:"659",
                title:"NIKE耐克外套双钩字母夹克外套CJ4889-010-011",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200318_0fi97h0f56e7c7j81j30bgiai18lj_800x800.jpg"
                }
              },
              {
                cfav:170,
                iid:"1lyp2vg",
                price:"309",
                title:"NIKE耐克2020夏新款运动服上衣健身训练T恤CJ4705",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200402_12kdee6hf313i1kabc7jkcd472lhg_800x800.jpg"
                }
              },
              {
                cfav:49,
                iid:"1m70y5k",
                price:"599",
                title:"NIKE耐克男鞋2020春季Air跑步鞋CD7510-100",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200221_5i12e16b2a733eeegf2hcij3fa1h0_800x800.jpg"
                }
              },
              {
                cfav:73,
                iid:"1m745k0",
                price:"619",
                title:"PUMA彪马情侣缓震跑步鞋 LQDCELL192560-05",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200407_6d0k5bijedhla02glle0eclbb7a0c_800x800.jpg"
                }
              },
              {
                cfav:1079,
                iid:"1lrzvr8",
                price:"629",
                title:"Nike耐克女子气垫黑白运动跑步鞋休闲鞋AQ8228-003",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/191120_2452blbbi4218b001ddhdc4574315_800x800.jpg"
                }
              },
              {
                cfav:1260,
                iid:"1jw0sr2",
                price:"719",
                title:"Adidas阿迪达斯清风透气网面跑步运动鞋EE4639",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200331_4di6g7fc486kjdhki80ej1ibab1g5_800x800.jpg"
                }
              },
              {
                cfav:179,
                iid:"1m7s9c4",
                price:"579",
                title:"Nike 詹姆斯使节 实战篮球鞋BQ5436-005-500",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200320_7le01d60gdlj1akc3hcdi1aea2ei7_800x800.jpg"
                }
              },
              {
                cfav:156,
                iid:"1m4tdhy",
                price:"169",
                title:"NIKE耐克短袖男JORDAN透气飞人运动服T恤BQ6741",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200402_47dkdjcdc6abb32362lh12e1ai8be_800x800.jpg"
                }
              },
              {
                cfav:49,
                iid:"1m70y5k",
                price:"599",
                title:"NIKE耐克男鞋2020春季Air跑步鞋CD7510-100",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200221_5i12e16b2a733eeegf2hcij3fa1h0_800x800.jpg"
                }
              },
              {
                cfav:73,
                iid:"1m745k0",
                price:"619",
                title:"PUMA彪马情侣缓震跑步鞋 LQDCELL192560-05",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200407_6d0k5bijedhla02glle0eclbb7a0c_800x800.jpg"
                }
              },
              {
                cfav:1079,
                iid:"1lrzvr8",
                price:"629",
                title:"Nike耐克女子气垫黑白运动跑步鞋休闲鞋AQ8228-003",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/191120_2452blbbi4218b001ddhdc4574315_800x800.jpg"
                }
              },
              {
                cfav:1260,
                iid:"1jw0sr2",
                price:"719",
                title:"Adidas阿迪达斯清风透气网面跑步运动鞋EE4639",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200331_4di6g7fc486kjdhki80ej1ibab1g5_800x800.jpg"
                }
              },
              {
                cfav:179,
                iid:"1m7s9c4",
                price:"579",
                title:"Nike 詹姆斯使节 实战篮球鞋BQ5436-005-500",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200320_7le01d60gdlj1akc3hcdi1aea2ei7_800x800.jpg"
                }
              },
              {
                cfav:167,
                iid:"1m7rp9w",
                price:"659",
                title:"NIKE耐克外套双钩字母夹克外套CJ4889-010-011",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200318_0fi97h0f56e7c7j81j30bgiai18lj_800x800.jpg"
                }
              },
              {
                cfav:170,
                iid:"1lyp2vg",
                price:"309",
                title:"NIKE耐克2020夏新款运动服上衣健身训练T恤CJ4705",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200402_12kdee6hf313i1kabc7jkcd472lhg_800x800.jpg"
                }
              },
              {
                cfav:156,
                iid:"1m4tdhy",
                price:"169",
                title:"NIKE耐克短袖男JORDAN透气飞人运动服T恤BQ6741",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200402_47dkdjcdc6abb32362lh12e1ai8be_800x800.jpg"
                }
              },
              {
                cfav:49,
                iid:"1m70y5k",
                price:"599",
                title:"NIKE耐克男鞋2020春季Air跑步鞋CD7510-100",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200221_5i12e16b2a733eeegf2hcij3fa1h0_800x800.jpg"
                }
              },
              {
                cfav:73,
                iid:"1m745k0",
                price:"619",
                title:"PUMA彪马情侣缓震跑步鞋 LQDCELL192560-05",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200407_6d0k5bijedhla02glle0eclbb7a0c_800x800.jpg"
                }
              },
              {
                cfav:1079,
                iid:"1lrzvr8",
                price:"629",
                title:"Nike耐克女子气垫黑白运动跑步鞋休闲鞋AQ8228-003",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/191120_2452blbbi4218b001ddhdc4574315_800x800.jpg"
                }
              },
              {
                cfav:1260,
                iid:"1jw0sr2",
                price:"719",
                title:"Adidas阿迪达斯清风透气网面跑步运动鞋EE4639",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200331_4di6g7fc486kjdhki80ej1ibab1g5_800x800.jpg"
                }
              },
              {
                cfav:179,
                iid:"1m7s9c4",
                price:"579",
                title:"Nike 詹姆斯使节 实战篮球鞋BQ5436-005-500",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200320_7le01d60gdlj1akc3hcdi1aea2ei7_800x800.jpg"
                }
              },
              {
                cfav:167,
                iid:"1m7rp9w",
                price:"659",
                title:"NIKE耐克外套双钩字母夹克外套CJ4889-010-011",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200318_0fi97h0f56e7c7j81j30bgiai18lj_800x800.jpg"
                }
              },
              {
                cfav:170,
                iid:"1lyp2vg",
                price:"309",
                title:"NIKE耐克2020夏新款运动服上衣健身训练T恤CJ4705",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200402_12kdee6hf313i1kabc7jkcd472lhg_800x800.jpg"
                }
              },
              {
                cfav:156,
                iid:"1m4tdhy",
                price:"169",
                title:"NIKE耐克短袖男JORDAN透气飞人运动服T恤BQ6741",
                show:{
                  img:"https://s5.mogucdn.com/mlcdn/c45406/200402_47dkdjcdc6abb32362lh12e1ai8be_800x800.jpg"
                }
              }
            ]}
        },
        currentType:'pop',
        isShowBackTop: false,
        tabOffsetTop:0,
        isTabFixed: false,
        saveY: 0
      }
    },
    created() {
      // this.getHomeGoods('pop')
      // this.getHomeGoods('new')
      // this.getHomeGoods('sell')
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()
    },
    methods:{
      //事件监听
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      //返回顶部按钮
      backClick(){
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(position) {
        // 1.判断BackTop是否显示
        this.isShowBackTop = (-position.y) > 1000

        // 2.决定tabControl是否吸顶(position: fixed)
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      swiperImageLoad(){
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      },
      //网络请求
      // getHomeGoods(type){
      //   const page = this.goods[type].page+1
      //   getHomeGoods(type,page).then(res=>{
      //     console.log(res)
      //     this.goods[type].list.push(...res.data.list)
      //     this.goods[type].page+1
      //   })
      // }
    }
  }
</script>

<style scoped>
  #home{

    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: white;

  }
  .tab-control{
    position: relative;
    z-index: 9;
  }
  .content{
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
