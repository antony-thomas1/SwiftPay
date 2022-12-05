
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/Ck4pSjJ_bs5ZFBhhPGf29YsWf2qKWtu_',
      accounts: ['1300cf9ad757b6a058cad7f97315e3cd75d7f4a5a82752e7210b763bbb9c9f47']
    }
  }

}