import logo from './logo.svg';
import './App.css';

import React from 'react';
import Web3 from 'web3';
import Web3Modal from "web3modal";
import WalletConnect from "@walletconnect/client";
import WalletConnectProvider from '@walletconnect/web3-provider'
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");

const INFURA_ID = '460f40a260564ac4a4f4b3fffb032dad'

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      rpc : {
        137: "https://matic-mainnet.chainstacklabs.com"
      },
      infuraId: INFURA_ID, // required
    },
  },
};

function App() {

  return (
    <div className="App">

      <button onClick={async () => {
        const web3Modal = new Web3Modal({
          network: "matic",
          cacheProvider: false,
          providerOptions,
        });
        const provider = await web3Modal.connect();
        const web3 = new Web3(provider);

        const accounts = await web3.eth.getAccounts();
        console.log(accounts);
      }}>Connect</button>
    </div>


  );
}

export default App;
