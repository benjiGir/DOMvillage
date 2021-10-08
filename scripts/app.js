const dateDisplay = document.getElementById('dateDisplay')
const displayDate = document.getElementById('displayDate')
const displayTime = document.getElementById('displayTime')
const bookingBtn = document.querySelectorAll("[data-open]")
const isVisible = "is-visible"
const closeModal = document.querySelectorAll("[data-close]")
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

for(let el of bookingBtn) {
    el.addEventListener("click", () => {
        
        const modalId = el.dataset.open
        console.log(modalId);
        document.getElementById(modalId).classList.add(isVisible)
    })
}

for(let el of closeModal) {
    el.addEventListener("click", () => {
        el.parentElement.parentElement.parentElement.classList.remove(isVisible)
    })
}

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