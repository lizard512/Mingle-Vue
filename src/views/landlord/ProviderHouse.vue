<template>
  <<<<<<< Updated upstream <div class="container ">
    <form>
      <div v-show="currentPage === 1" class="page1">
        <div style="font-size: large" class="animate__animated animate__fadeInDown">
          <h1>下列哪項最符合工作內容？</h1>
          <div>
            <div class="row row-cols-3 gx-0 gy-3 justify-content-around" style="" role="group"
              aria-label="Basic radio toggle button group">
              <div class="col">
                <input type="radio" class="btn-check" name="workcontain" id="page1radio1" autocomplete="off">
                =======
                <form>
                  <div class="container">
                    <div class="step-1">
                      <div class="form-group">
                        <div class="header">
                          <h1>下列哪項最符合工作內容？</h1>
                          <div class="btn-row" style="margin-top: 50px;">
                            <transition name="el-fade-in">
                              <el-button class="page1Btn" v-show="show">
                                <i class="el-icon" style="width: 4em; height: 4em"></i>人力</el-button>
                            </transition>
                            <transition name="el-fade-in">
                              <el-button class="page1Btn" v-show="show">
                                <i class="el-icon" style="width: 4em; height: 4em"></i>人力</el-button>
                            </transition>
                            <transition name="el-fade-in">
                              <el-button class="page1Btn" v-show="show">
                                <i class="el-icon" style="width: 4em; height: 4em"></i>人力</el-button>
                            </transition>
                            <transition name="el-fade-in">
                              <el-button class="page1Btn" v-show="show">
                                <i class="el-icon" style="width: 4em; height: 4em"></i>人力</el-button>
                            </transition>
                            <el-button class="page1Btn" v-show="show">
                              <i class="el-icon" style="width: 4em; height: 4em"></i>人力</el-button>
                            </transition>
                          </div>
                          <div class="btn-row" style="margin-top: 50px;">
                            <transition name="el-fade-in">
                              <el-button class="page1Btn" v-show="show">
                                <i class="el-icon" style="width: 4em; height: 4em"></i>人力</el-button>
                            </transition>
                            <transition name="el-fade-in">
                              <el-button class="page1Btn" v-show="show">
                                <i class="el-icon" style="width: 4em; height: 4em"></i>人力</el-button>
                            </transition>
                            <transition name="el-fade-in">
                              <el-button class="page1Btn" v-show="show">
                                <i class="el-icon" style="width: 4em; height: 4em"></i>人力</el-button>
                            </transition>
                            <transition name="el-fade-in">
                              <el-button class="page1Btn" v-show="show" @click="select">
                                <i class="el-icon" style="width: 4em; height: 4em"></i>人力</el-button>
                            </transition>
                            >>>>>>> Stashed changes

                            <label class="btn btn-outline-primary cusbtn" for="page1radio1">
                              <img src="@images/icon-人力.png">人力 </label>
                          </div>
                          <div class="col">
                            <input type="radio" class="btn-check" name="workcontain" id="page1radio2" autocomplete="off">
                            <label class="btn btn-outline-primary cusbtn" for="page1radio2">
                              <img src="@images/icon-旅店.png">旅店</label>
                          </div>
                          <div class="col">
                            <input type="radio" class="btn-check" name="workcontain" id="page1radio3" autocomplete="off">
                            <label class="btn btn-outline-primary cusbtn" for="page1radio3">
                              <img src="@images/icon-活動.png">活動</label>
                          </div>
                          <div class="col">
                            <input type="radio" class="btn-check" name="workcontain" id="page1radio4" autocomplete="off">
                            <label class="btn btn-outline-primary cusbtn" for="page1radio4">
                              <img src="@images/icon-銷售.png">銷售</label>

                          </div>
                          <div class="col">
                            <input type="radio" class="btn-check" name="workcontain" id="page1radio5" autocomplete="off">
                            <label class="btn btn-outline-primary cusbtn" for="page1radio5">
                              <img src="@images/icon-辦公.png">辦公</label>
                          </div>
                          <div class="col">
                            <input type="radio" class="btn-check" name="workcontain" id="page1radio6" autocomplete="off">
                            <label class="btn btn-outline-primary cusbtn" for="page1radio6">
                              <img src="@images/icon-餐飲.png">餐飲</label>
                          </div>

                          <div class="col-4">
                            <input type="radio" class="btn-check" name="workcontain" id="page1radio7" autocomplete="off">
                            <label class="btn btn-outline-primary cusbtn" for="page1radio7">
                              <img src="@images/icon-其他.png">其他</label>
                          </div>

                          <div class="col">
                            <input type="radio" class="btn-check" name="workcontain" id="page1radio8" autocomplete="off">
                            <label class="btn btn-outline-primary cusbtn" for="page1radio8">
                              <img src="@images/icon-活動.png">活動</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div ref="node">{{ currentPage }}</div>
                  </div>
                  <div v-show="currentPage === 2" class="page2">
                    <div style="font-size: large" class="animate__animated animate__fadeInDown">
                      <h1>下列哪項最能確切描述你的房源？</h1>
                      <div>
                        <div class="row row-cols-3 gx-0 gy-3 justify-content-around" style="" role="group"
                          aria-label="Basic radio toggle button group">
                          <div class="col">
                            <input type="radio" class="btn-check" name="houseontain" id="page2radio1" autocomplete="off">

                            <label class="btn btn-outline-primary cusbtn" for="page2radio1">
                              <img src="@images/icon-獨棟房屋.png">獨棟房屋 </label>
                          </div>
                          <div class="col">
                            <input type="radio" class="btn-check" name="houseontain" id="page2radio2" autocomplete="off">
                            <label class="btn btn-outline-primary cusbtn" for="page2radio2">
                              <img src="@images/icon-公寓.png">公寓</label>
                          </div>
                          <div class="col">
                            <input type="radio" class="btn-check" name="houseontain" id="page2radio3" autocomplete="off">
                            <label class="btn btn-outline-primary cusbtn" for="page2radio3">
                              <img src="@images/icon-房車.png">房車</label>
                          </div>
                          <div class="col">
                            <input type="radio" class="btn-check" name="houseontain" id="page2radio4" autocomplete="off">
                            <label class="btn btn-outline-primary cusbtn" for="page2radio4">
                              <img src="@images/icon-旅店.png">旅店</label>

                          </div>
                          <div class="col">
                            <input type="radio" class="btn-check" name="houseontain" id="page2radio5" autocomplete="off">
                            <label class="btn btn-outline-primary cusbtn" for="page2radio5">
                              <img src="@images/icon-木屋.png">木屋</label>
                          </div>
                          <div class="col">
                            <input type="radio" class="btn-check" name="houseontain" id="page2radio6" autocomplete="off">
                            <label class="btn btn-outline-primary cusbtn" for="page2radio6">
                              <img src="@images/icon-民宿.png">民宿</label>
                          </div>
                        </div>
                      </div>
                      <<<<<<< Updated upstream=======<el-button @click="show = !show" style=" margin-top: 20px">Next
                        Step</el-button>
                        >>>>>>> Stashed changes
                    </div>
                  </div>

                  <div v-show="currentPage === 3" class="page3">
                    <div style="font-size: large" class="animate__animated animate__fadeInDown">
                      <h1>房屋地址？</h1>
                      <div>
                        <div class="row row-cols-3 gx-0 gy-3 justify-content-around" style="" role="group"
                          aria-label="Basic radio toggle button group">
                          <div class="col">
                            <input type="radio" class="btn-check" name="houseontain" id="page2radio1" autocomplete="off">

                            <label class="btn btn-outline-primary cusbtn" for="page2radio1">
                              <img src="@images/icon-獨棟房屋.png">獨棟房屋 </label>
                          </div>
                          <div class="col">
                            <input type="radio" class="btn-check" name="houseontain" id="page2radio2" autocomplete="off">
                            <label class="btn btn-outline-primary cusbtn" for="page2radio2">
                              <img src="@images/icon-公寓.png">公寓</label>
                          </div>
                          <div class="col">
                            <input type="radio" class="btn-check" name="houseontain" id="page2radio3" autocomplete="off">
                            <label class="btn btn-outline-primary cusbtn" for="page2radio3">
                              <img src="@images/icon-房車.png">房車</label>
                          </div>
                          <div class="col">
                            <input type="radio" class="btn-check" name="houseontain" id="page2radio4" autocomplete="off">
                            <label class="btn btn-outline-primary cusbtn" for="page2radio4">
                              <img src="@images/icon-旅店.png">旅店</label>

                          </div>
                          <div class="col">
                            <input type="radio" class="btn-check" name="houseontain" id="page2radio5" autocomplete="off">
                            <label class="btn btn-outline-primary cusbtn" for="page2radio5">
                              <img src="@images/icon-木屋.png">木屋</label>
                          </div>
                          <div class="col">
                            <input type="radio" class="btn-check" name="houseontain" id="page2radio6" autocomplete="off">
                            <label class="btn btn-outline-primary cusbtn" for="page2radio6">
                              <img src="@images/icon-民宿.png">民宿</label>
                          </div>
                        </div>
                      </div>
                      <el-button @click="show = !show" style=" margin-top: 20px">Next Step</el-button>
                    </div>
                  </div>
                </form>
              </div>

              <div
                class="animate__animated animate__bounceInUp row justify-content-between progress-bar-container fixed-bottom">
                <div class="progress">
                  <div class="progress-bar" role="progressbar" v-bind:style="{ width: barValue + '%' }"
                    style=" background-color: #ffb4aa" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>
                <<<<<<< Updated upstream <button type="button" class="btn btn-outline-primary prev col-1 " @click="prev"
                  :disabled="currentPage <= 1">Prev
                  Step
                  </button>
                  <button type="button" class="btn btn-outline-primary next col-1 " @click="next"
                    :disabled="currentPage > 4">Next
                    Step
                  </button>
              </div>

              =======
    </form>
    >>>>>>> Stashed changes
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let maxValue = 100 / 4;
let barValue = 0;
let currentPage = ref(1);

