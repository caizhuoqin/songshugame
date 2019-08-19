<template>
    <div class="header">
        <div class="left">
        </div>
        <div class="right">
            <!-- <div class="tab_nav"><i class="el-icon-d-arrow-right"></i></div> -->
            <div class="operation ">
                 <img src="../../assets/img/songshu-logoimg.png" alt="">
                <!-- <div v-on:click="isshowlist">
                    <span>关闭操作</span><i class="el-icon-arrow-down"></i>
                </div>
                <div class="operation_tabs" v-show="isshow">
                    <div class="operation_top">
                        <p>定位当前选项卡</p>
                    </div>
                    <div class="operation_center">
                         <p>关闭其他选项卡</p>
                        
                    </div>
                    <div class="operation_bottom">
                        <p>关闭全部选项卡</p>   
                    </div>
                </div> -->
            </div>
            <div class="quit"><i class="el-icon-d-arrow-right"></i><span>退出</span></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'app-header',
    props: {
        title: String
    },
    data() {
        return {
            isshow:false,
        }
    },
    methods:{
        isshowlist:function(){
            this.isshow =!this.isshow
        }
    }
}
</script>
<style lang="less" scope>
    .header{
        width: 100%;
        height: 40px;
        border-bottom: 2px solid #242f42;
        display: flex;
        justify-content: space-between;
        background: #fff;
        .left{
            width:75%;
            height: 40px;
        }
        .right{
            width: 250px;
            height:39px;
            display: flex;
            justify-content: flex-start;
            text-align:center;
            color: #888;
            .tab_nav{
                border-left: 1px solid#ccc;
                width: 50px;
                height: 100%;
                text-align:center;
                           line-height: 40px;
            }
            .operation{
                border-left: 1px solid#ccc;
                width: 150px;
                 height: 100%;
                 position: relative;
                line-height: 40px;
                img{
                    width: 100%;
                    height: 100%;
                }
                 .operation_tabs{
                     width: 170px;
                     height: 120px;
                     background: #fff;
                     position: absolute;
                     top:42px;
                     right: 0;
                     color: #999;
                     border: 1px solid #ccc;
                     .operation_top{
                         width: 100%;
                         height: 40px;
                         line-height: 40px;
                         border-bottom: 1px solid #ccc;
                         font-size: 14px;
                     }
                     .operation_center{
                        width: 100%;
                         height: 40px;
                         font-size: 14px;
                         line-height: 40px;
                     }
                     .operation_bottom{
                         width: 100%;
                         height: 40px;
                         font-size: 14px;
                         line-height: 40px;
                     }
                     :hover{
                         background: #f2f2f2;
                     }
                 }
            }
            .quit{
            border-left: 1px solid#ccc;
                width: 100px;
                 height: 100%;
                line-height: 40px;
                i{
                    font-size: 20px;
                }
            }
        :hover{
            cursor: pointer;
        }
        }
    }

</style>