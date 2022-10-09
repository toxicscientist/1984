//Multiple word censor
//Non-looping censors
//Slicing Non-looping finished censors
//Censoring full word if part thereof is matched

interface CensorOptions {
    grawlixes: string;
}

function censor(string:string, match:string, options:CensorOptions = {grawlixes: "*"}): string{
    var newStr:string = string.replace(match, options.grawlixes.repeat(match.length))
    return newStr
}

// console.log(censor("I hate the game amongus so much", "amongus"))