<template>
  <!-- Content Start -->
  <div class="container p-5">

      <!-- <form id="form" action="https://formsubmit.co/363367bd126ea0fd2b58f2b247f113a5" method="post"
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
                <a href="#"><img src="@images/icon-fb.png" style="width: 50px;"></a>
                <a href="#"><img src="@images/icon-line.png" style="width: 50px;"></a>
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
        <input type="hidden" name="_next" value="http://localhost:7890/thankyou">
        <input type="hidden" name="_template" value="table">
        <div style="text-align: center;">
          <button type="button" class="btn btn-light" style="border: 1px solid black;" @click="resetInput">取消</button>
          &nbsp;&nbsp;&nbsp;
          <button type="submit" class="btn btn-warning">送出</button>
        </div>
      </form> -->

      <section class="contact-us" id="contact-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div id="map">
                <!-- You just need to go to Google Maps for your own map point, and copy the embed code from Share -> Embed a map section -->
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14460.018984430015!2d121.5434129!3d25.033913!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abd379a5ec97%3A0xedc006d25a9e35df!2z6LOH5bGV5ZyL6Zqb6IKh5Lu95pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1707515762824!5m2!1szh-TW!2stw"
                  width="100%" height="420px" frameborder="0"
                  style="border:0; border-radius: 15px; position: relative; z-index: 2;" allowfullscreen=""></iframe>
                <div class="row">
                  <div class="col-lg-4 offset-lg-1">
                    <div class="contact-info">
                      <div class="icon">
                        <i class="fa fa-phone"></i>
                      </div>
                      <h4>電話</h4>
                      <span>02-66316588</span>
                    </div>
                  </div>
                  <div class="col-lg-5">
                    <div class="contact-info">
                      <div class="icon">
                        <i class="fa fa-solid fa-envelope"></i>
                      </div>
                      <h4>信箱</h4>
                      <span>Mingle@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <form id="contact" action="https://formsubmit.co/363367bd126ea0fd2b58f2b247f113a5" method="post" enctype="multipart/form-data">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="section-heading">
                      <h6>聯絡我們</h6>
                      <h4>意見箱</h4>
                      <p>如果在使用我們的服務時遇到任何問題，<br>請隨時與我們聯繫。我們將盡快回覆您的訊息。<br>服務時間：週一 至 週五 14:00-22:00
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="您的 Email" v-model="email" ref="email" required="">
                    </fieldset>
                  </div>
                  <div class="col-lg-12 text-center">
                    <fieldset>
                      <label for="formFile" class="form-label">上傳圖片</label>
                      <div class="mb-3">
                        <input class="form-control" type="file" accept="image/*" id="formFile" name="file" ref="image"
                          @change="fileUpdate">
                        <img id="formImg" alt="form image" style="" ref="preview" v-if="preview" :src="preview"
                          width="300" />
                      </div>
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <textarea name="message" id="message" placeholder="意見詳情" v-model="message" ref="message"></textarea>
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset class="d-flex  justify-content-between">
                      <button type="button" class="btn btn-light"  @click="resetInput">清除欄位</button>
                      <button type="submit" id="form-submit" class="main-gradient-button">送出意見</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
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
      image: null
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
    
<style scoped>
section.contact-us {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0px;
  position: relative;
}

section.contact-us .contact-info {
  background-color: #fff;
  margin-top: -30px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  z-index: 5;
  position: relative;
  padding: 20px;
}

section.contact-us .contact-info .icon i {
  float: left;
  margin-right: 15px;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  background: rgb(219, 138, 222);
  background: linear-gradient(-145deg, rgba(219, 138, 222, 1) 0%, rgba(246, 191, 159, 1) 100%);
  color: #fff;
}

section.contact-us .contact-info h4 {
  font-size: 18px;
  font-weight: 900;
  text-transform: uppercase;
}

section.contact-us .contact-info span {
  font-size: 15px;
  color: #dc8cdb;
  font-weight: 700;
}

section.contact-us .section-heading {
  text-align: left;
  margin-bottom: 40px;
}

section.contact-us #contact {
  margin-left: -100px;
  position: relative;
  z-index: 5;
  background-color: #fff;
  margin-top: 40px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  padding: 40px;
}

section.contact-us #contact input {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: #f4f7fb;
  outline: none;
  border: none;
  box-shadow: none;
  font-weight: 500;
  color: #7a7a7a;
  padding: 0px 15px;
  margin-bottom: 30px;
}

section.contact-us #contact textarea {
  width: 100%;
  min-height: 140px;
  max-height: 180px;
  border-radius: 5px;
  background-color: #f4f7fb;
  outline: none;
  border: none;
  box-shadow: none;
  font-weight: 500;
  color: #7a7a7a;
  padding: 15px;
  margin-bottom: 30px;
}

section.contact-us #contact button {
  float: right;
  color: #fff;
  background: rgb(219, 138, 222); 
  background: linear-gradient(-145deg, rgba(219, 138, 222, 1) 0%, rgba(246, 191, 159, 1) 100%);
  padding: 12px 30px;
  display: inline-block;
  border-radius: 5px;
  font-weight: 500;
  text-transform: uppercase;
  transition: all .3s;
  transition: all .3s;
  border: none;
  outline: none;
}

section.contact-us #contact button:hover {
  opacity: 0.9;
}
</style>