const SYSTEM_ID = "service_78exe0t"
const TEMPLATE_ID = "template_mgp8yqp"

function sendEmail() {
    const firstName = document.getElementById("first_name").value
    const lastName = document.getElementById("last_name").value
    const userMail = document.getElementById("email").value
    const message = document.getElementById("message").value

    const contactParams = {
        from_firstName: firstName,
        from_lastName: lastName,
        from_email: userMail,
        message: message
    }

    emailjs.send(SYSTEM_ID, TEMPLATE_ID, contactParams)
        .then((res) => {
            console.log("Success !!", res.status, res.text);
        }, (error) => {
            console.log("Failed", error);
        })
}