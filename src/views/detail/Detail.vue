<template>
    <div id="detail">
      <detail-nav-bar class="detail-nav"/>
      <Scroll class="content" ref="scroll">
        <detail-swiper :top-images="topImages"/>
        <detail-base-info :goods="goods"/>
        <detail-shop-info :shop="shop"/>
        <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
        <detail-param-info :param-info="paramInfo"/>
        <detail-comment-info :comment-info="commentInfo"/>
        <goods-list :goods="recommendList"/>
      </Scroll>
    </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'

  import Scroll from 'components/common/scroll/Scroll'
  import GoodsList from "components/content/goods/GoodsList"
  import {getDetail, Goods, Shop, GoodsParam,getRecommend} from "network/detail";

    export default {
      name: "Detail",
      components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo,
        Scroll,
        DetailCommentInfo,
        GoodsList
      },
      data() {
        return {
          iid: null,
          topImages: [],
          goods: {},
          shop: {},
          detailInfo: {},
          paramInfo: {},
          commentInfo:{},
          recommendList:[],
          info:{},
          data:[
            {
              itemInfo:{
                topImages:[
                  "https://s5.mogucdn.com/mlcdn/c45406/200221_7d1891a08fk880c8a4jjb1id3idjd_800x800.jpg_468x468.jpg",
                  "https://s5.mogucdn.com/mlcdn/c45406/200221_0a89h23366l49cgl17j8l3bcih5ll_800x800.jpg_468x468.jpg"
                ],
                title:"NIKE耐克男鞋2020春季Air跑步鞋CD7510-100",
                desc:"NIKE耐克男鞋2020春季Air跑步鞋CD7510-100",
                price:"¥599.00~¥699.00",
                oldPrice:"856",
                discountDesc:"7折",
                lowNowPrice:"599.00"
              },
              columns:[
                "销量 152",
                "收藏45人",
                "默认快递"
              ],
              shopInfo:{
                services:[
						      {
                    icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                   name:"退货补运费"
                },
                {
                   icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                  name:"全国包邮"
                },
                {
                   icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                   name:"7天无理由退货"
                 },
                {
                  icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                  name:"72小时发货"
                },
             ],
            shopLogo:"https://s5.mogucdn.com/pic/141211/1agxqe_ieygmodbmiztmzrqmuytambqmmyde_120x120.jpg_100x100.jpg",
            name:"耐克专卖店",
            cFans: 98574,
            cSells: 384791,
            score:[
              {isBetter:false,name:"描述相符",score:4.66},
              {isBetter:true,name:"价格合理",score:5},
              {isBetter:false,name:"质量满意",score:4.65}
           ],
            cGoods:339
          },
              detailInfo:{
                desc:"NIKE耐克男鞋2020春季Air跑步鞋CD7510-100",
                detailImage: [
                {
                   key:"穿着效果",
                   list:[
                  "https://s11.mogucdn.com/mlcdn/c45406/200313_2g6a9di2ekd53il9l473ia6gj062k_750x3028.jpg_750x999.jpg",
                  "https://s5.mogucdn.com/mlcdn/c45406/200313_2jebl0ca91li2le6b3895gij52ihk_750x2268.jpg_750x999.jpg",
                  "https://s5.mogucdn.com/mlcdn/c45406/200313_0iljch3l7kdjggi217g29l47l834i_750x2586.jpg_750x999.jpg",
                  "https://s5.mogucdn.com/mlcdn/c45406/200313_565i39le6k1ic43d23l6gle2dgd1k_750x2276.jpg_750x999.jpg",
                  "https://s5.mogucdn.com/p2/170317/77101615_6f3ak83kkl00329ged9249aa93ifb_1125x285.jpg_750x999.jpg"
                ]
                }
                ]
              },
              itemParams:{
                info:{
                images:[
                  {}
                ],
                set:[
                {
                   key:"颜色",
                   value:"CD7510-100,CD7510-001"
                 },
                {
                   key:"视觉效果",
                   value:"无特殊效果"
                },
                {
                   key:"鞋面材质",
                   value:"多种材料拼接"
                },
                {
                  key:"鞋底材质",
                  value:"复合底"
                },
                {
                   key:"功能",
                   value:"透气，轻便，包裹性"
                },
                {
                    key:"品牌",
                   value:"耐克"
                }
             ],
                },
                rule:{
                tables: [
                   [
                ["尺码","38","39","40","41","42","43"],
                //["颜色","CD7510-100","CD7510-001"]
              ]
                ]
              }
              },
              rate:{
                cRate:1,
                list:[
                  {
                    content:"刚好合适，物廉价美，穿着很舒服，样子也很好看",
                    user:{
                      avatar:"https://s5.mogucdn.com/mlcdn/5abf39/191007_1gb50dl2hii2860gk991hd7hj1e0g_132x132.jpg_64x64.jpg",
                      uname:"小新"
                    },
                    created:1535694719,
                    style:"颜色：CD7510-100 尺码 39",
                    images:[]
                  }
                ],

              }
            },{
              itemInfo:{
                topImages:[
                  "https://s5.mogucdn.com/mlcdn/c45406/200407_28ihg7id461f411948bj50jcd8k32_800x800.jpg_468x468.jpg",
                  "https://s5.mogucdn.com/mlcdn/c45406/200407_5dgg0jcdkec05d0g6ffjg05i763cc_800x800.jpg_468x468.jpg",
                  "https://s11.mogucdn.com/mlcdn/c45406/200407_02861b6b4l7gkk4bgjl609e661kdi_800x800.jpg_468x468.jpg"
                ],
                title:"PUMA彪马情侣缓震跑步鞋 LQDCELL192560-05",
                desc:"PUMA彪马情侣缓震跑步鞋 LQDCELL192560-05",
                price:"¥619",
                oldPrice:"688",
                discountDesc:"9折",
                lowNowPrice:"619.00"
              },
              columns:[
                "销量 152",
                "收藏45人",
                "默认快递"
              ],
              shopInfo:{
                services:[
                  {
                    icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                    name:"退货补运费"
                  },
                  {
                    icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                    name:"全国包邮"
                  },
                  {
                    icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                    name:"7天无理由退货"
                  },
                  {
                    icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                    name:"72小时发货"
                  },
                ],
                shopLogo:"https://s5.mogucdn.com/pic/141211/1agxqe_ieygmodbmiztmzrqmuytambqmmyde_120x120.jpg_100x100.jpg",
                name:"彪马专卖店",
                cFans: 98574,
                cSells: 384791,
                score:[
                  {isBetter:false,name:"描述相符",score:4.66},
                  {isBetter:true,name:"价格合理",score:5},
                  {isBetter:false,name:"质量满意",score:4.65}
                ],
                cGoods:339
              },
              detailInfo:{
                desc:"PUMA彪马情侣缓震跑步鞋 LQDCELL192560-05",
                detailImage: [
                  {
                    key:"穿着效果",
                    list:[
                      "https://s5.mogucdn.com/mlcdn/c45406/200407_6c9g581a08gh7g2222afbfh61g411_750x1126.jpg_750x999.jpg",
                      "https://s5.mogucdn.com/mlcdn/c45406/200407_840j7ek01kd513k417jdg6f0ell1h_750x2292.jpg_750x999.jpg",
                      "https://s5.mogucdn.com/mlcdn/c45406/200407_4246jdi79jee19f7dhc9hd3f3595k_750x1827.jpg_750x999.jpg",
                      "https://s5.mogucdn.com/p2/170317/77101615_6f3ak83kkl00329ged9249aa93ifb_1125x285.jpg_750x999.jpg"
                    ]
                  }
                ]
              },
              itemParams:{
                info:{
                  images:[
                    {}
                  ],
                  set:[
                    {
                      key:"颜色",
                      value:"192560-05"
                    },
                    {
                      key:"视觉效果",
                      value:"无特殊效果"
                    },
                    {
                      key:"鞋面材质",
                      value:"网布"
                    },
                    {
                      key:"鞋底材质",
                      value:"橡胶底"
                    },
                    {
                      key:"功能",
                      value:"减震，轻便"
                    },
                    {
                      key:"品牌",
                      value:"彪马"
                    }
                  ],
                },
                rule:{
                  tables: [
                    [
                      ["尺码","38","39","40","41","42","43"],
                      //["颜色","CD7510-100","CD7510-001"]
                    ]
                  ]
                }
              },
              rate:{
                cRate:1,
                list:[
                  {
                    content:"刚好合适，物廉价美，穿着很舒服，样子也很好看",
                    user:{
                      avatar:"https://s5.mogucdn.com/mlcdn/5abf39/191007_1gb50dl2hii2860gk991hd7hj1e0g_132x132.jpg_64x64.jpg",
                      uname:"小新"
                    },
                    created:1535694719,
                    style:"颜色：192560-05 尺码 39",
                    images:[]
                  }
                ],

              }
            },{
              itemInfo:{
                topImages:[
                  "https://s5.mogucdn.com/mlcdn/c45406/190624_6lehke5c2jbk491gieglbb23f20a3_800x800.jpg_750x999.jpg",
                  "https://s11.mogucdn.com/mlcdn/c45406/190624_296kda2e53k9ag2l9dc279c9f1c89_800x800.jpg_750x999.jpg",
                  "https://s5.mogucdn.com/mlcdn/c45406/190624_3881c9c424jb87ahdb0b24j03j391_800x800.jpg_750x999.jpg"
                ],
                title:"网红ins超火老爹鞋韩版风厚底系带运动鞋增高小白鞋",
                desc:"网红ins超火老爹鞋韩版风厚底系带运动鞋增高小白鞋",
                price:"¥79",
                oldPrice:"130",
                discountDesc:"6折",
                lowNowPrice:"79.00"
              },
              columns:[
                "销量 152",
                "收藏45人",
                "默认快递"
              ],
              shopInfo:{
                services:[
                  {
                    icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                    name:"退货补运费"
                  },
                  {
                    icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                    name:"全国包邮"
                  },
                  {
                    icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                    name:"7天无理由退货"
                  },
                  {
                    icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                    name:"72小时发货"
                  },
                ],
                shopLogo:"https://s5.mogucdn.com/pic/141211/1agxqe_ieygmodbmiztmzrqmuytambqmmyde_120x120.jpg_100x100.jpg",
                name:"欧丽婷专卖店",
                cFans: 98574,
                cSells: 384791,
                score:[
                  {isBetter:false,name:"描述相符",score:4.66},
                  {isBetter:true,name:"价格合理",score:5},
                  {isBetter:false,name:"质量满意",score:4.65}
                ],
                cGoods:339
              },
              detailInfo:{
                desc:"网红ins超火老爹鞋韩版风厚底系带运动鞋增高小白鞋",
                detailImage: [
                  {
                    key:"穿着效果",
                    list:[
                      "https://s5.mogucdn.com/mlcdn/c45406/190624_6lehke5c2jbk491gieglbb23f20a3_800x800.jpg_750x999.jpg",
                      "https://s11.mogucdn.com/mlcdn/c45406/190624_296kda2e53k9ag2l9dc279c9f1c89_800x800.jpg_750x999.jpg",
                      "https://s5.mogucdn.com/mlcdn/c45406/190624_3881c9c424jb87ahdb0b24j03j391_800x800.jpg_750x999.jpg",
                      "https://s5.mogucdn.com/mlcdn/c45406/190624_06776lldfc80hfb1d691fh4919id1_800x800.jpg_750x999.jpg",
                      "https://s5.mogucdn.com/mlcdn/c45406/190624_1h42c577l4iagi01ihcb0c3358aa7_800x800.jpg_750x999.jpg",
                      "https://s5.mogucdn.com/mlcdn/c45406/190624_2300a7be228hfcl083i4ihj3267ji_800x800.jpg_750x999.jpg",
                      "https://s5.mogucdn.com/mlcdn/c45406/190624_1kki1fb55hh0ilajjl6jj8bicl1b9_800x800.jpg_750x999.jpg",
                      "https://s5.mogucdn.com/p2/170317/77101615_6f3ak83kkl00329ged9249aa93ifb_1125x285.jpg_750x999.jpg"
                    ]
                  }
                ]
              },
              itemParams:{
                info:{
                  images:[
                    {}
                  ],
                  set:[
                    {
                      key:"颜色",
                      value:"白色"
                    },
                    {
                      key:"视觉效果",
                      value:"无特殊效果"
                    },
                    {
                      key:"鞋面材质",
                      value:"网布"
                    },
                    {
                      key:"鞋底材质",
                      value:"橡胶底"
                    },
                    {
                      key:"功能",
                      value:"减震，轻便"
                    },
                    {
                      key:"品牌",
                      value:"欧丽婷"
                    }
                  ],
                },
                rule:{
                  tables: [
                    [
                      ["尺码","38","39","40","41","42","43"],
                      //["颜色","CD7510-100","CD7510-001"]
                    ]
                  ]
                }
              },
              rate:{
                cRate:1,
                list:[
                  {
                    content:"刚好合适，物廉价美，穿着很舒服，样子也很好看",
                    user:{
                      avatar:"https://s5.mogucdn.com/mlcdn/5abf39/191007_1gb50dl2hii2860gk991hd7hj1e0g_132x132.jpg_64x64.jpg",
                      uname:"小新"
                    },
                    created:1535694719,
                    style:"颜色：白色 尺码 39",
                    images:[]
                  }
                ],

              }
            },{
              itemInfo:{
                topImages:[
                  "https://s5.mogucdn.com/mlcdn/c45406/200331_4di6g7fc486kjdhki80ej1ibab1g5_800x800.jpg_640x960.v1cAC.70.webp",
                  "https://s11.mogucdn.com/mlcdn/c45406/200331_6lfd4bgad2a52a39edj010ck25jah_800x800.jpg_640x960.v1cAC.70.webp",
                  "https://s5.mogucdn.com/mlcdn/c45406/200331_2je4acge12gfi05474hf899kdg0cf_800x800.jpg_640x960.v1cAC.70.webp"
                ],
                title:"Adidas阿迪达斯清风透气网面跑步运动鞋EE4639",
                desc:"Adidas阿迪达斯清风透气网面跑步运动鞋EE4639",
                price:"¥719~¥769",
                oldPrice:"899",
                discountDesc:"8折",
                lowNowPrice:"719.00"
              },
              columns:[
                "销量 152",
                "收藏45人",
                "默认快递"
              ],
              shopInfo:{
                services:[
                  {
                    icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                    name:"退货补运费"
                  },
                  {
                    icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                    name:"全国包邮"
                  },
                  {
                    icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                    name:"7天无理由退货"
                  },
                  {
                    icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                    name:"72小时发货"
                  },
                ],
                shopLogo:"https://s5.mogucdn.com/pic/141211/1agxqe_ieygmodbmiztmzrqmuytambqmmyde_120x120.jpg_100x100.jpg",
                name:"Adidas专卖店",
                cFans: 98574,
                cSells: 384791,
                score:[
                  {isBetter:false,name:"描述相符",score:4.66},
                  {isBetter:true,name:"价格合理",score:5},
                  {isBetter:false,name:"质量满意",score:4.65}
                ],
                cGoods:339
              },
              detailInfo:{
                desc:"Adidas阿迪达斯清风透气网面跑步运动鞋EE4639",
                detailImage: [
                  {
                    key:"穿着效果",
                    list:[
                      "https://s5.mogucdn.com/mlcdn/c45406/200331_52jfg034484ie4a8027313h273a0b_750x1117.jpg_468x468.webp",
                      "https://s5.mogucdn.com/mlcdn/c45406/200331_0ali4b6k97c0d4735ik9ig6h6jj71_750x2301.jpg_468x468.webp",
                      "https://s11.mogucdn.com/mlcdn/c45406/200331_2l495l4b6kffgg757feb61aj99133_750x1522.jpg_468x468.webp",
                      "https://s5.mogucdn.com/mlcdn/c45406/200331_15hh49di50ij7d22b1bd2g25c9ja2_750x1524.jpg_468x468.webp",
                      "https://s11.mogucdn.com/mlcdn/c024f5/190417_2d51ljj2a42lddkg49ibag494g3ca_1125x540.png_468x468.webp"
                    ]
                  }
                ]
              },
              itemParams:{
                info:{
                  images:[
                    {}
                  ],
                  set:[
                    {
                      key:"颜色",
                      value:"浅蓝，粉，橙"
                    },
                    {
                      key:"视觉效果",
                      value:"无特殊效果"
                    },
                    {
                      key:"鞋面材质",
                      value:"网布"
                    },
                    {
                      key:"鞋底材质",
                      value:"橡胶底"
                    },
                    {
                      key:"功能",
                      value:"减震，轻便"
                    },
                    {
                      key:"品牌",
                      value:"Adidas"
                    }
                  ],
                },
                rule:{
                  tables: [
                    [
                      ["尺码","38","39","40","41","42","43"],
                      //["颜色","CD7510-100","CD7510-001"]
                    ]
                  ]
                }
              },
              rate:{
                cRate:1,
                list:[
                  {
                    content:"刚好合适，物廉价美，穿着很舒服，样子也很好看",
                    user:{
                      avatar:"https://s5.mogucdn.com/mlcdn/5abf39/191007_1gb50dl2hii2860gk991hd7hj1e0g_132x132.jpg_64x64.jpg",
                      uname:"小新"
                    },
                    created:1535694719,
                    style:"颜色：浅蓝 尺码 39",
                    images:[]
                  }
                ],

              }
            },{
              itemInfo:{
                topImages:[
                  "https://s5.mogucdn.com/mlcdn/c45406/200320_7le01d60gdlj1akc3hcdi1aea2ei7_800x800.jpg_640x960.v1cAC.70.webp",
                  "https://s5.mogucdn.com/mlcdn/c45406/200313_8a7g46l96ii408jkj53407je2jh5c_800x800.jpg_640x960.v1cAC.70.webp",
                  "https://s11.mogucdn.com/mlcdn/c45406/200313_1fa839gi4g136ebblcf52ki9ci283_800x800.jpg_640x960.v1cAC.70.webp"
                ],
                title:"Nike 詹姆斯使节 实战篮球鞋BQ5436-005-500",
                desc:"Nike 詹姆斯使节 实战篮球鞋BQ5436-005-500",
                price:"¥579~¥669",
                oldPrice:"724",
                discountDesc:"8折",
                lowNowPrice:"579.00"
              },
              columns:[
                "销量 152",
                "收藏45人",
                "默认快递"
              ],
              shopInfo:{
                services:[
                  {
                    icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                    name:"退货补运费"
                  },
                  {
                    icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                    name:"全国包邮"
                  },
                  {
                    icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                    name:"7天无理由退货"
                  },
                  {
                    icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                    name:"72小时发货"
                  },
                ],
                shopLogo:"https://s5.mogucdn.com/pic/141211/1agxqe_ieygmodbmiztmzrqmuytambqmmyde_120x120.jpg_100x100.jpg",
                name:"Nike专卖店",
                cFans: 98574,
                cSells: 384791,
                score:[
                  {isBetter:false,name:"描述相符",score:4.66},
                  {isBetter:true,name:"价格合理",score:5},
                  {isBetter:false,name:"质量满意",score:4.65}
                ],
                cGoods:339
              },
              detailInfo:{
                desc:"Nike 詹姆斯使节 实战篮球鞋BQ5436-005-500",
                detailImage: [
                  {
                    key:"穿着效果",
                    list:[
                      "https://s5.mogucdn.com/mlcdn/c45406/191221_8e3a3c2gje3dejh9bkf09a41821b9_750x1167.jpg_468x468.webp",
                      "https://s5.mogucdn.com/mlcdn/c45406/191221_6j4d1i0b842bfd1e66fi6jcebjael_750x2375.jpg_468x468.webp",
                      "https://s5.mogucdn.com/mlcdn/c45406/200221_89ddlgjl9b6jei27970g98eli12ad_750x1512.jpg_468x468.webp",
                      "https://s5.mogucdn.com/mlcdn/c45406/200313_36fbj52ah2961gjgj83ed30ig65ge_750x2294.jpg_468x468.webp",
                      "https://s11.mogucdn.com/mlcdn/c024f5/190417_2d51ljj2a42lddkg49ibag494g3ca_1125x540.png_468x468.webp"
                    ]
                  }
                ]
              },
              itemParams:{
                info:{
                  images:[
                    {}
                  ],
                  set:[
                    {
                      key:"颜色",
                      value:"灰色，紫"
                    },
                    {
                      key:"视觉效果",
                      value:"无特殊效果"
                    },
                    {
                      key:"鞋面材质",
                      value:"网布"
                    },
                    {
                      key:"鞋底材质",
                      value:"橡胶底"
                    },
                    {
                      key:"功能",
                      value:"减震，轻便"
                    },
                    {
                      key:"品牌",
                      value:"Nike"
                    }
                  ],
                },
                rule:{
                  tables: [
                    [
                      ["尺码","38","39","40","41","42","43"],
                      //["颜色","CD7510-100","CD7510-001"]
                    ]
                  ]
                }
              },
              rate:{
                cRate:1,
                list:[
                  {
                    content:"刚好合适，物廉价美，穿着很舒服，样子也很好看",
                    user:{
                      avatar:"https://s5.mogucdn.com/mlcdn/5abf39/191007_1gb50dl2hii2860gk991hd7hj1e0g_132x132.jpg_64x64.jpg",
                      uname:"小新"
                    },
                    created:1535694719,
                    style:"颜色：灰色 尺码 39",
                    images:[]
                  }
                ],

              }
            },{
              itemInfo:{
                topImages:[
                  "https://s5.mogucdn.com/mlcdn/c45406/200318_0fi97h0f56e7c7j81j30bgiai18lj_800x800.jpg_640x960.v1cAC.70.webp",
                  "https://s5.mogucdn.com/mlcdn/c45406/200318_2e9ldjd0ihd0k0efca35dafeai40j_800x800.jpg_640x960.v1cAC.70.webp",
                  "https://s5.mogucdn.com/mlcdn/c45406/200318_4f5ha750l9a4h7lbhae5ik9j01llb_800x800.jpg_640x960.v1cAC.70.webp"
                ],
                title:"NIKE耐克外套双钩字母夹克外套CJ4889-010-011",
                desc:"NIKE耐克外套双钩字母夹克外套CJ4889-010-011",
                price:"¥659~¥859",
                oldPrice:"824",
                discountDesc:"8折",
                lowNowPrice:"659.00"
              },
              columns:[
                "销量 152",
                "收藏45人",
                "默认快递"
              ],
              shopInfo:{
                services:[
                  {
                    icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                    name:"退货补运费"
                  },
                  {
                    icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                    name:"全国包邮"
                  },
                  {
                    icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                    name:"7天无理由退货"
                  },
                  {
                    icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                    name:"72小时发货"
                  },
                ],
                shopLogo:"https://s5.mogucdn.com/pic/141211/1agxqe_ieygmodbmiztmzrqmuytambqmmyde_120x120.jpg_100x100.jpg",
                name:"Nike专卖店",
                cFans: 98574,
                cSells: 384791,
                score:[
                  {isBetter:false,name:"描述相符",score:4.66},
                  {isBetter:true,name:"价格合理",score:5},
                  {isBetter:false,name:"质量满意",score:4.65}
                ],
                cGoods:339
              },
              detailInfo:{
                desc:"NIKE耐克外套双钩字母夹克外套CJ4889-010-011",
                detailImage: [
                  {
                    key:"穿着效果",
                    list:[
                      "https://s5.mogucdn.com/mlcdn/c45406/200318_0621ekckif38le62cb3kgbe1k8hl3_750x1117.jpg_468x468.webp",
                      "https://s11.mogucdn.com/mlcdn/c45406/200318_3gbfl7k2blfi4264bilcbdlbhci1e_750x2301.jpg_468x468.webp",
                      "https://s11.mogucdn.com/mlcdn/c45406/200318_0f0a324g9c5ai2ebigfd80ka02a7a_750x1522.jpg_468x468.webp",
                      "https://s5.mogucdn.com/mlcdn/c45406/200318_8c94jklalhe4lh3j935aicjl08fc0_750x1535.jpg_468x468.webp",
                      "https://s11.mogucdn.com/mlcdn/c024f5/190417_2d51ljj2a42lddkg49ibag494g3ca_1125x540.png_468x468.webp"
                    ]
                  }
                ]
              },
              itemParams:{
                info:{
                  images:[
                    {}
                  ],
                  set:[
                    {
                      key:"颜色",
                      value:"CJ4889-455,CJ4889-657,CJ4889-010,CJ4889-011"
                    },
                    {
                      key:"图案",
                      value:"字母/文字/数字"
                    },
                    {
                      key:"厚薄",
                      value:"普通"
                    },
                    {
                      key:"衣长",
                      value:"常规款(51-65cm)"
                    },
                    {
                      key:"功能",
                      value:"防风"
                    },
                    {
                      key:"品牌",
                      value:"Nike"
                    }
                  ],
                },
                rule:{
                  tables: [
                    [
                      ["尺码","S","XL","L","M","XXL"],
                      //["颜色","CD7510-100","CD7510-001"]
                    ]
                  ]
                }
              },
              rate:{
                cRate:1,
                list:[
                  {
                    content:"刚好合适，物廉价美，穿着很舒服，样子也很好看",
                    user:{
                      avatar:"https://s5.mogucdn.com/mlcdn/5abf39/191007_1gb50dl2hii2860gk991hd7hj1e0g_132x132.jpg_64x64.jpg",
                      uname:"小新"
                    },
                    created:1535694719,
                    style:"颜色：CJ4889-010 尺码 XL",
                    images:[]
                  }
                ],

              }
            },{
              itemInfo:{
                topImages:[
                  "https://s11.mogucdn.com/mlcdn/c45406/200402_12kdee6hf313i1kabc7jkcd472lhg_800x800.jpg_640x960.v1cAC.70.webp",
                  "https://s11.mogucdn.com/mlcdn/c45406/200402_160kckl33ldb785d279291345akf2_800x800.jpg_640x960.v1cAC.70.webp",
                  "https://s5.mogucdn.com/mlcdn/c45406/200402_1bl0la6id6g654ke94cli1hgc820b_800x800.jpg_640x960.v1cAC.70.webp"
                ],
                title:"NIKE耐克2020夏新款运动服上衣健身训练T恤CJ4705",
                desc:"NIKE耐克2020夏新款运动服上衣健身训练T恤CJ4705",
                price:"¥309",
                oldPrice:"442",
                discountDesc:"7折",
                lowNowPrice:"309.00"
              },
              columns:[
                "销量 152",
                "收藏45人",
                "默认快递"
              ],
              shopInfo:{
                services:[
                  {
                    icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                    name:"退货补运费"
                  },
                  {
                    icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                    name:"全国包邮"
                  },
                  {
                    icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                    name:"7天无理由退货"
                  },
                  {
                    icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                    name:"72小时发货"
                  },
                ],
                shopLogo:"https://s5.mogucdn.com/pic/141211/1agxqe_ieygmodbmiztmzrqmuytambqmmyde_120x120.jpg_100x100.jpg",
                name:"Nike专卖店",
                cFans: 98574,
                cSells: 384791,
                score:[
                  {isBetter:false,name:"描述相符",score:4.66},
                  {isBetter:true,name:"价格合理",score:5},
                  {isBetter:false,name:"质量满意",score:4.65}
                ],
                cGoods:339
              },
              detailInfo:{
                desc:"NIKE耐克2020夏新款运动服上衣健身训练T恤CJ4705",
                detailImage: [
                  {
                    key:"穿着效果",
                    list:[
                      "https://s5.mogucdn.com/mlcdn/c45406/200402_45ghfc5jfldce20a3kfl5iieb0idc_750x1117.jpg_468x468.webp",
                      "https://s5.mogucdn.com/mlcdn/c45406/200402_4j8f4a2k20893ekld6ael3glj8k6k_750x2301.jpg_468x468.webp",
                      "https://s5.mogucdn.com/mlcdn/c45406/200402_38c5li8fa5j548k4cc7c33d3j6868_750x1524.jpg_468x468.webp",
                      "https://s11.mogucdn.com/mlcdn/c024f5/190417_2d51ljj2a42lddkg49ibag494g3ca_1125x540.png_468x468.webp"
                    ]
                  }
                ]
              },
              itemParams:{
                info:{
                  images:[
                    {}
                  ],
                  set:[
                    {
                      key:"颜色",
                      value:"CJ4705-010,CJ4705-100"
                    },
                    {
                      key:"图案",
                      value:"字母/文字/数字"
                    },
                    {
                      key:"厚薄",
                      value:"普通"
                    },
                    {
                      key:"衣长",
                      value:"常规款(51-65cm)"
                    },
                    {
                      key:"功能",
                      value:"吸汗排湿"
                    },
                    {
                      key:"品牌",
                      value:"Nike"
                    }
                  ],
                },
                rule:{
                  tables: [
                    [
                      ["尺码","S","XL","L","M","XXL"],
                      //["颜色","CD7510-100","CD7510-001"]
                    ]
                  ]
                }
              },
              rate:{
                cRate:1,
                list:[
                  {
                    content:"刚好合适，物廉价美，穿着很舒服，样子也很好看",
                    user:{
                      avatar:"https://s5.mogucdn.com/mlcdn/5abf39/191007_1gb50dl2hii2860gk991hd7hj1e0g_132x132.jpg_64x64.jpg",
                      uname:"小新"
                    },
                    created:1535694719,
                    style:"颜色：CJ4705-010 尺码 XL",
                    images:[]
                  }
                ],

              }
            },{
              itemInfo:{
                topImages:[
                  "https://s11.mogucdn.com/mlcdn/c45406/200402_47dkdjcdc6abb32362lh12e1ai8be_800x800.jpg_640x960.v1cAC.70.webp",
                  "https://s5.mogucdn.com/mlcdn/c45406/200402_8285j3fbi9151ci52aci84863ihc8_800x800.jpg_640x960.v1cAC.70.webp",
                  "https://s11.mogucdn.com/mlcdn/c45406/200402_0i32jhg191kb2chlgf506he12h815_800x800.jpg_640x960.v1cAC.70.webp"
                ],
                title:"NIKE耐克短袖男JORDAN透气飞人运动服T恤BQ6741",
                desc:"NIKE耐克短袖男JORDAN透气飞人运动服T恤BQ6741",
                price:"¥169~¥209",
                oldPrice:"211",
                discountDesc:"8折",
                lowNowPrice:"169.00"
              },
              columns:[
                "销量 152",
                "收藏45人",
                "默认快递"
              ],
              shopInfo:{
                services:[
                  {
                    icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                    name:"退货补运费"
                  },
                  {
                    icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                    name:"全国包邮"
                  },
                  {
                    icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                    name:"7天无理由退货"
                  },
                  {
                    icon:"//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png",
                    name:"72小时发货"
                  },
                ],
                shopLogo:"https://s5.mogucdn.com/pic/141211/1agxqe_ieygmodbmiztmzrqmuytambqmmyde_120x120.jpg_100x100.jpg",
                name:"Nike专卖店",
                cFans: 98574,
                cSells: 384791,
                score:[
                  {isBetter:false,name:"描述相符",score:4.66},
                  {isBetter:true,name:"价格合理",score:5},
                  {isBetter:false,name:"质量满意",score:4.65}
                ],
                cGoods:339
              },
              detailInfo:{
                desc:"NIKE耐克短袖男JORDAN透气飞人运动服T恤BQ6741",
                detailImage: [
                  {
                    key:"穿着效果",
                    list:[
                      "https://s5.mogucdn.com/mlcdn/c45406/200402_45ghfc5jfldce20a3kfl5iieb0idc_750x1117.jpg_468x468.webp",
                      "https://s11.mogucdn.com/mlcdn/c45406/200402_31fhdc8cbi9ec432ieg6lgja4hea9_750x2301.jpg_468x468.webp",
                      "https://s11.mogucdn.com/mlcdn/c45406/200402_346bf994bdec6l0g2l477gf9017f6_750x1524.jpg_468x468.webp",
                      "https://s11.mogucdn.com/mlcdn/c024f5/190417_2d51ljj2a42lddkg49ibag494g3ca_1125x540.png_468x468.webp"
                    ]
                  }
                ]
              },
              itemParams:{
                info:{
                  images:[
                    {}
                  ],
                  set:[
                    {
                      key:"颜色",
                      value:"CJ4705-010,CJ4705-100"
                    },
                    {
                      key:"图案",
                      value:"字母/文字/数字"
                    },
                    {
                      key:"厚薄",
                      value:"普通"
                    },
                    {
                      key:"衣长",
                      value:"常规款(51-65cm)"
                    },
                    {
                      key:"功能",
                      value:"吸汗排湿"
                    },
                    {
                      key:"品牌",
                      value:"Nike"
                    }
                  ],
                },
                rule:{
                  tables: [
                    [
                      ["尺码","S","XL","L","M","XXL"],
                      //["颜色","CD7510-100","CD7510-001"]
                    ]
                  ]
                }
              },
              rate:{
                cRate:1,
                list:[
                  {
                    content:"刚好合适，物廉价美，穿着很舒服，样子也很好看",
                    user:{
                      avatar:"https://s5.mogucdn.com/mlcdn/5abf39/191007_1gb50dl2hii2860gk991hd7hj1e0g_132x132.jpg_64x64.jpg",
                      uname:"小新"
                    },
                    created:1535694719,
                    style:"颜色：CJ4705-010 尺码 XL",
                    images:[]
                  }
                ],

              }
            }
         ]
        }
      },
      created() {
        // 1.保存传入的iid
        this.iid = this.$route.params.iid

        // 2.根据iid请求详情数据
        this.getInfo(this.iid)

        //推荐信息
        this._getRecommend()

      },
      methods: {
        imageLoad() {
          this.$refs.scroll.refresh()
        },
        getInfo(iid){
          switch (iid) {
            case "1m70y5k":
              this.info = this.data[0]
              this.putInfo(this.info)
              break
            case "1m745k0":
              this.info = this.data[1]
              this.putInfo(this.info)
              break
            case "1lrzvr8":
              this.info = this.data[2]
              this.putInfo(this.info)
              break
            case "1jw0sr2":
              this.info = this.data[3]
              this.putInfo(this.info)
              break
            case "1m7s9c4":
              this.info = this.data[4]
              this.putInfo(this.info)
              break
            case "1m7rp9w":
              this.info = this.data[5]
              this.putInfo(this.info)
              break
            case "1lyp2vg":
              this.info = this.data[6]
              this.putInfo(this.info)
              break
            case "1m4tdhy":
              this.info = this.data[7]
              this.putInfo(this.info)
              break

          }

        },
        putInfo(data){
          // 1.获取顶部的图片轮播数据
          this.topImages = data.itemInfo.topImages
          // 2.获取商品信息
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
          // 3.创建店铺信息的对象
          this.shop = new Shop(data.shopInfo)
          // 4.保存商品的详情数据
          this.detailInfo = data.detailInfo;
          // 5.获取参数的信息
          this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
          //6.取得评论信息
          if(data.rate.cRate !== 0){
            this.commentInfo = data.rate.list[0]
          }
        },
        _getRecommend() {
          getRecommend().then((res, error) => {
            if (error) return
            //console.log(res)
            this.recommendList = res.data.list
          })
        }
      }
    }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    height: calc(100% - 44px);
  }
</style>
