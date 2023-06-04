const { network, ethers } = require("hardhat");
const {
  networkConfig,
  developmentChains,
} = require("../helper-hardhat-config");

const { getNamedAccounts } = require("hardhat"); // Always import it for getting names
const { verify } = require("../utils/verify");

module.exports = async ({ getNamedAccounts, deployments }) => {
  // Getting the deployment data from deployments
  const { deploy, log } = deployments;
  // Getting accounts named to deployed
  const { deployer } = await getNamedAccounts();
  // Getting the chain id
  const chainId = network.config.chainId;

  const args = [];
  const makersApp = await deploy("MakersApp", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });

  // Verifying the Contract (IF IN DEVELOPMENT CHAINS, then we DON'T verify)
  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    await verify(makersApp.address, args);
  }
};

module.exports.tags = ["all", "MakersApp"];
