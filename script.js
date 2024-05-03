const notesContainer = document.querySelector(".notescontainer");
const createButton = document.querySelector(".btn");
let notes = document.querySelectorAll(".inputbox");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updatedStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createButton.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "inputbox";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updatedStorage();
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".inputbox");
        notes.forEach(note => {
            note.onkeyup = function () {
                updatedStorage();
            }
        })
    }
})

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})