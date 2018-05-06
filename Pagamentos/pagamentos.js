

var diver = { payments: [{"type": "Restaurante", "nome": "Res1", "preco": "1€", "flag": 0, "pedido": [{"produto": "Hamburguer", "preco": "1€"}]},
                         {"type": "Divertimento", "nome": "Montanha", "preco": "2.5€", "flag": 0}]};

var onDisplay = { onHold: []};


function getAllPayments() {
    "use strict";
    return diver.payments;
}

function getOnDisplay() {
    return onDisplay.onHold;
}