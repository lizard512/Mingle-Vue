<template>
	<!-- Navbar Start -->
	<div class="container-fluid nav-bar">
		<nav class="navbar bg-primary navbar-expand-lg navbar-light py-0 px-4">
			<a href="index.html" class="navbar-brand d-flex align-items-center text-center">
				<div class="icon p-2 me-2">
					<img class="img-fluid" src="@images/icon-main.png" alt="Icon" style="width: 30px; height: 27px;">
				</div>
				<h1 class="m-0 link-secondary">Mingle 名狗</h1>
			</a>
			<button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarCollapse">
				<div class="navbar-nav ms-auto">
					<RouterLink class="nav-item nav-link active" to="/">首頁</RouterLink>
					<RouterLink class="nav-item nav-link" to="/about">關於Mingle</RouterLink>
					<div class="nav-item dropdown">
						<a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">打工換宿資訊</a>
						<div class="dropdown-menu rounded-0 m-0">
							<RouterLink class="dropdown-item" to="/search">瀏覽打工項目</RouterLink>
							<a href="404.html" class="dropdown-item">住宿地點一覽</a>
						</div>
					</div>
					<div class="nav-item dropdown">
						<a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">論壇日誌</a>
						<div class="dropdown-menu rounded-0 m-0">
							<a href="forum.html" class="dropdown-item">討論 & 問答</a>
							<a href="404.html" class="dropdown-item">打工日誌</a>
						</div>
					</div>
					<RouterLink class="nav-item nav-link" to="/chatroom">聊天室</RouterLink>
					<a href="404.html" class="nav-item nav-link">聯絡我們</a>
					<a href="provider_form.html" class="nav-item nav-link">成為提供者</a>
				</div>
				<a href="order.html" class="btn btn-secondary px-3 d-lg-flex" style="margin-right: 30px;">成為幫助者</a>
				<a href="login.html" class="btn btn-dark px-3 d-lg-flex">登入</a>
			</div>
		</nav>
	</div>
	<!-- Navbar End -->
</template>
    
<script setup>

</script>
    
<style></style>