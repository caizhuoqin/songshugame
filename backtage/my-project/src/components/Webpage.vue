<template>
 <div class="box">
   <div class="top_left">
      <div class="logo">
        <div class="sslogo">

        </div>
        <div class="userlogo">

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
      <div class="tab_nav">
  <el-col :span="12" style="width:225px">
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo"  @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" unique-opened router>
     <template v-for="item in items" v-on="funall(item,items.item)">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
    </el-menu>
  </el-col>
      </div>
   </div>
   <div class="show_right">
     <div class="top">

     </div>
     <div class="show_tab">
       <div class="tablist">
             <keep-alive>
                 <router-view/>
          </keep-alive>
       </div>
     </div>
   </div>

 </div>
</template>

<script>
  export default {
    data(){
      return{
          isshow:false,
          items: [
                    {
                        // icon: 'el-icon-lx-home',
                        index: 'dashboard',
                        title: '系统首页'
                    },
                    {
                        // icon: 'el-icon-lx-cascades',
                        index: 'table',
                        title: '基础表格'
                    },
                    {
                        // icon: 'el-icon-lx-copy',
                        index: 'tabs',
                        title: 'tab选项卡'
                    },
                    {
                        // icon: 'el-icon-lx-calendar',
                        index: '3',
                        title: '表单相关',
                        subs: [
                            {
                                index: 'form',
                                title: '基本表单'
                            },
                            {
                                index: '3-2',
                                title: '三级菜单',
                                subs: [
                                    {
                                        index: 'editor',
                                        title: '富文本编辑器'
                                    },
                                    {
                                        index: 'markdown',
                                        title: 'markdown编辑器'
                                    },
                                ]
                            },
                            {
                                index: 'upload',
                                title: '文件上传'
                            }
                        ]
                    },
                    {
                        // icon: 'el-icon-lx-emoji',
                        index: 'icon',
                        title: '自定义图标'
                    },
                    {
                        // icon: 'el-icon-pie-chart',
                        index: 'charts',
                        title: 'schart图表'
                    },
                    {
                        // icon: 'el-icon-rank',
                        index: '6',
                        title: '拖拽组件',
                        subs: [
                            {
                                index: 'drag',
                                title: '拖拽列表',
                            },
                            {
                                index: 'dialog',
                                title: '拖拽弹框',
                            }
                        ]
                    },
                    {
                        // icon: 'el-icon-lx-global',
                        index: 'i18n',
                        title: '国际化功能'
                    },
                    {
                        // icon: 'el-icon-lx-warn',
                        index: '7',
                        title: '错误处理',
                        subs: [
                            {
                                index: 'permission',
                                title: '权限测试'
                            },
                            {
                                index: '404',
                                title: '404页面'
                            }
                        ]
                    }
                    ,
                    {
                        // icon: 'el-icon-lx-redpacket_fill',
                        index: '/donate',
                        title: '支持作者'
                    }
                ]
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      activeIndex(){
        console.log(222)
      },
    isshowlist:function(){
      this.isshow = !this.isshow;
    }
    },
    computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
    watch: {
       funall:function(key,keyPath){
        console.log(key,keyPath)
      }
    },
  }
</script>
<style lang="less" scope>
html,body{
  box-sizing: border-box;
  *{
    margin: 0;
    padding: 0;
  }
}
.box{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
   .top_left{
      width: 224px;
      height: 100%;
      background: #545c64;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      .logo{
        width: 224px;
        height: 224px;
        background: #233646;
        box-sizing: border-box;
        padding: 10px;
        .sslogo{
          width: 100%;
          height: 48px;
          background: olive;
        }
        .userlogo{
          width: 80px;
          height: 80px;
          border-radius: 64px 64px;
          overflow: hidden;
          background: blue;
          margin: 4px auto;
          img{
            width: 100%;
          }
        }
        .isername{
          width: 100%;
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
      .tab_nav{
        width: 224px;
        height:100%;
      }
    }
    .show_right{
      width: 100%;
      height: 100%;
      background: #fff;
        display: flex;
        flex-direction: column;
       justify-content: space-between;
      .top{
        width: 100%;
        height: 56px;
        border-bottom: 1px solid #e6e6e6;
      }
      .show_tab{
        width: 100%;
        height: 100%;
        background: #f2f2f2;
        box-sizing: border-box;
        padding: 10px;
        overflow:auto;
        .tablist{
          background: #fff;
          width: 100%;
          height: 100%;
        }
      }
    }
}
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 100px;

  }
  
  .el-aside {
    background-color: #333;
    color: #fff;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #333;
    color: #fff;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
