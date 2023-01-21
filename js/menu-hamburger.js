let menuHamburguer = document.querySelector('.menu-hamburguer');
let navigation = document.querySelector('.navigation');

menuHamburguer.onclick = () => {
    if(navigation.style.transform == 'translateY(-150%)'){
    navigation.style.transform = 'translateY(-15%)';
    }else{
        navigation.style.transform = 'translateY(-150%)';
    }
}