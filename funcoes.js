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
    console.log(bilhetes);
    lista = document.getElementById("lista");
    var i = 0;
    
    for (i; i < stuff.length; i++) {
        lista.innerHTML += '<div class="entry" onclick="setStuffs(addStuff(' +i +')); window.location.href = \'cancel_ticket.html\';"> <span class="text" align="center">' + stuff[i].nome + '</span> </div>';
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
        lista.innerHTML += '<div class="entry" onclick="addOnHoldDivertimento('+i+'); window.location.href = \'chosen_ticket.html\';"> <span class="text" align="center">'+stuff[i].nome+'</span></div>';
    }
}

function addOnHoldBilhete(i) {
    var bilheteStr =localStorage.getItem("Bilhetes");
    
    var bilhete = JSON.parse(bilheteStr);
    var cenasSTR = localStorage.getItem("Cenas");
    
    var cenas = JSON.parse(cenasSTR);
    cenas[0]=bilhete[i];
    
    localStorage.setItem("Cenas", JSON.stringify(cenas));
    
    return cenas;
}

function addOnHoldDivertimento(i) {
    var divertimentoStr =localStorage.getItem("Divertimentos");
    
    var divertimento = JSON.parse(divertimentoStr);
    var cenasSTR = localStorage.getItem("Cenas");
    
    var cenas = JSON.parse(cenasSTR);
    cenas[0]=divertimento[i];
    
    console.log(divertimento[i]);
    localStorage.setItem("Cenas", JSON.stringify(cenas));
    return cenas;
}

function loadDivertimento() {
    var stuffStr = localStorage.getItem("Cenas");
    
    var stuff = JSON.parse(stuffStr);
    
    var name = document.getElementById("nome");
    var time = document.getElementById("hora");
    
    console.log(diver);
    name.innerHTML = '<span class="text" align="center">' +stuff[0].nome + '</span>';
    
    time.innerHTML = '<span class="text" align="center"> Hora est. ' +stuff[0].hora + '</span>';
}

function addBilhete() {
    console.log("ola");
    var stuffStr = localStorage.getItem("Cenas");
    
    var stuff = JSON.parse(stuffStr);
    
    var bilhetesStr = localStorage.getItem("Bilhetes");
    
    var bilhetes = JSON.parse(bilhetesStr);
    
    var i = 0;
    var flag=0;
    for (i; i<bilhetes.length; i++){
        if (bilhetes[i].nome == stuff[0].nome){
            console.log("Ja existe bilhete!");
            flag=1;
        } 
    }
    if (flag !=1){
        bilhetes.push(stuff[0]);
        localStorage.setItem("Bilhetes", JSON.stringify(bilhetes));
    }
    
    
}

