import { ERC20Token } from "./constants/addresses";
import { ITrade } from "./interfaces/trade";
import { getBigNumber } from "./utils";

export const renderInterval = 1 * 1000;

// interval of price check (ms)
export const interval = 4 * 1000;

export const diffPercentage = 0.01;

//export const chainId = 1;// Ethereum
//export const chainId = 56;// Binance Smart Chain
export const chainId = 137; // Polygon

export const explorerURL = "https://polygonscan.com";

export const tradingRoutes: ITrade[] = [
  {
    path: [ERC20Token.USDC, ERC20Token.DAI, ERC20Token.USDC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.USDT, ERC20Token.DAI, ERC20Token.USDT],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WBTC, ERC20Token.DAI, ERC20Token.WBTC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.LINK, ERC20Token.DAI, ERC20Token.LINK],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WMATIC, ERC20Token.DAI, ERC20Token.WMATIC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.COMP, ERC20Token.DAI, ERC20Token.COMP],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.CEL, ERC20Token.DAI, ERC20Token.CEL],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WETH, ERC20Token.DAI, ERC20Token.WETH],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.UNI, ERC20Token.DAI, ERC20Token.UNI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.AAVE, ERC20Token.DAI, ERC20Token.AAVE],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.CRV, ERC20Token.DAI, ERC20Token.CRV],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.QI, ERC20Token.DAI, ERC20Token.QI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.USDT, ERC20Token.USDC, ERC20Token.USDT],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.DAI, ERC20Token.USDC, ERC20Token.DAI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WBTC, ERC20Token.USDC, ERC20Token.WBTC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.LINK, ERC20Token.USDC, ERC20Token.LINK],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WMATIC, ERC20Token.USDC, ERC20Token.WMATIC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.COMP, ERC20Token.USDC, ERC20Token.COMP],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.CEL, ERC20Token.USDC, ERC20Token.CEL],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WETH, ERC20Token.USDC, ERC20Token.WETH],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.UNI, ERC20Token.USDC, ERC20Token.UNI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.AAVE, ERC20Token.USDC, ERC20Token.AAVE],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.CRV, ERC20Token.USDC, ERC20Token.CRV],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.QI, ERC20Token.USDC, ERC20Token.QI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.USDC, ERC20Token.USDT, ERC20Token.USDC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.DAI, ERC20Token.USDT, ERC20Token.DAI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WBTC, ERC20Token.USDT, ERC20Token.WBTC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.LINK, ERC20Token.USDT, ERC20Token.LINK],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WMATIC, ERC20Token.USDT, ERC20Token.WMATIC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.COMP, ERC20Token.USDT, ERC20Token.COMP],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.CEL, ERC20Token.USDT, ERC20Token.CEL],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WETH, ERC20Token.USDT, ERC20Token.WETH],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.UNI, ERC20Token.USDT, ERC20Token.UNI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.AAVE, ERC20Token.USDT, ERC20Token.AAVE],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.CRV, ERC20Token.USDT, ERC20Token.CRV],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.QI, ERC20Token.USDT, ERC20Token.QI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.USDC, ERC20Token.WBTC, ERC20Token.USDC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.USDT, ERC20Token.WBTC, ERC20Token.USDT],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.DAI, ERC20Token.WBTC, ERC20Token.DAI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.LINK, ERC20Token.WBTC, ERC20Token.LINK],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WMATIC, ERC20Token.WBTC, ERC20Token.WMATIC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.COMP, ERC20Token.WBTC, ERC20Token.COMP],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.CEL, ERC20Token.WBTC, ERC20Token.CEL],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WETH, ERC20Token.WBTC, ERC20Token.WETH],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.UNI, ERC20Token.WBTC, ERC20Token.UNI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.AAVE, ERC20Token.WBTC, ERC20Token.AAVE],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.CRV, ERC20Token.WBTC, ERC20Token.CRV],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.QI, ERC20Token.WBTC, ERC20Token.QI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.USDC, ERC20Token.LINK, ERC20Token.USDC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.USDT, ERC20Token.LINK, ERC20Token.USDT],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.DAI, ERC20Token.LINK, ERC20Token.DAI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },{
    path: [ERC20Token.WBTC, ERC20Token.LINK, ERC20Token.WBTC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WMATIC, ERC20Token.LINK, ERC20Token.WMATIC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.COMP, ERC20Token.LINK, ERC20Token.COMP],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.CEL, ERC20Token.LINK, ERC20Token.CEL],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WETH, ERC20Token.LINK, ERC20Token.WETH],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.UNI, ERC20Token.LINK, ERC20Token.UNI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.AAVE, ERC20Token.LINK, ERC20Token.AAVE],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.CRV, ERC20Token.LINK, ERC20Token.CRV],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.QI, ERC20Token.LINK, ERC20Token.QI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.USDC, ERC20Token.WMATIC, ERC20Token.USDC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.USDT, ERC20Token.WMATIC, ERC20Token.USDT],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.DAI, ERC20Token.WMATIC, ERC20Token.DAI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WBTC, ERC20Token.WMATIC, ERC20Token.WBTC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.LINK, ERC20Token.WMATIC, ERC20Token.LINK],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.COMP, ERC20Token.WMATIC, ERC20Token.COMP],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.CEL, ERC20Token.WMATIC, ERC20Token.CEL],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WETH, ERC20Token.WMATIC, ERC20Token.WETH],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.UNI, ERC20Token.WMATIC, ERC20Token.UNI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.AAVE, ERC20Token.WMATIC, ERC20Token.AAVE],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.CRV, ERC20Token.WMATIC, ERC20Token.CRV],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.QI, ERC20Token.WMATIC, ERC20Token.QI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.USDC, ERC20Token.COMP, ERC20Token.USDC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.USDT, ERC20Token.COMP, ERC20Token.USDT],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.DAI, ERC20Token.COMP, ERC20Token.DAI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WBTC, ERC20Token.COMP, ERC20Token.WBTC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.LINK, ERC20Token.COMP, ERC20Token.LINK],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WMATIC, ERC20Token.COMP, ERC20Token.WMATIC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.CEL, ERC20Token.COMP, ERC20Token.CEL],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WETH, ERC20Token.COMP, ERC20Token.WETH],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.UNI, ERC20Token.COMP, ERC20Token.UNI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.AAVE, ERC20Token.COMP, ERC20Token.AAVE],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.CRV, ERC20Token.COMP, ERC20Token.CRV],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.QI, ERC20Token.COMP, ERC20Token.QI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.USDC, ERC20Token.CEL, ERC20Token.USDC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.USDT, ERC20Token.CEL, ERC20Token.USDT],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.DAI, ERC20Token.CEL, ERC20Token.DAI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WBTC, ERC20Token.CEL, ERC20Token.WBTC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.LINK, ERC20Token.CEL, ERC20Token.LINK],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WMATIC, ERC20Token.CEL, ERC20Token.WMATIC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.COMP, ERC20Token.CEL, ERC20Token.COMP],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WETH, ERC20Token.CEL, ERC20Token.WETH],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.UNI, ERC20Token.CEL, ERC20Token.UNI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.AAVE, ERC20Token.CEL, ERC20Token.AAVE],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.CRV, ERC20Token.CEL, ERC20Token.CRV],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.QI, ERC20Token.CEL, ERC20Token.QI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.USDC, ERC20Token.WETH, ERC20Token.USDC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.USDT, ERC20Token.WETH, ERC20Token.USDT],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.DAI, ERC20Token.WETH, ERC20Token.DAI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WBTC, ERC20Token.WETH, ERC20Token.WBTC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.LINK, ERC20Token.WETH, ERC20Token.LINK],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WMATIC, ERC20Token.WETH, ERC20Token.WMATIC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.COMP, ERC20Token.WETH, ERC20Token.COMP],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.CEL, ERC20Token.WETH, ERC20Token.CEL],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.UNI, ERC20Token.WETH, ERC20Token.UNI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.AAVE, ERC20Token.WETH, ERC20Token.AAVE],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.CRV, ERC20Token.WETH, ERC20Token.CRV],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.QI, ERC20Token.WETH, ERC20Token.QI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.USDC, ERC20Token.UNI, ERC20Token.USDC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.USDT, ERC20Token.UNI, ERC20Token.USDT],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.DAI, ERC20Token.UNI, ERC20Token.DAI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WBTC, ERC20Token.UNI, ERC20Token.WBTC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.LINK, ERC20Token.UNI, ERC20Token.LINK],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WMATIC, ERC20Token.UNI, ERC20Token.WMATIC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.COMP, ERC20Token.UNI, ERC20Token.COMP],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.CEL, ERC20Token.UNI, ERC20Token.CEL],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WETH, ERC20Token.UNI, ERC20Token.WETH],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.AAVE, ERC20Token.UNI, ERC20Token.AAVE],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.CRV, ERC20Token.UNI, ERC20Token.CRV],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.QI, ERC20Token.UNI, ERC20Token.QI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.USDC, ERC20Token.AAVE, ERC20Token.USDC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.USDT, ERC20Token.AAVE, ERC20Token.USDT],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.DAI, ERC20Token.AAVE, ERC20Token.DAI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WBTC, ERC20Token.AAVE, ERC20Token.WBTC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.LINK, ERC20Token.AAVE, ERC20Token.LINK],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WMATIC, ERC20Token.AAVE, ERC20Token.WMATIC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.COMP, ERC20Token.AAVE, ERC20Token.COMP],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.CEL, ERC20Token.AAVE, ERC20Token.CEL],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WETH, ERC20Token.AAVE, ERC20Token.WETH],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.UNI, ERC20Token.AAVE, ERC20Token.UNI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.CRV, ERC20Token.AAVE, ERC20Token.CRV],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.QI, ERC20Token.AAVE, ERC20Token.QI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.USDC, ERC20Token.CRV, ERC20Token.USDC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.USDT, ERC20Token.CRV, ERC20Token.USDT],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.DAI, ERC20Token.CRV, ERC20Token.DAI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WBTC, ERC20Token.CRV, ERC20Token.WBTC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.LINK, ERC20Token.CRV, ERC20Token.LINK],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WMATIC, ERC20Token.CRV, ERC20Token.WMATIC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.COMP, ERC20Token.CRV, ERC20Token.COMP],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.UNI, ERC20Token.CRV, ERC20Token.UNI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.CEL, ERC20Token.CRV, ERC20Token.CEL],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WETH, ERC20Token.CRV, ERC20Token.WETH],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.AAVE, ERC20Token.CRV, ERC20Token.AAVE],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.QI, ERC20Token.CRV, ERC20Token.QI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.USDC, ERC20Token.QI, ERC20Token.USDC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.USDT, ERC20Token.QI, ERC20Token.USDT],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.DAI, ERC20Token.QI, ERC20Token.DAI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WBTC, ERC20Token.QI, ERC20Token.WBTC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.LINK, ERC20Token.QI, ERC20Token.LINK],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WMATIC, ERC20Token.QI, ERC20Token.WMATIC],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.COMP, ERC20Token.QI, ERC20Token.COMP],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.CEL, ERC20Token.QI, ERC20Token.CEL],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.WETH, ERC20Token.QI, ERC20Token.WETH],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.UNI, ERC20Token.QI, ERC20Token.UNI],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.AAVE, ERC20Token.QI, ERC20Token.AAVE],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
  },
  {
    path: [ERC20Token.CRV, ERC20Token.QI, ERC20Token.CRV],
    protocols: [7, 6, 5, 4, 3, 2, 1, 0],
    amountIn: getBigNumber(30000, ERC20Token.USDC.decimals),
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

export const gasLimit = 15000000;
