import Vue from 'vue'
import Router from 'vue-router'
import NewComment from '@/components/NewComment'
import GetComments from '@/components/GetComments'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'new-comment',
      component: NewComment
    },
    {
      path: '/comments',
      name: 'get-comments',
      component: GetComments
    }
  ]
})
