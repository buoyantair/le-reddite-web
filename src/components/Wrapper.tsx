import { FC } from 'react'
import { Box } from '@chakra-ui/core'

interface WrapperProps {
  variant?: 'small' | 'regular';
}

const Wrapper: FC<WrapperProps> = ({ children, variant = 'regular' }) => {
  return (
    <Box maxW={variant === 'regular' ? '800px' : '400px'} mt='8' w='100%' mx='auto'>
      {children}
    </Box>
  )
}

export default Wrapper
