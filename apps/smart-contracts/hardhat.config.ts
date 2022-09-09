import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-gas-reporter";

import * as dotenv from 'dotenv';

import { HardhatUserConfig, task } from 'hardhat/config';

dotenv.config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const INFURA_KEY = process.env.INFURA_ID;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  defaultNetwork: 'hardhat',

  networks: {
    hardhat: {
      chainId: 1337,
      mining: {
        auto: true,
        interval: 5000,
      },
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
      accounts: [`${PRIVATE_KEY}`],
    },
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
  },
  gasReporter: {
    enabled: true,
    currency: 'USD',
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  }
};

export default config;