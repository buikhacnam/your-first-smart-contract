// specify the version of solidity
pragma solidity ^0.4.17;

//define the contract
contract Inbox {
    string public message;

    constructor(string initialMessage) public {
        message = initialMessage;
    }

    // in Java they look like this:
    /* 
        public void setMessage(String newMessage) {}

        public String getMessage() {} // view only
    
    */
    function setMessage(string newMessage) public {
        message = newMessage;
    }

    // this function is actually redundant 
    //since there is a Message function that automatically created when we declared the public variable Message.
    function getMessage() public view returns (string) {
        return message;
    }
}