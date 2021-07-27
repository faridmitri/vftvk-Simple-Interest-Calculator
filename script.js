function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal*years*rate/100;
    var year = new Date().getFullYear()+parseInt(years);
    //text to be shown for result
    document.getElementById("result").innerHTML = "If you deposit "+principal+",\nat an interest rate of "+rate+". \nYou will receive an amount of "+interest+",\nin the year "+year;
}

//update rate value
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

//Validation for principal
function validateAmount() 
{
    var principal = document.getElementById("principal").value;
    var biggerThanZero = parseInt(principal) > 0;
    if (!biggerThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
}
