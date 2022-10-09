"use strict";
//Multiple word censor [X]
//Non-looping censors [X]
//Slicing Non-looping finished censors [X]
//Not censoring starts [X] and/or ends of words [X]
//Censoring full word if part thereof is matched
function censor(string, match, options = { grawlixes: "*", loop: true, slice: true, start: 0, end: 0 }) {
    options.loop = options.loop || true;
    options.slice = options.slice || true;
    options.start = options.start || 0;
    options.end = options.end || 0;
    if (typeof match == "string")
        match = [match];
    for (let i = 0; i < match.length; i++) {
        string = string.replace(match[i], (options.loop ? options.grawlixes.repeat(match[i].length).slice(0 + (options.start || 0), (options.slice ? match[i].length + options.end : undefined || options.end)) : options.grawlixes));
    }
    return string;
}
console.log(censor("I hate you so much you ducking batch", ["duck", "batch"], { grawlixes: "ABCDEFGHIJ", start: 2, end: 1 }));
