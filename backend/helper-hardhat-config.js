const { network } = require("hardhat");
const networkConfig = {
  5: {
    name: "goerli",
    addressOfMakersApp: "0x248A81808c2A67a19Db4E0CFd65050c4B1537c59", // After Deployed, we grab the address here.
  },
  137: {
    name: "polygon",
    addressOfMakersApp: "",
  },
};

const developmentChains = ["hardhat", "localhost"];

module.exports = {
  networkConfig,
  developmentChains,
};