function next() {
  if (currentPage.value <= 4) {
    currentPage.value++;
    barValue += maxValue;
  }
}

function prev() {
  if (currentPage.value >= 1) {
    currentPage.value--;
    barValue -= maxValue;
  }
}
</script>

<style scoped>
<style scoped><<<<<<< Updated upstream .container {
  margin: auto;
  height: 70vh;
  width: 70vh;

  =======.el-icon {
    background: url("@images/icon-人力.png");
    background-size: cover;



  }


  .el-icon:before {
    border: 2px solid black;
  }


  .btn-row {
    >>>>>>>Stashed changes display: flex;
    justify-content: center;
  }

  align-content: center;
  text-align: center;
  flex-wrap: wrap;
}

<<<<<<< Updated upstream .cusbtn {
  width: 20vh;
  height: 10vh;
  display: flex;
  font-size: 25px;
  justify-content: space-between;
  border-radius: 10px;
  align-items: center;
  flex-wrap: wrap;
  --bs-btn-color: black;
  --bs-btn-border-color: rgb(231, 230, 230);
  --bs-btn-active-bg: #ffffff00;
  --bs-btn-active-border-color: black;
}

.progress {
  height: 0.5rem;

}

.progress-bar-container>button {
  width: 8rem;
  height: 3rem;
  margin: 2rem 3rem;
}

.next {
  border: #fff9f8 0px solid;
  background-color: #ffb4aa;
  color: darkred;
  --bs-btn-active-bg: palevioletred;
  --bs-btn-active-color: white;
}

.next:hover {
  border: #fff9f8 0px solid;
  background-color: palevioletred;
  color: white;
}

.next:disabled {
  --bs-btn-disabled-color: rgb(128, 128, 128);
}

.prev {
  border: transparent;
  color: black;
  --bs-btn-active-bg: transparent;
  text-decoration: underline;
}

.prev:hover {
  background-color: transparent;

}

.prev:disabled {
  --bs-btn-disabled-color: rgb(128, 128, 128);
}

.col {
  flex: 1;
}

.btn>img {
  justify-content: left;
}

img {
  height: 2rem;
  width: 2rem;
  margin-right: 10px;
}
</style>
=======
.page1Btn {
  min-width: 15em;
  min-height: 8em;
}


.page1Btn:before {
  border: 3px solid black;
}</style>
}</style>
>>>>>>> Stashed changes
