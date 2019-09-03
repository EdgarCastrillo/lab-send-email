'use strict'

// Variables 
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const message = document.getElementById('message')
const btnSend = document.getElementById('send')




// Listeners
eventListeners()

function eventListeners() {
  // Application start and disable submit
  document.addEventListener('DOMContentLoaded', startApp)

  // Form fields
  email.addEventListener('blur', validateField)
  subject.addEventListener('blur', validateField)
  message.addEventListener('blur', validateField)

}




// Functions
function startApp() {
  // Enable submit
  btnSend.disable = true
}

// Validate that the field has something written
function validateField() {
  // Validate text length and that is not empty
  validateLength(this)

  // Validate email
  if(this.type === 'email') {
    validateEmail(this)
  }

  let errors = document.querySelectorAll('.error')
  if(email.value != '' && subject.value != '' && message.value != '') {
    if(errors.length === 0) {
      btnSend.disable = false
    }
  }

}

function validateLength(field) {
  if(field.value.length > 0 ) {
    field.style.borderBottomColor = 'green'
    field.classList.remove('error')
  } else {
    field.style.borderBottomColor = 'red'
    field.classList.add('error')
  }
}

function validateEmail(field) {
  const message = field.value
  if(message.indexOf('@') !== -1 ) {
    field.style.borderBottomColor = 'green'
    field.classList.remove('error')
  } else {
    field.style.borderBottomColor = 'red'
    field.classList.add('error')
  }
}