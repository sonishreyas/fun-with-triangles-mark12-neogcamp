const angle1Input = document.querySelector("#angle-1");
const angle2Input = document.querySelector("#angle-2");
const angle3Input = document.querySelector("#angle-3");
const output = document.querySelector("#output");
const checkButton = document.querySelector("#check-button");


function anglesum(angle1,angle2,angle3) {
    return angle1+angle2+angle3;
}

function checkTriangle()    {
    const angles = anglesum(Number(angle1Input.value),Number(angle2Input.value),Number(angle3Input.value));
    console.log(angles);
    if(angles === 180)    {
        output.innerText = "The angles form a triangle 🥳";
    }   else    {
        output.innerText = "Oh Oh!, the angles do not form a triangle";
    }
}

checkButton.addEventListener("click", checkTriangle);
