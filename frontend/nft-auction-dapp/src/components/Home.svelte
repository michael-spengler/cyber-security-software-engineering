<script>
  import { ethers } from "https://cdn.skypack.dev/ethers";
  import { ourSmartContractABI } from "../abi-constants.ts";

  let walletAddress = "";
  let textToBeSet = "";
  async function connect() {
    if (typeof window.ethereum === "undefined") {
      alert(
        "You need a browserwallet to interact with this DApp. Install metamask.io or use brave.com"
      );
    } else {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      walletAddress = accounts[0];
    }
  }

  async function writeTextOntoBlockchain() {
    alert(`we write the following text onto the blockchain: ${textToBeSet}`);

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const ourSmartContractAddress =
      "0x7af0c875cee3a544bb07ff456a7c4611ef34435a";

    const ourSmartContract = new ethers.Contract(
      ourSmartContractAddress,
      ourSmartContractABI,
      provider
    );

    const textFromBlockchain = await ourSmartContract.getText();

    alert(
      `the text from the blockchain before the update is: ${textFromBlockchain}`
    );

    const signer = provider.getSigner();
    const ourSmartContractWithSigner = ourSmartContract.connect(signer);

    await ourSmartContractWithSigner.setText(textToBeSet);

    alert("Please check etherscan to see what happens");
  }
</script>

<h1>NFT Auction DApp</h1>

<button on:click={connect}> Connect Via Metamask </button>

{#if walletAddress !== ""}
  <p><br /></p>
  You are connected to the blockchain using the wallet: {walletAddress}
  <p><br /></p>
  <p><br /></p>

  <input type="text" bind:value={textToBeSet} />
  <p><br /></p>
  <button on:click={writeTextOntoBlockchain}>
    Write Text Onto Blockchain
  </button>
{/if}

<style>
  h1 {
    color: turquoise;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
