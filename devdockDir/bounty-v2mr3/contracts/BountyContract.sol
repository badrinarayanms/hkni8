// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract BountyContract is Ownable {
    struct Bounty {
        uint256 amount;
        string description;
        address creator;
        bool isPublic;
        uint256 deadline;
        bool isActive;
    }

    mapping(uint256 => Bounty) public bounties;
    uint256 public bountyCount;

    event BountyCreated(
        uint256 indexed bountyId,
        uint256 amount,
        address creator,
        uint256 deadline
    );

    constructor() Ownable(msg.sender) {}

    function createBounty(
        uint256 _amount,
        string memory _description,
        bool _isPublic,
        uint256 _deadline
    ) external payable {
        require(msg.value == _amount, "Incorrect bounty amount");
        require(_deadline > block.timestamp, "Invalid deadline");

        bounties[bountyCount] = Bounty({
            amount: _amount,
            description: _description,
            creator: msg.sender,
            isPublic: _isPublic,
            deadline: _deadline,
            isActive: true
        });

        emit BountyCreated(bountyCount, _amount, msg.sender, _deadline);
        bountyCount++;
    }
}