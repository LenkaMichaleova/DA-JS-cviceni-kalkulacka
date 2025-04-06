const displayElm = document.querySelector(".display")

const handleDigitClick = (event) => {
    // console.log("Uzivatel klik na tlacitko")
    // console.log(event.target)
    const digit = event.target.textContent
    // console.log(digit)
    if (displayElm.textContent === "0") {
        displayElm.textContent = digit
    } else if (displayElm.textContent.length < 9) {
        displayElm.textContent += digit
    }
}

displayElm.textContent = 0 // 42

document.querySelector("#btn-0").addEventListener("click", handleDigitClick)
document.querySelector("#btn-1").addEventListener("click", handleDigitClick)
document.querySelector("#btn-2").addEventListener("click", handleDigitClick)
document.querySelector("#btn-3").addEventListener("click", handleDigitClick)
document.querySelector("#btn-4").addEventListener("click", handleDigitClick)
document.querySelector("#btn-5").addEventListener("click", handleDigitClick)
document.querySelector("#btn-6").addEventListener("click", handleDigitClick)
document.querySelector("#btn-7").addEventListener("click", handleDigitClick)
document.querySelector("#btn-8").addEventListener("click", handleDigitClick)
document.querySelector("#btn-9").addEventListener("click", handleDigitClick)