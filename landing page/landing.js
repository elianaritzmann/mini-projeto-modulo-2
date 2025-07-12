
const nomeParceiro = document.getElementById('nomeParceiro');
const tipoParceiro = document.getElementById('tipoParceiro');
const responsavelParceiro = document.getElementById('responsavel');
const telResponsavel = document.getElementById('telefone');
const emailResponsavel =  document.getElementById('email');
const rua = document.getElementById('rua');
const numero = document.getElementById('numero');
const bairro = document.getElementById('bairro');
const papel = document.getElementById('papel');
const plastico = document.getElementById('plastico');
const vidro = document.getElementById('vidro');
const metal = document.getElementById('metal');
const oleoCozinha = document.getElementById('oleoCozinha');
const pilhaBateria = document.getElementById('pilhaBateria');
const eletronico = document.getElementById('eletronico');
const roupa = document.getElementById('roupa');
const outros = document.getElementById('outro');
const btnEnviar = document.getElementById('btnEnviar');

btnEnviar.onclick = enviar;

function enviar(){
    fetch ('https://6860899b8e74864084437167.mockapi.io/jmt-futurodev/api/parceiros', {
        method: 'POST',
        body: JSON.stringify({
            nomeParceiro: nomeParceiro.value ,
            tipoParceiro: tipoParceiro.value ,
            responsavelParceiro: responsavelParceiro.value ,
            telResponsavel: telResponsavel.value , 
            emailResponsavel: emailResponsavel.value,
            rua: rua.value,
            numero:numero.value,
            bairro:bairro.value,
            papel: papel.checked,
            plastico: plastico.checked,
            vidro: vidro.checked,
            metal: metal.checked,
            oleoCozinha: oleoCozinha.checked,
            pilhaBateria: pilhaBateria.checked,
            eletronico: eletronico.checked,
            roupa: roupa.checked,
            outros: outros.checked
        } ),
        headers: {
    'Content-Type': 'application/json'
    },
})
    .then((response)=>response.json())
    .then((json)=>
        console.log(json));
        window.alert('Dados enviados com sucesso!');
}