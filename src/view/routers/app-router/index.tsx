import React, { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { BasketScreen, GeneralScreen } from '@view/screens'
import { ScreenRoutes } from '@models/routes'


export const AppRouter: FC = () => (
  <Routes>
    <Route path={ ScreenRoutes.root() } element={ <GeneralScreen /> } />
    <Route path={ ScreenRoutes.basket() } element={ <BasketScreen /> } />

    <Route path="*" element={ <Navigate to={ ScreenRoutes.root() } /> } />
  </Routes>
)
