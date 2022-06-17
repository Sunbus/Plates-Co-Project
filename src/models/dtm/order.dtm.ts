import { IProductDtm } from '@models/dtm/product.dtm'

export interface IOrderDtm {
  products: IProductDtm[];
  delivery: number;
  totalCost: number;
}
