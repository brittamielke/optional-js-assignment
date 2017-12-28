(function () {

    let word = "supercalifragilisticexpialidocious";
    var letter = "b";
    let count = 0;
    let message = "Nope, that letter doesn't exist in my word."
    for (let i of word) {
        if (i == letter) {
            count++;
        }
    }
    if (count > 0) {
        message = "Yeah, the letter " + letter + " exists " + count + " times in my word";
    }

    return console.log(message);
})();