import React, { FC } from 'react'

import { ProductTypesEnum } from '@models/enums'
import { ProductCostConst } from '@models/consts'

import RedPlateImageLink from './images/red-plate.png'
import GreenPlateImageLink from './images/green-plate.png'
import BluePlateImageLink from './images/blue-plate.png'
import styles from './styles.module.less'


interface IPlateItemComponentProps {
  type: ProductTypesEnum;
  onButtonClick: (product: ProductTypesEnum) => void
}

export const PlateItemComponent: FC<IPlateItemComponentProps> = ({ type , onButtonClick}) => {
  const onClick = () => {
    onButtonClick(type)
  }


  return (
    <div className={ styles.container }>
      {
        type === ProductTypesEnum.RedPlate && (
          <img src={ RedPlateImageLink } alt="Red plate (R1) image" />
        )
      }
      {
        type === ProductTypesEnum.GreenPlate && (
          <img src={ GreenPlateImageLink } alt="Green plate (G1) image" />
        )
      }
      {
        type === ProductTypesEnum.BluePlate && (
          <img src={ BluePlateImageLink } alt="Blue plate (B1) image" />
        )
      }
      {
        (type === ProductTypesEnum.RedPlate || type === ProductTypesEnum.GreenPlate) && (
          <div className={ styles.separator }/>
        )
      }
      <div className={ styles.overlay }>
        <button onClick={ onClick }>
          {
            type === ProductTypesEnum.RedPlate && 'Add R01 to basket!'
          }
          {
            type === ProductTypesEnum.GreenPlate && 'Add G01 to basket!'
          }
          {
            type === ProductTypesEnum.BluePlate && 'Add B01 to basket!'
          }
        </button>
      </div>
      <div className={ styles.infoBlock }>
        {
          type === ProductTypesEnum.RedPlate && `R01 - $${ProductCostConst[ProductTypesEnum.RedPlate]}`
        }
        {
          type === ProductTypesEnum.GreenPlate && `G01 - $${ProductCostConst[ProductTypesEnum.GreenPlate]}`
        }
        {
          type === ProductTypesEnum.BluePlate && `B01 - $${ProductCostConst[ProductTypesEnum.BluePlate]}`
        }
      </div>
    </div>
  )
}
