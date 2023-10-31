import { expect } from "chai";
import { ethers } from "hardhat";
import { Signer } from "ethers";
import { YourContract } from "../typechain-types";

describe("YourContract", function () {
  let owner: Signer;
  let player: Signer;
  let contract: YourContract;

  before(async () => {
    [owner, player] = await ethers.getSigners();
    const yourContractFactory = await ethers.getContractFactory("YourContract");
    contract = (await yourContractFactory.deploy()) as YourContract;
    await contract.deployed();
  });

  it("should deploy with the correct owner", async () => {
    const contractOwner = await contract.owner();
    expect(contractOwner).to.equal(ethers.constants.AddressZero);
  });

  it("should allow transferring ownership", async () => {
    const newOwner = await player.getAddress();
    await contract.connect(owner).transferOwnership(newOwner);
    const contractOwner = await contract.owner();
    expect(contractOwner).to.equal(newOwner);
  });

  it("should allow paying greens fee", async () => {
    await contract.connect(player).payGreensFee({ value: ethers.utils.parseEther("1") });
    const greensFeePaid = await contract.greensFeePaid();
    expect(greensFeePaid).to.equal(true);
  });

  it("should not allow paying greens fee multiple times", async () => {
    await expect(contract.connect(player).payGreensFee({ value: ethers.utils.parseEther("0.01") })).to.be.revertedWith(
      "Greens fee already paid"
    );
  });

  it("should allow playing a putt after paying greens fee", async () => {
    await contract.connect(player).putt({ value: ethers.utils.parseEther("0.02") });
    const putts = await contract.puttsPlayed(await player.getAddress());
    expect(putts).to.equal(1);
  });

  it("should not allow playing a putt without paying greens fee", async () => {
    const freshContract = (await (await ethers.getContractFactory("YourContract")).deploy()) as YourContract;
    await freshContract.deployed();
    await expect(freshContract.connect(player).putt({ value: ethers.utils.parseEther("0.02") })).to.be.revertedWith(
      "Greens fee not paid"
    );
  });

  it("should not allow playing a putt with less than 0.01 Ether", async () => {
    await expect(contract.connect(player).putt({ value: ethers.utils.parseEther("0.009") })).to.be.revertedWith(
      "SEND SOME ETH!"
    );
  });

  it("should return correct score for a player", async () => {
    const score = await contract.score(await player.getAddress());
    expect(score).to.equal("PUTTS TOO LOW!");
  });
});
