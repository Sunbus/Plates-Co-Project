import React, { FC } from 'react'

import { AppRouter } from '@view/routers/app-router'

import styles from './styles.module.less'


interface IAppComponentProps {
  ordersCount: number;
  onBasketOpen: () => void;
}

export const AppComponent: FC<IAppComponentProps> = ({ ordersCount, onBasketOpen }) => (
  <div className={ styles.generalWrapper }>
    <header className={ styles.header }>
      <span className={ styles.name }>Plates Co Shop</span>
      <span className={ styles.message }>best plates for your place</span>
      <button
        className={ styles.basketButton }
        onClick={ onBasketOpen }
      >
        Basket ({ ordersCount } items)
      </button>
    </header>
    <section className={ styles.section }>
      <AppRouter />
    </section>
  </div>
)
