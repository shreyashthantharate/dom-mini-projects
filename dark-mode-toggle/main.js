const toggleBtn = document.getElementById("toggleButton");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.value == "dark") {
    toggleBtn.innerText = "Toggle Light Mode";
  } else {
    toggleBtn.innerText = "Toggle Dark Mode";
  }
});
