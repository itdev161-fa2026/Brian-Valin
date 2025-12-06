//Local Storage for dark mode variable
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

//Enable dark mode
const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

//Disable dark mode
const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', 'null')
}

//enable dark mode on refresh if local variable is set to dark mode
if(darkmode === "active") enableDarkmode()

//Event listener for dark mode button
themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})