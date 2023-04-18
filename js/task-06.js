const inputInn = document.getElementById("validation-input");

inputInn.addEventListener('blur', (borderColor) => {
const dataLength = inputInn.getAttribute('data-length');
  const valueLength = borderColor.target.value.trim().length;
    if (Number(dataLength) === valueLength) {
        inputInn.classList.add('valid');
        inputInn.classList.remove('invalid');
    }
    else {
        inputInn.classList.add('invalid');
        inputInn.classList.remove('valid');
    }
})