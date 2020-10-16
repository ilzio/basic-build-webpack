// singleton pattern, immediately invoked function definition (IIFE)

const scoreboard = function () {
    var message = 'Welcome to the game!';
    function printMessage() {
        console.log(message);
    }
    function updateMessage(newMessage) {
        message = newMessage;
    }
    //return an object that represents our new module, 'public' methods and vars will be exposed, other internal variables and methods will be 'private' (sort of)
    return {
        showMessage: printMessage,
        updateMessage: updateMessage
    }
}(); 

// useless since webpack + babel transpile everything to ES5

    //  module.exports = {
    //     scoreboard : scoreboard
    // }

    // module.exports.scoreboard = scoreboard

    // exports.scoreboard = scoreboard

export default scoreboard