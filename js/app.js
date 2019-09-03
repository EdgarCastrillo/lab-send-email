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
}

function validateLength(field) {
  console.log(field.value.length)
  if(field.value.length > 0 ) {
    field.style.borderBottomColor = 'green'
    field.classLsit.remove('error')
  } else {

  }
}