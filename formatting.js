exports.removeWhitespace=(string)=> {
    // trim space off the ends
    let result = string.trim()
    // collapse duplicate spaces
    result = result.replace(/\s+/g,' ')
    console.log(result)
}

const capitalizeInitial = (string) =>{
    let result =  string.toLowerCase()
    
    result = result.charAt(0).toUpperCase() + result.slice(1)
    
    console.log(result)
}
