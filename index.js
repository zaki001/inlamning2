let usernames = ['yazeen', 'ec', 'softhouse'];
let form = document.createElement('form');
let input = document.createElement('input');

//Function that calls all other functions in order
//--Don't modify--
function init() {
  initLoginForm();
  initLabel();
  initInput();
  initButton();
}

function initLoginForm() {
  //Add code here to:
  //create and add form element to the Dom.
  document.body.appendChild(form);
}

function initLabel() {
  //Add code here to:
  //create label element and set the lable to "username" (TIP: use .textContent).
  //Add it to the form element. (TIP: use .appendChild).
  let label = document.createElement('label');
  label.textContent = 'username';
  form.appendChild(label);
}

function initInput() {
  //Add code here to:
  //create input element and set it to be requried (TIP: use .required = true).
  //Add it to the form element. (TIP: use .appendChild).
  input.required = true;
  form.appendChild(input);
}

function initButton() {
  //create button element and set the text to "login" (TIP: use .textContent)
  ////Add it to the form element. (TIP: use .appendChild).

  //Add click eventListener for button and call validateLoginInfo function inside it.
  //if validateLoginInfo is true alert user with "Welcome" text.
  //if validateLoginInfo is false add border style to the input element: "3px solid red". (TIP: use .style.border).
  let button = document.createElement('button');
  button.textContent = 'login';
  form.appendChild(button);

  button.addEventListener('click', () => {
    if (validateLoginInfo() === true) {
      alert('Welcome');
    } else {
      input.style.border = '5px solid red';
    }
  });
}

function validateLoginInfo() {
  //Get the input using form input element (TIP: use .value)
  //if the username is in the usernames array return true if not return false.
  for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === input.value) {
      return true;
    }
  }
  return false;
}
window.addEventListener('DOMContentLoaded', init());
