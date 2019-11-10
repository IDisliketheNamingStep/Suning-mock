<template>
  <div id="app">
    <keep-alive>
      <router-view :key="this.$route.fullPath"/>
    </keep-alive>
  </div>
</template>

<style>
  *{
    margin: 0;
    padding: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  *{
    font-size: 12px;
  }
  ul{
    list-style: none;
  }
  .fl{
    float: left;
  }

  .fr{
    float: right;
  }
  p{
    font-size: 12px;
    background-color: rgba(255,255,255,0);
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  em,i,strong,b{
    font-style: normal;
  }

  input{
    border: none;
    outline: none;
  }

  .clearfix:before,.clearfix:afer{
    content: "";
    display: table;
  }

  .clearfix:after{
    clear:both;
  }

  .clearfix{
    zoom:1;
  }


</style>
