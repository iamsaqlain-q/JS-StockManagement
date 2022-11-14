import promptSync from 'prompt-sync'; 
const prompt = promptSync();

function addStock() {
    let noOfStocks = prompt('Enter number of Stocks you wanna add : ')
    for (let i = 0; i < noOfStocks; i++) {
        console.log('Stock - ', (i + 1));
        let nameOfStock = prompt('Name of Stock : ')
        let shares = prompt("Number of shares : ")
        let sharePrice = prompt('Share price : ')
        let value = calculateStockValue(shares, sharePrice)
    }
}
function calculateStockValue(shares, sharePrice) {
    return shares * sharePrice;
}

function selectChoice() {
    let choice = 0;
    while (choice != 4) {
        choice = getChoice();

        switch (choice) {
            case 1:
                addStock();
                break;
        }
    }
}

function getChoice() {
    let input = 0;
    while (!(input >= 1 && input <= 4)) {
        console.log('You wanna? ');
        input = prompt("1. Add Stock \n2. Display Stock Report \n3. Withdraw Amount \n4. Exit \nYour choice : ");
    }

    return input;
}
getChoice();
selectChoice();