<template>
  <div id="blog" :class="config.theme">
    <div id="app">
      <router-view />
    </div>
  </div>
</template>

<script>
import BlogContext from "./context/BlogContext";
import "./assets/css/theme/style0.scss";
//import "./assets/css/theme/style1.scss";
import { mapState } from 'vuex'; 
export default {
  name: "App",
  computed: {  
    ...mapState(['config'])  
  },
  data: () => {
    
    return {}
      
  },
  
  methods: {
    themeStyle:()=>{
      return null
    }
  },
};
</script>

<style lang="scss">
#app {
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
