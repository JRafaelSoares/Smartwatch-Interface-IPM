/* exported loadAllRoomData */
/* exported loadAllBilhetes */
/* exported displayBilhetes */
/* exported loadAllStuff */

function loadOnDisplay(onDisplay) {
    "use strict";
    localStorage.setItem("Display", JSON.stringify(onDisplay));
}

function loadAllPayments(allPayments) {
    "use strict";
    localStorage.setItem("Payments", JSON.stringify(allPayments));
}

function displayPayments() {
    "use strict";
    
    var paymentStr = localStorage.getItem("Payments");   
    
    var payment = JSON.parse(paymentStr);

    var lista = document.getElementById("lista");
    
    var i = 0;
    
    for (i; i < payment.length; i++) {
        if(payment[i].type == "Restaurante"){
            lista.innerHTML += '<div class="entry" onclick="addDisplayPayment(' +i +'); window.location.href = \'payment_restaurante.html\';"> <span class="text" align="center">' + payment[i].nome + " " + payment[i].preco + '</span> </div>';
        }
        
        if(payment[i].type == "Divertimento"){
            lista.innerHTML += '<div class="entry" onclick="addDisplayPayment(' +i +'); window.location.href = \'payment_divertimento.html\';"> <span class="text" align="center">' + payment[i].nome + " " + payment[i].preco + '</span> </div>';
        }
    }
}

function addDisplayPayment(i) {
    var paymentsStr =localStorage.getItem("Payments");
    
    var payment = JSON.parse(paymentsStr);
    
    var displaySTR = localStorage.getItem("Display");
    
    var display = JSON.parse(displaySTR);
    
    display[0]=payment[i];
    
    localStorage.setItem("Display", JSON.stringify(display));
}

function loadPaymentDivertimento() {
    var stuffStr = localStorage.getItem("Display");
    
    var stuff = JSON.parse(stuffStr);
    
    var name = document.getElementById("nome");
    
    var total = document.getElementById("total");
    
    name.innerHTML = '<span class="text" align="center">' +stuff[0].nome + '</span>';
    
    total.innerHTML = '<span class="text" align="center"> Total: ' + stuff[0].preco + '</span>';
}

function loadPaymentRestaurante() {
    var stuffStr = localStorage.getItem("Display");
    
    var stuff = JSON.parse(stuffStr);
    
    var name = document.getElementById("nome");
    
    var total = document.getElementById("total");
    
    name.innerHTML = '<span class="text" align="center">' +stuff[0].nome + '</span>';
    
    total.innerHTML = '<span class="text" align="center"> Total: ' + stuff[0].preco + '</span>';
}

function displayProductsPayments() {
    "use strict";
    
    var displayStr = localStorage.getItem("Display");   
    
    var display = JSON.parse(displayStr);

    var lista = document.getElementById("lista");
    
    var i = 0;
    
    console.log(display);
    
    for (i; i < display[0].pedido.length; i++) {
        lista.innerHTML += '<div class="entry"> <span class="text" align="center">' + display[0].pedido[i].produto + " " + display[0].pedido[i].preco + '</span> </div>';
        
    }
}
////////RANDOM CRAP HERE /////////

function loadFriend() {
    var friendStr = localStorage.getItem("Display");
    
    var friend = JSON.parse(friendStr);
    
    var name = document.getElementById("nome");
    
    name.innerHTML = '<span class="text" align="center">' +friend[0].nome + '</span>';
}

function addFavorite() {
    var displayStr = localStorage.getItem("Display");
    
    var display = JSON.parse(displayStr);
    
    var friendsStr = localStorage.getItem("Friends");
    
    var friends = JSON.parse(friendsStr);
    
    var i = 0;
    
    if (display[0].favorito == 0){
        display[0].favorito =1;
        
        for (i; i<friends.length; i++){
            if (friends[i].nome == display[0].nome){
                friends[i].favorito = 1;
                console.log(i);
            } 
        }
    }
    
    console.log(friends[0].favorito);
    localStorage.setItem("Friends", JSON.stringify(friends));
}

function removeFavorite(){
    var displayStr = localStorage.getItem("Display");
    
    var display = JSON.parse(displayStr);
    
    var friendsStr = localStorage.getItem("Friends");
    
    var friends = JSON.parse(friendsStr);
    
    var i=0;
    
    for(i; i<friends.length;i++){
        if (display[0].nome == friends[i].nome){
            friends[i].favorito =0;
        }
    }
    
    localStorage.setItem("Friends", JSON.stringify(friends));
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



