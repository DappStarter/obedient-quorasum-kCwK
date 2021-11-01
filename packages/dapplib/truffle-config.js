require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remind concert hunt narrow fresh tumble'; 
let testAccounts = [
"0x54166691d7bcc85689aee0d139fa8f1f74222197d8233519220999dcaf62bc50",
"0x7c20d0e2eac93bf722b32bb37de2cebc1cb0bb3c6fb737825264d9fbc18baefd",
"0xcdccdaf4453c77c223aa73fe466dc53220283d0abc511b3f76996d521e81e552",
"0xfc047609373959ee56180faa8450ba5b7d76d5a9fcd11241a7311f37b9c431c0",
"0xad553f8e2c4cf688df8b2da87c1138d71ae73d1d7846a0cc093096af42144c37",
"0x45cadec395f92496101c4a344c2950697f6602ab642c87ac92112da7ad363721",
"0xd743134f8ca9709f4dd136911aed68c2f8bbf34ad320773bc5eebb4aa29deec7",
"0x2c5c11e2766f539f4852e1b2367ce5d0dfa2875389713441ebba0a6b34cdf1fc",
"0xcb9cbff281b7c817ecab2be58d93ceac6004efe503f683194d8662a20ccd3fd4",
"0x241ce3c1f35a71ac92797f84843ec8e447752a251a74ebdc31fd2504772d877d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


