import { useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'

const useButtonPress = (initialValue: boolean): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isPressed, setIsPressed] = useState(initialValue)
  return [isPressed, setIsPressed]
}

export default useButtonPress
