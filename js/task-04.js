let counterValue = 0;

const refs = {
  decrBtn: document.querySelector('button[data-action="decrement"]'),
  incrBtn: document.querySelector('button[data-action="increment"]'),
  spanCounterValue: document.querySelector('#value'),
};

refs.decrBtn.addEventListener('click',onDecrBtnClick);
refs.incrBtn.addEventListener('click',onIncrBtnClick);

function onDecrBtnClick() {
   counterValue -= 1
  refs.spanCounterValue.textContent = counterValue;
}

function onIncrBtnClick() {
  counterValue += 1;
 refs.spanCounterValue.textContent = counterValue;
}
