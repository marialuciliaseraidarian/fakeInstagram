
const likesImg = document.querySelector('.likes img');
const likesText = document.querySelector('.likes b');
let post = document.querySelector('.card').innerHTML;


likesImg.addEventListener('click', function(){
    const clickedImg = 'red-heart.png';
    const clicado = this.src.indexOf(clickedImg) != -1;
    const liksCount = parseInt(likesText.innerText.split(' ')[0]);

    if(clicado){
        this.src = 'img/icons/heart.svg'; //sem cor
        likesText.innerText = liksCount -1 + ' likes'
    }else{
        this.src = 'img/icons/' + clickedImg; //sem cor
        likesText.innerText = liksCount + 1 + ' likes'
    }    
});

const verMaisBtn = document.querySelector('#more');

const addPost = function () {
    const card = document.querySelector('.card').cloneNode(true);
    const mainContainer = document.querySelector('main.container');
    
    mainContainer.insertBefore(card, verMaisBtn);
}

verMaisBtn.onclick = addPost;

//inserir nome de usuário através do sessionStorage:

const tagNomeUsuario = document.querySelector('.avatar-content b');
tagNomeUsuario.innerText = sessionStorage.getItem('usuario');