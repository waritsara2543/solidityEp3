import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";

import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@nomiclabs/hardhat-ethers";

dotenv.config();

const getAccounts = () => {
  const arr = Object.entries(process.env);
  const privateKeys = arr
    .filter(([key, val]) => key.includes(`PRIVATE_KEY`))
    .map(([key, val]) => val || "");
  return privateKeys;
};

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.14",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.13",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.7",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts: getAccounts(),
    },
    kovan: {
      url: process.env.KOVAN_URL || "",
      accounts: getAccounts(),
    },
    kubchain_test: {
      url: `https://rpc-testnet.bitkubchain.io`,
      accounts: getAccounts(),
    },
    kubchain: {
      url: `https://rpc.bitkubchain.io`,
      accounts: getAccounts(),
    },
    bsc: {
      url: `https://bsc-dataseed.binance.org/`,
      accounts: getAccounts(),
    },
    bsc_test: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
      accounts: getAccounts(),
    },
    polygon_test: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/1PqRCjpoe18FDf-fKc6qPyVySXimFCQY`,
      accounts: getAccounts(),
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
