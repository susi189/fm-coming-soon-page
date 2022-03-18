//Handle image based on screen size

const image = document.getElementById("hero");

window.onload = () => {
  if (window.innerWidth < 1024) {
    image.src = "images/hero-mobile.jpg";
  } else {
    image.src = "images/hero-desktop.jpg";
  }
};

window.addEventListener("resize", (e) => {
  if (window.innerWidth < 1024) {
    image.src = "images/hero-mobile.jpg";
  } else {
    image.src = "images/hero-desktop.jpg";
  }
});

//check email

// const inputSec = document.getElementById("input");
const submitBtn = document.getElementById("btn-submit");
const inputEmail = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");
// errorMsg.innerText = "Please provide a valid email";

const checkEmail = (str) => {
  let isValid = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "@") {
      for (let j = i + 1; j < str.length; j++) {
        if (str[j] === ".") {
          isValid = true;
        }
      }
    }
  }

  return isValid;
};

const handleInput = (str) => {
  const result = checkEmail(str);
  if (!result) {
    inputEmail.classList.add("invalid");
    errorMsg.innerText = "Please provide a valid email";
  } else {
    inputEmail.classList.remove("invalid");
    errorMsg.innerText = "";
    inputEmail.value = "";
  }
};

submitBtn.addEventListener("click", () => {
  handleInput(inputEmail.value);
});
