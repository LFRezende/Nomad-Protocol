const { network } = require("hardhat");
const networkConfig = {
  5: {
    name: "goerli",
    addressOfMakersApp: "0x8c82b77894f9a1d7bc341af974b545e59428fa67", // After Deployed, we grab the address here.
  },
  137: {
    name: "polygon",
    addressOfMakersApp: "",
  },
  31337: {
    name: "hardhat",
    addressOfMakersApp: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  },
};

const developmentChains = ["hardhat", "localhost"];

module.exports = {
  networkConfig,
  developmentChains,
};
