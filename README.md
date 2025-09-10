
git clone https://github.com/De4i/giwa-hardhat.git
cd giwa-hardhat
npm install
npm install --save-dev hardhat
npm install --save-dev @nomicfoundation/hardhat-toolbox dotenv

Copy file .env.example ke .env:
cp .env.example .env


npx hardhat compile
npx hardhat test

npx hardhat run scripts/deploy.js --network giwa
