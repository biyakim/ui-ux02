window.onload = function() {
    handleRefresh();
}

function handleRefresh() {

    var url = "http://openapi.seoul.go.kr:8088/70627a4853626979393267444e6257/xml/CardSubwayStatsNew/1/100/20200101/";
    var url = "https://proxyserver4cors.herokuapp.com/" + "http://openapi.seoul.go.kr:8088/70627a4853626979393267444e6257/xml/GwanakClassLectureList/1/5/"
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) {
            updateTraffic(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}   

function updateTraffic(xml) {
    var xmlDoc = xml.responseXML;
    var subwayDiv = document.getElementById("subwaypeople");
    traffic = xmlDoc.getElementByTagName("row");
    for(var i = 0; i< traffic.length; i++) {
        var row = traffic[i];
        var div = document.createElement("div");
        div.setAttribute("class", "subwayItem");
        div.innerHTML = row.getElementByTagName("USE_DT")[0].childNodes[0].nodeValue + "일에"
        +row.getElementByTagName("LINE_NUM")[0].childNodes[0].nodeValue + "에"
        +row.getElementByTagName("SUM_STA_NM")[0].childNodes[0].nodeValue + "역에서"
        +row.getElementByTagName("RIDE_PASGR_NUM")[0].childNodes[0].nodeValue + "명이 승차하고"
        +row.getElementByTagName("ALIGHT_PASGR_NUM")[0].childNodes[0].nodeValue + "명이 내렸습니다"
        subwayDiv.appendChild(div);
    }
 }