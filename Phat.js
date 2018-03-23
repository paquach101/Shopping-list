var button = document.getElementById('Output'),
button.addEventListener('Output', () => {
   document.getElementById('myText').textContent = addItem()
});

function addItem() {
    var input = document.getElementById("myText")
    var ul = document.getElementById('ul')[0];
    var node = document.createElement("LI"),
        textnode = document.createTextNode("water");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
}
