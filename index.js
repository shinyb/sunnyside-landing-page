const mobileNavItems = document.getElementById("mobile-nav-items")
const menuOpen = document.getElementById('menu-open')
const menuClosed = document.getElementById('menu-close')


menuOpen.addEventListener('click', function() {
    mobileNavItems.classList.remove('hidden')
    menuOpen.style.display = 'none'
    menuClosed.style.display = "block"}

)

menuClosed.addEventListener('click', function() {
    mobileNavItems.classList.add('hidden')
    menuOpen.style.display = "block"
    menuClosed.style.display = "none"
})
