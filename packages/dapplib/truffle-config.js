require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave foot damp cost oval coil install office army gentle'; 
let testAccounts = [
"0x0ab45cc33040142ed973f350883174f43d85c16fd75554e4652f12e1114e11fe",
"0xe5b6abcb5f72645debcde760ef821a9361f3b7b4511fcc9fc4bd233de9b10fb5",
"0xf27033de43dafe77b5a51a9e85494a3ec04eccabc616fda4be742fa398a3482a",
"0x2cedbe361ff82c773823ea7b00b37462285221b677b4a4b41b28c4be3342988b",
"0x13b5e0637cdec2bb9178832c8e63fdbc927a9fd446c13358e455fb20baffc8d2",
"0x0aa437372de5119c3a02394cb8dc9f039daeb4a5fbeea70c779a273f9ec421ef",
"0x958527a47b06e3c3be4c12149fcce3e91a8b1cb8c9d4c563b781ededa7ffef95",
"0x260284c9a4471eb1878ee26c51bb8afb4ab7ff29f40d023750c9bae97b99d64c",
"0x276c0011643a691afe301b6b1b968e9fb23ccd85b2f587903edf73e3544c77a0",
"0xc86a10e88d13e583192438ae58a358dccb252f30a64a35f9ad95d76fa3e86d9d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

