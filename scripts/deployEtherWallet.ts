import { ethers } from "hardhat";
import { EtherWallet__factory } from "../typechain-types";

async function main() {
  const contract = (await ethers.getContractFactory(
    "EtherWallet"
  )) as EtherWallet__factory;
  const deployedContract = await contract.deploy();
  console.log("contract address", deployedContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
