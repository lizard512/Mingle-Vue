<template>
    <div class="col-2 md-left bg-primary justify-content-center">
        <div class="rounded-circle text-center">
            <br>
            <img v-if="props.photoBase64" :src=props.photoBase64 style="width: 50px" class="rounded-circle">{{
                props.name }}
        </div>

        <h4 class="text-center my-5">我的帳號</h4>
        <div class="row my-5" @click="clickHandler(isShow = 1)"><a href="#" class="styleColor ">
                <i class="fa-solid fa-user" />基本資料</a></div>
        <div class="row my-5" @click="clickHandler(isShow = 4)"><a href="#" class="styleColor ">
                <i class="fa-solid fa-pen" />個人介紹</a></div>
        <!-- <div class="row my-5" @click="clickHandler(isShow = 2)">
            <a href="#" class="styleColor"><i class="fa-solid fa-shoe-prints" />旅行足跡</a>
        </div> -->
        <!-- <div class="row my-5" @click="clickHandler(isShow = 3)"><a href="#" class="styleColor ">
                <i class="fa-brands fa-gratipay" />心願清單</a></div> -->
        <div class="row my-5 styleColor" @click="ChangesPassword"><i class="fa-solid fa-lock">更改密碼</i></div>
    </div>
</template>

<script setup >
import Swal from 'sweetalert2';
import axios from 'axios';
import { useRouter } from 'vue-router'
const props = defineProps({
    name: String,
    photoBase64: String
})

const router = useRouter();

const emit = defineEmits(["xyzClick"])
const clickHandler = showVeiw => {

    emit("xyzClick", showVeiw)
}

const getuserid =
    () => {
        const id = localStorage.getItem('userID');
        return id;
    }
let changePassword = "";
const ChangesPassword = () => {
    Swal.fire({
        icon: 'question',
        text: '是否要修改密碼',
        allowOutsideClick: false,
        confirmButtonText: "確定",
        showCancelButton: true,
        cancelButtonText: "再想想",
    }).then(function (result) {
        if (result.isConfirmed) {

            const { value: oldPassword } = Swal.fire({
                title: "請輸入你的舊密碼",
                input: "password",
                inputPlaceholder: "Enter your old password",
                allowOutsideClick: false,
                showCloseButton: true,
                inputAttributes: {
                    autocapitalize: "off"
                },
                showDenyButton: true,
                denyButtonText: "重寄驗證信來重設密碼",
                confirmButtonText: "確認舊密碼",
                showLoaderOnConfirm: true,
                preConfirm: async (oldPassword) => {
                    try {
                        if (oldPassword === "" || oldPassword === null || oldPassword === undefined) {
                            return Swal.showValidationMessage(`請輸入密碼`);
                        }
                        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/login/byId/${getuserid()}/${oldPassword}`)
                            .then(function (response) {
                                if (response.data.success) {
                                    changePassword = oldPassword;
                                    Swal.fire({
                                        icon: "success",
                                        text: "更新成功",
                                        confirmButtonText: "確定"
                                    })
                                } else {
                                    return Swal.showValidationMessage(`舊密碼錯誤，請確認後再重新輸入`);
                                }
                            }).catch(function (error) {
                                Swal.fire({
                                    icon: "error",
                                    title: "糟糕...",
                                    text: "操作失敗" + error,
                                    confirmButtonText: "確認"
                                })
                            })
                    } catch (error) {
                        Swal.showValidationMessage(`Request failed: ${error}`);
                    }
                },
                allowOutsideClick: () => !Swal.isLoading()
            }).then((result) => {
                if (result.isConfirmed) {


                    const { value: formValues } = Swal.fire({
                        title: `請輸入你的新密碼`,
                        html: `<input type="password" id="swal-input1" class="swal2-input" placeholder="new password" >
                                <input type="password" id="swal-input2" class="swal2-input" placeholder="password again">`,
                        focusConfirm: false,
                        preConfirm: async () => {
                            if (document.getElementById("swal-input1").value === "" || document.getElementById("swal-input2").value === "") {
                                return Swal.showValidationMessage(`請輸入新密碼`);
                            }
                            else if (document.getElementById("swal-input1").value !==
                                document.getElementById("swal-input2").value) {
                                return Swal.showValidationMessage(`輸入的密碼不一致，請確認後再重新輸入`);
                            } else if (document.getElementById("swal-input1").value ===
                                document.getElementById("swal-input2").value) {
                                if (changePassword === document.getElementById("swal-input1").value) {
                                    return Swal.showValidationMessage(`請勿與舊密碼相同，若無需修改，請點選`);
                                }
                                const data = {
                                    id: getuserid(),
                                    password: document.getElementById("swal-input1").value
                                }
                                await axios.patch(`${import.meta.env.VITE_APP_API_URL}/resetPassword/byId`, data).then(function (response) {
                                    if (response.data.success) {
                                        Swal.fire({
                                            icon: "success",
                                            text: "更新成功",
                                            confirmButtonText: "確定"
                                        })
                                    } else {
                                        return Swal.showValidationMessage(`密碼更新失敗，請確認後再重新輸入`);
                                    }
                                }).catch(function (error) {
                                    Swal.fire({
                                        icon: "error",
                                        title: "糟糕...",
                                        text: "操作失敗" + error,
                                        confirmButtonText: "確認"
                                    })
                                })
                            }
                        }
                    });

                } else if (result.isDenied) {
                    router.push({ name: "ForgetPassword" });
                }
            });
        }
    });
}

</script>
    
<style scoped>
.styleColor {
    color: black;
    text-align: center;
}
</style>