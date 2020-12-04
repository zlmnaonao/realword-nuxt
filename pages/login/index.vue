<template>
  <div>
    <div class="auth-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">{{ isLogin ? 'Sign in' : 'Sign up' }}</h1>
            <p class="text-xs-center">
              <nuxt-link v-if="isLogin" to="/register">Need an account?</nuxt-link>
              <nuxt-link v-else to="/login">Have an account?</nuxt-link>
            </p>
            <ul class="error-messages">
              <template v-for="(messages, feild) in errors">
                <li v-for="(message, index) in messages" :key="index">{{ feild }} {{ message }}</li>
              </template>
            </ul>
            <form @submit.prevent="onSubmit">
              <fieldset class="form-group" v-if="!isLogin">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  required
                  placeholder="Your Name"
                  v-model="user.username"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="email"
                  placeholder="Email"
                  v-model="user.email"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  v-model="user.password"
                  required
                />
              </fieldset>
              <button
                class="btn btn-lg btn-primary pull-xs-right"
              >{{ isLogin ? 'Sign in' : 'Sign up' }}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { login, register } from "@/api/user";
const Cookie = process.client ? require("js-cookie") : undefined;
export default {
  name: "LoginIndex",
  middleware: "notAuth",
  computed: {
    isLogin() {
      return this.$route.path === "/login";
    }
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
        username: ""
      },
      errors: {}
    };
  },
  methods: {
    async onSubmit() {
      try {
        let { data } = this.isLogin
          ? await login({ user: this.user })
          : await register({ user: this.user });
        // TODO: 保存用户的登录状态
        this.$store.commit("setUser", data.user);
        // 用户信息存储在cookie中  
        Cookie.set("user", data.user);
        // 跳转到首页
        this.$router.push("/");
      } catch (err) {
        this.errors = err.response.data.errors;
        console.dir(err);
      }
    }
  }
};
</script>
<style>
</style>