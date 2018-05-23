

var pay = { payments: [
    {"type": "Restaurante", "nome": "Sical", "preco": 1.5, "flag": 0, "pedido": [{"produto": "Café", "preco": 0.5}, {"produto": "Pastel", "preco": 1}]},
    {"type": "Divertimento", "nome": "Carrosel", "preco": 3, "flag": 0},
    {"type": "Divertimento", "nome": "Rapel", "preco": 2, "flag": 0},
    {"type": "Restaurante", "nome": "Bar Azul", "preco": 5, "flag": 0, "pedido": [{"produto": "Cerveja", "preco": 3}, {"produto": "Hamburguer", "preco": 2}]},
    {"type": "Restaurante", "nome": "Pub", "preco": 1, "flag": 1, "pedido": [{"produto": "Hamburguer", "preco": 1}]},
    {"type": "Divertimento", "nome": "Barco", "preco": 2.5, "flag": 1}]};

var onDisplay = { onHold: []};


function getAllPayments() {
    "use strict";
    return pay.payments;
}

function getOnDisplay() {
    return onDisplay.onHold;
}