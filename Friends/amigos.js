
var diver = { amigos: [
        { "nome": "Amelia", "added": 1, "favorito": 0, "km": 10},
        { "nome": "Bigorna", "added": 1, "favorito": 0, "km": 5},
        { "nome": "José", "added": 1, "favorito": 0, "km": 2},
        { "nome": "Jorge", "added": 0, "favorito": 0, "km": 0.6}]};

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