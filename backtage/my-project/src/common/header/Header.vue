<template>
    <div class="header">
        <div class="left">
                <div class="collapse-btn" @click="collapseChage" style="font-size:40px;color:#fff">
                    <i v-if="!collapse" class="el-icon-s-fold"></i>
                    <i v-else class="el-icon-s-unfold"></i>
                </div>
                <div class="logo">后台管理系统</div>
        </div>
        <div class="right">
            <!-- <div class="tab_nav"><i class="el-icon-d-arrow-right"></i></div> -->
            <div class="operation">
                 <img src="../../assets/img/admin.png" alt="">
            </div>
            <div class="quit">
                <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link" style="color:#fff;">
                        admin
                        <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <a target="_blank">
                            <el-dropdown-item>修改个人信息</el-dropdown-item>
                        </a>
                        <a  target="_blank">
                            <el-dropdown-item>查看个人信息</el-dropdown-item>
                        </a>
                        <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script>
import bus from '../bus';
export default {
    name: 'app-header',
    data() {
        return {
            collapse: false,
            // isshow:false,
        }
    },
    methods:{
        collapseChage(){
                this.collapse = !this.collapse;
                bus.$emit('collapse', this.collapse);
            },
         handleCommand(command) {
            if (command == 'loginout') {
                // localStorage.removeItem('ms_username');
                this.$router.push('/login');
            }
        },
    },
    mounted() {
        if (document.body.clientWidth < 1500) {
            this.collapseChage();
        }
    }
}
</script>
<style lang="less" scope>
    .header{
        width: 100%;
        height: 70px;
        border-bottom: 1px solid #242f42;
        display: flex;
        justify-content: space-between;
         background-color: #242f42;
        .left{
            width:75%;
            height: 40px;
            .collapse-btn {
                float: left;
                padding: 0 21px;
                cursor: pointer;
                line-height: 70px;
            }
            .logo {
            float: left;
            width: 250px;
            color: #fff;
            font-size: 25px;
            line-height: 70px;
        }
        }
        .right{
            width: 250px;
            height:69px;
            display: flex;
            justify-content: flex-start;
            box-sizing: border-box;
            padding: 15px 0;
            .tab_nav{
                border-left: 1px solid#ccc;
                width: 50px;
                height: 100%;
                text-align:center;
                line-height: 70px;
            }
            .operation{
                width: 40px;
                 height:40px;
                 position: relative;
                line-height: 40px;
                border-radius: 40px 40px;
                overflow: hidden;
                margin-right: 20px;
                img{
                    width: 100%;
                    height: 100%;
                
             }
            }
            .quit{
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