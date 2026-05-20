/* 
window에 스크롤이 생기면 할일
  그 스크롤양이 0보다 크면 body에 active 추가
  0이면 active 제거
*/
// const body = document.body;
const header = document.querySelector("body > header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

const slideWrapper = document.querySelector(".slidewrapper"),
  slideContainer = slideWrapper.querySelector(".slidecontainer"),
  slides = slideContainer.querySelectorAll("li"),
  slideCount = slides.length,
  prevBtn = slideWrapper.querySelector(".prev"),
  nextBtn = slideWrapper.querySelector(".next");
let currentIdx = 0;

/* slideContainer 너비 지정 */
slideContainer.style.width = `${slideCount * 100}%`;

/* 
슬라이드 이동 함수 
moveSlide 함수 생성, 
이 함수는 숫자 num이 들어오면 
num 번호에 해당하는 슬라이드 보이도록 이동
*/
