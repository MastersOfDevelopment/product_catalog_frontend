/* eslint-disable import/no-unresolved */
import { BigSlider } from 'components/BigSlider'
import { Categories } from 'components/Categories'
import React from 'react'

export const HomePage: React.FC = () => (
  <>
    <h1>Welcome to Nice Gadgets store!</h1>
    <BigSlider />
    <Categories />
  </>
)
