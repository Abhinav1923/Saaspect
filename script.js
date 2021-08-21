let pswrd = document.getElementById('password')
let cpswrd = document.getElementById('confirm-password')

function togglePassword() {
    if (pswrd.firstElementChild.type == 'password') {
        pswrd.firstElementChild.type = 'text'
        pswrd.lastElementChild.firstElementChild.src = './hide-pswrd.svg'

    } else {
        pswrd.firstElementChild.type = 'password'
        pswrd.lastElementChild.firstElementChild.src = './show-pswrd.svg'

    }
}

function toggleConfirmPassword() {
    if (cpswrd.firstElementChild.type == 'password') {
        cpswrd.firstElementChild.type = 'text'
        cpswrd.lastElementChild.firstElementChild.src = './hide-pswrd.svg'
    } else {
        cpswrd.firstElementChild.type = 'password'
        cpswrd.lastElementChild.firstElementChild.src = './show-pswrd.svg'
    }
}
