(function() {

    let heightOfMountainsinFeet = [29029, 15923, 5342, 21094, 17841]
    let biggestNumber = 0;
    for(let i of heightOfMountainsinFeet) {
        if (i > biggestNumber) {
            biggestNumber = i;
        }
    }
    console.log(biggestNumber);

})();