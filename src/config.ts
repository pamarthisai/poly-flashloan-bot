import { ERC20Token } from "./constants/addresses";
import { ITrade } from "./interfaces/trade";
import { getBigNumber } from "./utils";

export const renderInterval = 1 * 1000;

// interval of price check (ms)
export const interval = 4 * 1000;
export const loanAmount = 1000;
export const diffPercentage = 0.01;

//export const chainId = 1;// Ethereum
//export const chainId = 56;// Binance Smart Chain
export const chainId = 137; // Polygon

export const explorerURL = "https://polygonscan.com";

export const tradingRoutes: ITrade[] = [
  {
    path: [ERC20Token.DAI, ERC20Token.WETH, ERC20Token.DAI],
    protocols: [2, 0],
    amountIn: getBigNumber(loanAmount, ERC20Token.DAI.decimals),
  },
  {
    path: [ERC20Token.DAI, ERC20Token.USDC, ERC20Token.DAI],
    protocols: [2, 0],
    amountIn: getBigNumber(loanAmount, ERC20Token.DAI.decimals),
  },
  {
    path: [ERC20Token.DAI, ERC20Token.USDT, ERC20Token.DAI],
    protocols: [2, 0],
    amountIn: getBigNumber(loanAmount, ERC20Token.DAI.decimals),
  },
  {
    path: [ERC20Token.DAI, ERC20Token.WMATIC, ERC20Token.DAI],
    protocols: [2, 0],
    amountIn: getBigNumber(loanAmount, ERC20Token.DAI.decimals),
  },
  {
    path: [ERC20Token.WETH, ERC20Token.DAI, ERC20Token.WETH],
    protocols: [2, 0],
    amountIn: getBigNumber(loanAmount, ERC20Token.WETH.decimals),
  },
  {
    path: [ERC20Token.WETH, ERC20Token.USDC, ERC20Token.WETH],
    protocols: [2, 0],
    amountIn: getBigNumber(loanAmount, ERC20Token.WETH.decimals),
  },
  {
    path: [ERC20Token.WETH, ERC20Token.USDT, ERC20Token.WETH],
    protocols: [2, 0],
    amountIn: getBigNumber(loanAmount, ERC20Token.WETH.decimals),
  },
  {
    path: [ERC20Token.WETH, ERC20Token.WMATIC, ERC20Token.WETH],
    protocols: [2, 0],
    amountIn: getBigNumber(loanAmount, ERC20Token.WETH.decimals),
  },
  {
    path: [ERC20Token.USDC, ERC20Token.DAI, ERC20Token.USDC],
    protocols: [2, 0],
    amountIn: getBigNumber(loanAmount, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.USDC, ERC20Token.WETH, ERC20Token.USDC],
    protocols: [2, 0],
    amountIn: getBigNumber(loanAmount, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.USDC, ERC20Token.USDT, ERC20Token.USDC],
    protocols: [2, 0],
    amountIn: getBigNumber(loanAmount, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.USDC, ERC20Token.WMATIC, ERC20Token.USDC],
    protocols: [2, 0],
    amountIn: getBigNumber(loanAmount, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.USDT, ERC20Token.DAI, ERC20Token.USDT],
    protocols: [2, 0],
    amountIn: getBigNumber(loanAmount, ERC20Token.USDT.decimals),
  },
  {
    path: [ERC20Token.USDT, ERC20Token.WETH, ERC20Token.USDT],
    protocols: [2, 0],
    amountIn: getBigNumber(loanAmount, ERC20Token.USDT.decimals),
  },
  {
    path: [ERC20Token.USDT, ERC20Token.USDC, ERC20Token.USDT],
    protocols: [2, 0],
    amountIn: getBigNumber(loanAmount, ERC20Token.USDT.decimals),
  },
  {
    path: [ERC20Token.USDT, ERC20Token.WMATIC, ERC20Token.USDT],
    protocols: [2, 0],
    amountIn: getBigNumber(loanAmount, ERC20Token.USDT.decimals),
  },
  {
    path: [ERC20Token.WMATIC, ERC20Token.USDC, ERC20Token.WMATIC],
    protocols: [2, 0],
    amountIn: getBigNumber(loanAmount, ERC20Token.WMATIC.decimals),
  },
  {
    path: [ERC20Token.WMATIC, ERC20Token.USDC, ERC20Token.WMATIC],
    protocols: [2, 0],
    amountIn: getBigNumber(loanAmount, ERC20Token.WMATIC.decimals),
  },
  {
    path: [ERC20Token.WMATIC, ERC20Token.USDT, ERC20Token.WMATIC],
    protocols: [2, 0],
    amountIn: getBigNumber(loanAmount, ERC20Token.WMATIC.decimals),
  },
  {
    path: [ERC20Token.WBTC, ERC20Token.USDT, ERC20Token.WBTC],
    protocols: [2, 0],
    amountIn: getBigNumber(loanAmount, ERC20Token.WBTC.decimals),
  },
  {
    path: [ERC20Token.WBTC, ERC20Token.USDC, ERC20Token.WBTC],
    protocols: [2, 0],
    amountIn: getBigNumber(loanAmount, ERC20Token.WBTC.decimals),
  },
  {
    path: [ERC20Token.WBTC, ERC20Token.WMATIC, ERC20Token.WBTC],
    protocols: [2, 0],
    amountIn: getBigNumber(loanAmount, ERC20Token.WBTC.decimals),
  },
  {
    path: [ERC20Token.WBTC, ERC20Token.DAI, ERC20Token.WBTC],
    protocols: [2, 0],
    amountIn: getBigNumber(loanAmount, ERC20Token.WBTC.decimals),
  },


];

/**
 * @type {string} public flashloan contract address
 * Polyscan: https://polygonscan.com/address/0x568a23ad22041683468cd1d3a6968d7e7dc20d40
 * if you have deployed your own contract, you can use it instead of the default one
 */
export const flashloanAddress: string =
  "0x6B8bfEFA7A74eFb3F6dcbdD9663Ad947Fe3ED10A";

/**
 * The bot can trade on UniswapV2 fork dexes(ex. SushiSwap) and UniswapV3
 * For UniswapV2, you can trade between any token pair, but for UniswapV3, you have to check their pool fees and list them on src/price/uniswap/v3/fee.ts.
 */

export const gasLimit = 150000;
