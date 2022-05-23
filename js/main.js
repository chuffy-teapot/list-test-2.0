import userCreateObj from "./create.js";
import render from "./render.js";

let form = document.getElementById("form");
let username = document.getElementById("name");
let surname = document.getElementById("surname");
let group = document.getElementById("group");
let gender = document.getElementById("gender");
const list = document.querySelector(".list");

let counter = 1;
let array;

if (localStorage.getItem("item")) {
  array = JSON.parse(localStorage.getItem("item"));
}
else { array = [] }

form.addEventListener("submit", (event) => {
  event.preventDefault()

  let newUserObj = new userCreateObj(
    username.value,
    surname.value,
    group.value,
    gender.value,
    counter
  )

  array.push(newUserObj);
  render(list, array)
  localStorage.setItem("item", JSON.stringify(array))

  username.value = "";
  surname.value = "";
  group.value = "";
  gender.value = "gender";
})

render(list, array)
