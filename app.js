//FEATURES TO BE ADDED
//FEATURES TO BE ADDED
// -------------------
// - add a dark mode to the todo list
// - add due date alert for due today as a ::before or ::after with absolute positioning and toggling class visibility depending on the current date
// - ALTERNATIVELY have a blinking orange or red dot in the upper left corner to indicate status:tomorrow, status:late or status: due today
// - export / download todo list as a sheet
// --------------------
//MORE ADVANCED FEATURES
//MORE ADVANCED FEATURES
// - share list with friends on messenger or copy link button
// - add task to "completed" list which will have a history log of previously completed tasks
// - add icons to tasks so it's more personalized and visually not so monotonous
// ---------------------

const btn = document.querySelector(".btn");
const add = document.querySelector(".input input");
const search = document.querySelector(".add input");
const form = document.querySelector(".input");
const list = document.querySelector(".todos");

//ADD TODOS
//ADD TODOS
//ADD TODOS

const addTodo = function (e) {
  e.preventDefault();
  const todoItem = add.value.trim().toLowerCase();

  if (todoItem.length === 0) {
    return;
  } else {
    list.innerHTML += `<li
    class="rounded-1 border-0 bg-light d-flex p-3 justify-content-between align-items-center">
    <span>${todoItem}</span>
    <i class="fa-solid fa-trash bin"></i>
    </li>`;
  }

  add.value = "";

  focus();

  //2ND SOLUTION FOR ADDING TODO ITEM
  //2ND SOLUTION FOR ADDING TODO ITEM
  //2ND SOLUTION FOR ADDING TODO ITEM

  // if (todoItem.length) {
  //   list.innerHTML += `<li
  //   class="rounded-1 border-0 bg-light d-flex p-3 justify-content-between align-items-center"
  // >
  //   <span>${todoItem}</span>
  //   <i class="fa-solid fa-trash bin"></i>
  // </li>`;
  // }
};

btn.addEventListener("click", addTodo);
form.addEventListener("submit", addTodo);

// list.addEventListener("click", function (e) {
//   if (e.target.classList.contains("bin")) {
//     e.target.parentElement.remove();
//   }
// });

// form.addEventListener("submit", function (e) {
//   e.preventDefault;
//   addTodo();
// });

//DELETE TODOS
//DELETE TODOS
//DELETE TODOS

list.addEventListener("click", function (e) {
  if (e.target.classList.contains("bin")) {
    e.target.parentElement.remove();
  }
});

//ADDING RED BORDER ON ERROR STATE
// REGEX VS INPUT VALUE FALSY COMPARISON

const focus = function () {
  const inputPattern = /^[a-zA-Z0-9\s']{3,}$/;
  const inputValue = add.value.trim().toLowerCase();

  if (!inputPattern.test(inputValue)) {
    add.classList.add("error");
    add.classList.remove("success");
  } else {
    add.classList.add("success");
    add.classList.remove("error");
  }
  if (inputValue === "") {
    add.classList.remove("error");
    add.classList.remove("success");
  }
};

//keyup event

add.addEventListener("keyup", focus);

// if (!inputPattern.test(inputValue)) {
//   add.classList.toggle("error");
//   // add.classList.success.style.display = "initial";
//   //green success border
// }

// do {
//   add.classList.add("error");
// } while (!inputPattern.test(inputValue));

// // let i = inputValue;
// const check = () => {
//   do {
//     add.classList.add("error");
//   } while (!inputPattern.test(inputValue));
// };

// check();

//LOGIC FOR THE SEARCH BAR
//LOGIC FOR THE SEARCH BAR
//LOGIC FOR THE SEARCH BAR

/*add a keyup or input event listened on the form that
logs every key

if the add.search.value.trim() doesnt match 
the textContent of any element in the innerHTML,
delete or hide those divs; - NO

if the add.search.value.trim() matches the textContent,
keep matching element and hide others with display:none
by manipulating the CSS with .style.display="none" or adding a class that has as display:none property*/

// SEARCH BAR
// SEARCH BAR
// SEARCH BAR

const filterTodos = function (term) {
  Array.from(list.children)
    .filter(function (todo) {
      return !todo.textContent.includes(term);
    })
    .forEach(function (todo) {
      todo.classList.add("filtered");
    });

  Array.from(list.children)
    .filter(function (todo) {
      return todo.textContent.includes(term);
    })
    .forEach(function (todo) {
      todo.classList.remove("filtered");
    });
};

search.addEventListener("keyup", function () {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});

// DARK MODE TOGGLE VERSION 1
// DARK MODE TOGGLE VERSION 1
// DARK MODE TOGGLE VERSION 1
const circle = document.querySelector(".circle");
const toggleButton = document.querySelector(".toggle-button");

const toggleClasses = function () {
  const elementsToToggle = document.querySelectorAll(
    ".dark-background, .small-cnt-dark"
  );
  elementsToToggle.forEach(function (element) {
    element.classList.toggle("dark-background");
    element.classList.toggle("small-cnt-dark");
  });
};

toggleButton.addEventListener("click", function () {
  if (toggleButton.style.justifyContent === "flex-start") {
    toggleButton.style.justifyContent = "flex-end";
    toggleClasses();
  } else if (toggleButton.style.justifyContent !== "flex-start") {
    toggleButton.style.justifyContent = "flex-start";
    toggleClasses();
  }
});
// DARK MODE TOGGLE VERSION 1
// DARK MODE TOGGLE VERSION 1
// DARK MODE TOGGLE VERSION 1
// -----------------------------
