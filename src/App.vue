<template>
    <Navbar v-if="!$route.meta.hideNavbar"></Navbar>

    <RouterView></RouterView>

    <Footer v-if="!$route.meta.hideFooter"></Footer>

    <BackToTopButton v-if="!$route.meta.hideBTTB"></BackToTopButton>
</template>

<script setup>
import 'bootstrap/dist/js/bootstrap.min.js'
// 內部元件
import Navbar from '@components/Navbar.vue'
import Footer from '@components/Footer.vue'
import BackToTopButton from '@components/BackToTopButton.vue'
</script>

<!-- Animate.css -->
<style src="animate.css"></style>
<!-- Bootstrap Icon-->
<style src="bootstrap-icons/font/bootstrap-icons.css"></style>
<!-- Font-->
<style src="@fortawesome/fontawesome-free/css/all.css"></style>
<!-- Customized Bootstrap SCSS-->
<style lang="scss" src="@styles/customized-bootstrap.scss"></style>
<style>
::-webkit-scrollbar {
    display: none;
}

:root {
    --primary: #ffc107;
    --secondary: #d63384;
    --success: #198754;
    --info: #1ba2bd;
    --warning: chocolate;
    --danger: #dc3545;
    --light: #EFFDF5;
    --dark: #0E2E50;
    --white: #FFFFFF;
    --black: #000000;
}

/*** Button ***/
/* .btn {
    transition: .5s;
}

.btn.btn-primary,
.btn.btn-secondary {
    color: #FFFFFF;
} */





</style>
