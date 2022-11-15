import { ethers } from "hardhat";
import { MAHToken__factory } from "../typechain-types";

async function main() {
  const [signer, signer2] = await ethers.getSigners();
  const MAHToken = "0xAfCCc4d2861d4A3ED910B3cEFbbC88171FAf7B1d";
  const constractAddress = "0xb8611D18332828512591e4489754e7074A3f204b";
  const tokens = MAHToken__factory.connect(MAHToken, signer);

  const checkPerson = await tokens
    .connect(signer)
    .approve(signer2.address, ethers.utils.parseUnits("50", "ether"));
  console.log("checkPerson", checkPerson);

  const transfer = await tokens
    .connect(signer2)
    .transferFrom(
      signer.address,
      constractAddress,
      ethers.utils.parseUnits("50", "ether")
    );
  console.log("transfer", transfer);

  const getBalance = await tokens.balanceOf(constractAddress);
  console.log("getBalance", ethers.utils.formatEther(getBalance));
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
