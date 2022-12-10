import logo from './logo.svg';
import './App.css';

import React from 'react';
import Web3 from 'web3';
import Web3Modal from "web3modal";
import WalletConnectProvider from '@walletconnect/web3-provider'

const INFURA_ID = process.env.REACT_APP_INFURA_ID;

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      rpc : {
        137: "https://matic-mainnet.chainstacklabs.com"
      },
      infuraId: "", // required
    },
  },
};

function App() {
  const [account, setAccount] = React.useState(undefined);

  return (
    <div className="App">

      {!account ? (
        <button onClick={async () => {
          const web3Modal = new Web3Modal({
            network: "matic",
            cacheProvider: false,
            providerOptions,
          });
          const provider = await web3Modal.connect();
          const web3 = new Web3(provider);
  
          const accounts = await web3.eth.getAccounts();
          setAccount(accounts[0]);
          console.log(accounts);
        }}>Connect</button>
      ) : (
        <button onClick={async () => {
          setAccount(undefined);
        }}>Disconnect</button>
      )}
      {/* display account address if connected, otherwise display not connected */}
      {account ? <div>Connected: {account}</div> : <div>Not connected</div>}
    </div>


  );
}

export default App;
