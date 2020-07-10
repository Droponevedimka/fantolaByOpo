<template lang="pug">
    main(class="cum")
        div(class="cum__block")
            video(class="cum__block-video" ref="video" id="video" width="362" height="456" autoplay)
            
            canvas(class="cum__block-canvas" ref="canvas" id="canvas" width="362" height="456" @click="startWeb()")
            img(v-show="visTraf" class="cum__block-video-traf anim-video-load" src="/assets/img/face/face.png")

            div(v-if="backing" class="cum__block-back")

            div(class="cum__block-panel" v-show="visPanel")                
                img(class="cum__block-panel-img pic" src="/assets/img/face/pic.svg" id="snap" v-on:click="pic()")
                img(class="cum__block-panel-img capt" src="/assets/img/face/web.svg" id="snap" v-on:click="capture()")
            
            div(v-if="loading" class="cum__block-loader")
                div(class="cum__block-loader-loading")
                    div(class="cum__block-loader-loading-item" ref="loadItem")
                img(class="cum__block-loader-img" ref="loadImg" src="/assets/img/face/pony.svg")

            div(v-if="goFinal" class="cum__block-result")
                div(v-if="finalResult" class="cum__block-result-ok")
                    img(class="cum__block-result-ok-face" src="/assets/img/face/face-ok.svg" @click="reset()")
                    img(class="cum__block-result-ok-item" src="/assets/img/face/ok.svg")
                div(v-else class="cum__block-result-error" @click="reset()")
                    img(class="cum__block-result-error-img" src="/assets/img/face/pony-txt.svg")
                    div(class="cum__block-result-error-txt") Лицо не распознано. Попробуйте ещё раз

            div(class="cum__capture" ref="captureImg")
                canvas(class="cum__capture-img" ref="canvas2" width="362" height="456")
                // canvas(class="cum__capture-img" ref="canvas3" width="362" height="456")
            input( class="cum__file" type="file" ref="imageLoader" @change="changeImg")
        

        
</template>


<script>
import * as bodyPix from '@tensorflow-models/body-pix';
import html2canvas from 'html2canvas';
const facemesh = require('@tensorflow-models/facemesh');


