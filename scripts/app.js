const dateDisplay = document.getElementById('dateDisplay')
const displayDate = document.getElementById('displayDate')
const displayTime = document.getElementById('displayTime')

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function clockTick () {
    const date = new Date()
    if (window.matchMedia("(min-width: 600px)").matches) {
        dateDisplay.innerHTML = `Nous sommes le ${date.toLocaleDateString(undefined, options)} - ${date.toLocaleTimeString('fr-FR')}`
    } else {
        if ((typeof(displayDate) != "undefined" && displayDate != null)) {
            displayDate.innerHTML = `${date.toLocaleDateString()}`
            displayTime.innerHTML = `${date.toLocaleTimeString('fr-FR')}`
        }
    }
}

setInterval(clockTick, 1000)