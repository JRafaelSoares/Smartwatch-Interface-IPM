/* exported getDivertimentos */
/* exported getTickets */
/* exported setTickets */
/* exported getCancelarBilhete */
/* exported setStuffs */

var diver = { divertimentos: [
        { "nome": "Montanha Russa", "hora": "11:45"},
        { "nome": "Carrosel", "hora": "15:45"},
        { "nome": "Roda Gigante", "hora": "16:45"}]};

var tickets = { bilhetes: []};

var cancelarBilhete = { onHold: []};

function getDivertimentos() {
    "use strict";
    return diver.divertimentos;
}

function getTickets() {
    "use strict";
    return tickets.bilhetes;
}

function getCancelarBilhete(){
    return cancelarBilhete.onHold;
}


function setTickets(newTickets){
    tickets.bilhetes.push(newTickets);
}

function setStuffs(newCenas) {
    cancelarBilhete.onHold[0]=newCenas;
}