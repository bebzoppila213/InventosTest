const chatContent = document.querySelector('.chat__content')


document.addEventListener('click', (event) => {
    if (event.target.dataset.delete) {
        const deleteId = event.target.dataset.delete
        const deletItem = document.querySelector(`#${deleteId}`)
        deletItem.remove()
        saveToLocalStorage(JSON.stringify(chatContent.innerHTML));
    }
})


const chatInput = document.querySelector('.chat__input-text')
const btn = document.querySelector('.chat__input-button')

btn.addEventListener('click', () => {
    if (chatInput.value) {
        chatContent.append(createChatItem(chatInput.value))
        chatInput.value = ''
        saveToLocalStorage(JSON.stringify(chatContent.innerHTML));
    }
})


function createChatItem(text) {
    const chatItemId = Math.floor(Math.random() * 123123)

    const div = document.createElement('div')
    div.classList.add('chat__content-item')
    div.id = 'delete' + chatItemId

    const span = document.createElement('span')
    span.innerText = text
    span.classList.add('chat__content-text')

    const btnDelete = document.createElement('button')
    btnDelete.classList.add('chat__content-delete')
    btnDelete.dataset.delete = 'delete' + chatItemId
    btnDelete.textContent = 'X'

    div.append(span)
    div.append(btnDelete)
    return div
}

function saveToLocalStorage(data) {
    localStorage.setItem('chat', data)
}

window.onload = () => {
    const chatData = localStorage.getItem('chat')

    if (chatData) {
        chatContent.innerHTML = JSON.parse(chatData)
    }
}