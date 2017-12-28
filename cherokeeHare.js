(function () {

    let startingPopulation = 200;
    let birthRate = .1;
    let numberOfWeeks = 5;

    let numberOfHares = Math.round(startingPopulation * Math.pow(2.71828, (birthRate * numberOfWeeks)));
    console.log("There will be " + numberOfHares + " Cherokee Hares after " + numberOfWeeks + " weeks");



})();