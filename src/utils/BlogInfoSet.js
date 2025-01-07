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
      BlogContext.setGidAndName("c74cdce3-551f-4ab1-dbb7-08d9c527a5cc","newjersey");
      //BlogContext.setGidAndName(res.guid,res.username);
      BlogApi.loadDefaultCategoryList(1).then((obj)=>{
        if (obj.list.length > 0) {
          BlogContext.setPid(obj.list[0].pageId);
        }
        resolve();
      });
    });
  })
}
