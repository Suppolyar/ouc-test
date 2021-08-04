<template>
  <div>
    <vue-modaltor :visible="open" @hide="open=false" v-if="open">
      <template #header>
        <div class="title">
          Оставьте ваши контакты <br>
          и мы свяжемся с вами!
        </div>
      </template>
      <template #body >
        <form action="#">
          <h2></h2>
          <input type="email" value="" placeholder="Ваш Email" required >
          <button @click="showInfo">Отправить</button>
          <button class="btn-closed" @click="open=false">Закрыть</button>
        </form>
      </template>
    </vue-modaltor>
    <button @click="open=true">К покупкам</button>
  </div>
</template>
<script>
export default {
  name: "Modal",
  data() {
    return {
      open: false
    }
  },
  methods: {
    showInfo() {
      let info = document.querySelector("input")

      console.log(info.value)
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
  margin: 40px auto;
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

}
</style>