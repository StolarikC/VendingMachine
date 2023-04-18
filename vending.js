var moneyInserted = 0;
var change = 0;
var msg = "";

var sodas = ["Coca-cola", "Sprite", "Fanta", "Fresca"];
const price = 1.5;

var messageEl = document.getElementById("message");

var totalPaid = 0;

const currency_five = 5;
const currency_one = 1;
const currency_quarter = 0.25;
const currency_dime = 0.10;
const currency_nickel = 0.05;

function getTotal() {
    var currency_fives = Number(document.getElementById("fives").value)
    var currency_ones = Number(document.getElementById("ones").value)
    var currency_quarters = Number(document.getElementById("quarters").value)
    var currency_dimes = Number(document.getElementById("dimes").value)
    var currency_nickels = Number(document.getElementById("nickels").value)

    if (currency_fives > 0) {
        currency_fives = currency_fives * currency_five
    }

    if (currency_ones > 0) {
        currency_ones = currency_ones * currency_one
    }

    if (currency_quarters > 0) {
        currency_quarters = currency_quarters * currency_quarter
    }

    if (currency_dimes > 0) {
        currency_dimes = currency_dimes * currency_dime
    }

    if (currency_nickels > 0) {
        currency_nickels = currency_nickels * currency_nickel
    }

    totalPaid =
        currency_fives +
        currency_ones +
        currency_quarters +
        currency_dimes +
        currency_nickels;

    return totalPaid.toFixed(2);
}

function tally() {
    moneyInserted = getTotal();
    document.getElementById("paid").innerHTML = moneyInserted;
}

function clearTally() {
    moneyInserted = 0;
    document.getElementById("paid").innerHTML = moneyInserted;
}

function clearForm() {
    document.getElementById("fives").value = 0;
    document.getElementById("ones").value = 0;
    document.getElementById("quarters").value = 0;
    document.getElementById("nickels").value = 0;
    document.getElementById("dimes").value = 0;
}

function cancel() {
    getTotal();

    if (totalPaid > 0) {
        msg =
            "Transaction canceled. $" + totalPaid.toFixed(2) + " has been returned."

        clearForm()
        clearTally()

        messageEl.innerHTML = msg;
    } else if (totalPaid == 0) {
        msg = "Insert money first. Select a soda.";

        messageEl.innerHTML = msg;
    }
}

function calculateChange() {
    var tempChange = 0;

    if (getTotal() != 0) {
        return (tempChange = (getTotal() - price).toFixed(2));
    }

    return tempChange.toFixed(2);
}

function dispenseSoda(soda) {
    messageEl.innerHTML = "";
    change = 0;

    var selectedSoda = sodas[soda];

    change = calculateChange();

    if (change < 0) {
        msg = "You did not pay enough. $" + totalPaid.toFixed(2) + " has been returned to the coin return."
        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();

        messageEl.innerHTML = msg;
    } else if (change > 0) {
        msg = selectedSoda + " has been dispensed. $" + change + " has been returned to the coin return."
        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();

        messageEl.innerHTML = msg;
    } else if (totalPaid == 0) {
        msg = "Please play before making a selection."
        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();

        messageEl.innerHTML = msg;
    } else if (change = 0) {
        msg = selectedSoda + " has been dispensed. Enjoy!"
        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();

        messageEl.innerHTML = msg;
    }
}