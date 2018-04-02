var button = document.getElementById('Output');
button.addEventListener('click', addItem)

function addItem() {
    var input = document.getElementById("myText").value,
        li = document.createElement("li");

    li.textContent = input + " ";
    document.getElementById("ul").appendChild(li);

    var deleteButton = document.createElement("button");
    deleteButton.addEventListener('click', deleteItem);

    deleteButton.className = "delete";
    deleteButton.textContent = "Delete";

    li.appendChild(deleteButton);
    return li + deleteButton;

    function deleteItem() {
        deleteButton.parentElement.remove();
    }
}
