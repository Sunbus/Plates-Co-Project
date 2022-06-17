import React, { FC } from 'react'

import { UC } from '@usecases'
import { BasketHistoryComponent } from './component'
import { useObservableState } from 'observable-hooks'


export const BasketHistoryContainer: FC = () => {
  const { basketProductsHistory } = useObservableState(UC.BasketController.getBasketServiceState())

  return (
    <BasketHistoryComponent
      basketHistoryData={ basketProductsHistory }
    />
  )
}

export { BasketHistoryContainer as BasketHistory }
