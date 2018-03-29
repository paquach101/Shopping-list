var button = document.getElementById('Output');
button.addEventListener('click', addItem)

function addItem() {
    var input = document.getElementById("myText").value,
        li = document.createElement("li");
    li.textContent = input;
    document.getElementById("ul").appendChild(li);
    var deleteButton = document.createElement("myList");
        button.addEventListener('click', deleteItem);

}
