(args) => { 
    if (args.length === 2) {
        for(var i = 0; i < args[1]; i += args[0]) {
            displayMessage(i)
        }     
    } 
else { displayMessage("Usage: for <number++> <number>") }
}

(args) => {if (args.length === 2) {for(var i = 0; i < args[1]; i += args[0]){displayMessage(i)}}else { displayMessage("Usage: for <number++> <number>")}}