/* exported loadAllRoomData */
/* exported loadAllBilhetes */
/* exported displayBilhetes */
/* exported loadAllStuff */

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

function initializeButton(){
    if(localStorage.getItem("Counter") == null){
        localStorage.setItem("Counter", 0);
    }
}

function addButtonClick(){
    var clicks = localStorage.getItem("Counter");
    if(clicks == null){
        clicks++;
        console.log(clicks);
        localStorage.setItem("Counter", clicks);
    }
}

function printClicks(){
    console.log(localStorage.getItem("Counter"));
}


