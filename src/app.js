const angle1Input = document.querySelector("#angle-1");
const angle2Input = document.querySelector("#angle-2");
const angle3Input = document.querySelector("#angle-3");
const output = document.querySelector("#output");
const checkButton = document.querySelector("#check-button");

const anglesum = (angle1, angle2, angle3) => angle1 + angle2 + angle3;

const checkTriangle = () => {
  if (
    Number(angle1Input.value) < 0 ||
    Number(angle2Input.value) < 0 ||
    Number(angle3Input.value) < 0
  ) {
    output.innerText = "Invalid Input. The angles should be positive!!";
  } else {
    const angles = anglesum(
      Number(angle1Input.value),
      Number(angle2Input.value),
      Number(angle3Input.value)
    );
    console.log(angles);
    if (angles === 180) {
      output.innerText = "The angles form a triangle 🥳";
    } else {
      output.innerText = "Oh Oh!, the angles do not form a triangle";
    }
  }
};

checkButton.addEventListener("click", checkTriangle);
