import React, { FC } from 'react'
import cn from 'classnames'

import { IOrderDtm } from '@models/dtm'

import * as styles from './styles.module.less'


interface IBasketComponentProps {
  basketData: IOrderDtm;
  buyItemsHandler: () => void;
  clearItemsHandler: () => void;
}

export const BasketComponent: FC<IBasketComponentProps> = ({
  basketData,
  buyItemsHandler,
  clearItemsHandler,
}) => (
  <div className={ styles.container }>
    <div className={ cn(styles.row, styles.rowTitle) }>
      <div className={ cn(styles.products, styles.title) }>Current Basket</div>
      <div className={ cn(styles.total, styles.title) }>Total</div>
    </div>
    <div className={ cn(styles.row, styles.currentBasketRow) }>
      <div className={ styles.products }>
        {
          basketData.products.map(productData => productData.product).join(', ')
        }
      </div>
      <div className={ styles.total }>${ basketData.totalCost }</div>
      <button
        className={ styles.clearButton }
        onClick={ clearItemsHandler }
        disabled={ basketData.products.length === 0 }
      >
        Clear
      </button>
      <button
        className={ styles.countButton }
        onClick={ buyItemsHandler }
        disabled={ basketData.products.length === 0 }
      >
        Buy it!
      </button>
    </div>
  </div>
)
