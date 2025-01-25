let friends = [];
let friendsName;
console.log(friends);

// toda vez que aperto esse botão no HTML, ele aciona essa função
function adicionarAmigo() {
    if (friendsName != '') {
        friendsName = document.getElementById('amigo').value;
        friends.push(friendsName);
        console.log(friends);
    } else {
        alert('Por favor, insira um nome.')
    }
}
