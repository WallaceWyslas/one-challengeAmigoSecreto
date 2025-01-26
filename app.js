let friends = [];
console.log(friends);

// toda vez que aperto esse botão no HTML, ele aciona essa função
function adicionarAmigo() {
    const friendsInput = document.getElementById('amigo').value.trim();
    if (friendsInput !== '') {
        friends.push(friendsInput);
        limparCampo();
        atualizarListaDeAmigos();

        console.log(friends);
    } else {
        alert('Por favor, insira um nome.')
    }
}

function limparCampo() {
    document.getElementById('amigo').value = '';
}

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
