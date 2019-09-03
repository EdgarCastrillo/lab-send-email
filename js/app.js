'use strict'

// Variables 
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const message = document.getElementById('message')
const btnSend = document.getElementById('send')
const sendForm = document.getElementById('send-email')
const resetBtn = document.getElementById('resetBtn')



// Listeners
eventListeners()

function eventListeners() {
  // Application start and disable submit
  document.addEventListener('DOMContentLoaded', startApp)

  // Form fields
  email.addEventListener('blur', validateField)
  subject.addEventListener('blur', validateField)
  message.addEventListener('blur', validateField)

  // Send submit button
  sendForm.addEventListener('submit', sendEmail)

  // Reset button
  resetBtn.addEventListener('click', resetForm)
}



// Functions
function startApp() {
  // Enable submit
  btnSend.disabled = true
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
      btnSend.disabled = false
    }
  }
}

// Reset form

function resetForm(e) {

  sendForm.reset()
  e.preventDefault()
}


// Send email
function sendEmail(e) {
  // Spinner when pressing
  const spinnerGif = document.querySelector('#spinner')
  spinnerGif.style.display = 'block'

  // Gif that send email
  const send = document.createElement('img')
  send.src = 'img/mail.gif'
  send.style.display = 'block'

  // Hide spinner and show gif mail sent
  setTimeout(function() {
    spinnerGif.style.display = 'none'

    document.querySelector('#loaders').appendChild(send)
    setTimeout(function() {
      send.remove()
      sendForm.reset()
    },3000)

  }, 3000)

  e.preventDefault()
}


// Check the length of the text in the fields
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

