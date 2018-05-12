

var diver = { payments: [
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