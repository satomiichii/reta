function addSubmitListener () {
    const submitBtn = document.getElementById('submit')
    submitBtn.addEventListener('click', handleSubmit)
}
function handleSubmit () {
    const form = {
        firstName: document.getElementById('first-name').value,
        middleName: document.getElementById('middle-name').value,
        lastName: document.getElementById('last-name').value,
        email: document.getElementById('email').value,
        emailConfirm: document.getElementById('email-confirm').value,
        phone: document.getElementById('phone').value,
        country: document.getElementById('country').value,
        detail: document.getElementById('detail').value
    }
    console.log('form: ', form)
}

function init () {
    addSubmitListener()
}

init()