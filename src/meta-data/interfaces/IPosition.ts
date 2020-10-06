export interface IPositionResponse {
  id: string;
  purchasePrice: number;
  currentPrice: number;
  purchasedBtcAmount: number;
  currentBtcAmount: number;
  purchaseAmount: number;
  sellAmount: number;
  variation: number;
  purchasedDate: string;
}

export interface IPosition {
  id: string;
  purchasedDate: string;
  purchaseAmount: string;
  purchasedBtcAmount: string;
  variation: string;
  currentBtcAmount: string;
}
