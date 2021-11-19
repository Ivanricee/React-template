import React from 'react'
import { GlobalStyles } from './GlobalStyles'

export const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <main>{children}</main>
  </>
)
