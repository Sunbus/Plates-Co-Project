import { Service } from 'typedi'
import bigDecimal from 'js-big-decimal'

import { ProtoState } from '../service.proto'
import { IBasketServiceState } from './interfaces'
import { DeliveryCostConst, ProductCostConst } from '@models/consts'
import { ProductTypesEnum } from '@models/enums'


const storageName = 'basketState'

const persistedJsonState = localStorage.getItem(storageName)

const defaultState: IBasketServiceState = {
  basket: {
    products: [],
    delivery: 0,
    totalCost: 0,
  },
  basketProductsHistory: [],
}

const initialState = persistedJsonState ? JSON.parse(persistedJsonState) : defaultState

@Service<BasketService>()
export class BasketService extends ProtoState<IBasketServiceState> {
  constructor() {
    super(defaultState)

    this.push(initialState)
  }

  addNewItemToBasket = (product: ProductTypesEnum) => {
    const newProductCost = ProductCostConst[product]
    const newProductsList = Array.from(this.state.basket.products)
    let newDeliveryCost = DeliveryCostConst.basic
    let newOrderCost = 0
    let redPlatesSpecialOfferCounter = 0

    newProductsList.push({
      product: product,
      cost: newProductCost,
    })

    redPlatesSpecialOfferCounter = bigDecimal.floor(bigDecimal.divide(
      newProductsList.filter(item => item.product === ProductTypesEnum.RedPlate).length,
      2,
      1
    ))

    newProductsList.forEach((item) => {
      let cost = item.cost
      if (item.product === ProductTypesEnum.RedPlate && redPlatesSpecialOfferCounter > 0) {
        cost = +bigDecimal.divide(cost, 2, 2)

        redPlatesSpecialOfferCounter--
      }

      newOrderCost = +bigDecimal.add(newOrderCost, cost)
    })

    if (newOrderCost >= 50 && newOrderCost < 90) {
      newDeliveryCost = DeliveryCostConst.advanced
    }

    if (newOrderCost >= 90) {
      newDeliveryCost = DeliveryCostConst.free
    }

    const newTotalCost = +bigDecimal.add(newOrderCost, newDeliveryCost)


    this.push({
      basket: {
        products: newProductsList,
        delivery: newDeliveryCost,
        totalCost: newTotalCost,
      },
    })

    this.persistState()
  }

  moveBasketToHistory = () => {
    const currentOrder = this.state.basket
    const newOrdersHistoryList = Array.from(this.state.basketProductsHistory)

    newOrdersHistoryList.unshift(currentOrder)

    this.push({
      basket: {
        products: [],
        delivery: 0,
        totalCost: 0,
      },
      basketProductsHistory: newOrdersHistoryList,
    })

    this.persistState()
  }

  clearBasket = () => {
    this.push({
      basket: {
        products: [],
        delivery: 0,
        totalCost: 0,
      },
    })

    this.persistState()
  }

  private persistState = () => {
    const jsonState = JSON.stringify(this.state)

    localStorage.setItem(storageName, jsonState)
  }
}
