const baseLength = document.querySelector("#base-length");
const heightLength = document.querySelector("#height-length");
const checkButton = document.querySelector("#check-area");
const output = document.querySelector("#output");

function calculateArea(b,h)  {
    return (Number(b)*Number(h))/2;
}

function checkArea() {
    const b = baseLength.value;
    const h = heightLength.value;
    if(b != "" && h != "") {
        const area = calculateArea(b,h);
        output.style.display="Block";
        output.innerText = "Area of triangle = " + area + " cm²";
    }   else{
        output.style.display="Block";
        output.innerText = "Area of triangle = 0 cm²";
    }  
}

checkButton.addEventListener("click", checkArea);


