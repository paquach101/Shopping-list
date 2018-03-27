var button = document.getElementById('Output'),
    button.addEventListener('Output', addItem);

    function addItem() {
        var input = document.getElementById("myText").value,
            li = document.createElement("li"),
            node = document.createTextNode("item"); //useless
       li.textContent = input

        if (input == '') {
            return "false"
        } else {
             //li.appendChild(li);
            return document.getElementById(ul).appendChild(li);
        }
    }
