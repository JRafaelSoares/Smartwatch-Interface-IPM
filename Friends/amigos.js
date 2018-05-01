
var diver = { amigos: [
        { "nome": "Amelia", "surname": "Pinto", "added": 1, "favorito": 0, "km": 10, "place": "Palco 1"},
        { "nome": "Bigorna", "surname": "Lopes", "added": 1, "favorito": 0, "km": 5, "place": "Palco 2"},
        { "nome": "José", "surname": "Alves","added": 1, "favorito": 0, "km": 2, "place": "Palco 3"},
        { "nome": "Jorge", "surname": "Mendes", "added": 0, "favorito": 0, "km": 0.6, "place": "Bar"}]};

var onDisplay = { onHold: []};

function getAllFriends() {
    "use strict";
    return diver.amigos;
}

function getOnDisplay(){
    return onDisplay.onHold;
}

function setStuffs(newCenas) {
    cancelarBilhete.onHold[0]=newCenas;
}