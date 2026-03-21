const getUserBtn = document.getElementById("getUser");
const userImage = document.getElementById("userImage");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const body = document.querySelector("body");

console.log(body);
const url = "https://api.freeapi.app/api/v1/public/randomusers/user/random";

function fetchRandomUser() {
  try {
    fetch(url)
      .then((data) => data.json())
      .then((finalData) => {
        const name = `${finalData.data.name.title} ${finalData.data.name.first} ${finalData.data.name.last}`;
        const email = finalData.data.email;
        userImage.setAttribute("src", finalData.data.picture.large);
        userName.innerText = name;
        userEmail.innerText = email;
      });
  } catch (error) {
    alert("Server is busy. Please try again later.");
  }
}
getUserBtn.addEventListener("click", fetchRandomUser);
body.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    fetchRandomUser();
  }
});
setTimeout(() => {
  alert("Press Enter or click the button to get a random user");
}, 1200);
