function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = "🐰 " + taskText;
  li.appendChild(span);

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "task-buttons";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✅";
  completeBtn.className = "complete-btn";
  completeBtn.onclick = () => {
    document.getElementById("completedList").appendChild(li);
    completeBtn.remove();
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => {
    li.remove();
  };

  buttonContainer.appendChild(completeBtn);
  buttonContainer.appendChild(deleteBtn);
  li.appendChild(buttonContainer);

  document.getElementById("todoList").appendChild(li);
  input.value = "";
}

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  document.querySelector(".floating-hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 400);
