<template>
  <div id="app">
    <Splide></Splide>
    <Modal></Modal>
  </div>
</template>

<script>
import Splide from "@/components/Splide";
import Modal from "@/components/UI/Modal";

export default {
  name: 'App',
  components: {
    Splide,
    Modal
  }
}
</script>

<style>
@font-face {
  font-family: 'font0af53d8e86ff91c1a8a3e36197626368';

  src:    url('https://nomail.com.ua/files/eot/0af53d8e86ff91c1a8a3e36197626368.eot?#iefix') format('embedded-opentype'),
  url('https://nomail.com.ua/files/woff/0af53d8e86ff91c1a8a3e36197626368.woff') format('woff'),
  url('https://nomail.com.ua/files/woff2/0af53d8e86ff91c1a8a3e36197626368.woff2') format('woff2');
}

@font-face { font-family: 'RotondaC';  src: local('RotondaC'), url('https://nomail.com.ua/files/woff/0af53d8e86ff91c1a8a3e36197626368.woff') format('woff'); }

@font-face {
  font-family: 'fonted8dda958a8c9307c30fc90354cba006';

  src:    url('https://nomail.com.ua/files/eot/ed8dda958a8c9307c30fc90354cba006.eot?#iefix') format('embedded-opentype'),
  url('https://nomail.com.ua/files/woff/ed8dda958a8c9307c30fc90354cba006.woff') format('woff'),
  url('https://nomail.com.ua/files/woff2/ed8dda958a8c9307c30fc90354cba006.woff2') format('woff2');
}

@font-face { font-family: 'RotondaC-Bold';  src: local('RotondaC-Bold'), url('https://nomail.com.ua/files/woff/ed8dda958a8c9307c30fc90354cba006.woff') format('woff'); }
body {
  background-color: #F6F6F6;
}
* {
  font-family: 'RotondaC';
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.splide__arrow svg {
  fill: #D0D5CD;
}
.splide__pagination {
  display: none;
}
</style>
