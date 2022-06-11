import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ListToDataView from '../views/7_template/ListToDataView.vue'
// import AboutView from '../views/AboutView.vue'
// import HelloView from '../views/HelloView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login2',
    component: LoginView
  },
  {
    path: '/listtodata',
    name: 'listtodata',
    component: ListToDataView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: AboutView
  // },
  // {
  //   path: '/hello',
  //   name: 'hello',
  //   component: HelloView
  // }
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about", webpackPrefetch:true */ '../views/AboutView.vue'
      )
  },
  {
    path: '/hello',
    name: 'hello',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "hello" */ '../views/HelloView.vue')
  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingStringView.vue'
      )
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtmlView',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingHtmlView.vue'
      )
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInputView',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingInputView.vue'
      )
  },
  {
    path: '/databinding/select',
    name: 'DataBindingSelectView',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingSelectView.vue'
      )
  },
  {
    path: '/databinding/checkbox',
    name: 'DataBindingCheckboxView',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingCheckboxView.vue'
      )
  },
  {
    path: '/databinding/radio',
    name: 'DataBindingRadioView',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingRadioView.vue'
      )
  },
  {
    path: '/databinding/attribute',
    name: 'DataBindingAttributeView',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingAttributeView.vue'
      )
  },
  {
    path: '/databinding/style',
    name: 'DataBindingStyleView',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingStyleView.vue'
      )
  },
  {
    path: '/databinding/class',
    name: 'DataBindingClassView',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingClassView.vue'
      )
  },
  {
    path: '/databinding/list',
    name: 'DataBindingListView',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingListView.vue'
      )
  },
  {
    path: '/event/click',
    name: 'EventClickView',
    component: () =>
      import(
        /* webpackChunkName: "event" */ '../views/2_event/EventClickView.vue'
      )
  },
  {
    path: '/event/change',
    name: 'EventChangeView',
    component: () =>
      import(
        /* webpackChunkName: "event" */ '../views/2_event/EventChangeView.vue'
      )
  },
  {
    path: '/event/key',
    name: 'EventKeyView',
    component: () =>
      import(
        /* webpackChunkName: "event" */ '../views/2_event/EventKeyView.vue'
      )
  },
  {
    path: '/extra/if',
    name: 'RenderingIfView',
    component: () =>
      import(
        /* webpackChunkName: "extra" */ '../views/3_extra/RenderingIfView.vue'
      )
  },
  {
    path: '/extra/show',
    name: 'RenderingShowView',
    component: () =>
      import(
        /* webpackChunkName: "extra" */ '../views/3_extra/RenderingShowView.vue'
      )
  },
  {
    path: '/extra/computed',
    name: 'ComputedView',
    component: () =>
      import(
        /* webpackChunkName: "extra" */ '../views/3_extra/ComputedView.vue'
      )
  },
  {
    path: '/extra/watch',
    name: 'WatchView',
    component: () =>
      import(/* webpackChunkName: "extra" */ '../views/3_extra/WatchView.vue')
  },
  {
    path: '/reuse/page',
    name: 'PageView',
    component: () =>
      import(/* webpackChunkName: "reuse" */ '../views/4_reuse/PageView.vue')
  },
  {
    path: '/reuse/list',
    name: 'ListView',
    component: () =>
      import(/* webpackChunkName: "reuse" */ '../views/4_reuse/ListView.vue')
  },
  {
    path: '/databinding/test',
    name: 'Databinding',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/TestView.vue'
      )
  },
  {
    path: '/reuse/slot',
    name: 'SlotView',
    component: () =>
      import(/* webpackChunkName: "reuse" */ '../views/4_reuse/SlotView.vue')
  },
  {
    path: '/reuse/parent',
    name: 'ParentView',
    component: () =>
      import(/* webpackChunkName: "reuse" */ '../views/4_reuse/ParentView.vue')
  },
  {
    path: '/advanced/provide',
    name: 'ProvideView',
    component: () =>
      import(
        /* webpackChunkName: "advanced" */ '../views/5_advanced/ProvideView.vue'
      )
  },
  {
    path: '/advanced/directive',
    name: 'CustomDirectiveView',
    component: () =>
      import(
        /* webpackChunkName: "advanced" */ '../views/5_advanced/CustomDirectiveView.vue'
      )
  },
  {
    path: '/advanced/mixin',
    name: 'MixinView',
    component: () =>
      import(
        /* webpackChunkName: "advanced" */ '../views/5_advanced/MixinView.vue'
      )
  },
  {
    path: '/advanced/plugin',
    name: 'PluginView',
    component: () =>
      import(
        /* webpackChunkName: "advanced" */ '../views/5_advanced/PluginView.vue'
      )
  },
  {
    path: '/vuex/todo',
    name: 'TodoView',
    component: () =>
      import(
        /* webpackChunkName: "vuex" */ '../views/6_vuex/TodoView.vue'
        )
  },
  {
    path: '/vuex/test2',
    name: 'Test2View',
    component: () =>
      import(
        /* webpackChunkName: "vuex" */ '../views/6_vuex/test2View.vue'
        )
  },
  {
    path: '/template/detail',
    name: 'DetailView',
    component: () =>
      import(
        /* webpackChunkName: "7_Teplate" */ '../views/7_template/DetailView.vue'
        )
  },
  {
    path: '/template/create',
    name: 'CreatelView',
    component: () =>
      import(
        /* webpackChunkName: "7_Teplate" */ '../views/7_template/CreatelView.vue'
        )
  },
  {
    path: '/template/change',
    name: 'ChangelView',
    component: () =>
      import(
        /* webpackChunkName: "7_Teplate" */ '../views/7_template/ChangeView.vue'
        )
  },
  {
    path: '/template/singleedit',
    name: 'SingleEditView',
    component: () =>
      import(
        /* webpackChunkName: "template" */ '../views/7_template/SingleEditView.vue'
      )
  },
  {
    path: '/template/shttile',
    name: 'ShuttleView',
    component: () =>
      import(
        /* webpackChunkName: "7_Teplate" */ '../views/7_template/ShuttleView.vue'
        )
  },
  {
    path: '/template/multiple',
    name: 'MultipleEidtView',
    component: () =>
      import(
        /* webpackChunkName: "7_Teplate" */ '../views/7_template/MultipleEidtView.vue'
        )
  },
  {
    path: '/template/masterdetail',
    name: 'MasterDetailView',
    component: () =>
      import(
        /* webpackChunkName: "template" */ '../views/7_template/MasterDetailView.vue'
      )
  },
  {
    path: '/template/shuttle',
    name: 'ShuttleView',
    component: () =>
      import(
        /* webpackChunkName: "template" */ '../views/7_template/ShuttleView.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next()
  } else {
    if (store.getters['user/isLogin']) {
      next()
    } else {
      store.commit('/user/logout')
      next('/')
    }
  }
})

export default router
