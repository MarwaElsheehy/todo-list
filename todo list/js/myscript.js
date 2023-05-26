let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-content span");
window.onload = function () {
  theInput.focus();
};
theAddButton.addEventListener("click", () => {
  let localItems = JSON.parse(localStorage.getItem("localItem"));
  if (localItems === null) {
    taskList = [];
  } else {
    taskList = localItems;
  }
  taskList.push(theInput.value);
  localStorage.setItem("localItem", JSON.stringify(taskList));
  let main = document.createElement("span");

  let del = document.createElement("span");

  let text = document.createTextNode(theInput.value);

  let delText = document.createTextNode("Delete");

  main.appendChild(text);

  main.className = "task-box";

  del.appendChild(delText);

  del.className = "delete";

  main.appendChild(del);

  tasksContainer.appendChild(main);

  main.style.cursor = "pointer";

  theInput.value = "";

  main.addEventListener("click", () => {
    main.style.textDecoration = "line-through";
  });
});
document.addEventListener("click", function (e) {
  if (e.target.className == "delete") {
    e.target.parentNode.remove();
  }
});
