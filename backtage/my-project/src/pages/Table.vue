<template>
  <div class="box">
    <div class="condition">
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
        <div class="search_buttom">
          <el-button type="primary" icon="el-icon-search"  size="small">搜索</el-button>
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
    </div>
    <div class="tablist_nav">
       <el-table
    :data="tableData"
    style="width: 100%"
    max-height="500"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="date"
      label="日期"
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
      <div class="block" style="float:right;margin-right:200px;">
        <span class="demonstration"></span>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
         input1: '',
        input2: '',
        input3: '',
        input4: '',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
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
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        },
       {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        },{
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        },{
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
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
        currentPage4: 4,
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
      }
    },
  }
</script>
<style lang="less" scope>
  .box{
    width: 100%;
    height: 100%;
    background: #fff;
  }
    .condition{
      width: 100%;
      min-height: 200px;
      box-sizing: border-box;
      padding: 20px;
      border-bottom: 1px solid #ccc;
      position: relative;
      .tabnav{
        width: 100%;
        height: 50px;
        margin: 5px;
        display: flex;
        justify-content: flex-start;
      .tabinp{
        margin:0 8px;
        width: 180px;
        height: 40px;
      }
      .search_buttom{
        position: absolute;
        top:20px;
        right: 30px;
      }
      }

    }
    .pagination_bottom{
      width: 100%;
      height: 30px;
      margin-top: 30px;
    }
    .tablist_nav{
        width: 99%;
        max-height: 65%;
        box-sizing: border-box;
        padding: 20px;
        // overflow: auto;
    }
</style>