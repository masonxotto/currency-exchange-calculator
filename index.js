//javascript file
let requestURL = "https://api.exchangerate.host/latest";
let request = new XMLHttpRequest();
let conversion = document.getElementById("response");
/*
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
*/


request.onload = function() {
    let response = request.response;
    conversion.innerHTML = "Conversion: " + document.getElementById("ex1").value + " to " + document.getElementById("ex2").value + " is " + response.result;
 }              

function convert() {
    let from = "from=" + document.getElementById("ex1").value;
    let to = "to=" + document.getElementById("ex2").value;
    
    let newRequest = 'https://api.exchangerate.host/convert?places=2&' + from + "&" + to + "&amount=1";
    request.open('GET', newRequest);
    request.responseType = 'json';
    request.send();
    let response = request.response;
    
}
