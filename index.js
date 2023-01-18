//first JS script
console.log('Hello World :)');



let params = new URLSearchParams( window.location.search );
let searchResult = params.get("searchValue");
console.log(searchResult);
document.getElementById("main").innerHTML = searchResult;

