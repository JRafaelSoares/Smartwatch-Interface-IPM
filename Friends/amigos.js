
var diver = { amigos: [
        { "nome": "Amelia", "added": 1, "favorito": 0},
        { "nome": "Bigorna", "added": 1, "favorito": 0},
        { "nome": "José", "added": 1, "favorito": 0},
        { "nome": "Jorge", "added": 0, "favorito": 0}]};

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