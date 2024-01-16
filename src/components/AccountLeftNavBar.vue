<template>
    <div class="col-2 md-left bg-primary" style="float: left;font-size: large; text-align: center;">
        <br><br>
        <h4>我的帳戶</h4><br><br>
        <div class="fa" @click="clickHandler(isShow = 1)"> <a href="#" style="color:red;">個人檔案</a></div><br><br>
        <div class="fa"> <a href="#" style="color:red;">住宿/打工預定</a></div><br><br>
        <div class="fa" @click="clickHandler(isShow = 2)"> <a href="#" style="color:red;">旅行足跡</a></div><br><br>
        <div class="fa" @click="clickHandler(isShow = 3)"> <a href="#" style="color:red;">心願清單</a></div><br><br>
    </div>
    <!-- <link rel="apple-touch-icon" href="/docs/5.0/assets/img/favicons/apple-touch-icon.png" sizes="180x180">
    <link rel="icon" href="/docs/5.0/assets/img/favicons/favicon-32x32.png" sizes="32x32" type="image/png">
    <link rel="icon" href="/docs/5.0/assets/img/favicons/favicon-16x16.png" sizes="16x16" type="image/png">
    <link rel="manifest" href="/docs/5.0/assets/img/favicons/manifest.json">
    <link rel="mask-icon" href="/docs/5.0/assets/img/favicons/safari-pinned-tab.svg" color="#7952b3">
    <link rel="icon" href="/docs/5.0/assets/img/favicons/favicon.ico">
    <meta name="theme-color" content="#7952b3">
    <div class="col-lg-1 md-left bg-primary" style="float: left;">
        <div class="d-flex flex-column bg-light" style="width: 100%;">
            <a href="/" class="d-block p-3 link-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip"
                data-bs-placement="right">
                <svg class="bi" width="40" height="32">
                    <use xlink:href="#bootstrap" />
                </svg>
                <span class="visually-hidden">我的帳戶</span>
            </a>
            <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
                <li class="nav-item">
                    <a href="#" class="nav-link active py-3 border-bottom" aria-current="page" title="個人檔案"
                        data-bs-toggle="tooltip" data-bs-placement="right">
                        <svg class="bi" width="24" height="24" role="img" aria-label="Home">
                            <use xlink:href="#home" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link py-3 border-bottom" title="住宿/打工預定" data-bs-toggle="tooltip"
                        data-bs-placement="right">
                        <svg class="bi" width="24" height="24">
                            <use xlink:href="#speedometer2" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link py-3 border-bottom" title="旅行足跡" data-bs-toggle="tooltip"
                        data-bs-placement="right">
                        <svg class="bi" width="24" height="24">
                            <use xlink:href="#table" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link py-3 border-bottom" title="心願清單" data-bs-toggle="tooltip"
                        data-bs-placement="right">
                        <svg class="bi" width="24" height="24">
                            <use xlink:href="#grid" />
                        </svg>
                    </a>
                </li>
            </ul>
            <div class="dropdown border-top">
                <a href="#"
                    class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
                    id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="../../../assets/images/user-1.jpg" alt="mdo" width="24" height="24" class="rounded-circle">
                </a>
                <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                    <li><a class="dropdown-item" href="#">New project...</a></li>
                    <li><a class="dropdown-item" href="#">Settings</a></li>
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    </div> -->
</template>
    
<script setup >
import 'bootstrap-icons/font/bootstrap-icons.css'

const isShow = 0
const emit = defineEmits(["xyzClick"])
const clickHandler = showVeiw => {
    console.log(showVeiw)
    emit("xyzClick", showVeiw)
}
</script>
    
<style></style>