# 🚀 GIWA Hardhat Boilerplate

[![Hardhat](https://img.shields.io/badge/Hardhat-2C2C2C?logo=ethereum&logoColor=fff)](https://hardhat.org/)
[![Solidity](https://img.shields.io/badge/Solidity-363636?logo=solidity&logoColor=white)](https://soliditylang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)

---

## 📦 Install & Setup

Clone repository:

```bash
git clone https://github.com/De4i/giwa-hardhat.git
cd giwa-hardhat
npm install
Jika Hardhat belum terpasang di project:
npm install --save-dev hardhat
npm install --save-dev @nomicfoundation/hardhat-toolbox dotenv

Salin file .env.example menjadi .env:
cp .env.example .env
nano .env
isi dengan config seperti ini:
PRIVATE_KEY=0x_your_private_key
RPC_URL=https://sepolia-rpc.giwa.io

npx hardhat compile
npx hardhat test
npx hardhat run scripts/deploy.js --network giwa
