interface CensorOptions {
    grawlixes?: string; // What string to use to censor
    loop?: boolean; // Whether the grawlixes should be allowed to loop if the censored word is too long
    slice?: boolean; // Whether the grawlixes should be cut off if the censored word is too short
    start?: number; // How many letters shouldnt be censored at the start of the word
    end?: number;// How many letters shouldnt be censored at the end of a word
}

export function censor(string:string, match:string|string[], options:CensorOptions = {grawlixes: "*", loop: true, slice: true, start: 0, end: 0}): string{
    options.grawlixes = options.grawlixes ?? "*";
    options.loop = options.loop ?? true;
    options.slice = options.slice ?? true;
    options.start = options.start ?? 0;
    options.end = options.end ?? 0;
    if(typeof match == "string") match = [match]
    for (let i = 0; i < match.length; i++) {
        string = string.replace(
            match[i],
            match[i].slice(0, options.start) +
                (
                    options.loop
                    ? options.grawlixes.repeat(match[i].length - (options.start + options.end)).slice(0, options.slice ? match[i].length : undefined)
                    : options.grawlixes.slice(0, options.slice ? match[i].length : undefined)
                )
            + match[i].slice(match[i].length - options.end)
        );
    }
    return string
}

// console.log(censor("I hate you so much you forking batch", ["fork", "batch"], {grawlixes: "*"}))