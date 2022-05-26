## Create a simple smart contract
```
pragma solidity ^0.8.9;

contract Inbox {
    string public message;

    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    // in Java the setMessage looks like this:
    /* 
        public void setMessage(String newMessage) {}
    */

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
```
<br/>
<img src='./public/insideSmartContract.png' />
Inside the Inbox smart contract 

<br/>
<img src='./public/contractFunctions.png' />
Get data and modify data from Contract

<br/>
<br/>
<br/>

### I'm still updating this file...
