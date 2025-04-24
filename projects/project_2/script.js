const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()

   const height= parseInt(document.querySelector('#height').value)
   const weight= parseInt(document.querySelector('#weight').value)
   const results= document.querySelector('#results')

   if(height === ''|| height < 0 || isNaN(height)){
    results.innerHTML = 'Please enter valid values'
   } else if(weight === ''|| weight < 0 || isNaN(weight)){
    results.innerHTML = 'Please enter valid values'
   } else{
    const bmi = (weight/((height*height)/1000)).toFixed(2)
    results.innerHTML = `Your BMI is ${bmi}`
    switch (true) {
        case (bmi <18.6):
        results.innerHTML +=`<br> You are underweight`
            
            break;
            case  (bmi <18.6 && bmi > 24.9):
        results.innerHTML +=`<br> You are normal weight` 
            break;
            case (bmi >24.9):
        results.innerHTML +=`<br> you are overweight`
            
            break;
    
     
    }
   }
})