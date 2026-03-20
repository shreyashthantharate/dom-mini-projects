const toggleBtn = document.getElementById("toggleButton");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  //   console.log(document.body.classList);
  if (document.body.classList.value == "dark") {
    toggleBtn.innerText = "Toggle Light Mode";
  } else {
    toggleBtn.innerText = "Toggle Dark Mode";
  }
  //   console.log("yes");
});
// console.log(document.body.classList);
