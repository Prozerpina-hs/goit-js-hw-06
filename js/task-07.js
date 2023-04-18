const refs7 = {
  inputRange: document.querySelector('#font-size-control'),
  textForChange: document.querySelector('#text'),
};

refs7.inputRange.addEventListener('input', (onRangeSizeChanging) => {
  refs7.textForChange.style.fontSize = `${onRangeSizeChanging.currentTarget.value}px`;
})
