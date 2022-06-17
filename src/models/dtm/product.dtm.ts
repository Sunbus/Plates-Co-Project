import { ProductTypesEnum } from '@models/enums'

export interface IProductDtm {
  product: ProductTypesEnum;
  cost: number;
}
