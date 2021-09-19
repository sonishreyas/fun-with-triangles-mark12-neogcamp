const sideALength = document.querySelector("#side-a");
const sideBLength = document.querySelector("#side-b");
const checkButton = document.querySelector("#check-hypotenuse");
const output = document.querySelector("#output");

function calculateHypotenuse(a,b)  {
    return Math.sqrt(Math.pow(Number(a),2)+Math.pow(Number(b),2));
}

function checkHypotenuse() {
    const a = sideALength.value;
    const b = sideBLength.value;
    if(a != "" && b != "") {
        const hypotenus = calculateHypotenuse(a,b);
        output.style.display="Block";
        output.innerText = "Length of hypotenuse = " + hypotenus;
    }   else{
        output.style.display="Block";
        output.innerText = "Please enter length of both sides";
    }  
}

checkButton.addEventListener("click", checkHypotenuse);


