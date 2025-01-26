let friends = [];
console.log(friends);

// toda vez que aperto esse botão no HTML, ele aciona essa função
function adicionarAmigo() {
    const friendsInput = document.getElementById('amigo').value.trim();
    if (friendsInput !== '') {
        friends.push(friendsInput);
        console.log(friends);
    } else {
        alert('Por favor, insira um nome.')
    }
}
