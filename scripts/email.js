const SYSTEM_ID = "service_78exe0t"
const TEMPLATE_ID = "template_mgp8yqp"

function sendEmail() {
    const name = document.getElementById("name").value
    const userMail = document.getElementById("email").value
    const goal = document.getElementById("goal")
    const goalChoice = goal.options[goal.selectedIndex].text
    const message = document.getElementById("message").value

    const contactParams = {
        from_name: name,
        from_email: userMail,
        goal: goalChoice,
        message: message
    }

    emailjs.send(SYSTEM_ID, TEMPLATE_ID, contactParams)
        .then((res) => {
            console.log("Success !!", res.status, res.text);
        }, (error) => {
            console.log("Failed", error);
        })
}