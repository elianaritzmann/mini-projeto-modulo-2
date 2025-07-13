

const barraPesquisa = document.getElementById('barraPesquisa');
const btnPesquisa = document.getElementById('pesquisar')
const resultado = document.getElementById('resultado')

btnPesquisa.onclick = pesquisar;

function pesquisar(){
    const busca = barraPesquisa.value;
    fetch ('https://6860899b8e74864084437167.mockapi.io/jmt-futurodev/api/parceiros')
    .then((response)=>response.json())
    .then( data => {
const parceirosFiltrados = data.filter(parceiro =>
  (parceiro.nomeParceiro || '').toLowerCase().includes(busca.toLowerCase()) ||
  (parceiro.bairro || '').toLowerCase().includes(busca.toLowerCase())
);

 if (parceirosFiltrados.length > 0) {
        resultado.innerHTML = parceirosFiltrados.map(p => {
         
          let avatar= '';
          if (p.tipoParceiro === 'ECO') {
            avatar = 'floresta.png';
          } else if (p.tipoParceiro === 'COO') {
            avatar = 'assimilacao-cultural.png';
          } else {
            avatar = 'lixeira-de-reciclagem.png'; 
          }

          return `
<a class="link-card" href="detalhamento.html?id=${p.id}"><div class="card">
      <img src="${avatar}" alt="tipo de parceiro" class="img-card">
      <p><strong>Nome:</strong> ${p.nomeParceiro}</p>
      <p><strong>Bairro:</strong> ${p.bairro}</p>
      <p><strong>Data de inclusão do registro:</strong> ${p.dataCriacao}</p>
    </div>
  </a>
`;

        }).join('');
      } else {
        resultado.innerHTML = '<p>Nenhum parceiro encontrado.</p>';
      }
    })
    .catch(err => {
      console.error('Erro na requisição:', err);
      resultado.innerHTML = '<p>Erro ao buscar os parceiros.</p>';
    });

    }
        
