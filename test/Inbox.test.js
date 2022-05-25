const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const {bytecode, interface} = require('../compile')

const web3 = new Web3(ganache.provider())


//the contract inbox
let inbox

let accounts

beforeEach(async () => {
    //get a list of all accounts from ganache
    // web3.eth.getAccounts()
    //     .then(accounts => {
    //         console.log('account available: ',accounts)
    //     })
    accounts = await web3.eth.getAccounts()
    console.log('account available: ',accounts)

    //use the first account to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: ['Hi there!']})
        .send({from: accounts[0], gas: '1000000'})

})

describe('Inbox', () => {
    it('should deploy a contract', () => {
        console.log('INBOX CONTRACT', inbox)
    })

    it('test the address is exist', () => {
        assert.ok(inbox.options.address)
    })

    it('test the construction', async () => {
        const message = await inbox.methods.message().call()
        assert.equal(message, 'Hi there!')
    })

    it('test the set message', async () => {
        //adjust the contract mean we need to send a transaction
        const result = await inbox.methods.setMessage('Hello').send({from: accounts[1]})
        console.log('result: ',result)
        const message = await inbox.methods.message().call()
        assert.equal(message, 'Hello')
    })
})

/*
// MOCHA TESTING  HEAD FIRST
class Car {
	park() {
		return 'stopped'
	}
	drive() {
		return 'vroom'
	}
}

let car

// before run each it block, run this function
beforeEach(() => {
	car = new Car()
})


// describe the 'Car' test
describe('Car Test', () => {
	it('can park', () => {
		assert.equal(car.park(), 'stopped')
	})
	it('can drive', () => {
		assert.equal(car.drive(), 'vroom')
	})
})
*/
