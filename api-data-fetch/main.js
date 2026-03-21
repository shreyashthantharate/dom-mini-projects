const getUserBtn = document.getElementById("getUser");
const userImage = document.getElementById("userImage");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

const url = "https://api.freeapi.app/api/v1/public/randomusers/user/random";

getUserBtn.addEventListener("click", () => {
  fetch(url)
    .then((data) => data.json())
    .then((finalData) => {
      const name = `${finalData.data.name.title} ${finalData.data.name.first} ${finalData.data.name.last}`;
      const email = finalData.data.email;
      userImage.setAttribute("src", finalData.data.picture.large);
      userName.innerText = name;
      userEmail.innerText = email;
    });
});
