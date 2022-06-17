import 'reflect-metadata' // important for TypeDI

import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { setAppElement } from 'react-modal'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import { App } from '@view/index'
import './styles.module.less'


const main = async () => {
  const rootElement: HTMLElement | null = document.getElementById('root')

  if (!rootElement) {
    console.error('No root element in HTML, just add div element with "root" id')

    return
  }

  const root = createRoot(rootElement)

  setAppElement('#root')

  root.render(
   <BrowserRouter>
    <App />
    <ToastContainer
      position="top-center"
      theme="dark"
      autoClose={ 5000 }
      hideProgressBar
      closeOnClick
      pauseOnHover
    />
   </BrowserRouter>
  )
}

void main()
