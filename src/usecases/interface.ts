import { ProductTypesEnum } from '@models/enums'

export interface IBasketController {
  addItem: (product: ProductTypesEnum) => void;
  buyItemsInBasket: () => void;
  clearItemsHandler: () => void;
}

export interface IUsecaseLayer {
  BasketController: IBasketController;
}

