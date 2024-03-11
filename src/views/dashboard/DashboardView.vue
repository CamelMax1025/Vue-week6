<template>
  <h2>這是後台頁面</h2>
  <nav>
    <router-link to="products">產品列表</router-link> |
    <router-link to="order">購物車</router-link> |
    <router-link to="/">返回前台頁面</router-link> |
  </nav>
  <router-view></router-view>
</template>

<script>
import axios from 'axios';

const { VITE_API_URL } = import.meta.env;

export default {
  methods: {
    checkUser() {
      const api = `${VITE_API_URL}/api/user/check`;
      axios
        .post(api)
        .then(() => {
        })
        .catch(() => {
          this.$router.push('/login');
          // eslint-disable-next-line no-alert
          alert('請重新登入');
        });
    },
  },
  mounted() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)camelpath2\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    axios.defaults.headers.common.Authorization = token;
    this.checkUser();
  },
};
</script>
