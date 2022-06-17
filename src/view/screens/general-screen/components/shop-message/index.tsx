import React, { FC } from 'react'

import { DeliveryCostConst } from '@models/consts'

import * as styles from './styles.module.less'


export const ShopMessage: FC = () => (
  <div className={ styles.container }>
    <p className={ styles.title }>SPECIAL OFFER</p>
    <ul>
      <li>buy one red plate, get the second half price</li>
    </ul>
    <div className={ styles.separator } />
    <p className={ styles.title }>DELIVERY PRICE:</p>
    <ul>
      <li>under 50$ - cost ${DeliveryCostConst.basic}</li>
      <li>from 50$ to 90$ - cost ${DeliveryCostConst.advanced}</li>
      <li>90$ and more - free</li>
    </ul>
  </div>
)
