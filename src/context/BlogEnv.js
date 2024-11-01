let blogUrlPre = "https://www.cnblogs.com/";
let manPage = "https://i.cnblogs.com/";
let sendPage = "https://msg.cnblogs.com/send/${BLOG_ACC}";
let subPage = "https://www.cnblogs.com/${BLOG_ACC}/rss";
let indexPage = blogUrlPre+"${BLOG_ACC}";
let autoInfoReset = true;
let blogAcc = "newjersey";
let blogId = "725204";
let blogPostId = "18156273";
let blogName = "newjersey";
let blogUserGuid = "c74cdce3-551f-4ab1-dbb7-08d9c527a5cc";
let pageBarImgs = 21;
let myCommentSize=10;
let blogCommentSize=50;
let commentLength = 10;
let openMathJax = false;
let urlMathJax = "https://mathjax.cnblogs.com/2_7_5/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
let musicApiUrl = "https://api.i-meto.com/meting/api?server=netease&type=:type&id=:id&r=:r";
let extendStylePath = "https://cjunn.gitee.io/blog_theme_atum"
let headBackImg = `https://img2.baidu.com/it/u=1129333932,2974296147&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500`;
let bigBackImg = `${extendStylePath}/img/body/background.jpg`;
let panelItemPic=Array.from(Array(35), (v,k) => (`${extendStylePath}/img/pageItem/page-item-$I.jpg`).replace("$I",k+1));
let panelRightImgPic=Array.from(Array(10), (v,k) =>(`${extendStylePath}/img/menuIcon/menuicon-$I.png`).replace("$I",k));
let musicSignImg=`${extendStylePath}/img/body/music_play.png`;
let blogSign = "";
let aboutmeHtml = `<img src='${extendStylePath}/img/ing/aboutme.jpg'/>`;
let avatarSign = "";
let ingTitle = "你的一字一句犹如刀疤划心上，我的一举一动随你改变多荒唐。";
let blogFriendList = [];                      //{name: '', url: ''}格式
let blogUsedLinks = [];                       //{name: '', url: ''}格式
let musicIds = ["7282638202"];
let qq = "592571519";
let email = "592571519@qq.com"
let github = "cjunn";
let defHeadImg= `https://img2.baidu.com/it/u=1129333932,2974296147&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500`;
let themeStyle="style0";
let feelingBlogId=13393903;
let mainExtNav = [
  {title: "首页",url:"/subject/category/default.html",icon: "home"},
  {title: "反馈", url: '/c/subject/p/12494785.html', icon: "bug"},
  {title: "赞赏", url: '/c/subject/p/12495086.html', icon: "gift"}
];

let adDisplay="<div class=\"blog-cloud-ad-item\">\n" +
  "            <img src=\"https://img.alicdn.com/tfs/TB1nkoQDlv0gK0jSZKbXXbK2FXa-440-240.jpg\"\n" +
  "                 onclick=\"window.open('https://www.aliyun.com/activity/daily/cloud?userCode=njf7bpon')\">\n" +
  "          </div>\n" +
  "          <div class=\"blog-cloud-ad-item\">\n" +
  "            <img src=\"https://upload-dianshi-1255598498.file.myqcloud.com/345-60759ea0b2a21d3d1c764570c2a9f2960bfdf128.200.jpg\"\n" +
  "                 onclick=\"window.open('https://url.cn/OLi4lNzq')\">\n" +
  "          </div>";


let setBlogAccAndId=(acc,id)=>{
  blogAcc=acc;
  blogId=id;
  sendPage=sendPage.replace("${BLOG_ACC}",acc);
  subPage=subPage.replace("${BLOG_ACC}",acc);
  indexPage=indexPage.replace("${BLOG_ACC}",acc);
}
let setGidAndName=()=>(gid,name)=>{
  blogUserGuid=gid;
  blogName=name;
}
let setPid=(pId)=>{
  blogPostId=pId;
}
export default {
  blogUrlPre,
  manPage,
  sendPage,
  subPage,
  indexPage,
  autoInfoReset,
  blogAcc,
  blogId,
  blogPostId,
  blogName,
  blogUserGuid,
  setBlogAccAndId,
  setGidAndName,
  setPid,
  pageBarImgs,
  commentLength,
  openMathJax,
  urlMathJax,
  myCommentSize,
  blogCommentSize,
  musicApiUrl,
  musicIds,
  mainExtNav,
  panelItemPic,
  panelRightImgPic,
  musicSignImg,headBackImg,defHeadImg,adDisplay,
  feelingBlogId,themeStyle,qq,github,email,blogUsedLinks,blogFriendList,feelingBlogId,blogSign ,aboutmeHtml,avatarSign,ingTitle,bigBackImg
}
