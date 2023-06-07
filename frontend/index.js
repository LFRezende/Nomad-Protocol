import { ethers } from "./ethers-5.1.esm.min.js";
import { goerliAddress, abi } from "./constants.js";

let connectButton = document.getElementById("connectWallet");
let factButton = document.getElementById("factButton");

connectButton.onclick = connect;

async function connect() {
  if (typeof window.ethereum != "undefined") {
    console.log("There is an EVM-Based Wallet.");
    await window.ethereum.request({ method: "eth_requestAccounts" });
    connectButton.innerHTML = "Connected";
  } else {
    noMM.innerHTML = "Install Metamask to proceed.";
    console.log("No EVM-Based Wallet.");
  }
}

async function isFakeCheck() {}

//
// async function addTextJs() {} -> Hidden addition via Proper Interface for Publishers.
// async function addSourceJs() {} -> Hidden addition via Remix -> Only the ADM may do so
