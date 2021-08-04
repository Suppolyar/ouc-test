<template>
<div>
  <div class="card">
    <div class="card-image">
      <img :src="myCard.image" alt="img">
      <div class="card-ellipse">{{ myCard.id }}</div>
    </div>
    <div class="card-title">
      {{ myCard.title }}
    </div>
    <div class="card-descry">
      {{ myCard.descry }}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Card",
  props: ["card"],
  data() {
    return {
      myCard: {
        image: this.card.image,
        title: this.card.title,
        descry: this.card.descry,
        id: this.card.id
      }
    }
  }
}
</script>

<style scoped>
.card {
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 620px;
  height: 450px;
  margin: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card-image {
  padding-top: 40px;
  position: relative;
}
.card-title {
  padding-top: 25px;
  font-family: 'RotondaC-Bold';
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #26303B;
}
.card-descry {
  padding-left: 70px;
  padding-right: 70px;
  padding-bottom: 15px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #26303B;
}
.card-ellipse {
  position: absolute;
  display: block;
  width: 50px;
  height: 50px;
  left: -9px;
  top: 28px;
  border-radius: 50%;
  background-color: #fff;
  font-family: RotondaC;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 46px;
  text-align: center;
  color: #7DB945;
}
</style>