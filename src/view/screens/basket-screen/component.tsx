import React, { FC } from 'react'
import ReactModal from 'react-modal'

import { Basket, BasketHistory } from './components'
import * as styles from './styles.module.less'


interface IBasketScreenComponentProps {
  onModalClose: () => void;
}

export const BasketScreenComponent: FC<IBasketScreenComponentProps> = ({ onModalClose }) => (
  <ReactModal
    isOpen={ true }
    onRequestClose={ onModalClose }
  >
    <button
      className={ styles.closeButton }
      onClick={ onModalClose }
    >
      close
    </button>

    <div className={ styles.container }>
      <Basket />

      <br />

      <BasketHistory />
    </div>
  </ReactModal>
)
