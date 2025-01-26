let friends = [];

// toda vez que aperto esse botão no HTML, ele aciona essa função
// essa função verifica se o campo de amigo está vazio
// se estiver vazio, ela mostra uma mensagem, se n estiver vazio, ela adiciona o amigo na lista, limpa o campo e atualiza a lista de amigos
function adicionarAmigo() {
    const friendsInput = document.getElementById('amigo').value.trim();
    if (friendsInput !== '') {
        friends.push(friendsInput);
        limparCampo();
        atualizarListaDeAmigos();
    } else {
        alert('Por favor, insira um nome.')
    }
}

// limpa o campo que digita o nome do amigo
function limparCampo() {
    document.getElementById('amigo').value = '';
}


// atualiza a lista de amigos
function atualizarListaDeAmigos() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = "";
  for (let i = 0; i < friends.length; i++) {
    const amigo = friends[i];
    const elementoLista = document.createElement('li');
    elementoLista.textContent = amigo;
    lista.appendChild(elementoLista);
  }
}

// sortear amigo aleatório
function sortearAmigo() {
    const amigoSorteado = friends[Math.floor(Math.random() * friends.length)];
    const resultado = document.getElementById('resultado');
    resultado.textContent = amigoSorteado;
}
