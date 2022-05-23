export default function({username,surname,group,gender,} , number) {
  let copyOfTemplate = document.getElementById("template");
  let newTamplate = copyOfTemplate.content.cloneNode(true);

  newTamplate.querySelector(".number").textContent = number;
  newTamplate.querySelector(".username").textContent = username;
  newTamplate.querySelector(".surname").textContent = surname;
  newTamplate.querySelector(".group").textContent = group;
  newTamplate.querySelector(".gender").textContent = gender;

  return newTamplate;
}