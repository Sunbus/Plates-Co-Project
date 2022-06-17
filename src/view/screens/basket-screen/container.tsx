import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { BasketScreenComponent } from './component'
import { ScreenRoutes } from '@models/routes'


export const BasketScreenContainer: FC = () => {
  const navigate = useNavigate()

  const onModalClose = () => {
    navigate(ScreenRoutes.root())
  }

  return (
    <BasketScreenComponent
      onModalClose={ onModalClose }
    />
  )
}

export { BasketScreenContainer as BasketScreen }
