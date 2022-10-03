import React from 'react'
import { SVGIconProps } from './svg.types'

const Basket = ({ size = '25px' }: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 640 640"
  >
    <path d="M24 0H0V48H24 76.1l60.3 316.5 3.7 19.5H160 488h24V336H488 179.9l-9.1-48H496L576 32H122l-2.4-12.5L115.9 0H96 24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z" />
  </svg>
)

export default Basket
