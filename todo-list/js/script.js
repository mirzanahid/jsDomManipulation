// // Get elements
// const taskInput = document.getElementById("task-input");
// const addTaskBtn = document.getElementById("add-task-btn");
// const taskList = document.getElementById("task-list");

// // Add Task
// addTaskBtn.addEventListener("click", addTask);

// // Also add task on Enter key
// taskInput.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") {
//     addTask();
//   }
// });

// function addTask() {
//   const taskText = taskInput.value.trim();

//   if (taskText === "") {
//     alert("Please enter a task!");
//     return;
//   }

//   // Create list item
//   const li = document.createElement("li");

//   // Add task text
//   li.textContent = taskText;

//   // Add click to toggle completion
//   li.addEventListener("click", () => {
//     li.classList.toggle("completed");
//   });

//   // Create delete button
//   const deleteBtn = document.createElement("button");
//   deleteBtn.innerHTML = "❌";
//   deleteBtn.title = "Delete";
//   deleteBtn.addEventListener("click", (e) => {
//     e.stopPropagation(); // Prevent triggering completion toggle
//     li.remove();
//   });

//   // Add delete button inside a wrapper
//   const actionsDiv = document.createElement("div");
//   actionsDiv.classList.add("task-actions");
//   actionsDiv.appendChild(deleteBtn);

//   // Add actions to li
//   li.appendChild(actionsDiv);

//   // Add task to list
//   taskList.appendChild(li);

//   // Clear input
//   taskInput.value = "";
// }



//get elements

const taskInput = document.getElementById("task-input")
const addBtn = document.getElementById("add-task-btn")
const taksList = document.getElementById("task-list")



const addTask=()=>{
    const taskValue =  taskInput.value.trim()
   if(taskValue === ""){
    alert("please Inter task!")
    return
   }

   const li = document.createElement("li")
   li.textContent = taskValue



     const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "❌";
  deleteBtn.title = "Delete";
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent triggering completion toggle
    li.remove();
  });

   taksList.appendChild(li)
}


addBtn.addEventListener("click", addTask)