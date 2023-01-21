//Pegando os elementos HTML e armazenando em variáveis
let carousel = document.querySelector('.carousel');
let slides = document.querySelectorAll('.carousel>div'); //a seta pega as divs filhas diretas do carousel
let prevBtn = document.getElementById('arrow-back');
let nextBtn = document.getElementById('arrow-forward');

//Criando clones da primeira e da última posição
let lastClone = slides[slides.length -1].cloneNode(true);
//inserindo uma id para o clone criado
lastClone.id = 'last-clone';
let firstClone = slides[0].cloneNode(true);
firstClone.id = 'first-clone';
//posicionando a clonagem
slides[slides.length -1].insertAdjacentElement('afterend', firstClone);
slides[0].insertAdjacentElement('beforebegin', lastClone);

//Retribuindo a variável slides para considerar os clones criados
slides = document.querySelectorAll('.carousel>div');

//Inicializando o counter e a largura
let counter = 1; //variável para servir de contador
let width = slides[1].clientWidth //para pegar o tamanho das imagens sem a div

//Considerando que o carousel começa no primeiro item, precisa por causa dos clones
carousel.style.transform = "translateX(" + -width * counter + "px)"

carousel.addEventListener('transitionend', () => {
    if(slides[counter].id == 'first-clone'){
        carousel.style.transition = 'none'
        counter = 1
        carousel.style.transform = "translateX(" + -width * counter + "px)"
    }else if(slides[counter].id == 'first-clone'){
        carousel.style.transition = 'none'
        counter = -2
        carousel.style.transform = "translateX(" + -width * counter + "px)"
    }    
});

nextBtn.onclick = () => {
    if(counter >= slides.length -1) return
    counter++
    carousel.style.transition = '.5s'
    carousel.style.transform = "translateX(" + -width * counter + "px)"         
};

prevBtn.onclick = () => {
    if(counter <= 0) return
    counter--
    carousel.style.transition = '.5s'
    carousel.style.transform = "translateX(" + -width * counter + "px)"    
}

//função para rodar o carousel sozinho.
setInterval(nextBtn.onclick ,3000)
