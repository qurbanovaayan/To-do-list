const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", addTask);
inputBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {

        addTask();
    }

});

function addTask() {

    if (inputBox.value.trim() === "") {

        alert("Please enter a task!");

        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        ${inputBox.value}
        <span>&times;</span>
    `;

    listContainer.appendChild(li);

    inputBox.value = "";
}

listContainer.addEventListener("click", function (e) {


    if (e.target.tagName === "LI") {

        e.target.classList.toggle("checked");
    }

    

    if (e.target.tagName === "SPAN") {

        e.target.parentElement.remove();
    }

});