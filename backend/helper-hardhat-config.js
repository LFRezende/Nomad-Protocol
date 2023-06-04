const { network } = require("hardhat");
const networkConfig = {
  5: {
    name: "goerli",
    addressOfMakersApp: "0xf4147bc3A1b7491e5588711918Be97E586169736", // After Deployed, we grab the address here.
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
