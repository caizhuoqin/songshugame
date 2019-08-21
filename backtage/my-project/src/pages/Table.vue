<template>
  <div class="box">
          <div class="option_nav">
            <div class="tab_name">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="tab_option">
            <i class="el-icon-arrow-up" v-if="iconlist" v-on:click="upward"></i>
            <i class="el-icon-arrow-down" v-else v-on:click="upwardlist"></i>
            </div>
          </div>
   <el-collapse-transition>
        <div v-if="conditionupward">
            <div class="condition ransition-box">
        <div class="tabnav">
           <div class="tabinp">
          <el-input
          size="small"
            placeholder="请输入内容"
            suffix-icon="el-icon-edit el-input__icon"
            v-model="input1">
          </el-input>
        </div>
        <div class="tabinp">
          <el-input
            size="small"
            placeholder="请输入内容"
            suffix-icon="el-icon-edit el-input__icon"
            v-model="input2">
          </el-input>
        </div>
        <div class="tabinp">
          <el-input
            size="small"
            placeholder="请输入内容"
            suffix-icon="el-icon-edit el-input__icon"
            v-model="input3">
          </el-input>
        </div>
        <div class="tabinp">
          <el-input
            size="small"
            placeholder="请输入内容"
            suffix-icon="el-icon-edit el-input__icon"
            v-model="input4">
          </el-input>
        </div>
        </div>
        <div class="tabnav">
          <div class="tabinp">
            <el-select v-model="value1" multiple placeholder="请选择" size="small">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </div>
          <div class="tabinp">
          <el-select v-model="value" filterable placeholder="请选择" size="small">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </div>
          <div class="tabinp">
              <el-select v-model="value" placeholder="请选择" size="small">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>

        </div>
        <div class="tabnav">
          <div class="tabinp">
            <div class="search_buttom">
            <el-button type="primary" icon="el-icon-search"  size="small">搜索</el-button>
          </div>
          </div>
          <div class="tabinp">
            <div class="search_buttom">
            <el-button type="primary" icon="el-icon-search"  size="small">搜索</el-button>
          </div>
          </div>
        </div>
    </div>
        </div>
      </el-collapse-transition>


  
    <div class="tablist_nav" ref="tablewrap">
       <el-table
        :data="tableData"
        style="width: 100%"
        :max-height="haihet"
        stripe
        show-summary
        :default-sort = "{prop: 'date', order: 'descending'}"
        >
    <el-table-column
      prop="date"
      label="日期"
      fixed
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      :formatter="formatter">
    </el-table-column>
        <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
   <div class="pagination_bottom">
      <div class="block" style="float:right;margin-right:50px;">
        <span class="demonstration"></span>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="100">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { constants } from 'fs';
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        // getSummaries1:[1,2,3,4,5,6],
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        haihet:'100%',
        tableData: [{
          date: '2016-05-12',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-14',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        },
        {
          date: '2016-05-13',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        },
        {
          date: '2016-05-16',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        },
        {
          date: '2016-05-17',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        },
        {
          date: '2016-05-18',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        },
        {
          date: '2016-05-19',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        },
        {
          date: '2016-05-20',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        },
        {
          date: '2016-05-21',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        },
        {
          date: '2016-06-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        },
        {
          date: '2016-06-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        },
        {
          date: '2016-06-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        },
       {
          date: '2016-06-10',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        },{
          date: '2016-06-15',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        },{
          date: '2016-06-20',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-06-20',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }],
         options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        value1: [],
        currentPage4:4,
        iconlist:true,
        conditionupward:true
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
        handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      formatter(row, column) {
        return row.address;
      },
      upward(){
        this.iconlist = !this.iconlist
        this.conditionupward = !this.conditionupward
        this.haihet =this.haihet+200
      },
      upwardlist(){
        this.iconlist = !this.iconlist
        this.conditionupward = !this.conditionupward
        this.haihet =this.haihet-200
    },
  },
     mounted(){
      this.haihet = parseInt(window.getComputedStyle(this.$refs.tablewrap).height)
      // console.log(window.getComputedStyle(this.$refs.tablewrap).height)
      console.log(this.haihet)
    },
  }
</script>
<style lang="less" scope>
  .box{
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    box-sizing: border-box;
    padding:0 16px;
  }
    .condition{
      width: 100%;
      min-height: 200px;
      box-sizing: border-box;
      padding:10px 0px;
      border-bottom: 1px solid #ccc;
      position: relative;
      .tabnav{
        width: 100%;
        height: 50px;
        margin: 5px;
        display: flex;
        justify-content:start;
      .tabinp{
        margin:0 8px;
        width: 180px;
        height: 40px;
      }
      }

    }
    .option_nav{
        width: 100%;
        height: 30px;
        border-bottom: 1px solid #ccc;
          display: flex;
          justify-content: space-between;
          text-align: center;
          line-height: 30px;
          .tab_name{
            width: 200px;
            height: 30px;
            color: #888;
            font-size: 16px;
            box-sizing: border-box;
            padding: 8px 0;
          }
          .tab_option{
            width: 100px;
            height: 30px;
            i:hover{
            cursor: pointer;
          }
          }
          
      }
    .tablist_nav{
        // width: 99%;
        // height:100%;
        flex: 1;
        box-sizing: border-box;
        overflow:hidden;
    }
    .pagination_bottom{
      width: 100%;
      height: 120px;
      // margin-top: 30px;
    }
    .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>