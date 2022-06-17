import React, { FC } from 'react'

import { UC } from '@usecases'
import { ProductTypesEnum } from '@models/enums'

import { PlateItemComponent } from './component'


interface IPlateItemContainerProps {
  type: ProductTypesEnum;
}

export const PlateItemContainer: FC<IPlateItemContainerProps> = ({ type }) => {
  return (
    <PlateItemComponent
      type={ type }
      onButtonClick={ UC.BasketController.addItem }
    />
  )
}

export { PlateItemContainer as PlateItem }
