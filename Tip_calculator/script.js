function calculateTip() {
    //get you inputs in variables first
    let billAmt = document.getElementById("inputBill").value;
    let serviceQual = document.getElementById("serviceQual").value;
    let numOfPeople = document.getElementById("people").value;

    //validate your inputs
    if (billAmt === "" || serviceQual == 0) {
        alert("Please enter all values");
        return;

    }

    //validate other inputs
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("eachText").style.display = "none";
    }
    else {
        document.getElementById("eachText").style.display = "block";
    }

    //Calculate tip (finally,phew)
    var total = (billAmt * serviceQual) / numOfPeople;
    //round off the total
    total = Math.round(total * 100) / 100;
    //use toFixed to display amount upto 2 decimals

    total = total.toFixed(2);

    //display the calculated tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    

}
// Hide the tip amount on load
// document.getElementById("totalTip").style.display = "none";
// document.getElementById("eachText").style.display = "none";


document.getElementById("calculateBtn").onclick = function () {

    calculateTip();
}