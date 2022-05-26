require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')
const { abi, evm } = require('./compile')

const provider = new HDWalletProvider(
    process.env.mnemonic,
    process.env.rinkebyEndpoint
)

const web3 = new Web3(provider)

const deploy = async() => {
    const accounts = await web3.eth.getAccounts()
    console.log('account available: ',accounts)

    const result = await new web3.eth.Contract(abi)
        .deploy({data: evm.bytecode.object, arguments: ['Hi there!']})
        .send({from: accounts[0], gas: '1000000'})
    
    console.log('deploy result: ',result)
    console.log('deployed contract address: ',result.options.address) // 0xA022F5865F75B41AB13e7ec6D10737918e584135  //0x8C4eb414c6276a1518c36B70E65C73d73c5CCafD
    provider.engine.stop()
}

deploy()