// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Good morning 👋");

  console.log("Deploying contract...");
  await greeter.waitForDeployment();   // ✅ ethers v6

  console.log("Greeter deployed to:", await greeter.getAddress());
  console.log("Check on explorer:", `${process.env.EXPLORER_BASE}/address/${await greeter.getAddress()}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
