import { IOrderDtm } from '@models/dtm'

export interface IBasketServiceState {
  basket: IOrderDtm;
  basketProductsHistory: IOrderDtm[];
}
