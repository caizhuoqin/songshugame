<template>
 <div class="box">
   <div class="top_left">
      <div class="logo">

      </div>
      <div class="tab_nav">
  <el-col :span="12" style="width:225px">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-col>
      </div>
   </div>
   <div class="show_right">
     <div class="top">

     </div>
     <div class="show_tab">
       <div class="tablist">

       </div>
     </div>
   </div>

 </div>
</template>



<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>




<style lang="less" scope>
html,body{
  box-sizing: border-box;
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
        background: orange;
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
        border-bottom: 1px solid #000;
        margin-bottom: 5px;
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
