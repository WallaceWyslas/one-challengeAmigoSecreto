let friends = [];
let friendsName;
console.log(friends);

// toda vez que aperto esse botão no HTML, ele aciona essa função
function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo').value.trim();
    if (amigoInput !== '') {
        friends.push(amigoInput);
        console.log(friends);
    } else {
        alert('Por favor, insira um nome.')
    }
}
