const commentName = document.querySelector("#comment-name");
const commentBody = document.querySelector("#comment-body");
const commentAdd = document.querySelector("#comment-add");
const form = document.querySelector("#form");
const chatContent = document.querySelector(".chat_content");
const commentPhoto = document.querySelector("#comment-photo");
const badSlang = "viagra xxx";
const time = createElAttr("span", 'class', 'time');
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
  const name = commentName.value;
  const body = commentBody.value;
  const photo = commentPhoto.value === '' ? "./img/man.png" : commentPhoto.value;
  const div = document.createElement("div");
  div.classList.add("chat_item");
  div.innerHTML = `
  <img class="chat_img" src="${photo}" alt="${name}" />
  <strong class="chat_name">${name}</strong>
  <p class="chat_comment">${body}</p>
  `;
  chatContent.appendChild(div);
  commentBody.value = "";
  commentName.value = "";
  commentPhoto.value = "";
});
function checkSpam(string) {
  let newString = string;
  //  'viagra xxx'
  //  badSlang.split(' ') == ['viagra','xxx']
  //  item ==
  badSlang.split(" ").forEach((item) => {
    const re = new RegExp(item, "gi");
    newString = newString.replace(re, "***");
  });
  return newString;
}
function capitalizeFirstLetter(string) {
  //return string.charAt(0).toUpperCase()+string.slice(1);
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
let d = new Date();
const day = (d.getDate( ) < 10) ? '0'+ d.getDate(): d.getDate;
const month = (d.getMonth()+1 < 10) ? '0' + (d.getMonth()+1 ) : d.getMonth()+1;
let datestring = day + "-" + month + "-" + d.getFullYear() + " " + d.getHours() + d.getMinutes();
time.innerHTML = datestring;


