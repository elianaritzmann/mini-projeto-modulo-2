const btnEntrar = document.getElementById('entrar');
const email = document.getElementById('email');


btnEntrar.onclick = () => {
    const usuario = email.value
    localStorage.setItem('email', usuario);


 btnEntrar.disabled = !(emailValido && senha.length > 5);

 console.log('Email salvo:', usuario);
        alert('Login realizado com sucesso!');

}