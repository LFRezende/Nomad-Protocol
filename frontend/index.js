import { ethers } from "./ethers-5.1.esm.min.js";

let connectButton = document.getElementById("connectWallet");

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
