import React, { FC } from 'react'
import { useObservableState } from 'observable-hooks'
import { useNavigate } from 'react-router-dom'
import { ScreenRoutes } from '@models/routes'

import { UC } from '@usecases'

import { AppComponent } from './component'


export const AppContainer: FC = () => {
  const { basket } = useObservableState(UC.BasketController.getBasketServiceState())

  const navigate = useNavigate()
  const onModalClose = () => {
    navigate(ScreenRoutes.basket())
  }

  return (
    <AppComponent
      ordersCount={ basket.products.length }
      onBasketOpen={ onModalClose }
    />
  )
}

export { AppContainer as App }
