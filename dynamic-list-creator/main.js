const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

itemInput.focus();

function addTodo() {
  if (itemInput.value == "") {
    alert("Please Enter Task!");
    return;
  }

  //   const task = itemInput.value;
  const listItem = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delete");
  listItem.innerText = itemInput.value;
  list.append(listItem);
  listItem.appendChild(delBtn);
  itemInput.value = "";
  itemInput.focus();
  delBtn.addEventListener("click", () => {
    listItem.remove();
  });
}

addBtn.addEventListener("click", addTodo);

itemInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addTodo();
  }
});
