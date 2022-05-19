let lisOL = document.getElementById('lista-tarefas') // OL
let buTon = document.getElementById('criar-tarefa') // Botaun
let inputB = document.querySelector('input')
let filhoslisOL = document.getElementsByTagName('li') //considera essa varias como se fosse um array

function adicionarTarefaNoDom(teste) {
    let criarlista = document.createElement('li')
    criarlista.innerText = inputB.value;
    lisOL.appendChild(criarlista)
    inputB.value = '';
         
}
buTon.addEventListener('click', adicionarTarefaNoDom) 

/*
//deixarCinza
let filhoslisOL = document.getElementById('lista-tarefas').childNodes
function forGray(event) {           
  for(let i = 0; i < filhoslisOL.length; i++ ){
  let seleta = filhoslisOL[i]  
  seleta.style.backgroundColor = 'white'}
  event.target.backgroundColor = 'gray'     
  }     
    
filhoslisOL.addEventListener('click', forGray)

*/

function cinzaUnico (e){

  for(let i = 0; i < filhoslisOL.length; i += 1){
    if(filhoslisOL[i].classList == 'ficaCinza'){
      filhoslisOL[i].classList.remove('ficaCinza')
    }
  }
  e.target.classList = 'ficaCinza'
}

lisOL.addEventListener('click', cinzaUnico)





function listaCheck (event){

 event.target.classList.toggle('completed')

}

lisOL.addEventListener('dblclick',listaCheck) 



//https://pt.stackoverflow.com/questions/4605/remover-elemento-da-p%C3%A1gina-com-javascript
let apagarlista = document.querySelector('#apaga-tudo')
apagarlista.addEventListener('click', apagarmsm)
function apagarmsm(e) {
if (lisOL.parentNode) {
  lisOL.parentNode.removeChild(lisOL);
}
}
