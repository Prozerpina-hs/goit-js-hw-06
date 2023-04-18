const refs8 = {
  form: document.querySelector('.login-form'),
  inputEmail: document.querySelector('input[name="email"]'),
  inputPass: document.querySelector('input[name="password"]'),
  submitBtn: document.querySelector('button'),
};

refs8.form.addEventListener('submit', onSubmitBtn => {
  onSubmitBtn.preventDefault();
  const elements = {
    email: refs8.inputEmail.value,
    pass: refs8.inputPass.value,
  }
  if (refs8.inputEmail.value === '' || refs8.inputPass.value === '') {
    return alert("Все поля должны быть заполнены");
  }
  console.log(elements);
  refs8.form.reset();
})