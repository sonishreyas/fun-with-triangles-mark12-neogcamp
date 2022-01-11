const baseLength = document.querySelector("#base-length");
const heightLength = document.querySelector("#height-length");
const checkButton = document.querySelector("#check-area");
const output = document.querySelector("#output");

const calculateArea = (b, h) => {
  return (Number(b) * Number(h)) / 2;
};

const checkArea = () => {
  const b = baseLength.value;
  const h = heightLength.value;
  if (b != "" && h != "" && b > 0 && h > 0) {
    const area = calculateArea(b, h);
    output.style.display = "Block";
    output.innerText = `Area of triangle = ${area} cm²`;
  } else if (b < 0 || h < 0) {
    output.style.display = "Block";
    output.innerText = "Invalid input. It cannot be negative!!";
  } else {
    output.style.display = "Block";
    output.innerText = "Area of triangle = 0 cm²";
  }
};

checkButton.addEventListener("click", checkArea);
