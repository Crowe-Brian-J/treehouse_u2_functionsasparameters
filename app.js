const btnCreate = document.getElementById('btn-main')
const btnToggle = document.querySelector('.btn-toggle')
const btnRemove = document.querySelector('.btn-remove')
const taskList = document.querySelector('.list-container ul')
const input = document.querySelector('.input-main')
const listItems = taskList.children

//attach remove button to li
const attachRemoveButton = (li) => {
  let remove = document.createElement('button')
  remove.className = 'remove'
  remove.textContent = 'Remove'
  li.appendChild(remove)
}

for (let i = 0; i < listItems.length; i++) {
  attachRemoveButton(listItems[i])
}

//target taskList instead of listItems so we don't need to iterate over them, and each item responds as expected
/* taskList.addEventListener('mouseover', (evt) => {
  if (evt.target.tagName === 'LI') {
    evt.target.textContent = evt.target.textContent.toUpperCase()
  }
}) */

btnToggle.addEventListener('click', () => {
  const listContainer = document.querySelector('.list-container')
  if (listContainer.style.display === 'none') {
    btnToggle.textContent = 'Hide List'
    listContainer.removeAttribute('style')
  } else {
    btnToggle.textContent = 'Show List'
    listContainer.style.display = 'none'
  }
})

btnCreate.addEventListener('click', () => {
  const list = document.querySelector('ul')
  const li = document.createElement('li')
  li.textContent = input.value
  list.insertAdjacentHTML(
    'afterbegin',
    `<li>${input.value}<button class="remove">Remove</button></li>`
  )
  input.value = ''
})

btnRemove.addEventListener('click', () => {
  const li = document.querySelector('li:last-child')
  li.remove()
})

input.addEventListener('keypress', (evt) => {
  if (evt.key === 'Enter') {
    evt.preventDefault()
    btnCreate.click()
  }
})
