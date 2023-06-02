async function main() {

    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()

    books.forEach(displayTitles)
}
function displayTitles(book) {
    let titleContainer = document.querySelector('#root')
    
    let p = document.createElement('p')
    p.textContent = book.title

    let quantityInput = document.createElement('input')
    quantityInput.value = book.quantity

    let saveButton = document.createElement('button')
    saveButton.textContent = 'Save'
    
    saveButton.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: quantityInput.value
            })
        })
    })
    p.append(quantityInput, saveButton)
    titleContainer.append(p)
    
}
main()
// Your Code Here
