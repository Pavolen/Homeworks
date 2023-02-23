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
  // console.log('commentAdd');
});

form.addEventListener('submit', (event) =>{
  event.preventDefault();
 const name = commentName.value
 const body = commentBody.value
 const photo = commentPhoto.value
 const div = document.createElement('div');
 div.classList.add('chat_item');
 div.innerHTML = `
 <img class="chat_img" src="${photo}" alt="${photo}" />
 <strong class="chat_name">${name}</strong>
 <p class="chat_comment">${body}</p>
 `

chatContent.appendChild(div);
commentBody.value = '';

commentName.value = '';

commentPhoto.value = '';



  // console.log('submit', []);
})

{/* 
<div class="chat_item">
  <img class="chat_img" src="./img/man.png" alt="men" />
  <strong class="chat_name">Наталья Петровна Шустрая</strong>
  <p class="chat_comment">Хороший сайт. Довольна</p>
</div>
*/}

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



// document.getElementById('comment-add').onclick = function(event){

//     event.preventDefault();
//     let commentName = document.querySelector('#comment-name');
//     let commentBody = document.querySelector('#comment-body');

//     let comment = {
//         name : commentName.value,
//         body : commentBody.value,
//         time : Math.floor(Date.now()/1000)
//     }
//     commentName.value = '';
//     commentBody.value = '';
//     comments.push(comment);
//     saveComments();
//     showComments();
// }

function saveComments() {
  localStorage.setItem("comments", JSON.stringify(comments));
}

function showComments() {
  let commentField = document.getElementById("comment-field");
  let out = "";
  comments.forEach(function (item) {
    out += `<p class="text-right small"><em>${timeConverter(
      item.time
    )}</em></p>`;
  });
  commentField.innerHTML = out;
}
function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + "" + month + "" + year + "" + hour + ":" + min + ":" + sec;
  return time;
}
