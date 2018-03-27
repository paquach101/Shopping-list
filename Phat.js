var button = document.getElementById('Output'),
button.addEventListener('Output', () => {
   document.getElementById('myText').textContent = addItem()
});

function addItem() {
    var input = document.getElementById("myText").value;
    //var ul = document.createElement("li");
    var ul = document.getElementById('ul')[0];
    var node = document.createElement("LI"),
        textnode = document.createTextNode("water");
    node.appendChild(textnode);
    if(input ==''){
        alert("someting wrong");
    }else{
         document.getElementById("myList").appendChild(node);
    }
   document.getElemtentById("myText").value="";
}
