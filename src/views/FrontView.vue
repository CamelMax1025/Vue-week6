<template>
        <h2>這是前台頁面</h2>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="about">About</router-link> |
        <router-link to="products">產品列表</router-link> |
        <router-link to="cart">購物車</router-link> |
        <router-link to="/admin/order">(後台) 購物車列表</router-link> |
        <router-link to="/login">會員登入</router-link> |
    </nav>
        <router-view></router-view>
</template>
