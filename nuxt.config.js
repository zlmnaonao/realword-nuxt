//  nuxt.js 配置文件
module.exports = {
  // 自定义路由规则
  router: {
    // routes： 路由配置表
    // resolve：解析路由组件路径的方法
    linkActiveClass: 'active',
    extendRoutes(routes, resolve) {
      // 清除 Nuxtjs 基于 pages 自动生成的路由规则
      routes.splice(0)
      // 保存自定义的路由配置
      routes.push(...[
        {
          path: '/',
          // resolve：将当前文件所在的路径拼接上后面的路径。可以省略 index.vue，但是不能省略 layout 后面的 /
          component: resolve(__dirname, 'pages/layout/'),
          children: [
            {
              // path 留空，说明是默认子路由 
              path: '',
              name: "home",
              component: resolve(__dirname, 'pages/home/')
            },
            {
              path: 'login',
              name: "login",
              component: resolve(__dirname, 'pages/login/')
            },
            {
              path: 'register',
              name: "register",
              component: resolve(__dirname, 'pages/login/')
            },
            {
              path: '/profile/:username',
              name: 'profile',
              component: resolve(__dirname, 'pages/profile/')
            },
            {
              path: '/settings',
              name: 'settings',
              component: resolve(__dirname, 'pages/settings/')
            },
            {
              path: '/editor',
              name: 'editor',
              component: resolve(__dirname, 'pages/editor/')
            },
            {
              path: '/article/:slug',
              name: 'article',
              component: resolve(__dirname, 'pages/article/')
            }
          ]
        }
      ])
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [
    '~/plugins/request.js',
    '~/plugins/dayjs.js'
  ]
}