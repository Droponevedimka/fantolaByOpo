<template lang="pug">
    section(class="final") 
      div(class="final__container")
        div(class="final__container__back")
          div(class="final__container__back-img")
          img(class="final__container__back-img-mob" src="/assets/img/final/back-mob.svg")
        div(class="final__container__body")
          div(class="final__container__body-left")
            div(class="final__container__body-left-title") {{final.title}} <img class="final__container__body-left-title-emoji" :src="`/assets/img/final/${final.emoji}.svg`"/>
            div(class="final__container__body-left-block")
              img(class="final__container__body-left-block-img" ref="blockImage" src="/assets/img/final/back-img.png")
              
          div(class="final__container__body-right") 
            div(class="final__container__body-right-title") {{final.title}} <img class="final__container__body-right-title-emoji" :src="`/assets/img/final/${final.emoji}.svg`"/>
              
            div(class="final__container__body-right-desc" v-html="final.desc") 
            div(class="final__container__body-right-box")
              div(class="final__container__body-right-box-skills")
                div(class="final__container__body-right-box-skills-item" v-for="item in final.skills")
                  div(class="final__container__body-right-box-skills-item-percent") {{item.precent}}%
                  div(class="final__container__body-right-box-skills-item-desc" v-html="item.name")  

        div(class="final__container__bottom")
          div(class="final__container__bottom-socs")
            a(class="final__container__bottom-socs-link" v-for="item in socsLink" :href="item.href")
              span()
              span()
              span()
              span()
              img(class="final__container__bottom-socs-img" :src="item.img")
          div(class="final__container__bottom-other")
            div(class="final__container__bottom-other-txt" v-html="final.rule")
            div(class="final__container__bottom-other-mob")
              a(class="final__container__bottom-other-mob-link" v-for="item in socsLink" :href="item.href")                
                img(class="final__container__bottom-other-mob-img" :src="item.img")
            div(class="final__container__bottom-other-fant")
              img(class="final__container__bottom-other-fant-logo" src="/assets/img/final/logo.svg")
              div(class="final__container__bottom-other-fant-desc") @Fantola 2020
</template>


<script>

export default {
  name: 'Final',
  data(){
    return {
      socsLink: [
        {name: 'vk', href: '#', img: '/assets/img/final/soc/vk.png'},
        {name: 'fb', href: '#', img: '/assets/img/final/soc/fb.png'},
        {name: 'inst', href: '#', img: '/assets/img/final/soc/inst.png'},
        {name: 'tg', href: '#', img: '/assets/img/final/soc/tg.png'},
      ]
    }
  },
  components: {
      
  },
  beforeMount(){ 
          
  },
  computed: {    
    id(){
      return this.$store.state.route.params.id
    },   
    final(){
      return this.$store.getters.getFinalById(this.id)
    },
    resImg(){
      return this.$store.getters.getResultImage()
    }
  },
  methods:{   
      
  },
  mounted(){

    if(this.resImg) {    

        this.$refs.blockImage.src = this.resImg
  
    }


  }
}

</script>