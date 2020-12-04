<template>
  <div>
    <!-- 顶部导航栏 -->
    <nav class="navbar navbar-light">
      <div class="container">
        <nuxt-link class="navbar-brand" to="index.html">conduit</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <nuxt-link class="nav-link" exact to="/">Home</nuxt-link>
          </li>
          <template v-if="user">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/editor">
                <i class="ion-compose"></i>&nbsp;New Post
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/settings">
                <i class="ion-gear-a"></i>&nbsp;Settings
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/profile/:1996">
                <img
                  class="user-pic"
                  src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1603451175827&amp;di=1dbcf5e41778f45c8e1949796d4fbeeb&amp;imgtype=0&amp;src=http%3A%2F%2Fclipartmag.com%2Fimages%2Fturtle-cartoons-pictures-23.png"
                />
                {{user.username}}
              </nuxt-link>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/login">Sign in</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/register">Sign up</nuxt-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>
    <nuxt-child />
    <!-- 底部导航栏 -->
    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"])
  }
};
</script>

<style>
</style>