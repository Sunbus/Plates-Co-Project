import { toast } from 'react-toastify'

import { BasketService, R } from '@repository'
import { IBasketController } from '@usecases'
import { ProductTypesEnum } from '@models/enums'


export class BasketController implements IBasketController{
  addItem = (product: ProductTypesEnum) => {
    R.get(BasketService).addNewItemToBasket(product)

     toast.success(`${product} added to your basket`)
  }

  buyItemsInBasket = () => {
    const currentBasket = R.get(BasketService).state.basket

    if (currentBasket.products.length === 0) {
      return
    }

    R.get(BasketService).moveBasketToHistory()

    toast.info('No next steps, but don\'t worry: it\'s just example :)')
  }

  clearItemsHandler = () => {
    const currentBasket = R.get(BasketService).state.basket

    if (currentBasket.products.length === 0) {
      return
    }

    R.get(BasketService).clearBasket()

    toast.warn('Basket cleared')
  }

  // State getters
  getBasketServiceState = () => R.get(BasketService).state$
}
