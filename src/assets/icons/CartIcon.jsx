import * as React from "react"
const CartIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g
      stroke="#262626"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M6 14.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM13.333 14.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM.667.667h2.666L5.12 9.593a1.334 1.334 0 0 0 1.333 1.074h6.48a1.333 1.333 0 0 0 1.334-1.074L15.333 4H4" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default CartIcon
