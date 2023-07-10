const form = document.querySelector('form')
const ul = document.querySelector('ul')

    form.onsubmit = function(event) {
        event.preventDefault()

    const input = form.querySelector('input');
    const value = input.value

    if(value == "") {
        return alert('Preencha o campo!')
    }

    const li = document.createElement('li');
    li.setAttribute("class", "lista apagar")
    li.innerHTML = input.value

    const button = document.createElement('button')
    button.setAttribute("class", "delete apagar")
    button.innerHTML = "x"

    input.value = ""

    ul.appendChild(li)
    li.appendChild(button)

    }

    ul.onclick = (event) => {
        if(event.target.classList.contains('delete')){
            if(confirm("Deseja apagar este item?")){
                event.target.parentElement.remove()
            }
        }
    }
    