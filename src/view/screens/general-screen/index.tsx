import React, { FC } from 'react'

import { ProductTypesEnum } from '@models/enums'

import { ShopMessage, Marketing, PlateItem } from './components'
import * as styles from './styles.module.less'


export const GeneralScreen: FC = () => (
  <div className={ styles.container }>
    <div className={ styles.marketingBlock }>
      <Marketing />
    </div>
    <div className={ styles.shopBlock }>
      <div className={ styles.shopMessage }>
        <ShopMessage />
      </div>
      <div className={ styles.platesList }>
        <PlateItem type={ ProductTypesEnum.RedPlate } />
        <PlateItem type={ ProductTypesEnum.GreenPlate } />
        <PlateItem type={ ProductTypesEnum.BluePlate } />
      </div>
    </div>
  </div>
)
