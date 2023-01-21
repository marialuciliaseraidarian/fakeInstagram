//Exercício I
//2. Obtendo elementos com seletores CSS:
document.querySelector('header .avatar-content div').innerhtml = '<strong>Nome Usuário</strong>'

//Fica melhor selecionar e armazenar em uma variável e depois fazer as alterações:

const nomeUsuario = document.querySelector("header .avatar-content div");
nomeUsuario.innerHTML = '<strong>Nome Usuário</strong>';

//3. Obtenha input com um name específico através do seletor CSS:
//document.querySelector('.form-auth input[name="name"]').placeholder = 'Digite seu primeiro nome';

//4. Obtendo input selecionando pela propriedade name:

const primeiroNomeInput = document.getElementsByName('name')[0]
primeiroNomeInput.placeholder = 'Digite o primeiro nome';

//Exercício II
//1. Alterando a borda dos inputs do formulário de cadastro:

const inputs = document.querySelectorAll('.form-auth input');
inputs.forEach(input => {
    input.style.borderRadius = '0.2rem';
})

//2. Alterando posicionanmento dos inputs:

const formAuth = document.querySelector('.form-auth');
formAuth.style.display = 'flex'
formAuth.style.flexDirection = 'column';

//3. Selecionando o body diretamente para alterar a cor do fundo:

document.body.style.backgroundColor = '#fafafa';

//4. Alterações usando cssText:

document.body.style.cssText = 'display: flex; background-color: gray';

//5. Incluir novo campo no furmulário:

const dateInput = document.createElement('input');//cria o novo input
dateInput.type = "date";//insere o tipo do input, que neste caso é data
dateInput.name = "date";
formAuth.insertBefore(dateInput, primeiroNomeInput); //indica o local a ser inserido o input, neste caso depois(before) do input com o nome 'primeiroNomeInput'.













