<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        message: ''
      }
    },
    beforeCreate() {
      // console.group('beforeCreate 创建前状态===============》');
      // console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
      // console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
      // console.log("%c%s", "color:red", "message: " + this.message)
    },
    created() {
      // console.group('created 创建完毕状态===============》');
      // console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
      // console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
      // console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
    },
    beforeMount() {
      // console.group('beforeMount 挂载前状态===============》');
      // console.log("%c%s", "color:red", "el     : " + (this.$el)); //已被初始化
      // console.log(this.$el);
      // console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
      // console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
    },
    mounted() {
      // console.group('mounted 挂载结束状态===============》');
      // console.log("%c%s", "color:red", "el     : " + this.$el); //已被初始化
      // console.log(this.$el);
      // console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
      // console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
    },
    beforeUpdate() {
      // console.group('beforeUpdate 更新前状态===============》');
      // console.log("%c%s", "color:red", "el     : " + this.$el);
      // console.log(this.$el);
      // console.log("%c%s", "color:red", "data   : " + this.$data);
      // console.log("%c%s", "color:red", "message: " + this.message);
    },
    updated() {
      // console.group('updated 更新完成状态===============》');
      // console.log("%c%s", "color:red", "el     : " + this.$el);
      // console.log(this.$el);
      // console.log("%c%s", "color:red", "data   : " + this.$data);
      // console.log("%c%s", "color:red", "message: " + this.message);
    },
    beforeDestroy() {
      // console.group('beforeDestroy 销毁前状态===============》');
      // console.log("%c%s", "color:red", "el     : " + this.$el);
      // console.log(this.$el);
      // console.log("%c%s", "color:red", "data   : " + this.$data);
      // console.log("%c%s", "color:red", "message: " + this.message);
    },
    destroyed() {
      // console.group('destroyed 销毁完成状态===============》');
      // console.log("%c%s", "color:red", "el     : " + this.$el);
      // console.log(this.$el);
      // console.log("%c%s", "color:red", "data   : " + this.$data);
      // console.log("%c%s", "color:red", "message: " + this.message)
    }

  }
</script>

<style>
  #app {
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
    font-family: 'Microsoft YaHei',"微软雅黑";
    /* font-family:"fzmh","方正美黑简体","electronicFont","microsoft yahei", arial, sans-serif; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
