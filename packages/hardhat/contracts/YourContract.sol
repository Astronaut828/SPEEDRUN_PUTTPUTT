//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * A smart contract that allows changing a state variable of the contract and tracking the changes
 * It also allows the owner to withdraw the Ether in the contract
 * @author BuidlGuidl / Astronaut828
 */
contract YourContract {
	address public owner;
	uint constant PAR_PUTTS = 18;
	uint256 constant PAR_VALUE = 69e18;
	bool public greensFeePaid;

	mapping(address => uint) public puttsPlayed;

	function transferOwnership(address newOwner) public {
		owner = newOwner;
	}

	function payGreensFee() public payable {
		require(!greensFeePaid, "Greens fee already paid");
		require(msg.value == 1 ether, "Greens fee is 1 ether");
		greensFeePaid = true;
	}

	function putt() public payable {
		require(greensFeePaid, "Greens fee not paid");
		require(msg.value > 0.01 ether, "SEND SOME ETH!");
		puttsPlayed[msg.sender] += 1;
	}

	function score(address player) public view returns (string memory) {
		uint putts = puttsPlayed[player];

		if (putts <= 15) {
			return "PUTTS TOO LOW!";
		}

		if (putts == PAR_PUTTS - 1) {
			return "Birdie";
		} else if (putts == PAR_PUTTS - 2) {
			return "Eagle";
		} else if (putts == PAR_PUTTS + 1) {
			return "Bogey";
		} else if (putts == PAR_PUTTS + 2) {
			return "Double Bogey";
		} else if (putts == PAR_PUTTS && address(this).balance == PAR_VALUE) {
			return "Hole-in-One";
		} else if (putts == PAR_PUTTS) {
			return "Par";
		} else {
			return "TRY AGAIN!";
		}
	}
}
