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

let arraySection = [document.querySelector("section:first-of-type"),document.querySelector("section:nth-of-type(2)"),document.querySelector("section:nth-of-type(3)"), document.querySelector("section:nth-of-type(4)")]
let img = [ document.querySelector(".peugeot"),document.querySelector(".ford"),document.querySelector(".audi"),document.querySelector(".opel")]
let arrayVehicule = [

   ["img/vehicule1.png","img/peugeot-208-noir.png","img/Peugeot-208.png"],
   ["img/vehicule2.png","img/ford-focus-2018-side-view-1.png","img/frontview-ford.png"],
   ["img/vehicule3.png","img/index.png","img/MX-audi.png"],
   ["img/vehicule4.png","img/opel18.png","img/mokka-opel.png"]

] 
let body = document.querySelector("body") 


window.addEventListener("scroll", (e)=>{

   if(body.scrollHeight < window.scrollY + window.innerHeight){

     let container = document.querySelector("main .container:last-of-type")
     let header = document.querySelector("header") 
     let footer = document.querySelector("#footer")
     
     for(let j = 0; j <= 3; j++){
     
      let add = Math.floor(Math.random() * 4)
      let clone = arraySection[add].cloneNode(true)
      let imgClone = clone.firstElementChild.querySelector('img')
     
       let vehiculeClone = new Clone(imgClone, initialize = 0, arrayVehicule, add)
       vehiculeClone.nextVehicule()
       vehiculeClone.previousVehicule()
     
      
      container.appendChild(clone)
      
   } 

     let padding = getComputedStyle(header).paddingBottom 
     header.style.paddingBottom = (parseFloat(padding) + (11.5 * 16 ))+ "px"
      
     let margin = getComputedStyle(footer).marginTop
     footer.style.marginTop = (parseInt(margin) - (11.5 * 16)) + "px"
      
   }

})

let vehicule1 = new Vehicule(img, initialize = 0, arrayVehicule, 0)
let vehicule2 = new Vehicule(img, initialize = 0, arrayVehicule, 1)
let vehicule3 = new Vehicule(img, initialize = 0, arrayVehicule, 2)
let vehicule4 = new Vehicule(img, initialize = 0, arrayVehicule, 3)


vehicule1.previousVehicule()
vehicule2.previousVehicule()
vehicule3.previousVehicule()
vehicule4.previousVehicule()


vehicule1.nextVehicule()
vehicule2.nextVehicule()
vehicule3.nextVehicule()
vehicule4.nextVehicule()

}
