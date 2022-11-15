// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MAHToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Mah", "MAH") {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }
}