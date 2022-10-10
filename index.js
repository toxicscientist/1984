"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.censor = void 0;
function censor(string, match, options = { grawlixes: "*", loop: true, slice: true, start: 0, end: 0 }) {
    options.grawlixes = options.grawlixes ?? "*";
    options.loop = options.loop ?? true;
    options.slice = options.slice ?? true;
    options.start = options.start ?? 0;
    options.end = options.end ?? 0;
    if (typeof match == "string")
        match = [match];
    for (let i = 0; i < match.length; i++) {
        string = string.replace(match[i], match[i].slice(0, options.start) +
            (options.loop
                ? options.grawlixes.repeat(match[i].length - (options.start + options.end)).slice(0, options.slice ? match[i].length : undefined)
                : options.grawlixes.slice(0, options.slice ? match[i].length : undefined))
            + match[i].slice(match[i].length - options.end));
    }
    return string;
}
exports.censor = censor;
// console.log(censor("I hate you so much you forking batch", ["fork", "batch"], {grawlixes: "*"}))
