import React, { useState } from 'react'
import {
  Button
} from "@chakra-ui/react"

interface Props {
  label: string
}

const TagComponent = ({ label }: Props) => {
  const [isSelected, setIsSelected] = useState(false)
  const selectTag = () => {
    setIsSelected(!isSelected)
  }

  return (
    <Button
      onClick={selectTag}
      colorScheme={isSelected ? 'red' : 'purple'}
      borderRadius='full'
    >
      { label }
    </Button>
  )
}
export default TagComponent