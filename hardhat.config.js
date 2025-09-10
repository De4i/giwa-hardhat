require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { PRIVATE_KEY, RPC_URL, EXPLORER_BASE } = process.env;

module.exports = {
  solidity: "0.8.20",
  networks: {
    giwa: {
      url: RPC_URL || "https://sepolia-rpc.giwa.io",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
      chainId: 91342,
    },
  },
  etherscan: {
    customChains: [
      {
        network: "giwa",
        chainId: 91342,
        urls: {
          apiURL: `${EXPLORER_BASE || "https://sepolia-explorer.giwa.io"}/api`,
          browserURL: EXPLORER_BASE || "https://sepolia-explorer.giwa.io",
        },
      },
    ],
    apiKey: {
      giwa: "abc",
    },
  },
};
