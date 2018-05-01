function loadOnDisplay(onDisplay) {
    "use strict";
    if( localStorage.getItem("Display") != null){
        localStorage.setItem("Display", JSON.stringify(onDisplay));
    }
}

function loadAllFriends(allFriends) {
    "use strict";
    if(localStorage.getItem("Friends") != null){
        localStorage.setItem("Friends", JSON.stringify(allFriends));
    }
}
function toggleFavorite() {
    var amigosStr = localStorage.getItem("Friends");
    
    var amigos = JSON.parse(amigosStr);
    
    var displayStr = localStorage.getItem("Display");
    
    var display = JSON.parse(displayStr);
    
    var i=0;

    var tam = amigos.length;
    
    var nome = document.getElementById("nome");
    
    for(i; i<tam; i++){
        if(amigos[i].nome == display[0].nome && amigos[i].surname == display[0].surname){
            if(amigos[i].favorito == 0){
                amigos[i].favorito = 1;
                nome.innerHTML = '<span class="text" align="center">' +display[0].nome + "." + display[0].surname.charAt(0) + "<img src='icones-pretos/favorite_blue.png' id= 'favorite'><p>" + display[0].place + "</p></span>";
            }
            else{
                amigos[i].favorito = 0;
                nome.innerHTML = '<span class="text" align="center">' +display[0].nome + "." + display[0].surname.charAt(0) + '<img src="icones-pretos/unfavorite.png" id="favorite"><p>' + display[0].place +'</span>';
            }
        }
    }
    localStorage.setItem("Friends", JSON.stringify(amigos));
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
                lista.innerHTML += '<div class="entry" onclick="addOnHoldFriend(' +i +'); window.location.href = \'Friend.html\';"> <span class="text" align="center">' + amigos[i].nome + "." + amigos[i].surname.charAt(0) + '</span>  </div>';
            }
            else{
                lista.innerHTML += '<div class="entry" onclick="addOnHoldFriend(' +i +'); window.location.href = \'Friend.html\';"> <span class="text" align="center">' + amigos[i].nome + "." + amigos[i].surname.charAt(0) + '</span> <img src="icones-pretos/favorite_blue.png" id="favorite"></div>';
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
            lista.innerHTML += '<div class="entry" onclick="addOnHoldFriend('+i+'); window.location.href = \'friend_favorite.html\';"> <span class="text" align="center">'+amigos[i].nome+ "." + amigos[i].surname.charAt(0) + '</span></div>';
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
    var amigosStr = localStorage.getItem("Friends");
    
    var amigos = JSON.parse(amigosStr);
    
    var friendStr = localStorage.getItem("Display");
    
    var friend = JSON.parse(friendStr);
    
    var name = document.getElementById("nome");
    
    var i =0;
    for(i; i<amigos.length; i++)
        if(amigos[i].nome == friend[0].nome && amigos[i].surname == friend[0].surname){
            if(amigos[i].favorito == 0){
                console.log("poop");
                name.innerHTML = '<span class="text" align="center">' +friend[0].nome + "." + friend[0].surname.charAt(0) + "<img src='icones-pretos/unfavorite.png' id= 'favorite'><p>" + friend[0].place + "</span>";
            }
            else{
                console.log("notpoop");
                name.innerHTML = '<span class="text" align="center">' +friend[0].nome + "." + friend[0].surname.charAt(0) + '<img src="icones-pretos/favorite_blue.png" id="favorite"><p>' + friend[0].place + '</p></span>';}
        }
           
}

function loadFindFriend() {
    var friendStr = localStorage.getItem("Display");
    
    var friend = JSON.parse(friendStr);
    
    var name = document.getElementById("nome");
    
    name.innerHTML = '<span class="text" align="center">' +friend[0].nome + '.' + friend[0].surname.charAt(0) + " " + friend[0].km + 'km</span>';
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



