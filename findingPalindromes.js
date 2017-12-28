(function () {
    let word = "racecar";

    //this takes the string and puts it into an array, so it can be reversed, then puts it back into a string. 
    //i did it this way because i couldnt find a reverse method on the string object.
    reversedWord = (word.split("").reverse().join(""));

    console.log(word === reversedWord);

})();