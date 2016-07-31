import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Vines from './components/Vines.vue'
import Hello from './components/Hello.vue'
import Project from './components/Project.vue'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/projects/:mode': {
    component: Vines
  },
  '/project/:id': {
    component: Project
  },
  '/infos': {
    component: Hello
  }
})

router.redirect({
  '/': '/projects/ok'
})

router.start(App, '#container')
