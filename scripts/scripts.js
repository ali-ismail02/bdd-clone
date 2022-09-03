// Dropdown NAV BAR fns
var dropdown1 = document.getElementById("dropdown-1")
var dropdownContent1 = document.getElementById("dropdown-content-1")
var dropdown2 = document.getElementById("dropdown-2")
var dropdownContent2 = document.getElementById("dropdown-content-2")

dropdown1.addEventListener("click", function() {
    dropdownContent1.classList.add("dropdown-active")
    dropdownContent1.addEventListener("mouseleave", function() {
        dropdownContent1.classList.remove("dropdown-active")
    })
    dropdown1.addEventListener("mouseleave", function() {
        dropdownContent1.classList.remove("dropdown-active")
    })
})
dropdown2.addEventListener("click", function() {
    dropdownContent2.classList.add("dropdown-active")
    dropdownContent2.addEventListener("mouseleave", function() {
        dropdownContent2.classList.remove("dropdown-active")
    })
    dropdown2.addEventListener("mouseleave", function() {
        dropdownContent2.classList.remove("dropdown-active")
    })
})
