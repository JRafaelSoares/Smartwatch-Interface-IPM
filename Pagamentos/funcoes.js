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
    localStorage.setItem("Payments", JSON.stringify(allFriends));
}

function loadCurrentPayment(currentPayment) {
    localStorage.setItem("CurrentPay", JSON.stringify(currentPayment));
}

function displayPayments() {
    "use strict";
    
    var paymentStr = localStorage.getItem("CurrentPay");   
    
    var payment = JSON.parse(paymentStr);

    var lista = document.getElementById("lista");
    
    var i = 0;
    
    for (i; i < stuff.length; i++) {
            lista.innerHTML += '<div class="entry" onclick="addOnHoldPayment(' +i +'); window.location.href = \'Payment.html\';"> <span class="text" align="center">' + payment[i].nome + '</span> </div>';
        
    }
}
function displayFavorites(){
    "use strict";
    
    var amigosStr = localStorage.getItem("Friends");
        
    var amigos = JSON.parse(amigosStr);
    
    console.log(amigos[0].favorito);
    var lista = document.getElementById("lista");
    var i = 0;
    
    for (i; i < amigos.length; i++) {
        if(amigos[i].favorito == 1){
            console.log("ADICIONEI");
            lista.innerHTML += '<div class="entry" onclick="addOnHoldFriend('+i+'); window.location.href = \'Favorite.html\';"> <span class="text" align="center">'+amigos[i].nome+'</span></div>';
        }
    }
}

function addOnHoldFriend(i) {
    var amigoStr =localStorage.getItem("Friends");
    
    var amigos = JSON.parse(amigoStr);
    var displaySTR = localStorage.getItem("Display");
    
    var display = JSON.parse(displaySTR);
    display[0]=amigos[i];
    
    localStorage.setItem("Display", JSON.stringify(display));
    return display;
}

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



