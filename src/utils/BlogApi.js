import BlogContext from "../context/BlogContext";
import $ from "jquery";
import request from "./request";
let blogApi = {
  /*音乐播放器API*/
  loadMusicSong: (id) => {
    return BlogContext.apiLoadMusicSong(
      $,
      { id: id },
      BlogContext.musicApiUrl
        .replace(":type", "song")
        .replace(":id", id)
        .replace(":r", Math.random())
    );
  },
  loadMusicSonglrc: (url) => {
    return request.get(url).then((res) => {
      return res
    });
    
   
  },
  loadMusicPlayList: (id) => {
    return BlogContext.apiLoadMusicPlayList(
      $,
      { id: id },
      BlogContext.musicApiUrl
        .replace(":type", "playlist")
        .replace(":id", id)
        .replace(":r", Math.random())
    );
  },
  loadMusicSongExt: () => {
    return new Promise((oubresolve, oubreject) => {
      let proArr = [];
      BlogContext.musicIds.forEach((item) => {
        proArr.push(
          new Promise((resolve, reject) => {
            blogApi.loadMusicSong(item).then((data) => {
              resolve(data);
            });
          })
        );
      });
      Promise.all(proArr).then((list) => {
        oubresolve(list);
      });
    });
  },
  loadMusicPlayListExt: () => {
    return new Promise((oubresolve, oubreject) => {
      blogApi.loadMusicPlayList(BlogContext.musicIds).then((list) => {
        oubresolve(list);
      });
    });
  },
  parseMusicInterface: function (list) {
    let reData = [];
    list.forEach((item, index) => {
      item = item[0] || item;
      reData.push({
        index: index,
        pic: item.pic,
        author: item.author,
        title: item.title,
        url: item.url,
        lrc: item.lrc,
      });
    });
    return reData;
  },
  loadMusicList: () => {
    let promis;
    if (Array.isArray(BlogContext.musicIds)) {
      promis = blogApi.loadMusicPlayListExt();
    } else {
      promis = blogApi.loadMusicSongExt();
    }
    return new Promise((resolve, reject) => {
      promis.then((list) => {
        resolve(blogApi.parseMusicInterface(list));
      });
    });
  },
  loadArticleNum: () => {
    return BlogContext.apiLoadArticleNum(
      $,
      { blogAcc: BlogContext.blogAcc },
      "/" + BlogContext.blogAcc + "/ajax/blogStats/"
    );
  },
  loadBlogPostInfo: (pageId) => {
    return BlogContext.apiLoadBlogPostInfo(
      $,
      {
        blogAcc: BlogContext.blogAcc,
        blogId: BlogContext.blogId,
        pageId: pageId,
        blogUserGuid: BlogContext.blogUserGuid,
      },
      "/" +
        BlogContext.blogAcc +
        "/ajax/BlogPostInfo.aspx?blogId=" +
        BlogContext.blogId +
        "&postId=" +
        pageId +
        "&blogUserGuid=" +
        BlogContext.blogUserGuid
    );
  },
  loadAuthorHeadImg: () => {
    // return BlogContext.apiLoadAuthorHeadImg(
    //   $,
    //   {blogAcc:BlogContext.blogAcc,
    //     blogId:BlogContext.blogId,
    //     postId:BlogContext.blogPostId,
    //     blogUserGuid:BlogContext.blogUserGuid},
    //     "/" + BlogContext.blogAcc + "/ajax/BlogPostInfo.aspx?blogId=" + BlogContext.blogId + "&postId=" + BlogContext.blogPostId + "&blogUserGuid=" + BlogContext.blogUserGuid
    //   );

    return request.get("/api/users").then((res) => {
      return {
        face: res["Face"],
        avatar: res["Avatar"],
      };
    });
  },
  loadCloudLabel: () => {
    return BlogContext.apiLoadCloudLabel(
      $,
      { blogAcc: BlogContext.blogAcc },
      "/" + BlogContext.blogAcc + "/tag/"
    );
  },
  loadAuthorBlogInfo: () => {
    return BlogContext.apiLoadAuthorBlogInfo(
      $,
      { blogAcc: BlogContext.blogAcc },
      "/" + BlogContext.blogAcc + "/ajax/news"
    );
    return request.get("/api/users").then((res) => {
      return {
        username: res["DisplayName"],
        age: res["Seniority"],
        follow: res["FollowerCount"],
        focus: res["FollowingCount"],
      };
    });
  },
  blogFollow: () => {
    return BlogContext.apiBlogFollow(
      $,
      { blogAcc: BlogContext.blogAcc, blogUserGuid: BlogContext.blogUserGuid },
      "/" + BlogContext.blogAcc + "/ajax/Follow/FollowBlogger.aspx"
    );
  },
  getCommentBody: (commentId) => {
    return BlogContext.apiGetCommentBody(
      $,
      {
        blogAcc: BlogContext.blogAcc,
        blogUserGuid: BlogContext.blogUserGuid,
        commentId: commentId,
      },
      "/" + BlogContext.blogAcc + "/ajax/comment/GetCommentBody.aspx"
    );
  },
  addComment: (postId, body, parentCommentId) => {
    postId = parseInt(postId);
    parentCommentId = parentCommentId ? parseInt(parentCommentId) : 0;
    return BlogContext.apiAddComment(
      $,
      {
        blogAcc: BlogContext.blogAcc,
        postId: postId,
        body: body,
        parentCommentId: parentCommentId,
      },
      "/" + BlogContext.blogAcc + "/ajax/PostComment/Add.aspx"
    );
    var data = {
      body: body,
    };
    return request.post(
      "/api/blogs/newjersey/posts/" + postId + "/comments",
      data
    );
  },
  /*更新评论*/
  updateComment: (commentId, body) => {
    return BlogContext.apiUpdateComment(
      $,
      { blogAcc: BlogContext.blogAcc, commentId: commentId, body: body },
      "/" + BlogContext.blogAcc + "/ajax/PostComment/Update.aspx"
    );
  },
  deleteComment: (commentId, pageIndex, parentId) => {
    return BlogContext.apiDeleteComment(
      $,
      {
        blogAcc: BlogContext.blogAcc,
        commentId: parseInt(commentId),
        pageIndex: pageIndex,
        parentId: parentId,
      },
      "/" + BlogContext.blogAcc + "/ajax/comment/DeleteComment.aspx"
    );
  },
  diggComment: (postId, commentId, isAbandoned) => {
    return BlogContext.apiDiggComment(
      $,
      {
        blogAcc: BlogContext.blogAcc,
        commentId: parseInt(commentId),
        isAbandoned: isAbandoned,
        postId: parseInt(postId),
        voteType: "Digg",
      },
      "/" + BlogContext.blogAcc + "/ajax/vote/comment"
    );
  },
  buryComment: (postId, commentId, isAbandoned) => {
    return BlogContext.apiBuryComment(
      $,
      {
        blogAcc: BlogContext.blogAcc,
        commentId: parseInt(commentId),
        isAbandoned: isAbandoned,
        postId: parseInt(postId),
        voteType: "Bury",
      },
      "/" + BlogContext.blogAcc + "/ajax/vote/comment"
    );
  },
  voteBlogPost: (postId, isAbandoned) => {
    return BlogContext.apiVoteBlogPost(
      $,
      {
        blogAcc: BlogContext.blogAcc,
        isAbandoned: isAbandoned,
        postId: parseInt(postId),
        voteType: "Digg",
      },
      "/" + BlogContext.blogAcc + "/ajax/vote/blogpost"
    );
  },
  buryBlogPost: (postId, isAbandoned) => {
    return BlogContext.apiBuryBlogPost(
      $,
      {
        blogAcc: BlogContext.blogAcc,
        isAbandoned: isAbandoned,
        postId: postId,
        voteType: "Bury",
      },
      "/" + BlogContext.blogAcc + "/ajax/vote/blogpost"
    );
  },
  loadCommentList: (articleId, page) => {
    return new Promise((resolve, reject) => {
      BlogContext.apiLoadCommentList(
        $,
        { blogAcc: BlogContext.blogAcc, postId: articleId, pageIndex: page },
        "/" +
          BlogContext.blogAcc +
          "/ajax/comments-block?postId=" +
          articleId +
          "&pageIndex=" +
          page
      ).then((obj) => {
        if (!obj.avatarUrl && !obj.avatarHdUrl) {
          obj.avatarUrl = BlogContext.defHeadImg;
          obj.avatarHdUrl = BlogContext.defHeadImg;
        }
        resolve(obj);
      });
    });
  },
  loadCategoriesTags: (articleId) => {
    return BlogContext.apiLoadCategoriesTags(
      $,
      {
        blogAcc: BlogContext.blogAcc,
        blogId: BlogContext.blogId,
        postId: articleId,
      },
      "/" +
        BlogContext.blogAcc +
        "/ajax/CategoriesTags.aspx?blogId=" +
        BlogContext.blogId +
        "&postId=" +
        articleId
    );
  },
  loadCommentCount: (articleId) => {
    return BlogContext.apiLoadCommentCount(
      $,
      { blogAcc: BlogContext.blogAcc, postId: articleId },
      "/" +
        BlogContext.blogAcc +
        "/ajax/GetCommentCount.aspx?postId=" +
        articleId
    );
  },

  loadViewCount: (articleId) => {
    return BlogContext.apiLoadViewCount(
      $,
      { blogAcc: BlogContext.blogAcc, postId: articleId },
      "/" + BlogContext.blogAcc + "/ajax/GetViewCount.aspx?postId=" + articleId
    );
  },
  loadArticle: (articleId) => {
    return BlogContext.apiLoadArticle(
      $,
      { blogAcc: BlogContext.blogAcc, articleId: articleId },
      "/" + BlogContext.blogAcc + "/p/" + articleId
    );
    return request.get("/api/blogposts/" + articleId + "/body").then((res) => {
      return {
        body: res,
      };
    });
  },
  loadTagList: (tagId, pageNum) => {
    return BlogContext.apiLoadTagList(
      $,
      { blogAcc: BlogContext.blogAcc, tagId: tagId, page: pageNum },
      "/" + BlogContext.blogAcc + "/tag/" + tagId + "/?page=" + pageNum
    );
  },
  loadArchiveList: (archiveId, pageNum) => {
    return BlogContext.apiLoadArchiveList(
      $,
      { blogAcc: BlogContext.blogAcc, archiveId: archiveId, pageNum: pageNum },
      "/" +
        BlogContext.blogAcc +
        "/archive/" +
        archiveId +
        ".html?page=" +
        pageNum
    );
  },
  loadCategoryList: (categoryId, pageNum) => {
    return BlogContext.apiLoadCategoryList(
      $,
      {
        blogAcc: BlogContext.blogAcc,
        categoryId: categoryId,
        pageNum: pageNum,
      },
      "/" +
        BlogContext.blogAcc +
        "/category/" +
        categoryId +
        ".html?page=" +
        pageNum
    );
  },
  loadPrevnext: (pageId) => {
    return BlogContext.apiLoadPrevnext(
      $,
      { blogAcc: BlogContext.blogAcc, postId: pageId },
      "/" + BlogContext.blogAcc + "/ajax/post/prevnext?postId=" + pageId
    );
  },
  loadDefaultCategoryList: (pageNum) => {
    return BlogContext.apiLoadDefaultCategoryList(
      $,
      { blogAcc: BlogContext.blogAcc, page: pageNum },
      "/" + BlogContext.blogAcc + "/default.html?page=" + pageNum
    );

    var list = [];
    return request
      .get("/api/blogs/newjersey/posts?pageIndex=" + pageNum)
      .then((res) => {
        res.forEach((item) => {
          let obj = {};
          obj.pageId = item["Id"];
          obj.title = item["Title"];
          obj.url = item["Url"];
          obj.desc = item["Description"];
          obj.time = item["PostDate"];
          obj.readNum = item["ViewCount"];
          obj.commentNum = item["CommentCount"];
          obj.recommendNum = item["DiggCount"];
          obj.editUrl = item["Url"];
          list.push(obj);
        });
        return { list };
      });
  },
  loadSideColumn: () => {
    return BlogContext.apiLoadSideColumn(
      $,
      { blogAcc: BlogContext.blogAcc },
      "/" + BlogContext.blogAcc + "/ajax/sidecolumn.aspx"
    );
  },
  loadTopLists: () => {
    return BlogContext.apiLoadTopLists(
      $,
      { blogAcc: BlogContext.blogAcc },
      "/" + BlogContext.blogAcc + "/ajax/TopLists.aspx"
    );
  },
  loadCommitterFaceUrl: (committerUrl, committerName) => {
    let pidSplTmp = committerUrl.split("/");
    let pid = pidSplTmp[pidSplTmp.length - 1].replace(".html", "");
    return BlogContext.apiLoadCommitterFaceUrl(
      $,
      { blogAcc: BlogContext.blogAcc, postId: pid },
      "/" +
        BlogContext.blogAcc +
        "/ajax/GetComments.aspx?postId=" +
        pid +
        "&pageIndex=0"
    );
  },
  loadBlogTalkShort: () => {
    return new Promise((resolve, reject) => {
      blogApi.loadBlogTalk(-1).then((res) => {
        if (res.cnList.length <= 5) {
          resolve(res.cnList);
          return;
        }
        resolve(res.cnList.slice(5, res.cnList.length));
      });
    });
  },
  loadBlogTalk: (page) => {
    return new Promise((resolve, reject) => {
      blogApi.loadMyCommentList(BlogContext.feelingBlogId, page).then((l) => {
        resolve({
          cnList: l.list,
          count: l.size,
          pageNum: l.count,
          current: page,
        });
      });
    });
  },
  loadMyCommentList: (articleId, page) => {
    let list = [];
    return new Promise((resolve, reject) => {
      let mySize = BlogContext.myCommentSize;
      let blogSize = BlogContext.blogCommentSize;
      let list = [];
      request
        .get(
          "/newjersey/ajax/comments-block?postId=" +
            articleId +
            "&pageIndex=" +
            page +
            "&anchorCommentId=0&isDesc=true&order=0&loadCommentBox=false"
        )
        .then((res) => {
          let maxPage = Math.ceil(res["commentCount"] / mySize);
          page = page == -1 ? maxPage : page;
          let myScale = blogSize / mySize;
          let blogPage = Math.ceil(page / myScale);
          let blogSideLeft = parseInt((page - 1) % myScale) * 10;
          let blogSideRight = parseInt(page % myScale) * 10;
          if (blogSideLeft > blogSideRight) {
            blogSideRight = blogSideLeft + 10;
          }
          var parser = new DOMParser();
          var dom = parser.parseFromString(res["comments"], "text/html").body;
          //console.log(dom.querySelectorAll(".feedbackItem"))
          dom.querySelectorAll(".feedbackItem").forEach((v) => {
            let obj = {};
            obj.commentId = parseInt(
              $(v).find("[class='layer']").attr("href").replace("#", "")
            );
            obj.level = $(v).find(".layer").html();
            obj.label = $(v).find(".louzhu").html() || "";
            obj.date = $(v).find(".comment_date").html();
            obj.author = $(v).find("[id^='a_comment_author_']").text();
            obj.authorUrl = $(v).find("[id^='a_comment_author_']").attr("href");
            obj.desc = $(v)
              .find("[id^='comment_body_']")
              .html()
              .replace(new RegExp("_src", "g"), "src")
              .trim();
            obj.digg =
              $(v).find(".comment_digg").length >= 1
                ? $(v)
                    .find(".comment_digg")
                    .html()
                    .trim()
                    .replace("支持(", "")
                    .replace(")", "")
                : undefined;
            obj.burry =
              $(v).find(".comment_burry").length >= 1
                ? $(v)
                    .find(".comment_burry")
                    .html()
                    .trim()
                    .replace("反对(", "")
                    .replace(")", "")
                : undefined;
            obj.avatarUrl = (
              $(v).find("[id^='comment_'][id$='_avatar']").html() || ""
            ).trim();
            obj.avatarHdUrl = (
              $(v).find("[id^='comment_'][id$='_avatar']").html() || ""
            )
              .trim()
              .replace("face", "avatar");
            obj.replayBtn =
              $(v).find("[onclick^='return ReplyComment']").length > 0;
            obj.quoteBtn =
              $(v).find("[onclick^='return QuoteComment']").length > 0;
            obj.delBtn = $(v).find("[onclick^='return DelComment']").length > 0;
            obj.updateBtn =
              $(v).find("[onclick^='return GetCommentBody']").length > 0;
            list.push(obj);
          });

          resolve({
            list: list.slice(blogSideLeft, blogSideRight),
            count: blogPage,
            size: blogSize,
            current: page,
          });
        });
    });
    return request
      .get(
        "/api/blogs/newjersey/posts/" +
          articleId +
          "/comments?pageIndex=" +
          page +
          "&pageSize=10"
      )
      .then((res) => {
        list = [];
        if (res.length == 0) {
          return {
            list: list,
          };
        }
        res.forEach((item) => {
          let obj = {};
          obj.commentId = item["Id"];
          // obj.level = $(v).find(".layer").html();
          // obj.label = $(v).find(".louzhu").html() || "";
          obj.date = item["DateAdded"];
          obj.author = item["Author"];
          obj.authorUrl = item["AuthorUrl"];
          obj.desc = item["Body"];
          obj.digg = undefined;
          obj.burry = undefined;
          obj.avatarUrl = item["FaceUrl"];
          obj.avatarHdUrl = item["FaceUrl"];
          // obj.replayBtn=$(v).find("[onclick^='return ReplyComment']").length>0;
          // obj.quoteBtn=$(v).find("[onclick^='return QuoteComment']").length>0;
          // obj.delBtn=$(v).find("[onclick^='return DelComment']").length>0;
          // obj.updateBtn=$(v).find("[onclick^='return GetCommentBody']").length>0;
          list.push(obj);
        });
        return {
          list: list,
        };
      });
  },
  loadBlogs: () => {
    return request.get("/api/blogs/newjersey").then((res) => {
      console.log(res);
    });
  },
  loadkeywordList: (keyword) => {
    let list = [];
    request
      .get(
        "/api/ZzkDocuments/Blog?keyWords=" +
          keyword +
          "&pageIndex=1&viewTimesAtLeast=10"
      )
      .then((res) => {
        res.forEach((item) => {
          let obj = {};
          obj.Title = item["Title"];
          list.push(obj);
        });
      })
      .catch((e) => {
        list.push(e);
      });
    return {
      list,
    };
  },

  /*博客园API*/
};
export default blogApi;
