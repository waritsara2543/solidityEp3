import { ethers } from "hardhat";
import { MAHToken__factory } from "../typechain-types";

async function main() {
  const [signer] = await ethers.getSigners();
  const Tokens = (await ethers.getContractFactory(
    "MAHToken"
  )) as MAHToken__factory;
  const token = await Tokens.deploy(100000);
  console.log("token address", token.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
