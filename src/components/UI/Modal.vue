<template>
  <div>
    <vue-modaltor :visible="open" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <template #header>
        <div class="title">
          Оставьте ваши контакты <br>
          для обратной связи
        </div>
      </template>
      <template #body>
        <div class="title" v-if="isCompleted">Спасибо, в скором времени мы с вами свяжемся:)</div>
        <form v-else @submit.prevent="submitForm" action="#">
          <h2></h2>
          <input type="email" v-model="email" placeholder="Ваш Email" required >
          <button v-show="!isLoading">Отправить</button>
          <loader :show="isLoading"></loader>
        </form>
        <button class="btn-closed" @click="closeModal">Закрыть</button>
      </template>
    </vue-modaltor>
    <button @click="openModal">К покупкам</button>
  </div>
</template>
<script>
import Loader from "@/components/UI/Loader";
export default {
  components: {
    Loader
  },
  name: "Modal",
  data() {
    return {
      open: false,
      email: '',
      isLoading: false,
      isCompleted: false,
    }
  },
  methods: {
    submitForm() {
      this.isLoading = true
      new Promise((resolve, reject) => {
        if(this.email.length > 0) {
          setTimeout( () => {
            console.log(this.email)
            resolve();
          }, 1000)
        } else {
          reject();
        }
      }).then(() => {
        this.isLoading = false
        this.isCompleted = true
      }).catch(() => {
        this.isLoading = false

      })
    },
    openModal() {
      this.open = true
    },
    closeModal() {
      this.open = false
      this.isCompleted = false
      this.email = ''
    }
  }
}

</script>
<style scoped>

form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
}
input {
  margin-top: 10px;
  width: 300px;
  height: 30px;
  padding: 10px;
  border: 1px solid #26303B;
  border-radius: 5px;
}
.title {
  padding-top: 20px;
  margin-bottom: 10px;
  font-family: RotondaC;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: #26303B;
}
button {
  display: block;
  margin: 40px auto ;
  width: 340px;
  height: 70px;
  background: linear-gradient(0deg, #7DB945, #7DB945), #7DB945;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  font-family: RotondaC;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  transition: all 0.6s linear;
}
button:hover {
  transform: translateY(-3px);
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(35, 61, 82, 0.2);
}
.btn-closed {
  margin: 3px auto;
  background: linear-gradient(0deg, #b94545, #b94545), #b94545;
  width: 240px;
  height: 50px;
  font-size: 16px;
  margin-bottom: 30px;
}
</style>