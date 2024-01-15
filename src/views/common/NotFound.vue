<template>
    <!-- 404 Start -->
    <div class="container-xxl py-5">
        <div class="container text-center">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <i
                        class="bi bi-exclamation-triangle display-1 text-primary d-block wow animate__animated animate__flip animate__infinite"></i>
                    <h1 class="display-1 wow animate__animated animate__tada animate__infinite">404</h1>
                    <h1 class="mb-4">Page Not Found</h1>
                    <p class="mb-4">此頁面目前仍在施工中<br>造成不便，敬請見諒</p>
                    <RouterLink class="btn btn-primary py-3 px-5" to="/">返回首頁</RouterLink>
                </div>
            </div>
        </div>
    </div>
    <!-- 404 End -->
</template>
    
<script setup>

</script>
    
<style scoped>
.container {
    overflow: hidden;
}
</style>