// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Greeter {
    string public greeting;

    event GreetingChanged(address indexed by, string oldGreeting, string newGreeting);

    constructor(string memory _greeting) {
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string calldata _newGreeting) external {
        string memory old = greeting;
        greeting = _newGreeting;
        emit GreetingChanged(msg.sender, old, _newGreeting);
    }
}
