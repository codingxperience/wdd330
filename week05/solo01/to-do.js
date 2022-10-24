let items = JSON.parse(localStorage.getItem("todo-list")) || [];
let btn = document.getElementById("button");

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addItem();
  }
});

// function to add item to the items array
function addItem() {
  // get the value of the input box with querySelector
  let inputBox = document.querySelector("#todo-input");
  let item = inputBox.value;

  // If input box is empty, return and alert the user
  // You can also do some more validation if here if you want
  if (item === "") return alert("Please add a todo.");
  // If input is valid, add item to items array
  items.push({
    value: item,
    time: new Date().toLocaleDateString("en-US"),
  });

  // then convert to a string with JSON.stringify and save to localStorage
  localStorage.setItem("todo-list", JSON.stringify(items));

  // call function to list all items
  listItems();

  // clear input box
  inputBox.value = "";
}

// function to remove item from array with Array.splice()
// removes item, then saves new items array to localStorage
function deleteItem(index) {
  items.splice(index, 1);
  localStorage.setItem("todo-list", JSON.stringify(items));
  listItems();
}

function markAsDone(index) {
  items[index].done = !items[index].done;
  localStorage.setItem("todo-list", JSON.stringify(items));
  listItems();
}

// function that generates list of items and populates the html
function listItems() {
  let list = "";
  for (let i = 0; i < items.length; i++) {
    list += "<li class=" + (items[i].done ? "done" : "") + " >";
    list += items[i].value + " ";
    list +=
      "<small title='click me to mark as done' class='label' onclick='markAsDone(" +
      i +
      ")'>" +
      items[i].time +
      "</small> ";
    list +=
      "<span class='label-alert' onclick='deleteItem(" +
      i +
      ")'>delete</span></li>";
  }

  document.querySelector("#list-items").innerHTML = list;
}

// function to run when page loads
(function () {
  listItems();
})();

function toggleClock() {
  // let li = document.getElementsByTagName("li");
  // for (let i = 0; i < li.length; i++) {
  //   document.getElementsByClassName("done")[i].style.display = "none";
  // }

  $(".done").hide();
}

function showComplete() {
  $(".done").show();

  // let li = document.getElementsByTagName("li");
  // for (let i = 0; i < li.length; i++) {
  //   document.getElementsByClassName("done")[i].style.display = "block";
  // }
}
