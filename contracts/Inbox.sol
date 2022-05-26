// SPDX-License-Identifier: MIT
// specify the version of solidity
pragma solidity ^0.8.9;

//define the contract
contract Inbox {
    string public message;

    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    // in Java they look like this:
    /* 
        public void setMessage(String newMessage) {}
    */
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

    // this function is actually redundant 
    //since there is a Message function that automatically created when we declared the public variable Message.
    // function getMessage() public view returns (string) {
    //     return message;
    // }
}