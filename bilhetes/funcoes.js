/* exported loadAllRoomData */
/* exported loadAllBilhetes */
/* exported displayBilhetes */
/* exported loadAllStuff */

function loadAllStuff(allStuff) {
    if(localStorage.getItem("Cenas") == null){
        "use strict";
        localStorage.setItem("Cenas", JSON.stringify(allStuff));
    }
}

function loadAllDivertimentos(allDivertimentos) {
    "use strict";
    if(localStorage.getItem("Divertimentos")==null){
        localStorage.setItem("Divertimentos", JSON.stringify(allDivertimentos));
    }
}

function displayBilhetes() {
    "use strict";
    var bilhetes, lista, stuff;
    
    bilhetes = localStorage.getItem("Divertimentos");   
    stuff = JSON.parse(bilhetes);
    console.log(bilhetes);
    lista = document.getElementById("lista");
    var i = 0;
    var empty = 0;
    for (i; i < stuff.length; i++) {
        if(stuff[i].tirado != 0){
            lista.innerHTML += '<div class="entry" onclick="addOnHoldDivertimento(' +i +'); window.location.href = \'ticket_cancel.html\';"> <span class="text" align="center">' + stuff[i].nome + '</span> </div>';
            empty = 1;
        }
    }
    if(empty == 0){
        lista.innerHTML = '<div class="text_position"><span class="text">Nao existem</span></div><div class="text_position2"><span class="text">bilhetes reservados</span></div>'
    }
}
function displayDivertimentos(){
    "use strict";
    var diverti, lista, stuff;
    
    diverti = localStorage.getItem("Divertimentos");
    console.log(diverti);
    stuff = JSON.parse(diverti);
    
    lista = document.getElementById("lista");
    var i = 0;
    
    for (i; i < stuff.length; i++) {
        if(stuff[i].tirado==0){
            lista.innerHTML += '<div class="entry" onclick="addOnHoldDivertimento('+i+'); window.location.href = \'ticket_chosen.html\';"> <span class="text" align="center">'+stuff[i].nome+'</span></div>';
        }
        if(stuff[i].tirado!=0){
            lista.innerHTML += '<div class="entry" id="PopUp"> <span class="text" align="center">'+stuff[i].nome+'</span></div>';
        }
    }
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
    
    name.innerHTML = '<span class="text" align="center">' +stuff[0].nome + '</span>';
    
    time.innerHTML = '<span class="text" align="center"> Hora est. ' +stuff[0].hora + '</span>';
}

function addBilhete() {
    var stuffStr = localStorage.getItem("Cenas");
    
    var stuff = JSON.parse(stuffStr);
    
    var bilhetesStr = localStorage.getItem("Divertimentos");
    
    var bilhetes = JSON.parse(bilhetesStr);
    
    var i = 0;
    
    if (stuff[0].tirado == 0){
        stuff[0].tirado =1;
        
        for (i; i<bilhetes.length; i++){
            if (bilhetes[i].nome == stuff[0].nome){
                bilhetes[i].tirado = 1;
                bilhetes[i].hora = stuff[0].hora;
            } 
        }
    }
    
    localStorage.setItem("Divertimentos", JSON.stringify(bilhetes));
}

function removeElement(){
    var stuffStr = localStorage.getItem("Cenas");
    
    var stuff = JSON.parse(stuffStr);
    
    var bilhetesStr = localStorage.getItem("Divertimentos");
    
    var bilhetes = JSON.parse(bilhetesStr);
    
    var i=0;
    
    for(i; i<bilhetes.length;i++){
        if (stuff[0].nome == bilhetes[i].nome){
            stuff[0].tirado = 0;
            bilhetes[i].tirado =0;
            console.log(bilhetes[i]);
        }
    }
    
    localStorage.setItem("Divertimentos", JSON.stringify(bilhetes));
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('time').innerHTML =
    h + ":" + m;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function loadTicketNumber(){    
    var bilhetes = document.getElementById('bilhete');
    
    var numBilhetesStr = localStorage.getItem("Divertimentos");
    
    var numBilhetes = JSON.parse(numBilhetesStr);
    
    var i = 0;
    var count = 0;
    for(i; i<numBilhetes.length; i++){
        if(numBilhetes[i].tirado == 1){ count++;}
    }
    
    bilhetes.innerHTML = "<span class='text'>Bilhetes (" + count + ")</span>";
    
}

function divertimentoTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    if(h < 19){
        h+= Math.floor(Math.random() * 3);
    }
    var k = Math.floor(Math.random() * 60)
    m+=k;
    if ( m >=60){
        h++;
        m-=60;
    }
    m = checkTime(m);
    
    var j = h + ":" + m;
    
    return j;
}

function loadTime(){
    var time = divertimentoTime();
    
    var stuffStr = localStorage.getItem("Cenas");
    
    var stuff = JSON.parse(stuffStr);
    
    var bilhetesStr = localStorage.getItem("Divertimentos");
    
    var bilhetes = JSON.parse(bilhetesStr);
    
    stuff[0].hora= time;
    
    localStorage.setItem("Cenas", JSON.stringify(stuff));
}



