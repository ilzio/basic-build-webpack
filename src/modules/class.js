class ClassScoreBoard {
    constructor(message){
        this.message = message;
    }

    getMessage(){
        console.log(this.message)
    }
    updateMessage(newMessage) {
        this.message = newMessage;
    }
}

export default ClassScoreBoard