<template>
 <div>
   <div class="title">
     Взгляните на процесс сборки <br>
     своими глазами
   </div>
   <splide class="splide">
     <splide-slide
         v-for="card in cards"
         :key="card.id"
     >
       <Card :card="card"></Card>
     </splide-slide>
   </splide>
 </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
import Card from "@/components/Card";

export default {
  components: {
    Card,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      cards: [
        {id: 1, image: '/assets/image1.png', title: 'Привезём точно по списку', descry: 'Сборщик берëт с собой наручный терминал, на котором он видит весь список покупок для каждого заказа.'},
        {id: 2, image: '/assets/image2.png', title: 'Собираем быстро и эффективно', descry: 'Бережно транспортируем контейнеры, фиксируя их стяжными ремнями. Системы охлаждения поддерживают температурный режим.'},
        {id: 3, image: '/assets/image3.png', title: 'За свежесть и качество отвечаем ', descry: 'Выделены специальные зоны, в том числе холодная и морозильная.'},
        {id: 4, image: '/assets/image4.png', title: 'Шампунь не положат рядом с рыбой', descry: 'Собираем и упаковываем ваш заказ с заботой: соблюдаем принципы товарного соседства и учитываем вес товара.'},
        {id: 5, image: '/assets/image5.png', title: 'Довезëм в сохранности даже яйца', descry: 'Для улучшения эргономики пространства товары размещены от тяжëлых к лëгким, находящимся уже в конечной зоне упаковки.'},
      ],
      options: {
        speed: 200,
      }
    }
  }
}

</script>

<style scoped>
.splide {
  width: 740px;
  margin: 0 auto;
  padding-top: 29px;
}
.title {
  padding-top: 40px;
  font-family: 'RotondaC-Bold';
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 46px;
  text-align: center;
  color: #26303B;
}
</style>
