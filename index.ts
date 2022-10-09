//Multiple word censor [X]
//Non-looping censors [X]
//Slicing Non-looping finished censors [X]
//Not censoring starts and/or ends of words
//Censoring full word if part thereof is matched

interface CensorOptions {
    grawlixes: string;
    loop?: boolean;
    slice?: boolean;
}

function censor(string:string, match:string|string[], options:CensorOptions = {grawlixes: "*", loop: true, slice: true}): string{
    options.loop = options.loop || true
    options.slice = options.slice || true
    if(typeof match == "string") match = [match]
    for (let i = 0; i < match.length; i++) {
        string = string.replace(match[i], (options.loop ? options.grawlixes.repeat(match[i].length).slice(0, (options.slice ? match[i].length : undefined)) : options.grawlixes));
    }
    return string
}

console.log(censor("I hate you so much you ducking batch", ["duck", "batch"], {grawlixes: "AAAAAAAA"}))