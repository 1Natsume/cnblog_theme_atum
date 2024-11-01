import BlogContext from "../context/BlogContext";
import BlogApi from "./BlogApi";
export default ()=>{
  /*防止本地启动不起来*/
  window.currentBlogApp=window.currentBlogApp||'newjersey';
  window.currentBlogId=window.currentBlogId||'725204';
  return new Promise((resolve, reject) => {
    if (!(window.currentBlogApp && window.currentBlogId && BlogContext.autoInfoReset)) {
      resolve();
      return;
    }
    BlogContext.setBlogAccAndId(window.currentBlogApp,window.currentBlogId);
    BlogApi.loadAuthorBlogInfo().then((res)=>{
      BlogContext.setGidAndName(res.guid,res.username);
      BlogApi.loadDefaultCategoryList(0).then((obj)=>{
        if (obj.list.length > 0) {
          BlogContext.setPid(obj.list[0].pageId);
        }
        resolve();
      });
    });
  })
}
