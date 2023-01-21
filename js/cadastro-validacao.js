//Parte I do exercício:

/* window.addEventListener('load', function(){

    //função para remover os erros, ela deverá ser chamada abaixo para não duplicar as mensagens de erro.
    const removeErrors = function(){
        const errorsSpans = document.querySelectorAll('main form.form-auth span.error')
        errorsSpans.forEach(span => span.remove());
    }

    const createError = function(input, mensagem){
        const errorSpan = document.createElement('span');
        errorSpan.classList.add('error');
        errorSpan.innerText = mensagem; //para deixar a criação da mensagem dinâmica e ser usada em outros casos.
        //para inserir a mensagem de erro depois do input, para isso usamos o afterend
        input.insertAdjacentElement('afterend', errorSpan);
    }

    const form = document.querySelector('main form.form-auth');

    //função para inserir as mensagens de erro, primeiro precisa dar o preventDefault para prevenir que o formulário seja enviado antes de validado.
    form.addEventListener('submit', function(event){

        event.preventDefault();
        //chamando a função de remoção das mensagens de erro, caso já existam.
        removeErrors();

        const inputList = document.querySelectorAll('main form.form-auth input');
        //variável para verificação se há erros ou não, para ser usada no final, caso não haja erro, para ser enviado o formulário através do submit
        let hasErrors = false

        //Funçõa para inserir as mensagens de erro caso os campos não estejam preenchidos.
        inputList.forEach(input => {
            if(!input.value){
                hasErrors = true
                createError(input, 'Campo obrigatório');
            }
        });
        //para que ao clicar o botão submit e não haja mais campos com erro, seja enviado do formulário.
        if(!hasErrors){
            this.submit()
        }
    });
});
 */

//Parte II do exercício:

window.addEventListener("load", function () {
  //função para remover os erros, ela deverá ser chamada abaixo para não duplicar as mensagens de erro.
  const removeErrors = function () {
    const errorsSpans = document.querySelectorAll(
      "main form.form-auth span.error"
    );
    errorsSpans.forEach((span) => span.remove());
  };

  const createError = function (input, mensagem) {
    const errorSpan = document.createElement("span");
    errorSpan.classList.add("error");
    errorSpan.innerText = mensagem; //para deixar a criação da mensagem dinâmica e ser usada em outros casos.
    //para inserir a mensagem de erro depois do input, para isso usamos o afterend
    input.insertAdjacentElement("afterend", errorSpan);
  };

  const form = document.querySelector("main form.form-auth");
  const inputList = document.querySelectorAll("main form.form-auth input");

  //função para inserir as mensagens de erro, primeiro precisa dar o preventDefault para prevenir que o formulário seja enviado antes de validado.
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    removeErrors();

    let hasErrors = false;

    //Funçõa para inserir as mensagens de erro caso os campos não estejam preenchidos.
    inputList.forEach((input) => {
      if (!input.value) {
        hasErrors = true;
        createError(input, "Campo obrigatório");
      }
    });
    //para que ao clicar o botão submit e não haja mais campos com erro, seja enviado do formulário.
    if (!hasErrors) {
      this.submit();
    }
  });

  const validateEmail = function (input) {
    //validar se o email tem @ e ponto
    const { value } = input;
    if (value.includes("@") && value.includes(".")) {
      return;
    } else {
      createError(input, "O campo deve conter @ e .");
    }
  };

  const validateLength = function (input, min, max) {
    //validar qtd de caracteres, na hora de chamar a função tem que inserir a qtd de caracter e ele irá acrescentar na mensagem dinamicamente
    const { value } = input;

    if (value.length > min && value.length < max) {
      return;
    } else {
      createError(input, `O campo deve ter entre ${min} e ${max} caracteres`); //uso de interpolação
    }
  };

  const validateDate = function (input, min, max) {
    const { value } = input;
    const ano = value.split("-")[0];
    const idade = new Date().getFullYear() - parseInt(ano);

    if (idade >= min && idade < max) {
      return;
    } else {
      createError(
        input,
        `A idade tem que ester entre ${min} e ${max} anos`,
        "input"
      );
    }
  };

  const validateCep = function (input) {
    const { value } = input;

    if (value.length == 8) {
      return;
    } else {
      createError(input, "O campo deve conter 8 caracteres numéricos");
    }
  };

  inputList.forEach((input) => {
    input.addEventListener("change", function () {
      removeErrors();

      switch (input.name) {
        case "email":
          validateEmail(input);
          validateLength(input, 10, 180);
          break;

        case "name":
          validateLength(input, 2, 80);
          break;

        case "surname":
          validateLength(input, 2, 100);
          break;

        case "username":
          validateLength(input, 10, 15);
          break;

        case "password":
          validateLength(input, 8, 100);
          break;

        case "date":
          validateDate(input, 16, 120);
          break;

        case "cep":
          validateCep(input);
          break;

        default:
          break;
      }
    });
  });

  //ficou faltando do professor resolver o problema que está removando o erro e enviando o formulário mesmo com erros

  //Inserir endereço automaticamente através do CEP:

  const cepInput = document.querySelector("#cep");
  const logradouro = document.querySelector("#logradouro");
  const localidade = document.querySelector("#localidade");

  cepInput.addEventListener("change", () => {
    //conferir valor do input
    if (cepInput.value.length != 8) return;

    //utilizar o feth para fazer a requisição (método GET)
    fetch(`https://viacep.com.br/ws/${cepInput.value}/json/`, {
      method: "get",
      mode: "cors",
    })
      .then((response) => response.json()) //transforma o json da resposta em uma linguagem que o js consegue ler
      .then((endereco) => {
        //Pegar o logradouro e localidade e injetar nos campos rua e cidade.
        logradouro.value = endereco.logradouro;
        localidade.value = endereco.localidade;
      })
      .catch((error) => console.log(error));
  });
});