export default {
  name: 'faceCum',
  props:  ['changeVisBtn'],
  data: function() {
      return {
        video: {},
        canvas: {},
        resultImg: null,
        masks               : [],        
        maskKeyPointIndexs  : [10, 234, 152, 454],
        loading: false,
        backing: false,
        visPanel: true,
        visTraf: true,
        finalResult: false,
        goFinal: false
      }
  },
  components: {    
  },
  beforeMount(){ 
              
  },
  computed: {    
    activeMaskById(){
            return this.$store.getters.getMasksById(window.globalNameOfItog)
    }
  },
  methods:{         
        async loadAndPredict() {
            this.loading = true
            this.backing = true
            this.visPanel = false
            this.visTraf = false
            
            const net = await bodyPix.load({
                architecture: 'MobileNetV1',
                outputStride: 16,
                multiplier: 0.75,
                quantBytes: 2
            });

            const segmentation = await net.segmentPerson(this.resultImg, {
                flipHorizontal: false,
                internalResolution: 'medium',
                segmentationThreshold: 0.7,
            });

            this.goNextLoading(10)
            
            const opacity = 1;
            const flipHorizontal = false;
            const foregroundColor = {r: 0, g: 0, b: 0, a: 255};
            const backgroundColor = {r: 255, g: 255, b: 255, a: 255};
            const maskBlurAmount = 3;     

            const coloredPartImage = bodyPix.toMask(segmentation, foregroundColor, backgroundColor);       


            if(segmentation) {
                // bodyPix.drawMask(
                // this.$refs.canvas3, this.resultImg, coloredPartImage, opacity, maskBlurAmount,
                // flipHorizontal);
                this.goNextLoading(30)
                
                    
                let context = this.resultImg.getContext('2d');

                let imageData = context.getImageData(0,0, segmentation.width, segmentation.height);

                let pixel = imageData.data;

                // console.log(segmentation, imageData)

                for (var p = 0; p<pixel.length; p+=4){
                    if (segmentation.data[p/4] == 0) {
                        pixel[p+3] = 0;
                    }
                }




                // console.log(pixel2)
                // for (let p = 0; p<pixel2.length; p+=4){
                //     if (pixel2[p] == 255 && pixel2[p+1] == 255 && pixel2[p+2] == 255 ) {
                //         pixel[p+3] = 0;                        
                //     }
                // }

                let itg = this.$refs.canvas2.getContext('2d');

                itg.imageSmoothingEnabled = true;
                itg.putImageData(imageData,0,0);
                
                // let image = new Image()
                // image.onload = this.drawImageActualSize(image);

                // image.src = canvas.toDataURL();


                this.loadMask()
            }

        },
        async loadMask() {
            const model = await facemesh.load();
            // const predictions = await model.estimateFaces(this.$refs.canvas2);
            const predictions = await model.estimateFaces(this.$refs.canvas);

            this.goNextLoading(50)

            if (predictions.length > 0) {
                // Наложение маски

                    this.goNextLoading(70)
                    let overheadIndex = 0;
                    let chinIndex = 2;
                    let leftCheekIndex = 1;
                    let rightCheekIndex = 3;
                    let dots, dot, maskElement, dotElement, maskType, maskCoordinate, maskHeight, maskWidth, maskSizeAdjustmentWidth, maskSizeAdjustmentHeight, maskSizeAdjustmentTop, maskSizeAdjustmentLeft, maskTop, maskLeft;
                    let randFace = this.randomInteger(0,this.activeMaskById.face.length - 1)                   
                    let randBack = this.randomInteger(0,this.activeMaskById.background.length-1)    

                    

                    this.$refs.captureImg.style.backgroundImage = `url('${this.activeMaskById.background[randBack].src}')` 
                    this.$refs.captureImg.style.backgroundSize = 'cover'          

                    if(this.isVideo){
                        leftCheekIndex = 3;
                        rightCheekIndex = 1;
                    }
                    if (predictions.length > 0) {
                        for (let x = 0; x < predictions.length; x++) {
                            const keypoints = predictions[x].scaledMesh;  //468 key points of face;
                        
                            if(this.masks.length > x){
                                dots = this.masks[x].keypoints;
                                maskElement = this.masks[x].maskElement;
                            }
                            else{
                                dots = [];
                                maskElement = document.createElement("img") 
                                maskElement.src = this.activeMaskById.face[randFace].src
                                maskElement.id = `mask_${x}`
                                maskElement.class = 'mask'
                                
                                this.masks.push({
                                    keypoints: dots,
                                    maskElement: maskElement
                                });
                                this.$refs.captureImg.append(maskElement);
                            }

                            this.goNextLoading(80)   

                            for (let i = 0; i < this.maskKeyPointIndexs.length; i++) {
                                const coordinate = this.getCoordinate(keypoints[this.maskKeyPointIndexs[i]][0], keypoints[this.maskKeyPointIndexs[i]][1]);
                                if(dots.length > i){
                                    dot = dots[i];
                                }
                                else{
                                    dotElement = document.createElement('div')
                                    dotElement.class = 'dot'
                                    dot = {top:0, left:0, element: dotElement};
                                    dots.push(dot);
                                }
                                dot.left = coordinate[0];
                                dot.top = coordinate[1];
                                dot.element.style.top = dot.top;
                                dot.element.style.left = dot.left;
                                dot.element.style.position = 'absolute'
                            }
                            maskType = this.activeMaskById.face[randFace].maskType;
                            switch(maskType) {
                                case 'full':
                                    maskCoordinate= {top: dots[overheadIndex].top, left: dots[leftCheekIndex].left};
                                    maskHeight = (dots[chinIndex].top - dots[overheadIndex].top) ;
                                    break;
                                case 'half':
                                default:
                                    maskCoordinate = dots[leftCheekIndex];
                                    maskHeight = (dots[chinIndex].top - dots[leftCheekIndex].top) ;
                                    break;
                            }
                            maskWidth = (dots[rightCheekIndex].left - dots[leftCheekIndex].left) ;
                            
                            maskSizeAdjustmentWidth = parseFloat(this.activeMaskById.face[randFace].scaleWidth);
                            maskSizeAdjustmentHeight = parseFloat(this.activeMaskById.face[randFace].scaleHeight);
                            maskSizeAdjustmentTop = parseFloat(this.activeMaskById.face[randFace].topAdj);
                            maskSizeAdjustmentLeft = parseFloat(this.activeMaskById.face[randFace].leftAdj);
                            
                            maskTop = maskCoordinate.top - ((maskHeight * (maskSizeAdjustmentHeight-1))/2) - (maskHeight * maskSizeAdjustmentTop);
                            maskLeft = maskCoordinate.left - ((maskWidth * (maskSizeAdjustmentWidth-1))/2) + (maskWidth * maskSizeAdjustmentLeft);
                            
                            
                            maskElement.style.top = maskTop + 'px';
                            maskElement.style.left = maskLeft + 'px'
                            maskElement.style.width = (maskWidth * maskSizeAdjustmentWidth) + 'px'
                            maskElement.style.height = (maskHeight * maskSizeAdjustmentHeight) + 'px'
                            maskElement.style.position = 'absolute'   
                            this.goNextLoading(100)                         
                            this.resultAlert(true)
                        }
                    }





                
            } else {
                this.resultAlert(false)
            }
        },
        drawImageActualSize(e){   
            let contextPerson = this.$refs.canvas2.getContext("2d");         
            contextPerson.clearRect(0,0,contextPerson.width,contextPerson.height);
            contextPerson.imageSmoothingEnabled = true;
            contextPerson.drawImage(e, 0, 0, contextPerson.width, contextPerson.height);
        },
        capture() {
            this.canvas = this.$refs.canvas         
            const context = this.canvas.getContext('2d').drawImage(this.video, -122, 0, 606, 456)
            
            this.resultImg = this.canvas   

            // console.log(context)

            this.loadAndPredict();            
        },
        pic(){
            this.$refs.imageLoader.click()
        },     
        changeImg(e){     

            if(e.target.files){

                let file = e.target.files[0];                
                let reader = new FileReader()


                reader.onload = (ev) => {                    
                    let img = new Image()                    
                    img.src = ev.target.result;

                    img.onload = (evv) => {
                        let canvas = this.$refs.canvas.getContext('2d')
                        canvas.clearRect(0,0, 362, 456)
                        canvas.drawImage(img,0,0, 362, 456)
                    }
                }
                reader.readAsDataURL(file)


            }       
           
        },        
        getCoordinate(x,y){
            let ratio, resizeX, resizeY;
            if(this.isVideo){
                if(this.webcam.webcamList.length ==1 || window.innerWidth/window.innerHeight >= this.$refs.webcam.width/this.$refs.webcam.height){
                    ratio = this.$refs.canvas.clientHeight/this.$refs.webcam.height;
                    resizeX = x*ratio;
                    resizeY = y*ratio;
                }
                else if(window.innerWidth>=1024){
                    ratio = 2;
                    leftAdjustment = ((this.$refs.webcam.width/this.$refs.webcam.height) * this.$refs.canvas.clientHeight - window.innerWidth) * 0.38
                    resizeX = x*ratio - leftAdjustment;
                    resizeY = y*ratio;
                }
                else{
                    leftAdjustment = ((this.$refs.webcam.width/this.$refs.webcam.height) * this.$refs.canvas.clientHeight - window.innerWidth) * 0.35
                    resizeX = x - leftAdjustment;
                    resizeY = y;
                }

                return [resizeX, resizeY];
            }
            else{
                return [x, y];
            }
        },
        startWeb(){
            
            if(!this.video){
                this.video = this.$refs.video        
                if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices
                    .getUserMedia(
                        { video: true }
                    )
                    .then(stream => {               
                    
                    this.video.srcObject = stream;
                    this.video.play()
                })
                    .catch( err => 

                        console.log(err)
                    );
                }

            }            
        },
        goNextLoading(e){
            this.$refs.loadImg.style.marginLeft = (e-12.5) + '%'
            this.$refs.loadItem.style.width = e + '%'
        },
        resultAlert(e){
            setTimeout(() => {
                this.visPanel = true
                this.loading = false
                this.goFinal = true
                this.finalResult = e    
                this.changeVisBtn(true)            
                if(e){
                    
                } else {
                    
                }
            }, 1000)            
        },
        reset(){
            this.goFinal = false
            this.backing = false
            this.traf = true
            this.changeVisBtn(false)  
            this.canvas.getContext("2d").clearRect(0,0,this.canvas.width, this.canvas.height)
            
        },
        captureToImg(e){
            if(this.finalResult && this.goFinal) {
                

                html2canvas(this.$refs.captureImg).then( canv => {                   

                    this.$store.commit('changeResImg', canv.toDataURL("image/jpg"))

                    this.$router.push({path: `/final/${window.globalNameOfItog}`}) 
                })


            } else {
                
            }            

        },
        randomInteger(min, max) {
            // случайное число от min до (max+1)
            let rand = min + Math.random() * (max + 1 - min);
            return Math.floor(rand);
        }

  },

  created(){
          
  },

  mounted(){      
        this.video = this.$refs.video      
        window.scrollTo(0, 0)  

        
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
            .getUserMedia(
                { video: true }
            )
            .then(stream => {               
            
            this.video.srcObject = stream;
            this.video.play()
        })
            .catch( err => 

                console.log(err)
            );
        }
  }
}

</script>
