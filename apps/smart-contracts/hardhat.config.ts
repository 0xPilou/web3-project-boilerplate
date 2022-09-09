import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-abi-exporter";
import "hardhat-contract-sizer";
import "hardhat-deploy";
import "hardhat-gas-reporter";

import * as dotenv from "dotenv";
import { HardhatUserConfig, task } from "hardhat/config";

dotenv.config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const ALCHEMY_KEY = process.env.ALCHEMY_KEY;
const RINKEBY_ALCHEMY_KEY = process.env.RINKEBY_ALCHEMY_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",

  networks: {
    hardhat: {
      mining: {
        auto: true,
        interval: 5000,
      },
    },
    mainnet: {
      url: `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`,
      accounts: [`${PRIVATE_KEY}`],
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${RINKEBY_ALCHEMY_KEY}`,
      accounts: [`${PRIVATE_KEY}`],
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      saveDeployments: true,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  paths: {
    deployments: "../../packages/web3-config/deployments",
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  typechain: {
    outDir: "../../packages/web3-config/typechain",
    target: "ethers-v5",
    alwaysGenerateOverloads: true,
  },
  abiExporter: {
    path: "./abi",
    clear: true,
    flat: true,
    spacing: 2,
    runOnCompile: true,
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    strict: true,
  },
};

export default config;
