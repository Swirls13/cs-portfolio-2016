var colorChange = document.getElementById("colorChange");
var colorStyle = document.getElementById("colorStyle");
var textBox = document.getElementById("textBox");
var addButton = document.getElementById("addButton");
var list = document.getElementById("list");

addButton.addEventListener("click", function() {
    
    
    var task = "<div style = 'color: " + colorChange.value + "; background-color:" + colorStyle.value + " '>" + textBox.value + "<br>";
    list.innerHTML = list.innerHTML + task;
    
});

list.addEventListener("click", function(evt){
   
   var remove = evt.target;
   remove.parentNode.removeChild(remove);
   
});