import React from 'react'
import Svg, { Path } from "react-native-svg"

const ConversationIcon = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      // width='60px'
      // height='60px'
      viewBox="0 0 60 60"
      {...props}
    >
      <Path d="M30 1.5c-16.542 0-30 12.112-30 27 0 5.205 1.647 10.246 4.768 14.604-.591 6.537-2.175 11.39-4.475 13.689a1 1 0 00.847 1.697c.405-.057 9.813-1.412 16.617-5.338C21.622 54.711 25.738 55.5 30 55.5c16.542 0 30-12.112 30-27s-13.458-27-30-27z"
        fill={colors.second} />
    </Svg >
  )
}

export default ConversationIcon