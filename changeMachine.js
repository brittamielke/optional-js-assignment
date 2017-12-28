(function(){
    let amount = 47;
    let bills = [];
   
    let numberOfBills = Math.floor(amount/20);
    amount = amount - (numberOfBills*20);
    bills.push(numberOfBills);
    
    numberOfBills = Math.floor(amount/10);
    amount = amount - (numberOfBills*10);
    bills.push(numberOfBills);

    numberOfBills = Math.floor(amount/5);
    amount = amount - (numberOfBills*5);
    bills.push(numberOfBills);

    numberOfBills = Math.floor(amount/1);
    amount = amount - (numberOfBills*1);
    bills.push(numberOfBills);

    console.log(bills);

})();