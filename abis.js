var staking_escrow_address = "0xeEB9a5d5970A5f06Bcb0D5C0E42d4EFD5D2B8Fdb";
var token_address = "0xa6596Ba202f456c87aD4C745c6A35600A7fC83F9";

var token_abi = [
            {
                "constant": true,
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "name": "addedValue",
                        "type": "uint256"
                    }
                ],
                "name": "increaseAllowance",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "name": "subtractedValue",
                        "type": "uint256"
                    }
                ],
                "name": "decreaseAllowance",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    },
                    {
                        "name": "_extraData",
                        "type": "bytes"
                    }
                ],
                "name": "approveAndCall",
                "outputs": [
                    {
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "name": "_totalSupply",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            }
        ];
var staking_escrow_abi = [
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_reStake",
                        "type": "bool"
                    }
                ],
                "name": "setReStake",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_staker",
                        "type": "address"
                    }
                ],
                "name": "getSubStakesLength",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getCurrentPeriod",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint16"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "currentMintingPeriod",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint16"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "mint",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_staker",
                        "type": "address"
                    }
                ],
                "name": "getAllTokens",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "workLock",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "MAX_SUB_STAKES",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint16"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "withdraw",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_adjudicator",
                        "type": "address"
                    }
                ],
                "name": "setAdjudicator",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "minLockedPeriods",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint16"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_workLock",
                        "type": "address"
                    }
                ],
                "name": "setWorkLock",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "secondsPerPeriod",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint32"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "burn",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_staker",
                        "type": "address"
                    }
                ],
                "name": "getLastActivePeriod",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint16"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_staker",
                        "type": "address"
                    },
                    {
                        "name": "_period",
                        "type": "uint16"
                    }
                ],
                "name": "findIndexOfPastDowntime",
                "outputs": [
                    {
                        "name": "index",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_periods",
                        "type": "uint16"
                    },
                    {
                        "name": "_startIndex",
                        "type": "uint256"
                    },
                    {
                        "name": "_maxStakers",
                        "type": "uint256"
                    }
                ],
                "name": "getActiveStakers",
                "outputs": [
                    {
                        "name": "allLockedTokens",
                        "type": "uint256"
                    },
                    {
                        "name": "activeStakers",
                        "type": "uint256[2][]"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_staker",
                        "type": "address"
                    },
                    {
                        "name": "_measureWork",
                        "type": "bool"
                    }
                ],
                "name": "setWorkMeasurement",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "previousTarget",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_staker",
                        "type": "address"
                    },
                    {
                        "name": "_index",
                        "type": "uint256"
                    }
                ],
                "name": "getLastPeriodOfSubStake",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint16"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "stakerInfo",
                "outputs": [
                    {
                        "name": "value",
                        "type": "uint256"
                    },
                    {
                        "name": "confirmedPeriod1",
                        "type": "uint16"
                    },
                    {
                        "name": "confirmedPeriod2",
                        "type": "uint16"
                    },
                    {
                        "name": "reStakeDisabled",
                        "type": "bool"
                    },
                    {
                        "name": "lockReStakeUntilPeriod",
                        "type": "uint16"
                    },
                    {
                        "name": "worker",
                        "type": "address"
                    },
                    {
                        "name": "workerStartPeriod",
                        "type": "uint16"
                    },
                    {
                        "name": "lastActivePeriod",
                        "type": "uint16"
                    },
                    {
                        "name": "measureWork",
                        "type": "bool"
                    },
                    {
                        "name": "completedWork",
                        "type": "uint256"
                    },
                    {
                        "name": "reservedSlot1",
                        "type": "uint256"
                    },
                    {
                        "name": "reservedSlot2",
                        "type": "uint256"
                    },
                    {
                        "name": "reservedSlot3",
                        "type": "uint256"
                    },
                    {
                        "name": "reservedSlot4",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_staker",
                        "type": "address"
                    },
                    {
                        "name": "_index",
                        "type": "uint256"
                    }
                ],
                "name": "getSubStakeInfo",
                "outputs": [
                    {
                        "name": "firstPeriod",
                        "type": "uint16"
                    },
                    {
                        "name": "lastPeriod",
                        "type": "uint16"
                    },
                    {
                        "name": "periods",
                        "type": "uint16"
                    },
                    {
                        "name": "lockedValue",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "adjudicator",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_staker",
                        "type": "address"
                    },
                    {
                        "name": "_periods",
                        "type": "uint16"
                    }
                ],
                "name": "getLockedTokensInPast",
                "outputs": [
                    {
                        "name": "lockedValue",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getReservedReward",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "workerToStaker",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "maxAllowableLockedTokens",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "confirmActivity",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_value",
                        "type": "uint256"
                    },
                    {
                        "name": "_periods",
                        "type": "uint16"
                    }
                ],
                "name": "deposit",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_staker",
                        "type": "address"
                    },
                    {
                        "name": "_periods",
                        "type": "uint16"
                    }
                ],
                "name": "getLockedTokens",
                "outputs": [
                    {
                        "name": "lockedValue",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_value",
                        "type": "uint256"
                    },
                    {
                        "name": "_periods",
                        "type": "uint16"
                    }
                ],
                "name": "lock",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "miningCoefficient",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "minAllowableLockedTokens",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "isOwner",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    },
                    {
                        "name": "_tokenContract",
                        "type": "address"
                    },
                    {
                        "name": "",
                        "type": "bytes"
                    }
                ],
                "name": "receiveApproval",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_staker",
                        "type": "address"
                    },
                    {
                        "name": "_index",
                        "type": "uint256"
                    }
                ],
                "name": "getPastDowntime",
                "outputs": [
                    {
                        "name": "startPeriod",
                        "type": "uint16"
                    },
                    {
                        "name": "endPeriod",
                        "type": "uint16"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_staker",
                        "type": "address"
                    }
                ],
                "name": "getPastDowntimeLength",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_staker",
                        "type": "address"
                    }
                ],
                "name": "getWorkerFromStaker",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_staker",
                        "type": "address"
                    },
                    {
                        "name": "_penalty",
                        "type": "uint256"
                    },
                    {
                        "name": "_investigator",
                        "type": "address"
                    },
                    {
                        "name": "_reward",
                        "type": "uint256"
                    }
                ],
                "name": "slashStaker",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getStakersLength",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "lockedPeriodsCoefficient",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "policyManager",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_policyManager",
                        "type": "address"
                    }
                ],
                "name": "setPolicyManager",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "EMPTY_CONFIRMED_PERIOD",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint16"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "currentSupply1",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_index",
                        "type": "uint256"
                    },
                    {
                        "name": "_periods",
                        "type": "uint16"
                    }
                ],
                "name": "prolongStake",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_testTarget",
                        "type": "address"
                    }
                ],
                "name": "verifyState",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_worker",
                        "type": "address"
                    }
                ],
                "name": "setWorker",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_staker",
                        "type": "address"
                    }
                ],
                "name": "isReStakeLocked",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_worker",
                        "type": "address"
                    }
                ],
                "name": "getStakerFromWorker",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "minWorkerPeriods",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint16"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_staker",
                        "type": "address"
                    }
                ],
                "name": "getCompletedWork",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_index",
                        "type": "uint256"
                    },
                    {
                        "name": "_newValue",
                        "type": "uint256"
                    },
                    {
                        "name": "_periods",
                        "type": "uint16"
                    }
                ],
                "name": "divideStake",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "secretHash",
                "outputs": [
                    {
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_staker",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    },
                    {
                        "name": "_periods",
                        "type": "uint16"
                    }
                ],
                "name": "deposit",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "target",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "isTestContract",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "isUpgrade",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_target",
                        "type": "address"
                    }
                ],
                "name": "finishUpgrade",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_lockReStakeUntilPeriod",
                        "type": "uint16"
                    }
                ],
                "name": "lockReStake",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "uint16"
                    }
                ],
                "name": "lockedPerPeriod",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "currentSupply2",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "token",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "stakers",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_reservedReward",
                        "type": "uint256"
                    }
                ],
                "name": "initialize",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "rewardedPeriods",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint16"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "name": "_token",
                        "type": "address"
                    },
                    {
                        "name": "_hoursPerPeriod",
                        "type": "uint32"
                    },
                    {
                        "name": "_miningCoefficient",
                        "type": "uint256"
                    },
                    {
                        "name": "_lockedPeriodsCoefficient",
                        "type": "uint256"
                    },
                    {
                        "name": "_rewardedPeriods",
                        "type": "uint16"
                    },
                    {
                        "name": "_minLockedPeriods",
                        "type": "uint16"
                    },
                    {
                        "name": "_minAllowableLockedTokens",
                        "type": "uint256"
                    },
                    {
                        "name": "_maxAllowableLockedTokens",
                        "type": "uint256"
                    },
                    {
                        "name": "_minWorkerPeriods",
                        "type": "uint16"
                    },
                    {
                        "name": "_isTestContract",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "staker",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "periods",
                        "type": "uint16"
                    }
                ],
                "name": "Deposited",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "staker",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "firstPeriod",
                        "type": "uint16"
                    },
                    {
                        "indexed": false,
                        "name": "periods",
                        "type": "uint16"
                    }
                ],
                "name": "Locked",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "staker",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "oldValue",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "lastPeriod",
                        "type": "uint16"
                    },
                    {
                        "indexed": false,
                        "name": "newValue",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "periods",
                        "type": "uint16"
                    }
                ],
                "name": "Divided",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "staker",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Withdrawn",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "staker",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "period",
                        "type": "uint16"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "ActivityConfirmed",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "staker",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "period",
                        "type": "uint16"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Mined",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "staker",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "penalty",
                        "type": "uint256"
                    },
                    {
                        "indexed": true,
                        "name": "investigator",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "reward",
                        "type": "uint256"
                    }
                ],
                "name": "Slashed",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "staker",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "reStake",
                        "type": "bool"
                    }
                ],
                "name": "ReStakeSet",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "staker",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "lockUntilPeriod",
                        "type": "uint16"
                    }
                ],
                "name": "ReStakeLocked",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "staker",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "worker",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "startPeriod",
                        "type": "uint16"
                    }
                ],
                "name": "WorkerSet",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "staker",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "measureWork",
                        "type": "bool"
                    }
                ],
                "name": "WorkMeasurementSet",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "sender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Burnt",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "reservedReward",
                        "type": "uint256"
                    }
                ],
                "name": "Initialized",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "testTarget",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "sender",
                        "type": "address"
                    }
                ],
                "name": "StateVerified",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "target",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "sender",
                        "type": "address"
                    }
                ],
                "name": "UpgradeFinished",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            }
        ];
