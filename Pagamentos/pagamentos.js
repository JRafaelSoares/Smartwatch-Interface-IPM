
var diver = { restaurante: [ 
            { "nome": "Res1", "total": 1, "pedido": 
            [{"produto": "Hamburguer", "preco": 0.50, "quantidade":1 },  {"produto":"Pepsi", "preco": 0.50, "quantidade": 1}
            ]}
            ]}

var currentPedidos = { stuff: []};

var onDisplay = { onHold: []};


function getAllRestaurantes() {
    "use strict";
    return diver.restaurante;
}

function getOnDisplay(){
    return onDisplay.onHold;
}

function getCurrentPedidos() {
    return currentPedidos.stuff;
}