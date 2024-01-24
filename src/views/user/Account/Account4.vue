<template>
    <div class="row justify-content-center"> <br><br>
        <h3 class="row col-md-auto">來敘述一下自己，讓大家更快了解你</h3>
        <div style="margin: 20px 0" />
    </div>
    <div class="demo-collapse">
        <el-collapse v-model="activeNames" @change="handleChange">
            <div class="row row-md-auto">
                <el-collapse-item title="自我介紹" name="1">
                    <!-- [introduction] -->
                    <div>
                        <el-input v-model="textarea1" maxlength="300" show-word-limit :autosize="{ minRows: 3, maxRows: 6 }"
                            type="textarea" placeholder="Please input" />
                    </div>
                </el-collapse-item>
            </div>
            <div class="row row-md-auto">
                <el-collapse-item title="關於我" name="2">
                    <!-- [background] -->
                    <div>
                        <el-input v-model="textarea2" :autosize="{ minRows: 5, maxRows: 10 }" type="textarea"
                            placeholder="Please input" show-word-limit maxlength="500" />
                    </div>
                </el-collapse-item>
            </div>
            <el-collapse-item title="語言" name="3">
                <!-- [language] -->
                <div>
                    <el-input v-model="textarea3" maxlength="100" show-word-limit :autosize="{ maxRows: 2 }" type="textarea"
                        placeholder="Please input" />
                </div>
            </el-collapse-item>
            <el-collapse-item title="個人喜好與習慣" name="4">
                <!-- [hobby] -->
                <div>
                    <el-input v-model="textarea4" maxlength="100" show-word-limit :autosize="{ maxRows: 2 }" type="textarea"
                        placeholder="Please input" />
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
const textarea1 = ref('')
const textarea2 = ref('')
const textarea3 = ref('')
const textarea4 = ref('')
const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
    console.log(val)
}
</script>
  
  
<style></style>