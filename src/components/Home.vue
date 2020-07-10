<template lang="pug">
    section(class="home") 
      img(class="home__logo"  src="assets/img/home/logo.png")
      div(class="home__main")
        img(class="home__main-head"  src="assets/img/home/head.gif")
        img(class="home__main-txt"  src="assets/img/home/anti.svg")
        img(class="home__main-txt-mob"  src="assets/img/home/anti-mob.svg")
      div(class="home__title") 
        div(class="home__title-txt") <span class="skyBlueColor">//01: Fantola:</span> Анализ трендов завершен. Загружаю... <br><span class="lightRedColor">//02: ERROR:</span> Обнаружены Злые Нейросети. Перегрузка сети<br><span class="lightRedColor">КРИНЖЕМ:</span> видосами от Трум Трум, разоблачениями Моргенштерна, нытьем про ЛЕТО2020.<br><span class="skyBlueColor">//03: Решение:</span> Контентная контратака! S.O.S!!! <br><br>...........................................
        div(class="home__title-img")
          img(class="home__title-img-line" src="assets/img/home/line.png")
          img(class="home__title-img-mouse" src="assets/img/home/mouse.png")
      div(class="home__wave" )
      img(class="home__wave-mob"  src="assets/img/home/backMain-mob.png")
      div(class="home__blue")
        div(class="home__blue__line")
          img(class="home__blue__line-pony" src="assets/img/home/pony.svg")
        div(class="home__blue__desc")  Нейросети Fantola нужна твоя <br class="mob">помощь! Пора вернуть интернету постиронию, челленджи 100 слоев и тиктоки, которым не стыдно <br class="mob">поставить лойс.<br><br class="mob">Загрузись в сквад одного из вкусов Fantola, пости в ленте фото с <br class="mob">хэштегом <span>#форсимfantola</span>, получи топовые призы и пофиксь интернет!
          
        router-link(v-bind:to="'/chose'" class="home__blue__link") 
          span()
          span()
          span()
          span()
          div(class="home__blue__link-block") ENTER THE НЕЙРОСЕТЬ
          img(class="home__blue__link-img" src="assets/img/home/arrow-right.svg")
</template>


<script>


export default {
  name: 'Home',  
  beforeMount(){ 
          
  },
  computed: {    
    
  },
  methods:{   
    
  },
  mounted(){
  }
}

</script>
