<template>
    <div class="container-fluid bg-white p-0">
        <Navbar></Navbar>

        <RouterView></RouterView>

        <Footer></Footer>
    </div>
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

// Spinner
var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
};
spinner();

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
<style lang="scss">
$primary: #ffc107;
$secondary: #d63384;
$light: #EFFDF5;
$dark: #0E2E50;

$font-family-base: 'Heebo', sans-serif;

$headings-font-family: 'Inter', sans-serif;

$body-bg: white;

$body-color: #666565;

$headings-color: $dark;

$headings-font-weight: 700;

$display-font-weight: 800;

$enable-responsive-font-sizes: true;

$border-radius: 5px;

$link-decoration: none;

$enable-negative-margins: true;

@import "bootstrap/scss/bootstrap";
</style>