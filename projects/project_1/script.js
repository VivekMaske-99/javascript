const button = document.querySelectorAll('.button')
const body = document.querySelector('body')
button.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        // if(e.target.id==='grey'){
        //     body.style.backgroundColor = e.target.id;
        // }
        // if(e.target.id==='white'){
        //     body.style.backgroundColor = e.target.id;
        // }
        // if(e.target.id==='blue'){
        //     body.style.backgroundColor = e.target.id;
        // }
        // if(e.target.id==='yellow'){
        //     body.style.backgroundColor = e.target.id;
        // }
        switch (button.id) {
            case 'grey':
                body.style.backgroundColor = button.id;
                
                break;
                case 'white':
                body.style.backgroundColor = button.id;
                
                break;
                case 'blue':
                body.style.backgroundColor = button.id;
                
                break;
                case 'yellow':
                body.style.backgroundColor = button.id;
                
                break;
        
        }
        
        
    })
})