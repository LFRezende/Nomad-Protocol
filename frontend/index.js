import { ethers } from "./ethers-5.1.esm.min.js";
import { goerliAddress, abi } from "./constants.js";

let connectButton = document.getElementById("connectWallet");
let factText = document.getElementById("checkText");
let factButton = document.getElementById("factButton");

connectButton.onclick = connect;
factButton.onclick = isFakeCheck;

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

async function isFakeCheck() {
  console.log("It's ALIVE!!!");
}

//
// async function addTextJs() {} -> Hidden addition via Proper Interface for Publishers.
// async function addSourceJs() {} -> Hidden addition via Remix -> Only the ADM may do so
