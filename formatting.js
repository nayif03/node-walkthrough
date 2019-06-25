exports.removeWhitespace=(string)=> {
    // trim space off the ends
    let result = string.trim()
    // collapse duplicate spaces
    result = result.replace(/\s+/g,' ')
    console.log(result)
}
