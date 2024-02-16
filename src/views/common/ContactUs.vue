<template>
  <!-- Content Start -->
  <div class="container p-5">
    <div class="text-center">

      <form id="form" action="https://formsubmit.co/363367bd126ea0fd2b58f2b247f113a5" method="post"
        enctype="multipart/form-data">
        <div class="row">
          <div class="col-9">
            <h6 style="font-weight: bold;">意見箱</h6>
            <label for="inputEmail">您的信箱</label>
            <div class="form-group" style="margin-bottom: 10px;">
              <input type="email" name="email" class="form-control" id="email" placeholder="email" v-model="email"
                ref="email">
            </div>
            <label for="formFile" class="form-label">上傳圖片</label>
            <div class="mb-3">
              <input class="form-control" type="file" accept="image/*" id="formFile" name="file" ref="image"
                @change="fileUpdate">
              <img id="formImg" alt="form image" style="" ref="preview" v-if="preview" :src="preview" width="300" />
            </div>
          </div>
          <div class="col-3 text-center">
            <h6 style="font-weight: bold;">聯絡我們</h6>
            <div style="background-color: black; border-radius: 20px; color: white; ">
              <div class="contact-text" style="margin-left: 15px;margin-top: 10px;">
                <p><a href="#">Mingle.org@gmail.com</a></p>
                <p>週一~週五 14:00-22:00</p>
              </div>
              <div class="contact-icon">
                <a href="#"><img src="@icons/icon-fb.png" style="width: 50px;"></a>
                <a href="#"><img src="@icons/icon-line.png" style="width: 50px;"></a>
              </div>
            </div>
          </div>
        </div>
        <label for="inputMessage">意見詳情</label>
        <div class="form-group">
          <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="10" style="resize:none;"
            placeholder="message" v-model="message" ref="message"></textarea>
        </div>
        <br>
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value=url>
        <input type="hidden" name="_template" value="table">
        <div style="text-align: center;">
          <button type="button" class="btn btn-light" style="border: 1px solid black;" @click="resetInput">取消</button>
          &nbsp;&nbsp;&nbsp;
          <button type="submit" class="btn btn-warning">送出</button>
        </div>
      </form>

    </div>
  </div>
  <!-- Content End -->
</template>
    
<script>
// formFile.onchange = function () {
//     document.getElementById("formImg").style.display = "initial";
//     document.getElementById("formImg").style.visibility = "visible";
//     const [file] = formFile.files;
//     if (file) {
//         formImg.src = URL.createObjectURL(file)
//     }
// }


export default {
  data() {
    return {
      preview: '',
      email: '',
      message: '',
      image: null,
      url: `${import.meta.env.VITE_APP_API_URL2}/thankyou`,
    }
  },
  methods: {
    resetInput() {
      // this.$refs['email'].value = null;
      // this.$refs['message'].value = null;
      this.$refs['image'].value = null;
      this.message = ''
      this.email = ''
      this.preview = ''
    },
    fileUpdate(e) {
      console.log(e.target.files)
      const files = e.target.files.item(0);
      const reader = new FileReader()
      reader.addEventListener('load', this.imageLoader)
      reader.readAsDataURL(files)

    },
    imageLoader(e) {
      this.preview = e.target.result;
    }

  },
};

// let cancel = document.getElementById("cancel");
// cancel.onclick = function () {
//     document.getElementById("email").value = "";
//     document.getElementById("formFile").value = "";
//     document.getElementById("formImg").style.display = "none";
//     document.getElementById("textarea").value = "";
// }
</script>
    
<style scoped></style>