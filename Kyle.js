var deleteButton = document.createElement("myList");
        button.addEventListener('click', deleteItem);

function deleteItem(input) {
    var input = document.getElementById("myText").value;
    var li = document.getElementById("li");
    deleteButton.parentElement.remove();
}
