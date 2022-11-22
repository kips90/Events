const button = document.getElementById("submitBtn")

button.addEventListener("click", function(){
    const num1 = parseFloat(document.getElementById("num1").value)
    const num2 = parseFloat(document.getElementById("num2").value)
    const operator = document.getElementById("operator").value

    let calculations = 0
    if(operator=="+")
    {
       calculations = num1 + num2
    }
    else if(operator=="/")
    {
        calculations = num1/num2
    }
    document.getElementById("answer").textContent = calculations
    // toDO add - and * statements
    // alert("1")
    // alert("2")

})
// alert("Events")