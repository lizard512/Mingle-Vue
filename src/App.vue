<template>

<Navbar></Navbar>

<RouterView></RouterView>

<Footer></Footer>

</template>
<script setup>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from '@components/Navbar.vue'
import Footer from '@components/Footer.vue'
</script>

<style src="@styles/common.css" scoped></style>
<style></style>