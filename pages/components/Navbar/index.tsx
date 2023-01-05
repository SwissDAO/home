import {
  Box, HStack, useColorModeValue
} from '@chakra-ui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Logo } from '../Logo/Logo'

export const Navbar = () => {
  return (
    <Box as="nav" p={5} boxShadow={useColorModeValue('sm', 'sm-dark')}>
      <HStack justify="space-between">
        <Logo />
        <ConnectButton />
      </HStack>
    </Box>
  )
}