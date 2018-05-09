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
        if(payment[i].flag != 0){
            if(payment[i].type == "Restaurante"){
                lista.innerHTML += '<div class="entry" onclick="addDisplayPayment(' +i +'); window.location.href = \'payment_restaurante.html\';"> <span class="text" align="center">' + payment[i].nome + " " + payment[i].preco + '</span> </div>';
            }

            if(payment[i].type == "Divertimento"){
                lista.innerHTML += '<div class="entry" onclick="addDisplayPayment(' +i +'); window.location.href = \'payment_divertimento.html\';"> <span class="text" align="center">' + payment[i].nome + " " + payment[i].preco + '</span> </div>';
            }
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


/////////PROTOTIPOS///////
function loadUnpaidPayment() {
    
    var paymentStr = localStorage.getItem("Payments");   
    
    var payment = JSON.parse(paymentStr);

    var lista = document.getElementById("lista");
    
    var i = 0;
    
    for (i; i < payment.length; i++) {
        if(payment[i].flag == 0){
            localStorage.setItem("Display", JSON.stringify(payment[i]));
            break;
        }
    }
}

function loadUnpaidRestaurant() {
    var stuffStr = localStorage.getItem("Display");
    
    var stuff = JSON.parse(stuffStr);
    
    var mid = document.getElementById("middle");
    console.log("lol");
    
    mid.innerHTML = '<div id="nome" onclick="window.location.href = \'payment_product_list.html\';"> <span class="text" align="center">Listar produtos</span></div><div id="total"><span class="text" align="center"> Total: ' + stuff.preco + '</span></div>';
    
    }

function chooseDisplayLoad() {
    
    var displayStr = localStorage.getItem("Display");
    
    var display = JSON.parse(displayStr);
    console.log(display);
    if(display.type == "Restaurante"){
        loadUnpaidRestaurant();
    }
    
    else{
        loadPaymentDivertimento();
    }
}

//Clock functions//
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



