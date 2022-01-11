const sideALength = document.querySelector("#side-a");
const sideBLength = document.querySelector("#side-b");
const checkButton = document.querySelector("#check-hypotenuse");
const output = document.querySelector("#output");

const calculateHypotenuse = (a, b) => {
  return Math.sqrt(Math.pow(Number(a), 2) + Math.pow(Number(b), 2));
};

const checkHypotenuse = () => {
  const a = sideALength.value;
  const b = sideBLength.value;
  if (a != "" && b != "" && b > 0 && a > 0) {
    const hypotenus = calculateHypotenuse(a, b);
    output.style.display = "Block";
    output.innerText = `Length of hypotenuse = ${hypotenus}`;
  } else if (b < 0 || a < 0) {
    output.style.display = "Block";
    output.innerText = "Invalid input. Length cannot be negative!!";
  } else {
    output.style.display = "Block";
    output.innerText = "Please enter length of both sides";
  }
};

checkButton.addEventListener("click", checkHypotenuse);
