import React from 'react'
import { Button } from '@chakra-ui/react'

interface Props {
  label: string
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonComponent = ({ label, callback }: Props) => {
  return (
    <Button
      onClick={callback}
      borderRadius='full'
      colorScheme='purple'
      w='240px'
    >
      { label }
    </Button>
  )
}
export default ButtonComponent