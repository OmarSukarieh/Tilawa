import React from 'react'
import Svg, { G, Path } from "react-native-svg"

const PlayIcons = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18.836}
      height={20.255}
      viewBox="0 0 18.836 20.255"
      {...props}
    >
      <G data-name="Path 2181" fill="#fff">
        <Path
          d="M19.625 20.5H3.375a1.487 1.487 0 01-1.29-.735 1.487 1.487 0 01-.025-1.485l8.124-14.837a1.48 1.48 0 011.316-.78 1.48 1.48 0 011.316.78L20.94 18.28c.257.469.248 1.024-.025 1.485-.273.46-.755.735-1.29.735z"
          transform="rotate(90 11.187 9.814)"
        />
        <Path
          d="M11.5 3.164a.98.98 0 00-.877.52L2.498 18.52a.984.984 0 00.017.99c.087.147.346.49.86.49h16.25a.984.984 0 00.86-.49.984.984 0 00.017-.99L12.377 3.684a.98.98 0 00-.877-.52m0-1a1.98 1.98 0 011.754 1.04l8.125 14.835c.73 1.333-.235 2.961-1.754 2.961H3.375c-1.52 0-2.484-1.628-1.754-2.96L9.746 3.202a1.98 1.98 0 011.754-1.04z"
          fill="#fff"
          transform="rotate(90 11.187 9.814)"
        />
      </G>
    </Svg>
  )
}

export default PlayIcons