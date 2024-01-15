<script setup>


</script>

<template>
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

            </div>

          </div>
          <el-button @click="show = !show"  style=" margin-top: 20px" >Next Step</el-button>
        </div>
      </div>
    </div>
  </form>

</template>


<script lang="ts" setup>
import { ref } from 'vue'
import {}
import human from '@images/icon-人力.png'


const show = ref(true)
const url = ""

</script>

<style>
.el-icon {
  background: url("@images/icon-人力.png");
  background-size: cover;
  

}
.el-icon:before {
  border: 2px solid black;
}
.btn-row {
  display: flex;
  justify-content: center;
}
.page1Btn {
  min-width: 15em;
  min-height: 8em;
}
.page1Btn:before {
  border: 3px solid black;
}
</style>