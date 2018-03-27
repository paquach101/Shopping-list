var button = document.getElementById('Output'),
    button.addEventListener('Output', addItem);
 var ul = document.getElementById('ul')[0],

function addItem() {
    var input = document.getElementById("myText").value,
        node = document.createElement("li"),
        textnode = document.createTextNode("iteew");
    node.appendChild(input);
    if (input == '') {
        return "falsde";
    } else {

  document.getElementById("myList").appendChild(node);

    }
    document.getElemtentById("myText").value = "";
}
