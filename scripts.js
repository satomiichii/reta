const form = document.getElementById('contact-form')
function addSubmitListener () {
    form.addEventListener('submit', handleSubmit)
}
function handleSubmit (e) {
    e.preventDefault()
    const reqBody = generateRequestBody()
    console.log('reqBody: ', reqBody)
}

function generateRequestBody () {
    const reqBody = {
        selectedService: null,
        selectedCities: []
    }
    const elements = form.elements
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i]
        if (element.type !== 'submit') {
            if (element.type === 'radio') {
                if (element.checked) {
                    reqBody.selectedService = element.value
                }
            } else if (element.type === 'checkbox') {
                if (element.checked) {
                    reqBody.selectedCities.push(element.value)
                }
            } else {
                reqBody[element.id] = element.value
            }
        }
    }
    return reqBody
}

function init () {
    addSubmitListener()
}

init()