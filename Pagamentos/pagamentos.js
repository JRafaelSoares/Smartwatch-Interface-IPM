

var diver = { payments: [
    {"type": "Restaurante", "nome": "Res3", "preco": "10€", "flag": 0, "pedido": [{"produto": "Costeleta", "preco": "7€"}, {"produto": "Coca-cola", "preco": "1€"}, {"produto": "Gelado", "preco": "2€"}]},
    {"type": "Divertimento", "nome": "Carrosel", "preco": "3€", "flag": 0},
    {"type": "Divertimento", "nome": "Rapel", "preco": "2€", "flag": 0},
    {"type": "Restaurante", "nome": "Res2", "preco": "5€", "flag": 0, "pedido": [{"produto": "Pizza", "preco": "3€"}, {"produto": "Coca-cola", "preco": "2€"}]},
    {"type": "Restaurante", "nome": "Pedido", "preco": "1€", "flag": 1, "pedido": [{"produto": "Hamburguer", "preco": "1€"}]},
    {"type": "Divertimento", "nome": "Montanha", "preco": "2.5€", "flag": 1}]};

var onDisplay = { onHold: []};


function getAllPayments() {
    "use strict";
    return diver.payments;
}

function getOnDisplay() {
    return onDisplay.onHold;
}