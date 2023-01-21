function receberRetornoServidor () {
    return Promise.resolve({
        nome: 'Lucilia',
        email:'mluciliaserai@gmail.com'
    })
}

function redirecionar () {
    const path = location.pathname.split('/').slice(0, 2)
    path.push('feed.html')
    location.href = location.origin + path.join('/');
}

const formulario = document.querySelector('.form-auth');

formulario.onsubmit = (event) => {
    event.preventDefault();

    receberRetornoServidor()
    .then(resultado => {
        sessionStorage.setItem('usuario', resultado.nome);//armazena o dado no sessionStorage
        redirecionar();
    })
}