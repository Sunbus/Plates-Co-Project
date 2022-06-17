import React, { FC } from 'react'

import { UC } from '@usecases'
import { BasketComponent } from './component'
import { useObservableState } from 'observable-hooks'


export const BasketContainer: FC = () => {
  const { basket } = useObservableState(UC.BasketController.getBasketServiceState())

  return (
    <BasketComponent
      basketData={ basket }
      buyItemsHandler={ UC.BasketController.buyItemsInBasket }
      clearItemsHandler={ UC.BasketController.clearItemsHandler }
    />
  )
}

export { BasketContainer as Basket }
