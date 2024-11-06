<template>
  <div>
    <div class="changeSkin-gear no-select" @click="open()">
      <div class="keys"> <span id="open-skinMenu"> 切换主题 | SCHEME TOOL &nbsp;<i
            class="iconfont icon-gear inline-block rotating"></i> </span></div>
    </div>
    <div class="skin-menu no-select">
      <div class="theme-controls row-container">
        <ul class="menu-list">
          <li v-for="(item, index) in themes" :key="index">
            <a href="javascript:void(0)" @click="switchTheme(item)"><i :class="item.icon"
                aria-hidden="true"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Tools",
  components: {},
  computed: {
    ...mapState(["themes"]),
  },
  data: () => {
    return {
      styles: [],
    };
  },
  methods: {
    open: () => {
      document.querySelector(".skin-menu").classList.toggle('show');
    },
    switchTheme: (res) => {
      localStorage.removeItem("config");
      const config = {
        theme: res.theme,
      };
      localStorage.setItem("config", JSON.stringify(config));
      document.querySelector("#blog").className = res.theme;
    },
  },
};
</script>

<style lang="scss">
.changeSkin-gear {
  position: fixed;
  right: 0;
  background: none;
  bottom: 0px;
  visibility: visible;
  font-size: 12px;
}

.skin-menu {
  position: fixed;
  bottom: 50px;
  right: 10px;
  height: auto;
  width: 220px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 1px 40px -8px rgba(0, 0, 0, 0.5);

  font-family: "Ubuntu", sans-serif;
  transform: scaleX(0);
  //transiton-property: transform, background;
  transition-duration: 0.3s, 0.3s;
}
.skin-menu:after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: #fff transparent transparent;
}

.skin-menu .row-container {
  height: auto;
  margin: 0;
  padding: 0;
  text-align: center;
}

.skin-menu .row-container .menu-list {
  display: block;
  text-align: center;
  padding: 0;
  margin: 10px auto;
}

.skin-menu .row-container .menu-list li {
  display: inline-block;
  margin: 6px;
  height:36px;
  line-height: 36px;
  width: 36px;
  background-color: #f5f5f5;
  border-radius: 50%;
  cursor: pointer;
}

.skin-menu .row-container .menu-list li a {
  font-size: 12px;
  text-decoration-line: none;
  color: black;
}

.skin-menu.show {
  transform: scaleX(1);
}
</style>
