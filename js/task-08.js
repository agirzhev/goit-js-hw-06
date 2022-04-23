const form = document.querySelector(".login-form");

form.addEventListener("submit", function (event) {
  
  event.preventDefault()

  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }
  
  const users = {
    email: email.value,
    password: password.value
  }

  console.log(users)
  
  event.currentTarget.reset();
} 
);