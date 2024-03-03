let inputField = document.querySelector("#input");
let inputButton = document.querySelector("#button");
let itemList = document.querySelector("#list");

inputButton.addEventListener("click", () =>{
    let itemValue = inputField.value;

    if (!itemValue){
        alert("Input can not be empty...");
        return;
    }

    let container = document.createElement("div");

    let listItem = document.createElement("li");
    listItem.textContent = itemValue;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {
        container.remove();
    });

    container.appendChild(listItem);
    container.appendChild(deleteButton);

    itemList.appendChild(container);
    inputField.value = "";
});


window.addEventListener('beforeunload', (event) => {
    // show the confirmation dialog
    event.preventDefault();
    // Google Chrome requires returnValue to be set.
    event.returnValue = '';
});