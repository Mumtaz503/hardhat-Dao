require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require('hardhat-gas-reporter');
require("hardhat-deploy");
require('@nomicfoundation/hardhat-ethers');
require('hardhat-deploy-ethers');
require('dotenv').config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      // forking: {
      //   url: MAINNET_RPC_URL,
      // },
      blockConfirmations: 1,
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
      blockConfirmations: 6,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    player: {
      default: 1,
    },
    player2: {
      default: 2,
    },
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY,
    },
  },
  gasReporter: {
    enabled: false,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    coinmarketcap: COINMARKETCAP_API_KEY,
    token: "ETH",
  },
  mocha: {
    timeout: 500000,
  },
  solidity: {
    compilers: [
      {
        version: "0.8.18",
      },
      {
        version: "0.8.20",
      },
      {
        version: "0.8.4",
      },
      {
        version: "0.4.19",
      },
    ],
  },
};