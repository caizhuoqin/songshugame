<template>
    <div class="heme">
            <div class="tab">
                <div class="logo">
                    <div class="losoimg">
                        <img src="../../assets/img/songshu-logoimg.png" alt="">
                    </div>
                    <div class="isername">
                    <div v-on:click="isshowlist">
                        <p class="isername_name">admin</p>
                    <p class="isername_user">超级管理员</p>
                    </div>
                    <div class="isshow" v-show="isshow">
                        <div class="isshowlist">
                        <p>编辑个人资料</p>
                        <p>修改密码</p>
                        </div>
                        <div class="isshowback"><p>安全退出</p></div>
                    </div>
                    </div>
                </div>
                <div class="tablist">
                    <sidebar></sidebar>
                </div>
            </div>
            <div class="tavlist">
                <app-header></app-header>
                <tablistnav></tablistnav>
                <div class="router_list">
                    <router-view></router-view>
                </div>
            </div>
    </div>
</template>
<script>
import bus from '../bus';
export default {
    data(){
        return{
            isshow:false,
             tagsList: [],
            collapse: false
        }
    },
    methods:{
        isshowlist:function(){
            this.isshow = !this.isshow;
            },
    },
    created(){
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })

            // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
            bus.$on('tablistnav', msg => {
                let arr = [];
                for(let i = 0, len = msg.length; i < len; i ++){
                    msg[i].name && arr.push(msg[i].name);
                }
                this.tagsList = arr;
            })
        }
    
}
</script>

<style lang="less">
    html,body{
        width: 100%;
        height: 100%;
    }
    *{
        margin: 0;
        padding: 0;
    }
    .heme{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
    .tab{
        width: 224px;
        height: 100%;
        background-color: #243747;
        .logo{
            width: 224px;
            height: 160px;
            background: #243747;
            box-sizing: border-box;
            padding: 20px;
            .losoimg{
                width: 180px;
                height: 50px;
                img{
                    width: 100%;
                }
            }
        .isername{
          width: 100%;
          margin-top: 20px;
          text-align:center;
          font-size: 16px;
          color: #fff;
          :hover{
            cursor: pointer;
          }
          position: relative;
          .isername_user{
            color: #888;
          }

        }
        .isshow{
          position: absolute;
          width: 200px;
          height: 120px;
          background: #fff;
          top:52px;
          left: 0px;
          z-index: 10;
          .isshowlist{
            width: 100%;
            height: 80px;
             box-sizing:border-box;
              border-bottom: 1px solid #ccc;
             text-align:left;
             color: #888;
             padding: 4px 32px;
             line-height: 32px;
          }
          .isshowback{
             width: 100%;
             height: 39px;
             box-sizing:border-box;
             text-align:left;
             color: #888;
             padding: 4px 32px;
             line-height: 32px;
          }
        }
        }
    }
    .tavlist{
        width: 100%;
        height: 100%;
        background-color: #f0f0f0;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        .router_list{
            width: 100%;
            height: 100%;
            box-sizing:border-box;
            background:f2f2f2;
            padding: 16px;
            overflow: hidden;
        }
    }
</style>