const bandname = document.getElementById('name')
const membersnumber = document.getElementById('membersnumber')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const btn = document.getElementById('btn')
const result = document.getElementById('result')

btn.addEventListener("click", function(b) {
    b.preventDefault()
    console.log(`Name:${bandname.value}`)
    console.log(`Members:${membersnumber.value}`)
    console.log(`Email:${email.value}`)
    console.log(`Phone:${phone.value}`)

    result.innerHTML = `
    <div class="info">
    <h4>Congratulations!</h4>
    <div class="details">
    <p>You are welcome to our Rockoffee to perform. We will contact you to discuss the date and hour</p>
    <span>Details:</span>
    <br></br>
    <p><strong>Name: </strong>${bandname.value}</p>
<p><strong>Members: </strong>${membersnumber.value}</p>
<p><strong>Email: </strong>${email.value}</p>
<p><strong>Phone: </strong>${phone.value}</p>
</div>
</div>
    `
    document.getElementById("form").style.display = 'none'
    result.style.display = 'flex'

})