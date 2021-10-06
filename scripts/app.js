const dateDisplay = document.getElementById('dateDisplay')

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function clockTick () {
    const date = new Date()
    dateDisplay.innerHTML = `Nous sommes le ${date.toLocaleDateString(undefined, options)} - ${date.toLocaleTimeString('fr-FR')}`
}

setInterval(clockTick, 1000)