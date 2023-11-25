function incrementValue(id)
{
    let currentNumberStr = document.getElementById(id).value;

    let currentNumber = parseInt(currentNumberStr);

    let newNumber = currentNumber + 1;
    
    document.getElementById(id).value = newNumber;

}

function decrementValue(id)
{
    let currentNumberStr = document.getElementById(id).value;

    let currentNumber = parseInt(currentNumberStr);

    let newNumber = currentNumber - 1;

    if (newNumber < 0) {
        newNumber = 0;
    }
    document.getElementById(id).value = newNumber;
}

function updateTotalPrice() {
    let totalPrice = 0;

    let prices = document.getElementsByClassName("price");

    for (const price of prices) {
        totalPrice += parseInt(price.innerHTML.slice(1));
    }
    document.getElementById("subtotal-price").innerHTML = ('$'+totalPrice);
    document.getElementById("tax-price").innerHTML = ('$'+(totalPrice*0.10).toFixed(2));
    totalPrice = totalPrice + (totalPrice*0.10);
    document.getElementById("total-price").innerHTML = ('$'+totalPrice);
}

const plusButtons = document.getElementsByClassName("plus");

for (const plusButton of plusButtons) {
    plusButton.addEventListener("click", function () {
        incrementValue(this.parentNode.querySelector("input").id);
        let currentTotal = parseInt(this.parentNode.parentNode.querySelector(".price").innerHTML.slice(1));
        let currentAmount = parseInt(this.parentNode.querySelector("input").value);
        
        let unitPrice =  currentTotal / (currentAmount -1) ;
        currentTotal = currentTotal + unitPrice;
        this.parentNode.parentNode.querySelector(".price").innerHTML = ('$'+currentTotal);

        updateTotalPrice();

    });
}

updateTotalPrice();
const minusButtons = document.getElementsByClassName("minus");

for (const minusButton of minusButtons) {
    minusButton.addEventListener("click", function () {
        if(this.parentNode.querySelector("input").value > 1){
        decrementValue(this.parentNode.querySelector("input").id);

        let currentTotal = parseInt(this.parentNode.parentNode.querySelector(".price").innerHTML.slice(1));
        let currentAmount = parseInt(this.parentNode.querySelector("input").value);
        
        let unitPrice =  currentTotal / (currentAmount +1) ;
        currentTotal = currentTotal - unitPrice;
        this.parentNode.parentNode.querySelector(".price").innerHTML = ('$'+currentTotal);
        updateTotalPrice();
    }
    });
}

const deleteButtons = document.getElementsByClassName("remove-item");

for (const deleteButton of deleteButtons) {
    deleteButton.addEventListener("click", function () {
        this.parentNode.parentNode.remove();
        updateTotalPrice();
    });
}






