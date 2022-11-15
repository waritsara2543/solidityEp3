import { ethers } from "hardhat";
import { TestContract__factory } from "../typechain-types";

async function main() {
  const [signer, signer2] = await ethers.getSigners();
  console.log("signer", signer.address);
  const constractAddress = "0x39966892FBC9cB54B46CD9f2295fB50A2C8e6BA0";
  // const TestContract = (await ethers.getContractFactory(
  //   "TestContract"
  // )) as TestContract__factory;
  // const deployedContract = await TestContract.deploy();
  // console.log("contract address", deployedContract.address);

  const contract = TestContract__factory.connect(constractAddress, signer);
  console.log(await contract.callMe(5));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
