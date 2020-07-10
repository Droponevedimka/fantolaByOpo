<template lang="pug">
    section(class="chose")
      div(class="chose__illus")
        img(class="chose__illus-bubl" src="/assets/img/chose/bubl.svg")
        img(class="chose__illus-bubl-mob" src="/assets/img/chose/bubl-mob.svg")
        img(class="chose__illus-cube" src="/assets/img/chose/cube.svg")
      div(class="chose__block")
        div(class="chose__block-two")
          div(class="chose__block-title") Выбирай команду тщательнее, чем <br class="desc">фото для Тиндера и видос перед сном.
          img(class="chose__block-title-img" src="/assets/img/chose/cursor.svg")
        div(class="chose__block-items")
          div(class="chose__block-items-item" v-for="item in allChose" :class="'chose__block-items-item-'+item.id" @click="isClicked(item.id)")
            div(class="chose__block-items-item-back")
            div(class="chose__block-items-item-top")
              img(class="chose__block-items-item-top-img" :src="item.img")
            div(class="chose__block-items-item-bot" :class="'chose__block-items-item-bot-'+item.id")
              div(class="chose__block-items-item-bot-title" v-html="item.title")
              div(class="chose__block-items-item-bot-desc" v-html="item.desc")
              div(class="chose__block-items-item-bot-btn" v-html="item.btn")
      
</template>


<script>

export default {
  name: 'Chose',
  data(){
    return{
      allChose: [
        {id:1, img: '/assets/img/chose/bum.svg', title: 'Gum Guardians', desc: 'Развали захватчиков, как деда&nbsp;Рик! <br>FANTOLA: Омаева мо шиндеру!', btn: 'СТАТЬ ХОКАГЕ'},
        {id:2, img: '/assets/img/chose/orange.svg', title: '@orange_cola', desc: 'Танцуй до победного как гипноденсер! <br>FANTOLA: Мяукни как нейросеть!', btn: '#ХОЧУВРЕКИ'},
        {id:3, img: '/assets/img/chose/mango.svg', title: 'Mango ft. Trio', desc: 'Покажи им мамбл <br>FANTOLA: РАТАТАТАТА', btn: 'Раздать стиля'},
      ]
    }
  },
  components: {
    
  },
  beforeMount(){ 
          
  },
  computed: {    
    
  },
  methods:{   
      isClicked(i){
          window.globalNameOfItog = i
          this.$router.push({path: `/face`}) 
      }
  },
  mounted(){
    window.scrollTo(0, 0)
  }
}

</script>