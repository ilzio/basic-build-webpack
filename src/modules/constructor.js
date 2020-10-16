const Scoreboard = function(customMessage=''){
    console.log('creating new scoreboard');
    console.log(customMessage);
    let message = 'welcome to the game constructor'

    function printMessage(){
        console.log(`message:  ${message}`)
    }
    function updateMessage(newMessage) {
        message = newMessage
        return message
    }

    return{
        printMessage: printMessage,
        updateMessage: updateMessage
    }
}

// useless since webpack + babel transpile everything to ES5

    //  module.exports = {
    //     Scoreboard : Scoreboard
    // }

    // module.exports.Scoreboard = Scoreboard

    // exports.Scoreboard = Scoreboard

export default Scoreboard