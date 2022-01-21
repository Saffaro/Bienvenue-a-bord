window.onload = ()=>{

let i = 0
let a = document.querySelector("#bg__img")
let b = document.querySelector("#bg__img-1")
let c = document.querySelector("#bg__img-2")
let arrayImg = [a,b,c]

function startSlide(){
   
      setInterval(()=>{

         i++
         if(arrayImg[i] === a){

            arrayImg[0].classList.remove('slide-1') 
            arrayImg[0].classList.add('slide')
            
            arrayImg[2].classList.remove('slide')
            arrayImg[2].classList.add('slide-1')
            
         }

         if(arrayImg[i] === b){

            arrayImg[1].classList.remove('slide-1') 
            arrayImg[1].classList.add('slide')
            
            arrayImg[0].classList.remove('slide')
            arrayImg[0].classList.add('slide-1')

         }

         if(arrayImg[i] === c){

            arrayImg[2].classList.remove('slide-1') 
            arrayImg[2].classList.add('slide')
            
            arrayImg[1].classList.remove('slide')
            arrayImg[1].classList.add('slide-1')
           
            i -= 3

         }
        
   }, 15000)
       
}

startSlide()


 let peugeot = document.querySelector(".peugeot")
 let previousPeugeot = document.querySelector(".previous__peugeot")  
 let nextPeugeot = document.querySelector(".next__peugeot") 
 let arrayPeugeot = ["img/vehicule1.png","img/peugeot-208-noir.png","img/Peugeot-208.png"]
 let initializeArrayPeugeot = 0
 
 let ford = document.querySelector(".ford")
 let previousFord = document.querySelector(".previous__ford")  
 let nextFord = document.querySelector(".next__ford")  
 let arrayFord = ["img/vehicule2.png","img/ford-focus-2018-side-view-1.png","img/frontview-ford.png"]
 let initializeArrayFord = 0
 
 let audi = document.querySelector(".audi")
 let previousAudi = document.querySelector(".previous__audi")  
 let nextAudi = document.querySelector(".next__audi")  
 let arrayAudi = ["img/vehicule3.png","img/index.png","img/MX-audi.png"]
 let initializeArrayAudi = 0
 
 let opel = document.querySelector(".opel")
 let previousOpel = document.querySelector(".previous__opel")  
 let nextOpel = document.querySelector(".next__opel") 
 let arrayOpel = ["img/vehicule4.png","img/opel18.png","img/mokka-opel.png"]
 let initializeArrayOpel = 0 
 let arrayClone = [

   ["img/vehicule1.png","img/peugeot-208-noir.png","img/Peugeot-208.png"],
   ["img/vehicule2.png","img/ford-focus-2018-side-view-1.png","img/frontview-ford.png"],
   ["img/vehicule3.png","img/index.png","img/MX-audi.png"],
   ["img/vehicule4.png","img/opel18.png","img/mokka-opel.png"]

] 
let body = document.querySelector("body") 
let arraySection = [document.querySelector("section:first-of-type"),document.querySelector("section:nth-of-type(2)"),document.querySelector("section:nth-of-type(3)"), document.querySelector("section:nth-of-type(4)")]

window.addEventListener("scroll", (e)=>{

   if(body.scrollHeight < window.scrollY + window.innerHeight){

     let container = document.querySelector("main .container:last-of-type")
     let header = document.querySelector("header") 
     let footer = document.querySelector("#footer")
     
     for(let j = 0; j <= 3; j++){
     
      let add = Math.floor(Math.random() * 4)

      let i = arraySection[add].cloneNode(true)
      let imgClone = i.firstElementChild.querySelector('img')
      let previousSvgClone = imgClone.previousElementSibling
      let nextSvgClone = imgClone.nextElementSibling
      let initializeClone = 0
     
      previousSvgClone.addEventListener("click", (e)=>{

         --initializeClone   
         if(initializeClone < 0){
     
           initializeClone += 3
     
          }
          imgClone.src = arrayClone[add][initializeClone]
         console.log("clicked")
     
      })
     
      nextSvgClone.addEventListener("click", (e)=>{
     
         ++initializeClone 
         if(initializeClone === 3){
     
         initializeClone -= 3
     
        } 
        imgClone.src = arrayClone[add][initializeClone]
        
     
     })
      
      container.appendChild(i)
      
   } 

     let padding = getComputedStyle(header).paddingBottom 
     header.style.paddingBottom = (parseFloat(padding) + (11.5 * 16 ))+ "px"
      
     let margin = getComputedStyle(footer).marginTop
     footer.style.marginTop = (parseInt(margin) - (11.5 * 16)) + "px"
      
   }

})

previousPeugeot.addEventListener("click", (e)=>{

    --initializeArrayPeugeot    
    if(initializeArrayPeugeot < 0){

      initializeArrayPeugeot += 3

     }
     peugeot.src = arrayPeugeot[initializeArrayPeugeot]
    

 })

 nextPeugeot.addEventListener("click", (e)=>{

    ++initializeArrayPeugeot 
    if(initializeArrayPeugeot === 3){

    initializeArrayPeugeot -= 3

   } 
   peugeot.src = arrayPeugeot[initializeArrayPeugeot]
   

})

previousFord.addEventListener("click", (e)=>{

   --initializeArrayFord  
   if(initializeArrayFord < 0){

    initializeArrayFord += 3

   }  
   ford.src = arrayFord[initializeArrayFord]
  

})

nextFord.addEventListener("click", (e)=>{

    ++initializeArrayFord   
    if(initializeArrayFord === 3){

    initializeArrayFord -= 3

   }   
    ford.src = arrayFord[initializeArrayFord]
 

})

previousAudi.addEventListener("click", (e)=>{

   --initializeArrayAudi 
   if(initializeArrayAudi < 0){

    initializeArrayAudi += 3

   }  
   audi.src = arrayAudi[initializeArrayAudi]
  

})

nextAudi.addEventListener("click", (e)=>{

  ++initializeArrayAudi 
  if(initializeArrayAudi === 3){

  initializeArrayAudi -= 3

  }  
  audi.src = arrayAudi[initializeArrayAudi]
 

})

previousOpel.addEventListener("click", (e)=>{

   --initializeArrayOpel 
   if(initializeArrayOpel < 0){

    initializeArrayOpel += 3

   }  
   opel.src = arrayOpel[initializeArrayOpel]
  

})

nextOpel.addEventListener("click", (e)=>{

  ++initializeArrayOpel 
  if(initializeArrayOpel === 3){

  initializeArrayOpel -= 3

  }  
  opel.src = arrayOpel[initializeArrayOpel]
 

})
}