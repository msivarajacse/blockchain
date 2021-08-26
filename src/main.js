const {Blockchain,Transaction}=require('./blockchain');
const EC=require('elliptic').ec;
const ec=new EC('secp256k1');

const myKey=ec.keyFromPrivate('3b14d248ee2da6333104ff32d1a176c3a29e462c825ded58094c2bc7ef15657b');
const myWalletAddress=myKey.getPublic('hex');


let Bcoin=new Blockchain();

const tx1=new Transaction(myWalletAddress,'address2',500);
tx1.signTransaction(myKey);
Bcoin.addTransaction(tx1);

// Mine block
Bcoin.minePendingTransactions(myWalletAddress);

console.log();
console.log('\n Balance of sivaraja is',Bcoin.getBalanceOfAddress(myWalletAddress));