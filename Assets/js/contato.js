const form = document.getElementById("form");
const username= document.getElementById("username");
const telefone = document.getElementById("telefone");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (event)=>{
   event.preventDefault();

   checkForm();

})


function checkInputUsername(){
    const usernameValue=username.value;

    if(usernameValue===""){
        errorInput(username,"Preencha um username!")
    }else{
        const formItem=username.parentElement;
        formItem.className="form-content"
    }
}

function checkInputTelefone(){
    const telefoneValue=telefone.value;

    if(telefoneValue===""){
        errorInput(telefone,"Preencha um campo telefone!")
    }else{
        const formItem=telefone.parentElement;
        formItem.className="form-content"
    }
}

function checkInputEmail(){
    const emailValue=email.value;

    if(emailValue===""){
        errorInput(email,"O email é obrigatório.")
    }else{
        const formItem=email.parentElement;
        formItem.className="form-content"
    }
}

function checkInputMensagem(){
    const mensagemValue=mensagem.value;

    if(mensagemValue===""){
        errorInput(mensagem,"A mensagem é obrigatória!")
    }else{
        const formItem=mensagem.parentElement;
        formItem.className="form-content"
    }
}

function checkForm(){
    checkInputUsername();
   checkInputTelefone();
   checkInputEmail();
   checkInputMensagem();

   const formItem = form.querySelectorAll(".form-content")

   const isValid = [...formItem].every( (item) => {
    return item.className ==="form-content"
});

if(isValid){
    alert("CONTATO ENVIADO COM SUCESSO!")
}

//console.log(isValid);//
}


function errorInput(input,message){
    const formItem=input.parentElement;
    const textMessage=formItem.querySelector("a")

    textMessage.innerText=message;

    formItem.className="form-content error"
}
