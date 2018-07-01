<template>
  <div class="order">
    <div>
      订单列表
    </div>
    <table>
      <thead>
      <tr>
        <th width="20%">订单号</th>
        <th width="20%">渠道</th>
        <th width="20%">客户</th>
        <th width="20%">贷款金额(万)</th>
        <th width="20%">创建时间</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in orderList">
        <td>{{item.orderNo}}</td>
        <td>{{item.channelName}}</td>
        <td>{{item.name}}</td>
        <td>{{item.loanAmount}}</td>
        <td>{{item.loanAmount}}</td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        orderList: []
      }
    },
    mounted() {
      this.query();
    },
    created: function () {
      this.query();
    },
    methods: {
      query: function () {
        // var me = this;
        // var url = "http://localhost:8080/demo/order/list";
        // this.$http.get(url).then(function (res) {
        //   me.orderList = res.data.data;
        // }, function (error) {
        //
        // })
        var axios = require('axios');
        axios.get('../../mock/data.json', function (res) {

        })
        // this.$http.jsonp("http://localhost:8080/demo/order/list", {},
        //   {
        //     headers: {},
        //     emulateJSON: true
        //   }).then((response) => {
        //     console.log(response);
        // });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
