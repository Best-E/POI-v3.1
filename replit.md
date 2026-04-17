# POI v1 — Proof of Identity

## Overview
A blockchain-based identity registry system deployed on Binance Smart Chain (BSC). It maps wallet addresses to human-readable identifiers (@usernames for humans, #agentID for agents) to prevent clipboard hijacking and accidental mis-transfers.

## Architecture

### `/contracts`
- Smart contracts written in Solidity (`0.8.28`)
- Framework: Hardhat
- Libraries: OpenZeppelin (Ownable2Step, ReentrancyGuard, ECDSA, EIP712), Chainlink (AggregatorV3 price feeds, CCIP cross-chain)
- Main contract: `contracts/contracts/POIRegistry.sol`
- Deployment scripts in `contracts/scripts/deploy.ts`
- Tests in `contracts/test/POIRegistry.test.ts`

### `/sdk`
- TypeScript SDK for interacting with the deployed registry contract
- Uses `viem` for blockchain interactions
- Entry: `sdk/src/index.ts` (exports `createRegistry`, `verify`)
- ABI file: `sdk/src/abi.ts` (generated from compiled artifacts)
- Build output: `sdk/dist/`

## Setup & Configuration
- Copy `.env.example` to `.env` and fill in values:
  - `BSC_RPC` / `BSC_TESTNET_RPC` — RPC endpoints
  - `PRIVATE_KEY` — deployer wallet private key
  - `BSCSCAN_API_KEY` — for contract verification
  - `PRICE_FEED_BNB_USD` — Chainlink BNB/USD price feed address
  - `FEE_COLLECTOR` — address to collect fees
  - `CCIP_ROUTER_BSC` — Chainlink CCIP router address on BSC

## Key Commands
```bash
# Compile contracts
cd contracts && npx hardhat compile

# Run tests
cd contracts && npx hardhat test

# Deploy to BSC testnet
cd contracts && npx hardhat run scripts/deploy.ts --network bscTestnet

# Deploy to BSC mainnet
cd contracts && npx hardhat run scripts/deploy.ts --network bsc

# Build SDK
cd sdk && npx tsc
```

## Important Notes
- Solidity version bumped from `0.8.20` to `0.8.28` for OZ v5 + Cancun EVM compatibility
- `@chainlink/contracts-ccip` pinned to `1.4.0` (v1.5.0 requires Node 22+)
- `@chainlink/contracts` pinned to `1.2.0` for compatibility
- EVM target set to `cancun` in hardhat config (required for OZ v5 `Bytes.sol`)
- `AggregatorV3Interface` import path updated to `shared/interfaces/` for chainlink@1.2.0
- `match` keyword is reserved in Solidity 0.8.28 — renamed to `isMatch` in `verifyPair`
- `getPriceUSD`/`getPriceWei` refactored to have internal `memory` variants and public `calldata` wrappers

## Workflow
The "Start application" workflow compiles both contracts and the SDK to verify everything builds successfully.
