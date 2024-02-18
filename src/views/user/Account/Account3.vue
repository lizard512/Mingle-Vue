<template>
    <div class="container animate__animated animate__bounceInLeft animate__slow">
        <br><br>
        <h2 class="container" style="background-color: #bb810d;text-align: center;">心願清單</h2>
        <div class="card  mb-3" style="max-width: 100%;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="../../../assets/images/心願清單.jpg" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <div class="card-header bg-transparent">打工項目1</div>
                        <div class="card-body text-success">
                            <h5 class="card-title">Success card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer bg-transparent"><small class="text-body-secondary">Last updated 3 mins
                                ago</small>

                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <small class="text-muted">9 mins</small>
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                <button type="button" class="btn btn-lg btn-outline-secondary" :class="{ 'active': isKept }"
                                    @click.stop.prevent="toggleKeepWork"><i class="fa-brands fa-gratipay"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card mb-3" style="max-width: 100%;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="../../../assets/images/心願清單2.jpg" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">打工項目2</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card mb-3" style="max-width: 100%;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="../../../assets/images/心願清單3.jpg" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">打工項目3</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card mb-3" style="max-width: 100%;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="../../../assets/images/心願清單4.jpg" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">打工項目4</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const works = ref({});
const isKept = ref(false);
const getuserid =
    () => {
        const id = localStorage.getItem('userID');
        return id;
    }

const userID = getuserid();
onMounted(async () => {
    await checkIfWorkIsKept(workID);
});


const toggleKeepWork = () => {
    isKept.value = !isKept.value;
    if (isKept.value) {
        addWorkToKeepList();
        toast("已新增至心願清單", {})
    } else {
        removeWorkFromKeepList();
        toast("已從心願清單移除", {})
    }
    ;
}

const checkIfWorkIsKept = async (workId) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/volunteer/isWorkKeptByVolunteer`, {
            params: {
                volunteerId: userID,
                workId: workId
            }
        });
        isKept.value = response.data;
    } catch (error) {
        console.error('Failed to check if work is kept:', error);
    }
}

</script>
    
<style scoped>
.btn.active {
    color: var(--danger);
}
</style>