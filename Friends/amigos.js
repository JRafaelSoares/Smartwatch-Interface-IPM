
var diver = { amigos: [
        { "nome": "Amelia", "favorito": 0},
        { "nome": "Bigorna", "favorito": 0},
        { "nome": "José", "favorito": 0}]};

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