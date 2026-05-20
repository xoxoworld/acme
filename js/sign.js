const inputs = document.querySelectorAll("form input");
const form = document.querySelector("form");
const feedback = document.querySelector(".feedback");

form.addEventListener("submit", e => {
  e.preventDefault();
  let completed = 0;
  //대상.value   입력한 값 확인
  //input 포커스 적용, 대상.focus()
  for (let input of inputs) {
    if (!input.value) {
      input.focus();
      let pos = input.offsetTop;
      let msg = "useremail을 필수야~";
      openFeedback(pos, msg);
    } else {
      ++completed;
    }
  }
  console.log(completed);
});
