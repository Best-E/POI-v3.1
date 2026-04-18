export declare const abi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_priceFeed";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_feeCollector";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_ccipRouter";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [];
    readonly name: "ECDSAInvalidSignature";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "length";
        readonly type: "uint256";
    }];
    readonly name: "ECDSAInvalidSignatureLength";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "s";
        readonly type: "bytes32";
    }];
    readonly name: "ECDSAInvalidSignatureS";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "router";
        readonly type: "address";
    }];
    readonly name: "InvalidRouter";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidShortString";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "OwnableInvalidOwner";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "OwnableUnauthorizedAccount";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ReentrancyGuardReentrantCall";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "string";
        readonly name: "str";
        readonly type: "string";
    }];
    readonly name: "StringTooLong";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "oldOwner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "newOwner";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "string";
        readonly name: "identifier";
        readonly type: "string";
    }];
    readonly name: "AddressUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "EIP712DomainChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }];
    readonly name: "FeesWithdrawn";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "string";
        readonly name: "identifier";
        readonly type: "string";
    }, {
        readonly indexed: false;
        readonly internalType: "enum POIRegistry.IdentityType";
        readonly name: "idType";
        readonly type: "uint8";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "pricePaid";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint64";
        readonly name: "expiresAt";
        readonly type: "uint64";
    }];
    readonly name: "IdentityRegistered";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "previousOwner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "OwnershipTransferStarted";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "previousOwner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "OwnershipTransferred";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "string";
        readonly name: "identifier";
        readonly type: "string";
    }, {
        readonly indexed: false;
        readonly internalType: "uint64";
        readonly name: "newExpiresAt";
        readonly type: "uint64";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "pricePaid";
        readonly type: "uint256";
    }];
    readonly name: "Renewed";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "GRACE_PERIOD";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "RENEWAL_PERIOD";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "acceptOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "addressToRecord";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "string";
        readonly name: "identifier";
        readonly type: "string";
    }, {
        readonly internalType: "enum POIRegistry.IdentityType";
        readonly name: "idType";
        readonly type: "uint8";
    }, {
        readonly internalType: "bytes32";
        readonly name: "sigHash";
        readonly type: "bytes32";
    }, {
        readonly internalType: "uint64";
        readonly name: "registeredAt";
        readonly type: "uint64";
    }, {
        readonly internalType: "uint64";
        readonly name: "expiresAt";
        readonly type: "uint64";
    }, {
        readonly internalType: "uint256";
        readonly name: "pricePaidWei";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "socialProof";
        readonly type: "bytes";
    }, {
        readonly internalType: "bool";
        readonly name: "hasSocialProof";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "addressType";
    readonly outputs: readonly [{
        readonly internalType: "enum POIRegistry.IdentityType";
        readonly name: "";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "bytes32";
            readonly name: "messageId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint64";
            readonly name: "sourceChainSelector";
            readonly type: "uint64";
        }, {
            readonly internalType: "bytes";
            readonly name: "sender";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Client.EVMTokenAmount[]";
            readonly name: "destTokenAmounts";
            readonly type: "tuple[]";
        }];
        readonly internalType: "struct Client.Any2EVMMessage";
        readonly name: "message";
        readonly type: "tuple";
    }];
    readonly name: "ccipReceive";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "eip712Domain";
    readonly outputs: readonly [{
        readonly internalType: "bytes1";
        readonly name: "fields";
        readonly type: "bytes1";
    }, {
        readonly internalType: "string";
        readonly name: "name";
        readonly type: "string";
    }, {
        readonly internalType: "string";
        readonly name: "version";
        readonly type: "string";
    }, {
        readonly internalType: "uint256";
        readonly name: "chainId";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "verifyingContract";
        readonly type: "address";
    }, {
        readonly internalType: "bytes32";
        readonly name: "salt";
        readonly type: "bytes32";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "extensions";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "feeCollector";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "string";
        readonly name: "username";
        readonly type: "string";
    }];
    readonly name: "getPriceUSD";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "usdCents";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "string";
        readonly name: "username";
        readonly type: "string";
    }];
    readonly name: "getPriceWei";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getRouter";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly name: "identifierToAddress";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "nonces";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "owner";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "pendingOwner";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "priceFeed";
    readonly outputs: readonly [{
        readonly internalType: "contract AggregatorV3Interface";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "string";
        readonly name: "username";
        readonly type: "string";
    }, {
        readonly internalType: "bytes";
        readonly name: "sig";
        readonly type: "bytes";
    }];
    readonly name: "register";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "sig";
        readonly type: "bytes";
    }];
    readonly name: "registerAgent";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "string";
        readonly name: "identifier";
        readonly type: "string";
    }];
    readonly name: "renew";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "renounceOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly name: "reservedNames";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
    }];
    readonly name: "resolveAddress";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "identifier";
        readonly type: "string";
    }, {
        readonly internalType: "enum POIRegistry.IdentityType";
        readonly name: "idType";
        readonly type: "uint8";
    }, {
        readonly internalType: "uint64";
        readonly name: "registeredAt";
        readonly type: "uint64";
    }, {
        readonly internalType: "bool";
        readonly name: "expired";
        readonly type: "bool";
    }, {
        readonly internalType: "bool";
        readonly name: "hasSocialProof";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_feeCollector";
        readonly type: "address";
    }];
    readonly name: "setFeeCollector";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "nameHash";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bool";
        readonly name: "reserved";
        readonly type: "bool";
    }];
    readonly name: "setReserved";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes4";
        readonly name: "interfaceId";
        readonly type: "bytes4";
    }];
    readonly name: "supportsInterface";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "transferOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
    }, {
        readonly internalType: "string";
        readonly name: "claimedId";
        readonly type: "string";
    }];
    readonly name: "verifyPair";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "isMatch";
        readonly type: "bool";
    }, {
        readonly internalType: "string";
        readonly name: "actualId";
        readonly type: "string";
    }, {
        readonly internalType: "enum POIRegistry.IdentityType";
        readonly name: "idType";
        readonly type: "uint8";
    }, {
        readonly internalType: "bool";
        readonly name: "expired";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "withdraw";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}];
