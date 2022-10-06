//Handle image based on screen size

const imageDiv = document.getElementById("image");
const img = document.createElement("img");

const addImg = () => {
  if (window.innerWidth < 1024) {
    img.src = "images/hero-mobile.jpg";
    imageDiv.appendChild(img);
  } else if (window.innerWidth > 1024) {
    img.src = "";
  }
};

window.onload = () => {
  addImg();
};

window.addEventListener("resize", () => {
  addImg();
});

//check email

const submitBtn = document.getElementById("btn-submit");
const inputEmail = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");
const errorSign = document.getElementById("error-sign");

const checkEmail = (str) => {
  let isValid = false;
  if (str.indexOf("@") !== -1) {
    if (str.indexOf(".", str.indexOf("@")) !== -1) {
      isValid = true;
    }
  }

  return isValid;
};

const handleInput = (str) => {
  const result = checkEmail(str);
  if (!result) {
    inputEmail.classList.add("invalid");
    errorMsg.innerText = "Please provide a valid email";
    errorSign.innerHTML = `<img src="./images/icon-error.svg"
                />`;
  } else {
    inputEmail.classList.remove("invalid");
    errorMsg.innerText = "";
    inputEmail.value = "";
    errorSign.innerHTML = "";
  }
};

submitBtn.addEventListener("click", () => {
  handleInput(inputEmail.value);
});
