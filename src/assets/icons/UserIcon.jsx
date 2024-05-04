import * as React from "react"
const UserIcon = (props) => (
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
      <path d="M13.333 14v-1.333A2.667 2.667 0 0 0 10.667 10H5.333a2.667 2.667 0 0 0-2.666 2.667V14M8 7.333A2.667 2.667 0 1 0 8 2a2.667 2.667 0 0 0 0 5.333Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default UserIcon
