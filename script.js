let input = document.querySelector('.inp')
let button = document.querySelector('.add-btn')
let task_div = document.querySelector('.tasks')


button.addEventListener('click', () => {
    if (input.value == "") {
        alert('you should Write some Thing')
    } else {
        let task = document.createElement('li')
        task.classList.add('soo')
        task.innerHTML = `${input.value}
         <i class="fa-solid fa-xmark close-icon"></i>`
        task_div.appendChild(task)



        //     if (e.target.checked) {

        // } else if (e.target.uncheked) {
        //     e.target.style.textDecorationLine = 'none'
        // }



    }
    input.value = ''
    saveData()
})
task_div.addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle('checked')
        saveData()
    } else if (e.target.tagName === 'I') {
        // e.target.task_div.remove()
        e.target.parentElement.remove()
        saveData()
    }


})


function saveData(){
    localStorage.setItem('data',task_div.innerHTML )
}


function showtask(){
    task_div.innerHTML = localStorage.getItem('data')
}

showtask()