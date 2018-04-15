/* exported loadAllRoomData */
/* exported loadAllBilhetes */
/* exported displayBilhetes */
/* exported loadAllStuff */

function loadAllBilhetes(allBilhetes) {
    "use strict";
    localStorage.setItem("Bilhetes", JSON.stringify(allBilhetes));
}

function loadAllStuff(allStuff) {
    "use strict";
    localStorage.setItem("Cenas", JSON.stringify(allStuff));
}

function loadAllDivertimentos(allDivertimentos) {
    "use strict";
    localStorage.setItem("Divertimentos", JSON.stringify(allDivertimentos));
}

function displayBilhetes() {
    "use strict";
    var bilhetes, lista, stuff;
    
    bilhetes = localStorage.getItem("Bilhetes");    
    stuff = JSON.parse(bilhetes);
    
    lista = document.getElementById("lista");
    var i = 0;
    
    for (i; i < stuff.length; i++) {
        lista.innerHTML += '<div class="entry" onclick="setStuffs(addStuff(' +i +'))"> <span class="text" align="center">' + stuff[i].nome + '</span> </div>';
    }
}
function displayDivertimentos(){
    "use strict";
    var diverti, lista, stuff;
    
    diverti = localStorage.getItem("Divertimentos");
        
    stuff = JSON.parse(diverti);
    
    lista = document.getElementById("lista");
    var i = 0;
    
    for (i; i < stuff.length; i++) {
        lista.innerHTML += '<div class="entry"> <span class="text" align="center">' + stuff[i].nome + '</span> </div>';
    }
}

function addStuff(i) {
    var bilheteStr =localStorage.getItem("Bilhetes");
    
    var bilhete = JSON.parse(bilheteStr);
    var cenasSTR = localStorage.getItem("Cenas");
    
    var cenas = JSON.parse(cenasSTR);
    cenas[0]=bilhete[i];
    
    localStorage.setItem("Cenas", JSON.stringify(cenas));
    
    return cenas;
}

