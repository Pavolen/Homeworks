const commentName = document.querySelector("#comment-name");
const commentBody = document.querySelector("#comment-body");
const commentAdd = document.querySelector("#comment-add");
const form = document.querySelector("#form");
const chatContent = document.querySelector(".chat_content");
const commentPhoto = document.querySelector("#comment-photo");
const badSlang = "viagra xxx";
let comments = [];
commentName.addEventListener("blur", () => {
  commentName.value = commentName.value
    .split(" ")
    .map((element) => capitalizeFirstLetter(element))
    .join(" ");
});
commentBody.addEventListener("blur", () => {
  commentBody.value = checkSpam(commentBody.value);
});
commentAdd.addEventListener("click", () => {
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log('addEventListener("submit"');
  const name = commentName.value;
  const body = commentBody.value;
  const photo = commentPhoto.value === '' ? "./img/man.png" : commentPhoto.value;
  const div = document.createElement("div");
  div.classList.add("chat_item");
  div.innerHTML = `
  <img class="chat_img" src="${photo}" alt="${name}" />
  <strong class="chat_name">${name}</strong>
  <span slass="time">${returnData()}</span>
  <p class="chat_comment">${body}</p>
  `;
  chatContent.appendChild(div);
  commentBody.value = "";
  commentName.value = "";
  commentPhoto.value = "";
});
function checkSpam(string) {
  let newString = string;
  badSlang.split(" ").forEach((item) => {
    const re = new RegExp(item, "gi");
    newString = newString.replace(re, "***");
  });
  return newString;
}
function capitalizeFirstLetter(string) {
return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
function returnData(){

let d = new Date();
const day = (d.getDate( ) < 10) ? '0'+ d.getDate(): d.getDate();
const month = (d.getMonth()+1 < 10) ? '0' + (d.getMonth()+1 ) : d.getMonth()+1;
return `${day} - ${month} - ${d.getFullYear()}  ${d.getHours()}:${d.getMinutes()}`;
}


