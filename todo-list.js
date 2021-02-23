

let taskNameTextBox = document.getElementById("taskNameTextBox")
let btnAddTask = document.getElementById("btnAddTask")

let tasksUL = document.getElementById("tasksUL")
let completeTasksUL = document.getElementById("completeTasksUL")

btnAddTask.addEventListener("click",function() {

    let taskName = taskNameTextBox.value

    let liItem = document.createElement("li")

    let taskCheckBox = document.createElement("input")
    taskCheckBox.setAttribute("type", "checkbox")
    taskCheckBox.addEventListener("change", function() {
        if(this.checked) {
            console.log(this.parentElement)
            completeTasksUL.appendChild(this.parentElement)

        }
        else {
            console.log(this.parentElement)
            tasksUL.appendChild(this.parentElement)
        }
    })

    let taskLabel = document.createElement("label")
    taskLabel.innerHTML = taskName    


    let removeButton = document.createElement("button")
    removeButton.innerHTML = "Remove"
    removeButton.addEventListener("click", function() {
        tasksUL.removeChild(this.parentElement)
    })
    removeButton.addEventListener("click", function() {
        completeTasksUL.removeChild(this.parentElement)
        
    })
    

    liItem.appendChild(taskCheckBox)
    liItem.appendChild(taskLabel)
    liItem.appendChild(removeButton)

    tasksUL.appendChild(liItem)

})

    // tasksUL.appendChild(checkBox)
    // liItem.appendChild(removeButton)
    // tasksUL.appendChild(liItem)
    
    



/*
<li>
    <input type="checkbox" />
    <label> Mow the lawn</label>
    <button>Remove</button>
</li>
*/