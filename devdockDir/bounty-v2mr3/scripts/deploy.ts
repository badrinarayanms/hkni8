import { ethers } from "hardhat";

async function main() {
  const BountyContract = await ethers.getContractFactory("BountyContract");
  const bountyContract = await BountyContract.deploy();

  await bountyContract.waitForDeployment();

  console.log(`BountyContract deployed to ${await bountyContract.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});