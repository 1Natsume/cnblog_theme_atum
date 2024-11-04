<template>
  <div id="route_body">
    <router-view ref="routeView" class="inner-route-body" :style="{ maxHeight: leftHeight + 'px' }"></router-view>
    <pub-aside ref="pubAside" class="pub-aside" :style="{ maxHeight: rightHeight + 'px' }"></pub-aside>
  </div>

</template>

<script>
  import ArticlesBody from "./CategoryBody";
  import PubAside from "./aside/PubAside";

  export default {
    name: "RouteBody",
    components: {ArticlesBody, PubAside},
    mounted:function(){
    },
    data: () => {
      return {
        leftHeight: '',
        rightHeight: ''
      }
    },
    methods:{

      resetView:function(){
        return;
        let left=this.$refs.routeView.$el.clientHeight;
        let right=this.$refs.pubAside.$el.clientHeight;
        if(left>right){
          right=left;
        }else{
          left=right;
        }
        this.rightHeight=right;
        this.leftHeight=left;
      }
    }
  }
</script>

<style lang="scss">
  #route_body {
    position: relative;
    display: table;
    width: 100%;
    height: 100%;
    border-spacing: 0;
    table-layout: fixed;
    .inner-route-body {
      // display: inline-block;
      //width:100%;
      // vertical-align: top;
      // position: relative;
      // @include worksBodyWidth();
      display: table-cell;
    float: none;
    height: 100%;
    vertical-align: top;
    }
    .pub-aside {
      @include deve4() {
        display: none;
      }
      @include switchHeadBar(){
        display: none;
      }
      // display:inline-block;
      // width: 248px;
      // vertical-align: top;
      // position: relative;
      // border-left: 1px solid #e2e8ea;
      // box-sizing: border-box;
      display: table-cell;
    float: none;
    width: 240px;
    height: 100%;
    vertical-align: top;
    }
  }
</style>
