const input = document.querySelector('#validation-input');

input.addEventListener('focusout', function () {
  
  const text = [...input.value]
  if (String(text.length) === input.getAttribute('data-length')) {
    document.getElementById('validation-input').className = ('#validation-input.valid')
  } else {
    document.getElementById('validation-input').className = ('#validation-input.invalid')
  }
  
}  
);
