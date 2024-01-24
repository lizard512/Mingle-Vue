<template id="app">
    <div id="select" class="tableDiv" v-show="isShowSelect">
        <table class="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Make</th>
                    <th>Expire</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in foundItems" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.make }}</td>
                    <td>{{ item.expire }}</td>
                    <td>
                        <button type="button" @click="callFindById(item.id)">修改</button>
                        <button type="button" @click="callRemove(item.id)">刪除</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
const app = Vue.createApp({
    data: function () {
        return {
            //畫面控制 start
            isShowSelect: true,
            isShowModify: true,
            isShowButtonInsert: true,
            isShowButtonUpdate: true,
            isShowTableFooter: true,
            //畫面控制 end

            //資料 start
            findId: null,
            findName: null,
            id: null,
            name: null,
            price: null,
            make: null,
            expire: null,
            foundItems: [],
            //資料 end
        }
    },
    methods: {
        showSelect: function () {
            this.isShowSelect = true;
            this.isShowModify = false;

            this.findId = null;
            this.findName = null;
        },
        showModify: function (action) {
            this.isShowSelect = false;
            this.isShowModify = true;

            this.id = null;
            this.name = null;
            this.price = null;
            this.make = null;
            this.expire = null;

            if (action === "insert") {
                this.isShowButtonInsert = true;
                this.isShowButtonUpdate = false;
            } else {
                this.isShowButtonInsert = false;
                this.isShowButtonUpdate = true;
            }
        },
        closeModify: function () {
            this.isShowSelect = true;
            this.isShowModify = false;
        },
        callFind: function () {
            Swal.fire({
                text: "Loading.......",
                allowOutsideClick: false,
                showConfirmButton: false
            });

            if (this.findId === "") {
                this.findId = null;
            }
            if (this.findName === "") {
                this.findName = null;
            }
            let request = {
                start: 0,
                rows: 100,

                id: this.findId,
                name: this.findName,
            };

            let vm = this;
            axios.post(contextPath + "/pages/ajax/products/find", request).then(function (response) {
                let count = response.data.count;
                vm.foundItems = response.data.list;
                vm.isShowTableFooter = (count === 0 || vm.foundItems.length === 0);

                setTimeout(function () {
                    Swal.close();
                }, 500);
            }).catch(function (error) {
                console.log("error", error);
                Swal.fire({
                    icon: "error",
                    text: "查詢錯誤：" + error.message,
                    confirmButtonText: "確定"
                });
            }).finally(function () {

            });
        },
        callCreate: function () {
            Swal.fire({
                text: "Loading.......",
                allowOutsideClick: false,
                showConfirmButton: false
            });

            if (this.id === "") {
                this.id = null;
            }
            if (this.name === "") {
                this.name = null;
            }
            if (this.price === "") {
                this.price = null;
            }
            if (this.make === "") {
                this.make = null;
            }
            if (this.expire === "") {
                this.expire = null;
            }
            let request = {
                id: this.id,
                name: this.name,
                price: this.price,
                make: this.make,
                expire: this.expire,
            }

            let vm = this;
            axios.post(contextPath + "/pages/ajax/products", request).then(function (response) {
                if (response.data.success) {
                    console.log("message", response.data.message);
                    Swal.fire({
                        icon: "success",
                        text: response.data.message,
                        allowOutsideClick: false,
                        confirmButtonText: "確定"
                    }).then(function (result) {
                        if (result.isConfirmed) {
                            vm.closeModify();
                            vm.callFind();
                        }
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        text: response.data.message,
                        confirmButtonText: "確定"
                    });
                }
            }).catch(function (error) {
                Swal.fire({
                    icon: "error",
                    text: "查詢錯誤：" + error.message,
                    confirmButtonText: "確定"
                });
            }).finally(function () {

            });
        },
        callRemove: function (id) {
            let vm = this;
            Swal.fire({
                icon: "question",
                text: "確定要刪除嗎？",
                allowOutsideClick: false,
                confirmButtonText: "確定",
                showCancelButton: true,
                cancelButtonText: "取消"
            }).then(function (result) {
                if (result.isConfirmed) {
                    Swal.fire({
                        text: "Loading.......",
                        allowOutsideClick: false,
                        showConfirmButton: false
                    });
                    axios.delete(contextPath + "/pages/ajax/products/" + id).then(function (response) {
                        if (response.data.success) {
                            Swal.fire({
                                icon: "success",
                                text: response.data.message,
                                confirmButtonText: "確定"
                            }).then(function (result) {
                                if (result.isConfirmed) {

                                    vm.callFind();
                                }
                            });
                        } else {
                            Swal.fire({
                                icon: "error",
                                text: response.data.message,
                                confirmButtonText: "確定"
                            });
                        }
                    }).catch(function (error) {
                        Swal.fire({
                            icon: "error",
                            text: "查詢錯誤：" + error.message,
                            confirmButtonText: "確定"
                        });
                    }).finally(function () {

                    });
                }
            });
        },
        callFindById: function (id) {
            Swal.fire({
                text: "Loading.......",
                allowOutsideClick: false,
                showConfirmButton: false
            });

            let vm = this;
            axios.get(contextPath + "/pages/ajax/products/" + id).then(function (response) {
                vm.showModify("update");
                if (response.data.list) {
                    vm.id = response.data.list[0].id;
                    vm.name = response.data.list[0].name;
                    vm.price = response.data.list[0].price;
                    vm.make = response.data.list[0].make;
                    vm.expire = response.data.list[0].expire;
                }
                setTimeout(function () {
                    Swal.close();
                }, 500);
            }).catch(function (error) {
                console.log("error1", error);
                Swal.fire({
                    icon: "error",
                    text: "查詢錯誤：" + error.message,
                    confirmButtonText: "確定"
                }).then(function (result) {

                });
            });
        },
        callModify: function () {
            Swal.fire({
                text: "Loading.......",
                allowOutsideClick: false,
                showConfirmButton: false
            });

            if (this.id === "") {
                this.id = null;
            }
            if (this.name === "") {
                this.name = null;
            }
            if (this.price === "") {
                this.price = null;
            }
            if (this.make === "") {
                this.make = null;
            }
            if (this.expire === "") {
                this.expire = null;
            }
            let request = {
                id: this.id,
                name: this.name,
                price: this.price,
                make: this.make,
                expire: this.expire,
            }
            let vm = this;
            axios.put(contextPath + "/api/house/find" + this.id, request).then(function (response) {
                console.log("response", response);
                if (response.data.success) {
                    Swal.fire({
                        icon: "success",
                        text: response.data.message,
                        confirmButtonText: "確定"
                    }).then(function (result) {
                        if (result.isConfirmed) {
                            vm.closeModify();
                            vm.callFind();
                        }
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        text: response.data.message,
                        confirmButtonText: "確定"
                    });
                }
            }).catch(function (error) {
                Swal.fire({
                    icon: "error",
                    text: "查詢錯誤：" + error.message,
                    confirmButtonText: "確定"
                });
            }).finally(function () {

            });
        },
    },
});
app.mount("#app");
</script>
    
<style scoped>
.tableDiv {
    width: 90%;
    margin: auto;
    text-align: center;
    overflow: scroll;
}

.table tr:nth-child(even) {
    --bs-table-bg: #FFD966;
}
</style>