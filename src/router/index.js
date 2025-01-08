import Vue from 'vue'
import Router from 'vue-router'
import blogRedirect from "../utils/BlogRedirect";
import BlogPanel from "../components/BlogPanel";
import Admin from "../components/Admin";
import CategoryBody from "../components/body/CategoryBody";
import ArticleBody from "../components/body/article/ArticleBody";
import SubjectBody from "../components/body/SubjectBody";
import BlogAuthorBody from "../components/body/author/BlogAuthorBody";
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: (e) => {
        return blogRedirect.redirect(e);
      }
    },
    {
      path: '/c',
      name: 'BlogPanel',
      component: BlogPanel,
      children: [{
          path: 'subject/',
          name:"SubjectBody",
          component: SubjectBody,
          redirect: "/",
          children:[
            {path: 'category/:categoryId', component: CategoryBody},
            {path: 'archive/:archiveYear/:archiveMonth', component: CategoryBody},
            {path: 'tag/:tagId/', component: CategoryBody},
            {path: 'p/:articleId',component: ArticleBody}
          ]
        },
        {
          path: 'author/',
          name:"AuthorBody",
          component: BlogAuthorBody
        }
        ]
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
    },
    {
      path: '*',
      redirect: "/"
    }
  ],
})
