<template>
    <h2>登入頁面</h2>
    <div class="container">
        <div class="row justify-content-center">
          <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
          <div class="col-8">
            <form id="form" class="form-signin">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="username"
                  v-model="user.username"
                  placeholder="name@example.com"
                  required
                  autofocus
                />
                <label for="username">Email address</label>
              </div>
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="user.password"
                  placeholder="Password"
                  required
                />
                <label for="password">Password</label>
              </div>
              <button
                class="btn btn-lg btn-primary w-100 mt-3"
                type="button"
                @click="login"
              >
                登入
              </button>
            </form>
          </div>
        </div>
        <p class="mt-5 mb-3 text-muted">&copy; 2021~∞ - 六角學院</p>
      </div>
</template>

<script>
import axios from 'axios';

const { VITE_API_URL } = import.meta.env;

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      const api = `${VITE_API_URL}/admin/signin`;
      axios
        .post(api, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `camelpath2=${token}; expires=${new Date(
            expired,
            this.$router.push('/admin/products'),
          )};`;
        })
        .catch(() => {
          this.$router.push('/login');
          alert('登入失敗，請重新輸入帳密。');
        });
    },
  },
  mounted() {},
};
</script>
