

var valDestination = document.getElementById("destinationSelect");
var valSource = document.getElementById("sourceSelect");


document.getElementById("movButton").addEventListener("click", function(){

    let s = document.getElementById(valSource.value);
    let d = document.getElementById(valDestination.value);

    d.value = s.value;

}); 


