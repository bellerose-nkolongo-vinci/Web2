const btn= document.querySelector('button');
const p = document.querySelector('p');
const span = document.querySelector('span')
let cpt= 0;


btn.addEventListener('click', ()=> {
     
    cpt++;
    span.innerText = "Nombre de fois exécuter : " +cpt;
    
    if(cpt >= 5 ){
        p.innerText= "Bravo, bel échauffement !" ;
        console.log('onClickHandlerForBtn1::click');
        
    }

    if(cpt >= 10 ){
        p.innerText= "Vous êtes passé maître en l'art du clic !" ;
        console.log('onClickHandlerForBtn1::click');
        
    }
    
   
   
});