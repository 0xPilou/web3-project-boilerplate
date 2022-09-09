/*
npx hardhat run --network localhost deploy/deploy.js
*/

async function main() {

    console.log("");
    console.log("-------------------------- INITIATING DEPLOYMENT ------------------------------");
    console.log("");
  
  
    /* Array Contract Deployment */
    Contract = await ethers.getContractFactory("MyContract");
    contract = await Contract.deploy();
  
    
  
    console.log("`MyContract` contract deployed at address:", contract.address);
  
    console.log("");
    console.log("--------------------------- DEPLOYMENT COMPLETED ------------------------------");
    console.log("");
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });