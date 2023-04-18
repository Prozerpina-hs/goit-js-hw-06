const refs = {
  input:document.querySelector('#name-input'),
  spanTextOutput:document.querySelector('#name-output'),
};

refs.input.addEventListener("input", (foo) => {
  if(refs.input === "") {
    refs.spanTextOutput.textContent = "Anonymous";
  }else{
    refs.spanTextOutput.textContent = foo.currentTarget.value;
  }
})