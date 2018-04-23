/* exported loadAllRoomData */
/* exported loadAllBilhetes */
/* exported displayBilhetes */
/* exported loadAllStuff */

function loadOnDisplay(onDisplay) {
    "use strict";
    if( localStorage.getItem("Display") == null){
        localStorage.setItem("Display", JSON.stringify(onDisplay));
    }
}

function loadAllFriends(allFriends) {
    "use strict";
    if(localStorage.getItem("Friends") == null){
        localStorage.setItem("Friends", JSON.stringify(allFriends));
    }
}

function displayFriends() {
    "use strict";
    
    var amigosStr = localStorage.getItem("Friends");   
    
    var amigos = JSON.parse(amigosStr);

    var lista = document.getElementById("lista");
    
    var i = 0;
    var j = 0;
    for (i; i < amigos.length; i++) {
        if(amigos[i].added == 1){
            j++;
            if(amigos[i].favorito == 0){
                lista.innerHTML += '<div class="entry" onclick="addOnHoldFriend(' +i +'); window.location.href = \'Friend.html\';"> <span class="text" align="center">' + amigos[i].nome + '</span> </div>';
            }
            else{
                lista.innerHTML += '<div class="entry" onclick="addOnHoldFriend(' +i +'); window.location.href = \'friend_favorite.html\';"> <span class="text" align="center">' + amigos[i].nome + '</span> </div>';
            }
        }
    }
    if(j==0){
        lista.innerHTML += '<span class="text" align="center">Nenhum amigo adicionado!</span>';
    }
}
function displayFavorites(){
    "use strict";
    
    var amigosStr = localStorage.getItem("Friends");
        
    var amigos = JSON.parse(amigosStr);
    
    var empty = 0;
    
    console.log(amigos[0].favorito);
    var lista = document.getElementById("lista");
    var i = 0;
    
    for (i; i < amigos.length; i++) {
        if(amigos[i].favorito == 1){
            empty = 1;
            console.log("ADICIONEI");
            lista.innerHTML += '<div class="entry" onclick="addOnHoldFriend('+i+'); window.location.href = \'friend_favorite.html\';"> <span class="text" align="center">'+amigos[i].nome+'</span></div>';
        }
    }
    if(empty == 0){
        lista.innerHTML = '<div class="text_position"><span class="text">Nao existem</span></div><div class="text_position2"><span class="text">favoritos</span></div>'
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

function loadFindFriend() {
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

function addFriend() {
    var displayStr = localStorage.getItem("Display");
    
    var display = JSON.parse(displayStr);
    
    var friendsStr = localStorage.getItem("Friends");
    
    var friends = JSON.parse(friendsStr);
    
    var i = 0;
    
    for (i; i<friends.length; i++){
        if (friends[i].nome == display[0].nome){
            friends[i].added = 1;
        } 
    }
    
    localStorage.setItem("Friends", JSON.stringify(friends));
}

function loadUnaddedFriend(){
    var friendsStr = localStorage.getItem("Friends");
    
    var friends = JSON.parse(friendsStr);
    
    var i=0;
    var j=0;
    
    var name = document.getElementById("nome");
    
    for(i;i<friends.length;i++){
        if(friends[i].added == 0){
            addOnHoldFriend(i);
            j++;
            loadFindFriend();
            break;
        }
    }
    if(j==0){
        name.innerHTML = '<span class="text" align="center">Não ha mais amigos a adicionar...</span>';
    }
}

function check_add_friend(){
    var friendsStr = localStorage.getItem("Friends");
    
    var friends = JSON.parse(friendsStr);
    
    var i=0;
    var j=0;
    
    for(i;i<friends.length;i++){
        if(friends[i].added == 0){
            j=1;
        }
    }
    return j;
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



