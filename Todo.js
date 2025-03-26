function addTask()
{
 let task=document.getElementById("taskInput").value;
 let tass=document.createElement("li");
 tass.innerHTML=task;
 document.getElementById("taskList").appendChild(tass);
 document.getElementById("taskInput").value = ""; 
}