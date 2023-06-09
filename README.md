# Makers App - Content Verifier with Blockchain
## Makers Challenge Criteria
### Fetch data from an API
The project does this in two different ways:
- First, we have a .env file (obviously not pushed into gitHub) that fetches the ETHERSCAN_API_KEY to verify the Smart Contract and access Etherscan (a block explorer, kinda like google but for blockchain).;
- Second, the framework used (Hardhat) fetches the required APIs for deployment via the "hardhat-deploy" packaged, installed via the command `yarn add --dev hardhat-deploy`.

### Have a database

Indeed we have - it is the Blockchain!
In fact, the Goerli Testnet is a decentralized server. 
All of the transactions may be seen in this link:

https://goerli.etherscan.io/address/0x8c82b77894f9a1d7bc341af974b545e59428fa67

This database stores the accounts and names of credited sources appended by an Administrator, and they append reliable information to the chain, readily accessible for auditability - all of these are stored in the database.

### Have an API to communicate with your database

Indeed:
- We fetch manually the etherscan_api_key for communication with the block explorer for verification.
- The frontend connects to the server side via the Ethers.js library, which fetches the APIs of Goerli Testnet for interaction with the Smart Contract.
- Hardhat access the deployments through built-in protocols to fetch the correspondent APIs as well.

### Have a simple UI and a way to interact with it

The frontend folder has all of the necessary UI coded.

### Deploy: put your code to work online so that other people can use it

The site is deployed on Netlify (https://peppy-cheesecake-f1cd4f.netlify.app/) - though, for purely aesthetic reasons, the free version of it is poorly optimized, so the aesthetics may suffer a bit. The website is still 100% operational, though.

### Record your Demo

The Demo can be accessed here: https://www.loom.com/share/052cdf5e6e664e2ab932fd8c54f47b9d


 
