let cardContainer = document.getElementById("cardsContainer")

let url = 'https://dummyjson.com/recipes'
let fetchData = async () => {
    let response = await fetch(url)

    let data = await response.json()
    console.log(data)
    let arr = DataTransfer.recipes

    container.innerHTML += `
        <div>
        
            <img src="${Element.image}">
            <h3>${Element.name}"</h3>
            <p>Time:${Element.prepTimeMinutes}</p>
            <button>Delete</button>
        </div>
    `
}
fetchData()


function addDeleteButtons() {
    const cards = document.querySelectorAll('.recipe-card')

    cards.forEach((card) => {
        if (card.querySelector('.delete-button')) return

        const deleteBtn = document.createElement('button')
        deleteBtn.className = 'delete-button'
        deleteBtn.textContent = 'Delete'

        deleteBtn.addEventListener('click', () => {
            card.remove()
        })

        const info = card.querySelector('.recipe-info')
        if (info) {
            info.appendChild(deleteBtn)
        } else {
            card.appendChild(deleteBtn)
        }
    })
}

addDeleteButtons()










