import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

function loadStateConfig() {
  try {
    localStorage.clear();
    const serializedState = localStorage.getItem("config");
    if (serializedState) {
      return JSON.parse(serializedState);
    } else {
      const config = {
        theme: "style0",
        bg:["https://api.2heng.xin/cover/"]
      };
      localStorage.setItem("config", JSON.stringify(config));
      return config;
    }
  } catch (e) {
    // 处理解析错误
    
    return null;
  }
}
function loadStateThemes() {
  try {
    const serializedState = localStorage.getItem("themes");
    if (serializedState) {
      return JSON.parse(serializedState);
    } else {
      const themes = [
        {
          id: 1,
          theme: "style1",
          icon:"icon iconfont link",
          dec:""
        },
        {
          id: 2,
          theme: "style0",
          icon:"icon iconfont link",
          dec:""
        },
        {
          id: 3,
          theme: "Sakura",
          icon:"icon iconfont link",
          dec:"Sakura"
        },
      ];
      localStorage.setItem("themes", JSON.stringify(themes));
      return themes;
    }
  } catch (e) {
    // 处理解析错误
    return null;
  }
}
const config = loadStateConfig();
const themes = loadStateThemes();
export default new Vuex.Store({
  state: {
    config: config,
    themes: themes,
  },
  getters: {},
  mutations: {},
  actions: {},
});
