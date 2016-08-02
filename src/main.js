import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Vines from './components/Vines.vue'
import Project from './components/Project.vue'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/projects/': {
    component: Vines
  },
  '/project/:id': {
    component: Project
  }
})

router.redirect({
  '/': '/projects'
})

router.beforeEach(function (transition) {
  window.scrollTo(0, 0)
  transition.next()
})

router.start(App, '#container')
