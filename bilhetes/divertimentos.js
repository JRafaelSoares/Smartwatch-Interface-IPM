/* exported getDivertimentos */
/* exported getTickets */
/* exported setTickets */
/* exported getCancelarBilhete */
/* exported setStuffs */

var divertis = { divertimentos: [
        { "nome": "Slide", "hora": "11:45", tirado: 0},
        { "nome": "Carrosel", "hora": "15:45", tirado: 0},
        { "nome": "Roda Gigante", "hora": "16:45", tirado: 0},
        { "nome": "Rapel", "hora": "23:50", tirado: 0}]};

var cancelarBilhete = { onHold: []};

function getDivertimentos() {
    "use strict";
    return divertis.divertimentos;
    
}

function getCancelarBilhete(){
    return cancelarBilhete.onHold;
}