
const button = document.getElementById('registers button')
const password = document.getElementById('password')
const email = document.getElementById('email')





button.addEventListener('click',() => {

    if (password.value==='1234' & email.value === 'admin@admin.com') {
        alert('login sucessful')
        
    } else {
        alert('login failed')

    }
    

})