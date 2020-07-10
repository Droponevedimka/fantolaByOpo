<template lang="pug">
    section(class="face") 
      div(class="face__block")
        div(class="face__block-left")
          img(class="face__block-left-line" src="/assets/img/face/line.svg")
          img(class="face__block-left-line-mob" src="/assets/img/face/line-mob.svg")
          faceCum( ref="faceCum" :changeVisBtn="changeVisBtn")
          div(class="face__block-left-btn" @click="goFinal()") ЗАГРУЗИИИИТЬ!
        div(class="face__block-right") 
          img(class="face__block-right-bubl" src="/assets/img/face/bubl.svg")
          img(class="face__block-right-bubl-mob" src="/assets/img/face/bubl-mob.svg")
          img(class="face__block-right-around" src="/assets/img/face/around.svg")
          div(class="face__block-right-block") 
            div(class="face__block-right-block-title") И последнее: загрузи свою&nbsp;лучшую <br class="mob">фотку, чтобы&nbsp;получить личное&nbsp;<br class="mob"><span>ID&nbsp;сквада.</span>
            div(class="face__block-right-block-btn" ref="btn" @click="goFinal()") 
              span()
              span()
              span()
              span()
              p() ЗАГРУЗИИИИТЬ!
</template>


<script>
import faceCum from './module/faceCum.vue'

export default {
  name: 'Face',
  components: {
    faceCum
  },
  beforeMount(){ 
          
  },
  computed: {    
    
  },
  methods:{   
    goFinal(){       
      this.$refs.faceCum.captureToImg()
    },
    changeVisBtn(e){
      if(e){
        this.$refs.btn.style.opacity = '1'
        this.$refs.btn.style.cursor = 'pointer'
      } else {
        this.$refs.btn.style.opacity = '0.3'
        this.$refs.btn.style.cursor = 'none'
      }
    }    
  },
  mounted(){
    window.scrollTo(0, 0)
  }
}

</script>