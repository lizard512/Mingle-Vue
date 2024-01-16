<template>
    <Navbar v-if="!$route.meta.hideNavbar"></Navbar>

    <RouterView></RouterView>

    <Footer v-if="!$route.meta.hideFooter"></Footer>
</template>

<script setup>
// 外部函式庫
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { WOW } from 'wowjs';
const wow = new WOW();
wow.init();
// 內部元件
import Navbar from '@components/Navbar.vue'
import Footer from '@components/Footer.vue'

</script>

<!-- Animate.css -->
<style src="animate.css"></style>
<!-- Bootstrap Icon-->
<style src="bootstrap-icons/font/bootstrap-icons.css"></style>
<!-- Font-->
<style src="@fortawesome/fontawesome-free/css/all.css"></style>
<!-- Customized CSS -->
<style src="@styles/style.css"></style>
<!-- Customized Bootstrap SCSS-->
<style lang="scss" src="@styles/customized-bootstrap.scss">




</style>