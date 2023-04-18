const refs9 = {
  bodyColor: document.querySelector('body'),
  changeColorBtn: document.querySelector('.change-color'),
  spanColor: document.querySelector('.color'),
};

refs9.changeColorBtn.addEventListener('click', () => {
  refs9.spanColor.textContent = getRandomHexColor();
  refs9.bodyColor.style.backgroundColor = refs9.spanColor.textContent;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}