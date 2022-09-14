class Vehicule{
    
    constructor(img, initialize = 0, array, option){

      
        this.img = img
        this.initialize = initialize
        this.array = array
        this.option = option

    }

    previousVehicule(){

    this.img[this.option].previousElementSibling.addEventListener("click", (e)=>{

        --this.initialize   
        if(this.initialize < 0){
    
          this.initialize += 3
    
         }
         this.img[this.option].src = this.array[this.option][this.initialize]
      
    
     })
    }
    
    nextVehicule(){
     this.img[this.option].nextElementSibling.addEventListener("click", (e)=>{
    
        ++this.initialize 
        if(this.initialize === 3){
    
        this.initialize -= 3
    
       } 
       this.img[this.option].src = this.array[this.option][this.initialize]
       
    
    })

    }




}
