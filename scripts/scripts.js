// Dropdown NAV BAR fns
const dropdown1 = document.getElementById("dropdown-1")
const dropdownContent1 = document.getElementById("dropdown-content-1")
const dropdown2 = document.getElementById("dropdown-2")
const dropdownContent2 = document.getElementById("dropdown-content-2")

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

// hero image

// const hero = document.getElementById("hero")
// let i =1 ,j=1

// function delay(milliseconds){
//     return new Promise(resolve => {
//         setTimeout(resolve, milliseconds);
//     });
// }

// async function heroImage(){
//     while(true){
//         for(; i < 11 ; i++){
//             hero.classList.replace("image" + j , "image" + (i+1))
//             await delay(2000);
//             console.log(j + " " +(i+1))
//             j=i+1
//         }
//         j=11
//         i=0
//     }
// }

// heroImage()

