// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/access/Ownable.sol";


contract TestContract is Ownable {
    uint public i;

    function callMe(uint j) public onlyOwner returns (uint){
        i += j;
        return i;
    }

    function getData() public pure returns (bytes memory) {
        return abi.encodeWithSignature("callMe(uint256)", 123);
    }
}
