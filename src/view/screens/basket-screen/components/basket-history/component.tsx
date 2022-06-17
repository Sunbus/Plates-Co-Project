import React, { FC } from 'react'
import cn from 'classnames'

import { IOrderDtm } from '@models/dtm'

import * as styles from './styles.module.less'


interface IBasketComponentProps {
  basketHistoryData: IOrderDtm[];
}

export const BasketHistoryComponent: FC<IBasketComponentProps> = ({ basketHistoryData }) => (
  <div className={ styles.container }>
    <div className={ cn(styles.row, styles.rowTitle) }>
      <div className={ styles.title }>History Orders</div>
      <div className={ styles.title }>Total</div>
    </div>
    <div className={ styles.scrollContentWrapper }>
      {
        basketHistoryData.map(order => (
          <div className={ styles.row }>
            <div>
              {
                order.products.map(productData => productData.product).join(', ')
              }
            </div>
            <div>${ order.totalCost }</div>
          </div>
        ))
      }
    </div>
  </div>
)
