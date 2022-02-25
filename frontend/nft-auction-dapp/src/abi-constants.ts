export const ourSmartContractABI = [
    {
        "inputs": [],
        "name": "getText",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "textToBeSet",
                "type": "string"
            }
        ],
        "name": "setText",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]