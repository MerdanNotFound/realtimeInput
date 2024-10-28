const textareaElement = document.querySelector("textarea")
const pElement = document.querySelector("p")
const maxVal = 250

textareaElement.addEventListener('input', () => {
    let textareaValLength = textareaElement.value.length
    if(textareaValLength >= maxVal) {
        pElement.textContent = `${textareaValLength} / ${250}` 
        textareaElement.style.border = "3px solid red"
        pElement.style.color = "red" 
    } else {
        pElement.textContent = `${textareaValLength} / ${250}` 
        textareaElement.style.border = "3px solid var(--accent-color)"
        pElement.style.color = "#fff" 
    }
})
