<template>
    <div class="home">
            <div class="top">
                <app-header></app-header>
            </div>
            <div class="bottom">
                <div class="tabs">
                    <sidebar></sidebar>
                </div>
                <div class="tablist">
                   <div class="tablist_center">
                    <div class="toplist">
                        <tablistnav></tablistnav>
                    </div>
                    <div class="bottomlist">
                        <router-view></router-view>
                    </div>
                   </div>
                </div>
            </div>
    </div>
        
</template>
<script>
import bus from '../bus';
export default {
    // name:'home',
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

<style lang="less" scope>
    html,body{
        width: 100%;
        height: 100%;
    }
    *{
        margin: 0;
        padding: 0;
    }
    .home{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
    }
    .top{
        width: 100%;
        height: 72px;
        background-color: #242f42;
    }
    .bottom{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        .tabs{
            // width: 224px;
            height: 100%;
            background-color: #324157;
        }
        .tablist{
            width: 100%;
            height: 100%;
            background-color: #f2f2f2;
                box-sizing: border-box;
                display: flex;
                padding:16px;
            .tablist_center{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: start;
                flex-direction: column;
                .toplist{
                    width: 100%;
                    height: 30px;
                    margin-bottom: 8px;
                }
                .bottomlist{
                    width: 100%;
                    height: 100%;
                    // overflow:auto;
                }
            }
        }
    }
</style>