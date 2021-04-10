//import Web3 from 'web3';

const web3 = require('web3');
const rpcURl = "HTTP://127.0.0.1:7545";

const Web3 = new web3(rpcURl); //new live connection 


// const account = "0x08b08782d50a33164b9471ce39A00E522f261c7B";
// Web3.eth.getBalance(account,(err,wei)=>{

//     console.log(wei);
//     balance = Web3.utils.fromWei(wei,'ether');
//     console.log(balance);
// }

// );

//-------------------------------------------------

const contractABI= [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newExpense",
				"type": "uint256"
			}
		],
		"name": "addExpense",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newIncome",
				"type": "uint256"
			}
		],
		"name": "addIncome",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "calculateBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalExpense",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalIncome",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];


const contractAddress = "0x2AC18fe7Db18E310b713e278bE9b257f58df369a";

const contract1 = Web3.eth.Contract(contractABI, contractAddress);

contract1.methods.calculateBalance().call();
contract1.methods.addIncome(1000).send();

contract1.methods.addExpense().send();