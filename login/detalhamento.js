const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

  fetch('https://6860899b8e74864084437167.mockapi.io/jmt-futurodev/api/parceiros')
    .then(res => res.json())
    .then(data => {
      const parceiro = data.find(p => p.id === id);
      if (!parceiro) {
        document.getElementById('detalhesDoParceiro').innerHTML = '<p>Parceiro não encontrado.</p>';
        return;

      }
      let avatarSrc = '';
            if (parceiro.tipoParceiro === 'ECO') {
                avatarSrc = 'floresta.png'; 
            } else if (parceiro.tipoParceiro === 'COO') {
                avatarSrc = 'assimilacao-cultural.png'; 
            } else { 
                avatarSrc = 'lixeira-de-reciclagem.png';
            }
            
      if (parceiro.papel){

      }

      document.getElementById('detalhesDoParceiro').innerHTML =
      
       `
        <h1>${parceiro.nomeParceiro}</h1>
        <p><strong>Tipo:</strong> ${parceiro.tipoParceiro}</p>
        <p><strong>Responsável:</strong> ${parceiro.responsavelParceiro}</p>
        <p><strong>Email:</strong> ${parceiro.emailResponsavel}</p>
        <p><strong>Telefone:</strong> ${parceiro.telResponsavel}</p>
        <p><strong>Endereço:</strong> ${parceiro.rua}, ${parceiro.numero} - ${parceiro.bairro}</p>
        <p><strong>Resíduos aceitos:</strong</p>
        <ul>
        ${parceiro.papel ? '<li>Papel</li>' : ''}
        ${parceiro.plastico ? '<li>Plástico</li>' : ''}
        ${parceiro.vidro ? '<li>Vidro</li>' : ''}
        ${parceiro.metal ? '<li>Metal</li>' : ''}
        ${parceiro.oleoCozinha ? '<li>Óleo de cozinha</li>' : ''}
        ${parceiro.pilhaBateria ? '<li>Pilhas e Baterias</li>' : ''}
        ${parceiro.eletronico ? '<li>Eletrônicos</li>' : ''}
        ${parceiro.roupa ? '<li>Roupas</li>' : ''}
        ${parceiro.outros ? '<li>Outros</li>' : ''}
      </ul>
        
      `;
    })
    .catch(error => {
      console.error(error);
      document.getElementById('detalhesDoParceiro').innerHTML = '<p>Erro ao buscar parceiro.</p>';
    });

