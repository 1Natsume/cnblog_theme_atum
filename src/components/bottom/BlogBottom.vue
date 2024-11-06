<template>
  <div id="blog_bottom">
    <div class="copyright">{{copyright}}
      <span class="author-clz" @click="page">
        <span>{{detail()}}</span>
      </span>
    </div>
    <div class="technology">{{technology}}</div>
  </div>
</template>

<script>
  import BlogContext from "../../context/BlogContext";

  console.log(
    BlogContext.outPrint[0],
    BlogContext.outPrint[1],
    BlogContext.outPrint[2]
  );
  let page = BlogContext.myPage;
  let detail = BlogContext.myUrl;
  export default {
    name: "BlogBottom",
    methods: {
      page: () => {
        window.open(page);
      },
      detail: () => {
        return detail;
      }
    },
    data: () => {
      //建议这里改为 copyright 2020 博主名 theme 主题名（你博客链接）
      return {
        copyright: 'Copyright © ' + new Date().getFullYear() + ' ' + BlogContext.blogName,
        plugName: "c_blog",
        author: "cjunn",
        technology: 'Powered by vue on cnblogs',
      }
    }
  }
</script>
