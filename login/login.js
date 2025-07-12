const btnEntrar = document.getElementById('entrar');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

btnEntrar.onclick = () => {
    const usuario = email.value
    localStorage.setItem('email', usuario);


 btnEntrar.disabled = !(email.length && senha.length > 5);

 console.log('Email salvo:', usuario);
 window.alert('Login realizado com sucesso!');

 window.location.href = 'listagemParceiros.html'

}