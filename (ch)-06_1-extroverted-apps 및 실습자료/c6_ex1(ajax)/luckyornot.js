window.onload = init;
function init() {
    var button = document.getElementById("amilucky");
    button.onclick = getLuck;
}

function getLuck() {
    var url = "luckyornot.txt";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
        if(request.status == 200) {
            displayLuck(request.responseText);
        }
    };
    request.send(null);
}

function displayLuck(luck) {
    var p = document.getElementById("luck");
    p.innerHTML = "당신은 오늘 " + luck + "합니다";
}