"use strict";
//Multiple word censor
//Non-looping censors
//Slicing Non-looping finished censors
//Censoring full word if part thereof is matched
function censor(string, match, options = { grawlixes: "*" }) {
    var newStr = string.replace(match, options.grawlixes.repeat(match.length));
    return newStr;
}
// console.log(censor("I hate the game amongus so much", "amongus"))
